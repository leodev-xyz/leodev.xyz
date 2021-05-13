
require("_runtime.js").apply.call this

conditions = UI.AddMultiDropdown "Chinese be like: Conditions", ["hit", "kill", "hurt", "death", "interval"]
interval  = UI.AddSliderInt "Random chinese messages per minute", 1, 30

last_message = -1
DELAY = 1.2
message_queue = []  # implement a queue system to not miss a single hq message

getChinese = ->
    word = []
    for i in [ 0 .. 4 + Math.floor Math.random() * 30 ]
        word.push String.fromCharCode Math.floor(Math.random() * (0x9fff - 0x4e00)) + 0x4e00

    word.join ""

queueChinese = ->
    word = getChinese()
    if Math.random() > 0.6
        word += if Math.random() > 0.8 then "?" else "!"
    message_queue.push word


Cheat.RegisterCallback "Draw", ->
    interval.SetEnabled conditions.GetValue() & 1 << 4


Cheat.RegisterCallback "player_hurt", ->
    attacker = Entities.GetEntityFromUserID Event.GetInt "attacker"
    victim = Entities.GetEntityFromUserID Event.GetInt "userid"
    remaining = Event.GetInt "health"
    if attacker.IsLocalPlayer() and conditions.GetValue() & 1 << 1 and remaining == 0  # kill
        queueChinese()
    else if attacker.IsLocalPlayer() and conditions.GetValue() & 1 << 0  # hit
        queueChinese()
    else if victim.IsLocalPlayer() and conditions.GetValue() & 1 << 3 and remaining == 0  # death
        queueChinese()
    else if victim.IsLocalPlayer() and conditions.GetValue() & 1 << 2  # hurt
        queueChinese()


Cheat.RegisterCallback "CreateMove", ->
    if conditions.GetValue() & 1 << 4 and Globals.Tickcount() % (Globals.Tickrate() * 60 / interval.GetValue()) == 0
        queueChinese()

    return last_message = -1 unless message_queue.length > 0
    last_message = -1 if last_message > Globals.Curtime()  # server teleported in time
        
    if last_message == -1 or Globals.Curtime() - last_message >= DELAY
        last_message = Globals.Curtime()
        Cheat.ExecuteCommand "say " + message_queue[0]
        message_queue = message_queue.slice 1
