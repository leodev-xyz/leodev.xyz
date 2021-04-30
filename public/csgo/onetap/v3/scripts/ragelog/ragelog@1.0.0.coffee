
BONEBOXES = [
    "head",
    "neck",
    "stomach",
    "stomach",
    "stomach",
    "chest",
    "chest",
    "left leg",
    "right leg",
    "left leg",
    "right leg",
    "left leg",
    "right leg",
    "left arm",
    "right arm",
    "left arm",
    "left arm",
    "right arm",
    "right arm"
]

HITBOX = [
    "generic",
    "head",
    "chest",
    "stomach",
    "left arm",
    "right arm",
    "left leg",
    "right leg",
    "neck"
]

__backup_angle = [];

anglevector = (a) ->
    sy = Math.sin a[1] / 180 * Math.PI
    cy = Math.cos a[1] / 180 * Math.PI
    sp = Math.sin a[0] / 180 * Math.PI
    cp = Math.cos a[0] / 180 * Math.PI
    [cp * cy, cp * sy, -sp]

vecmulfl = (a, b) -> [a[0] * b, a[1] * b, a[2] * b]

vecadd = (a, b) -> [a[0] + b[0], a[1] + b[1], a[2] + b[2]]

prepareRagebotTrace = ->
    __backup_angle  = Local.GetViewAngles()
    UI.SetValue "Rage", "General", "General", "Silent", 0

getRagebotTrace = ->
    rage_ang = Local.GetViewAngles()
    UI.SetValue "Rage", "General", "General", "Silent", 1
    Local.SetViewAngles __backup_angle
  
    lp = Entity.GetLocalPlayer()
    leye = Entity.GetEyePosition lp
    forward = vecadd vecmulfl(anglevector(rage_ang), 12000), leye
    return Trace.Bullet lp, Event.GetInt("target_index"), leye, forward

getLBY = (entity) ->
    src = Entity.GetRenderOrigin(entity);
    dst = Entity.GetHitboxPosition(entity, 0);

    delta = [src[0] - dst[0], src[1] - dst[1], src[2] - dst[2]];
    angle = (((Math.atan(delta[1]/delta[0]) * 57.295779513082) - Entity.GetProp(entity, "CCSPlayer", "m_angEyeAngles")[1]) % 360 + 360) % 360
    return -360 + angle if angle >= 180
    return angle

print = (text, color) ->
    Cheat.PrintChat text
    text = text.replace /[\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10]+/, ""
    for i in [0 .. text.length] by 256
        Cheat.PrintColor color, text.substr i, i + 256

this_tick_shot = 0
shots = []


shotEnd = ->
    if this_tick_shot == 1
        if Entity.IsAlive shots[0].target
            lby_delta = Math.abs(shots[0].lby - getLBY shots[0].target) % 360
            lby_delta = 360 - lby_delta if lby_delta > 180
            if lby_delta > 8
                print "[\x07RAGEBOT\x01] Missed shot due to \x02RESOLVER\x01 (Δr=\x0c" + lby_delta.toFixed(2) + "\x01°)\n", [255, 0, 0, 255]
            else
                if shots[0].trace[1] == 0 && shots[0].hitchance > 95
                    print "[\x07RAGEBOT\x01] Missed shot due to \x07PREDICTION\x01 (Δr=\x0c" + lby_delta.toFixed(2) + "\x01°)\n", [255, 0, 0, 255]
                else
                    print "[\x07RAGEBOT\x01] Missed shot due to \x07SPREAD\x01 (Δr=\x0c" + lby_delta.toFixed(2) + "\x01°)\n", [255, 0, 0, 255]
        else
            print "[\x07RAGEBOT\x01] Missed shot due to \x07DEATH\n", [255, 0, 0, 255]

    if this_tick_shot > 0
        shots.shift()
        this_tick_shot = 0

on_ragebot_fire = ->
    exploit = Event.GetInt "exploit"
    target_index = Event.GetInt "target_index"
    hitbox = Event.GetInt "hitbox"
    hitchance = Event.GetInt "hitchance"
    trace = getRagebotTrace()
    lby = getLBY target_index
    
    log = ["[\x0cRAGEBOT\x01] Shot at \x03", Entity.GetName(target_index), "\x01's \x0b", BONEBOXES[hitbox], "\x01 (hc=\x0b", hitchance, "\x01%%"]
    if trace[1] > 0
        log.push ", dmg=\x0b", trace[1], "\x01hp"
        log.push ", box=\x02", BONEBOXES[trace[3]], "\x01" if BONEBOXES[trace[3]] != BONEBOXES[hitbox]
    log.push ", r=\x0b", Math.floor(lby) + "°\x01)"
    log.push " \x07EXPLOIT\x01" if exploit > 0

    print log.join("") + "\n", [256, 192, 192, 255]
    shots.push {
        target: target_index,
        time: Globals.Tickcount(),
        damage: trace[1],
        lby: lby,
        hitchance: hitchance,
        hitbox: hitbox,
        trace: trace
    }

on_bullet_impact = ->
    this_tick_shot = 1 if Entity.GetEntityFromUserID(Event.GetInt "userid") == Entity.GetLocalPlayer() and shots.length > 0 and this_tick_shot == 0

on_weapon_fire = ->
    # another shot in the same tick
    shotEnd() if Entity.GetEntityFromUserID(Event.GetInt "userid") == Entity.GetLocalPlayer() && shots.length > 0 && this_tick_shot

on_player_hurt = ->
    if Entity.GetEntityFromUserID(Event.GetInt "attacker") == Entity.GetLocalPlayer() && shots.length > 0
        this_tick_shot = 2
        print "[\x04RAGEBOT\x01] Hit \x03" + Entity.GetName(Entity.GetEntityFromUserID Event.GetInt "userid") + "\x01 for \x0b" + Event.GetInt("dmg_health") + "\x01 damage in " + (HITBOX[Event.GetInt "hitgroup"] === BONEBOXES[shots[0].hitbox] ? "\x0b" : "\x07") + HITBOX[Event.GetInt "hitgroup"] + "\x01\n", [0, 255, 0, 255]

on_player_death = ->
    if Entity.GetEntityFromUserID(Event.GetInt "userid") == Entity.GetLocalPlayer()
        shotEnd()
        while shots.length > 0
            print "[\x07RAGEBOT\x01] Missed shot due to \x07DEATH\x01\n", [255, 0, 0, 255]
            shots.shift()

on_round_prestart = ->
    if shots.length > 0
        print("[\x07RAGEBOT\x01] " + shots.length + " shot" + (if shots.length == 1 then "" else "s") + " disappeared\n", [255, 0, 0, 255]);
    shots = []


onCreateMove = ->
    prepareRagebotTrace()
    shotEnd()
    while shots.length > 0 && shots[0].time + Globals.Tickrate() < Global.Tickcount()
        if Entity.IsAlive Entity.GetLocalPlayer()
            print("[\x07RAGEBOT\x01] Missed shot due to \x07?\x01\n", [255, 0, 0, 255]);
        else
            print("[\x07RAGEBOT\x01] Missed shot due to \x07DEATH\x01\n", [255, 0, 0, 255]);
        shots.shift();


Cheat.RegisterCallback "ragebot_fire", "on_ragebot_fire"
Cheat.RegisterCallback "bullet_impact", "on_bullet_impact"
Cheat.RegisterCallback "weapon_fire", "on_weapon_fire"
Cheat.RegisterCallback "player_hurt", "on_player_hurt"
Cheat.RegisterCallback "player_death", "on_player_death"
Cheat.RegisterCallback "round_prestart", "on_round_prestart"
Cheat.RegisterCallback "CreateMove", "onCreateMove"
