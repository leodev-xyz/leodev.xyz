
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


icons = {
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
    "m9 bayonet": "Z",
    "bayonet": "V",
    "flip knife": "W",
    "gut knife": "X",
    "karambit": "Y",
    "butterfly knife": "3",
    "falchion knife": "1",
    "navaja knife": "6",
    "shadow daggers": "4",
    "stiletto knife": "7",
    "bowie knife": "2",
    "huntsman knife": "0",
    "talon knife": "8",
    "ursus knife": "5",
    "classic knife": "G",
    "paracord knife": "G",
    "survival knife": "G",
    "nomad knife": "G",
    "skeleton knife": "G",
    "knife": "G",

    player: "9",
    defuse_kit: "U",
    c4: "N",
    skull: "\!",
    kevlar: "S",
    kelvar_helmet: "T",

    rage: {
        general: "T",
        pistol: "P",
        heavy_pistol: "a",
        scout: "F",
        awp: "g",
        autosniper: "D",
    },
    legit: {
        general: "T",
        pistol: "P",
        rifle: "e",
        sniper: "g",
        smg: "q",
    },
    visual: {
        self: "9",
        enemies: "\_",
        friendlies: "\%",
        world: "\&",
    },
    misc: {
        javascript: "\^",
        skins: "Z",
        perf_and_info: "\#",
        general: "\@",
    },
}

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

    for player in Entity.GetEnemies()
        continue unless Entity.IsAlive player

        name = Entity.GetName player
        Render.StringCustom position[0] + 4, position[1] + height + 19, 0, name, [0, 0, 0, 100], font
        Render.StringCustom position[0] + 3, position[1] + height + 18, 0, name, [239, 239, 239, 255], font

        width = 0

        specialicons = []
        if Entity.GetProp player, "CCSPlayer", "m_bHasHelmet"
            specialicons.push icons.kelvar_helmet
        else if Entity.GetProp(player, "CCSPlayerResource", "m_iArmor") > 0
            specialicons.push icons.kevlar
        if Entity.GetProp player, "CCSPlayer", "m_bHasDefuser"
            specialicons.push icons.defuse_kit
        
        for icon in specialicons
            Render.String position[0] + width + 2, position[1] + height + 33, 0, icon, [0, 0, 0, 100], 5
            Render.String position[0] + width + 1, position[1] + height + 32, 0, icon, [239, 239, 239, 255], 5
            width += Render.TextSize(icon, 5)[0]
        
        active = Entity.GetWeapon player
        for weapon in Entity.GetWeapons player
            icon = icons[Entity.GetName weapon]
            continue unless icon
            Render.String position[0] + width + 2, position[1] + height + 33, 0, icon, [0, 0, 0, 100], 5
            Render.String position[0] + width + 1, position[1] + height + 32, 0, icon, (if active == weapon then [255, 164, 1, 255] else [239, 239, 239, 255]), 5
            width += Render.TextSize(icon, 5)[0]
        
        height += 32


rel_start = undefined
drag = ->
    unless UI.IsMenuOpen() && Input.IsKeyPressed 0x01
        return rel_start = undefined
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

Cheat.RegisterCallback "Draw", "onDraw"
