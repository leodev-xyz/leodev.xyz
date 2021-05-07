
require("_runtime.js").apply.call(this);

SV_MAXUNLAG = 0.2
MAX_MINDMG = 10

Counter = (interval, fn) ->
    last = -Infinity
    ->
        now = fn()
        if now - last >= interval
            last = now
            return true


antiaim = [
    {
        label: "None"
    },
    {
        label: "High Switch",
        fn: (state) ->
            state.counter = Counter 4, Globals.Tickcount unless state.counter
            return unless state.counter()
            state.left = !state.left
            AntiAim.SetRealOffset if state.left then -58 else 58
            AntiAim.SetLBYOffset 0
    },
    {
        label: "Low Switch",
        fn: (state) ->
            state.counter = Counter 4, Globals.Tickcount unless state.counter
            return unless state.counter()
            state.left = !state.left
            AntiAim.SetRealOffset if state.left then -29 else 29
            AntiAim.SetLBYOffset 0
    },
    {
        label: "High Random",
        fn: (state) ->
            state.counter = Counter 0.125, Globals.Realtime unless state.counter
            return unless state.counter()
            AntiAim.SetRealOffset Math.floor(Math.random() * 3 - 1) * 58
            AntiAim.SetLBYOffset 0
    },
    {
        label: "Low Random",
        fn: (state) ->
            state.counter = Counter 0.125, Globals.Realtime unless state.counter
            return unless state.counter()
            AntiAim.SetRealOffset Math.floor(Math.random() * 3 - 1) * 29
            AntiAim.SetLBYOffset 0
    },
    {
        label: "Random",
        fn: (state) ->
            state.counter = Counter 0.125, Globals.Realtime unless state.counter
            return unless state.counter()
            AntiAim.SetRealOffset Math.floor(Math.random() * 5 - 2) * 29
            AntiAim.SetLBYOffset 0
    },
    {
        label: "Sway",
        fn: ->
            time = Globals.Curtime()
            AntiAim.SetLBYOffset (time  % 1 * 117 - 58) * (Math.floor(time % 2) * 2 - 1)

            time += 0.5
            AntiAim.SetRealOffset (time  % 1 * 117 - 58) * (Math.floor(time % 2) * 2 - 1)
    },
    {
        label: "High real, sway fake",
        fn: ->
            time = Globals.Curtime()
            AntiAim.SetLBYOffset (time  % 1 * 117 - 58) * (Math.floor(time % 2) * 2 - 1)
            time += 0.5
            AntiAim.SetRealOffset 58 * (Math.floor(time % 2) * 2 - 1)
    },
    {
        label: "Low real, sway fake",
        fn: ->
            time = Globals.Curtime()
            AntiAim.SetLBYOffset (time  % 1 * 117 - 58) * (Math.floor(time % 2) * 2 - 1)
            time += 0.5
            AntiAim.SetRealOffset 29 * (Math.floor(time % 2) * 2 - 1)
    }
]

conditions = [
    {
        label: "Knife",
        fn: (player) -> player.GetWeapon().GetProp("CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF == 107
    },
    {
        label: "Nade",
        fn: (player) -> player.GetWeapon().GetProp("CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF == 113
    },
    {
        label: "In Air",
        fn: (player) -> player.GetProp("CCSPlayer", "m_fFlags") & 1
    },
    {
        label: "Low Velocity",
        fn: (player) ->
            velocity = Math.sqrt player.GetProp("CCSPlayer", "m_vecVelocity[0]")[0] ** 2 + player.GetProp("CCSPlayer", "m_vecVelocity[0]")[1] ** 2
            velocity > 5 && velocity < 60
    },
    {
        label: "High Velocity",
        fn: (player) ->
            velocity = Math.sqrt player.GetProp("CCSPlayer", "m_vecVelocity[0]")[0] ** 2 + player.GetProp("CCSPlayer", "m_vecVelocity[0]")[1] ** 2
            velocity > 100
    },
    {
        label: "T side crouch",
        fn: (player) -> player.GetProp("CCSPlayer", "m_iTeamNum") == 2 && player.GetProp("CCSPlayer", "m_flDuckAmount") >= 0.875
    }
]

UI.AddLabel "------------------------------------------"

onshot = UI.AddDropdown "Force onshot", ["Off", "Normal", "Smart"]
onshotkey = UI.AddHotkey "Onshot key"
onshotindicator = UI.AddCheckbox "Onshot indicator"

mindamageamount = UI.AddSliderInt "Min damage overrides", 0, MAX_MINDMG
mindamageindicator = UI.AddCheckbox "Damage override indicator"
mindamage = []
mindamage.push [number, UI.AddHotkey("Min damage override [" + (number + 1) + "]"), UI.AddSliderInt "Damage override [" + (number+1) + "]", 0, 150] for number in [0 .. MAX_MINDMG - 1]

antiaimmode = UI.AddDropdown "AntiAim mode", antiaim.map (aa) -> aa.label

conditiondd = UI.AddMultiDropdown "Conditions", conditions.map (cond) -> cond.label
condition = []
condition.push [UI.AddMultiDropdown("Actions [" + conditions[number].label + "]", ["Force Safepoint", "Override min damage"]), UI.AddSliderInt "Damage override [" + conditions[number].label + "]", 0, 150] for number in [0 .. conditions.length - 1]

UI.AddLabel "------------------------------------------"


antiaimed = false
onshotable = {}
antiaimlast = 0
antiaimstate = undefined

Cheat.RegisterCallback "weapon_fire", ->
    ent = Entities.GetEntityFromUserID Event.GetInt "userid"
    onshotable[ent.entityindex] = Globals.Curtime() if ent.IsEnemy()


Cheat.RegisterCallback "CreateMove", ->
    if onshot.GetValue() > 0 and onshotkey.IsHotkeyActive()
        for enemy in Entities.GetEnemies()
            timewindow = Math.max (if onshotable[enemy.entityindex] then onshotable[enemy.entityindex] + SV_MAXUNLAG - Globals.Curtime() else 0), 0
            if onshot.GetValue() == 1 or timewindow < SV_MAXUNLAG / 2
                Ragebot.IgnoreTarget enemy if timewindow <= 0
                Ragebot.ForceTargetMinimumDamage enemy, 101 if timewindow > 0

    if conditiondd.GetValue() > 0
        for number in [0 .. conditions.length - 1]
            continue unless conditiondd.GetValue() & 2 ** number && condition[number][0].GetValue()
            for enemy in Entities.GetEnemies()
                continue unless conditions[number].fn enemy
                Ragebot.ForceTargetSafety enemy if condition[number][0].GetValue() & 1
                Ragebot.ForceTargetMinimumDamage enemy, condition[number][1].GetValue() if condition[number][0].GetValue() & 2


    if mindamageamount.GetValue() > 0
        for number in [0 .. mindamageamount.GetValue() - 1]
            if mindamage[number][1].IsHotkeyActive()
                Ragebot.ForceTargetMinimumDamage enemy, mindamage[number][2].GetValue() for enemy in Entities.GetEnemies()
                break
        

    aa = antiaim[antiaimmode.GetValue()]
    if antiaimmode.GetValue() != antiaimlast
        antiaimlast = antiaimmode.GetValue()
        antiaimstate = {}
    if aa.fn
        unless antiaimed
            antiaimed = true
            AntiAim.SetOverride 1
        aa.fn antiaimstate
    
    else if antiaimed
        antiaimed = false
        AntiAim.SetOverride 0


Cheat.RegisterCallback "Draw", ->
    onshotkey.SetEnabled onshot.GetValue() > 0
    onshotindicator.SetEnabled onshot.GetValue() > 0
    mindamageindicator.SetEnabled mindamageamount.GetValue() > 0
    for damageoverride in mindamage
        damageoverride[1].SetEnabled damageoverride[0] < mindamageamount.GetValue()
        damageoverride[2].SetEnabled damageoverride[0] < mindamageamount.GetValue()

    for number in [0 .. conditions.length - 1]
        condition[number][0].SetEnabled conditiondd.GetValue() & 2 ** number
        condition[number][1].SetEnabled conditiondd.GetValue() & 2 ** number && condition[number][0].GetValue() & 2

    Render.String 40, Render.GetScreenSize().y - 400, 0, "ONSHOT", (if onshotkey.IsHotkeyActive() then [109, 195, 18, 255] else [255, 0, 0, 255]), 4 if onshot.GetValue() > 0 and onshotindicator.GetValue()
    if mindamageamount.GetValue() > 0 and mindamageindicator.GetValue()
        found = false
        for number in [0 .. mindamageamount.GetValue() - 1]
            if mindamage[number][1].IsHotkeyActive()
                Render.String 40, Render.GetScreenSize().y - 380, 0, "DMG : " + mindamage[number][2].GetValue(), [109, 195, 18, 255], 4
                found = true
                break
        
        Render.String 40, Render.GetScreenSize().y - 380, 0, "DMG", [255, 0, 0, 255], 4 unless found

Cheat.RegisterCallback "Unload", ->
    AntiAim.SetOverride 0 if antiaimed
