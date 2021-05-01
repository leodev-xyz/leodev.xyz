
screen = Render.GetScreenSize()
UI.AddSliderInt "loadout_x", 0, screen[0]
UI.AddSliderInt "loadout_y", 0, screen[1]

position = [
    UI.GetValue("loadout_x"),
    UI.GetValue "loadout_y"
]
position[0] = screen[0] - 200 unless position[0]
position[1] = screen[1] / 2 - 100 unless position[1]

moving = false


display_icons = {
    "glock 18": "d",
    "p2000": "o",
    "dual berettas": "b",
    "p250": "y",
    "five seven": "c",
    "cz75 auto": "Q",
    "usp s": "P",
    "desert eagle": "a",
    "r8 revolver": "R",
    "tec 9": "w",
    "nova": "B",
    "xm1014": "r",
    "mag 7": "t",
    "sawed off": "v",
    "negev": "u",
    "m249": "i",
    "mp9": "A",
    "mp7": "z",
    "mp5 sd": "p",
    "ump 45": "q",
    "p90": "C",
    "pp bizon": "s",
    "mac 10": "n",
    "ak 47": "e",
    "m4a4": "l",
    "m4a1 s": "m",
    "famas": "h",
    "galil ar": "k",
    "aug": "f",
    "ssg 08": "F",
    "sg 553": "E",
    "awp": "g",
    "scar 20": "D",
    "g3sg1": "j",
    "high explosive grenade": "I",
    "smoke grenade": "J",
    "flashbang": "H",
    "decoy grenade": "L",
    "molotov": "K",
    "incendiary grenade": "M",
    "zeus x27": "x",
    "c4 explosive": "N",
    "m9 bayonet": "G",
    "bayonet": "G",
    "flip knife": "G",
    "gut knife": "G",
    "karambit": "G",
    "butterfly knife": "G",
    "falchion knife": "G",
    "navaja knife": "G",
    "shadow daggers": "G",
    "stiletto knife": "G",
    "bowie knife": "G",
    "huntsman knife": "G",
    "talon knife": "G",
    "ursus knife": "G",
    "classic knife": "G",
    "paracord knife": "G",
    "survival knife": "G",
    "nomad knife": "G",
    "skeleton knife": "G",
    "knife": "G",

    defuse_kit: "U",
    c4: "N",
    kevlar: "S",
    kelvar_helmet: "T",
}

exceptions = {
    "glock 18": "glock",
    "p2000": "hkp2000",
    "dual barettas": "elite",
    "cz75 auto": "cz75a",
    "usp s": "usp_silencer",
    "desert eagle": "deagle",
    "r8 revolver": "revolver",
    "pp bizon": "bizon",
    "high explosive grenade": "hegrenade",
    "decoy grenade": "decoy",
    "incendiary grenade": "incgrenade",
    "zeus x27": "taser"
}
weaponname_icons = {}
weaponname_icons["weapon_" + (if exceptions[key] then exceptions[key] else key.replace(/ /g, ""))] = value for key, value of display_icons

# ARMOR KNIFE TASER NADES PISTOL OTHER KIT BOMB

priority_array = [
    [display_icons.kevlar, display_icons.kelvar_helmet],
    [display_icons.knife],
    [display_icons.molotov, display_icons["incendiary grenade"]],
    [display_icons["high explosive grenade"]],
    [display_icons["smoke grenade"]],
    [display_icons.flashbang],
    [display_icons["decoy grenade"]],
    [display_icons["glock 18"], display_icons.p2000, display_icons["dual barettas"], display_icons.p250, display_icons["five seven"], display_icons["cz75 auto"], 
     display_icons["usp s"], display_icons["desert eagle"], display_icons["r8 revolver"], display_icons["tec 9"]],
    [],
    [display_icons.defuse_kit],
    [display_icons.c4],
]
priorities = {}
priorities[weapon] = 9 for _, weapon of display_icons
priorities[weapon] = index for weapon in value for index, value of priority_array

weaponcache = {}
enemycache = {}

draw = ->
    return unless Entity.IsValid(Entity.GetLocalPlayer()) || UI.IsMenuOpen()
    font = Render.AddFont "Segoe UI", 8, 900
    height = 0

    # header
    Render.GradientRect position[0], position[1], 100, 2, 1, [218, 160, 87, 255], [255, 223, 150, 255]
    Render.GradientRect position[0] + 100, position[1], 100, 2, 1, [255, 223, 150, 255], [218, 160, 87, 255]
    Render.FilledRect position[0], position[1] + 2, 200, 16, [38, 40, 52, 90]

    size = Render.TextSizeCustom "loadout", font
    Render.StringCustom position[0] + (200 - size[0]) / 2 + 1, position[1] + (18 - size[1]) / 2 + 1, 0, "loadout", [0, 0, 0, 100], font
    Render.StringCustom position[0] + (200 - size[0]) / 2, position[1] + (18 - size[1]) / 2, 0, "loadout", [239, 239, 239, 255], font

    enemies = Entity.GetEnemies()
    enemycache[player] = true for player in enemies
    for player, _ of enemycache
        player = parseInt player  # keys always string
        enemies.push player unless enemies.indexOf(player) >= 0

    for player in enemies
        continue unless Entity.GetProp(player, "CCSPlayerResource", "m_iHealth") > 0
        unless Entity.IsDormant player
            icons = []
            for weapon in Entity.GetWeapons player
                icon = display_icons[Entity.GetName weapon]
                icons.push icon if icon
            weaponcache[player] = {weapons: icons, selected: display_icons[Entity.GetName Entity.GetWeapon player]}

        name = Entity.GetName player
        Render.StringCustom position[0] + 4, position[1] + height + 19, 0, name, [0, 0, 0, 100], font
        Render.StringCustom position[0] + 3, position[1] + height + 18, 0, name, [239, 239, 239, 255], font

        width = 0

        icons = if weaponcache[player] then weaponcache[player].weapons.slice() else []
        if Entity.GetProp player, "CCSPlayer", "m_bHasHelmet"
            icons.push display_icons.kelvar_helmet
        else if Entity.GetProp(player, "CCSPlayerResource", "m_iArmor") > 0
            icons.push display_icons.kevlar
        if Entity.GetProp player, "CCSPlayer", "m_bHasDefuser"
            icons.push display_icons.defuse_kit

        icons.sort (a, b) -> priorities[a] - priorities[b]

        active = if weaponcache[player] then weaponcache[player].selected else undefined
        for icon in icons
            Render.String position[0] + width + 2, position[1] + height + 33, 0, icon, [0, 0, 0, 100], 5
            Render.String position[0] + width + 1, position[1] + height + 32, 0, icon, (if active == icon then [255, 164, 1, 255] else [239, 239, 239, 255]), 5
            width += Render.TextSize(icon, 5)[0]
        
        height += 32


rel_start = undefined
drag = ->
    return rel_start = undefined unless UI.IsMenuOpen() && Input.IsKeyPressed 0x01
    cursor = Input.GetCursorPosition()

    rel = [
        cursor[0] - position[0],
        cursor[1] - position[1]
    ]

    return if !rel_start && (rel[0] < 0 || rel[0] > 200 || rel[1] < 0 || rel[1] > 18)

    rel_start = rel unless rel_start

    position = [
        cursor[0] - rel_start[0],
        cursor[1] - rel_start[1]
    ]
    UI.SetValue "loadout_x", position[0]
    UI.SetValue "loadout_y", position[1]


onDraw = ->
    drag()
    draw()


on_item_pickup = ->
    player = Entity.GetEntityFromUserID Event.GetInt "userid"
    return unless Entity.IsEnemy player
    weapon = weaponname_icons["weapon_" + Event.GetString "item"]
    return unless weapon

    weaponcache[player] = {weapons: [], selected: undefined} unless weaponcache[player]
    weaponcache[player].weapons.push weapon

on_item_remove = ->
    player = Entity.GetEntityFromUserID Event.GetInt "userid"
    return unless weaponcache[player] && Entity.IsEnemy player
    weapon = weaponname_icons["weapon_" + Event.GetString "item"]
    return unless weapon

    index = weaponcache[player].weapons.indexOf weapon
    weaponcache[player].weapons.splice index, 1 if index >= 0

on_item_equip = ->
    player = Entity.GetEntityFromUserID Event.GetInt "userid"
    return unless weaponcache[player] && Entity.IsEnemy player
    weapon = weaponname_icons["weapon_" + Event.GetString "item"]
    return unless weapon

    weaponcache[player].selected = weapon

on_player_death = ->
    player = Entity.GetEntityFromUserID Event.GetInt "userid"
    return unless weaponcache[player] && Entity.IsEnemy player
    weaponcache[player] = {weapons: [], selected: undefined}

on_cs_game_disconnected = ->
    enemycache = {}


Cheat.RegisterCallback "Draw", "onDraw"
Cheat.RegisterCallback "item_pickup", "on_item_pickup"
Cheat.RegisterCallback "item_remove", "on_item_remove"
Cheat.RegisterCallback "item_equip", "on_item_equip"
Cheat.RegisterCallback "player_death", "on_player_death"
Cheat.RegisterCallback "cs_game_disconnected", "on_cs_game_disconnected"
