
# Aimware V5 Documentation: Callbacks

> **Warning**: Callbacks must not return anything other than nil.  
> Doing so can crash your game or corrupt arguments for future callbacks.

## **:link:Callbacks**

**:link:Draw**()

Called every frame for drawing.

**:link:DrawESP**(builder: `:link:EspBuilder`)

Called for every ESP entity with ESP builder as argument.

**:link:DrawModel**(context: `:link:DrawModelContext`)

Called before model is drawn, e.g. player or weapon model.

**:link:DrawModelGhost**(context: `:link:DrawModelContext`)

Called before the ghost model of the local player is drawn.

**:link:DrawModelBacktrack**(context: `:link:DrawModelContext`)

Called before the backtrack model players is drawn.

**:link:CreateMove**(usercmd: `:link:UserCmd`)

Called every input update, allows to modify viewangles, sendpacket, etc.

**:link:FireGameEvent**(event: `:link:GameEvent`)

Called for selected [game events](https://wiki.alliedmods.net/Counter-Strike:_Global_Offensive_Events) using `:link:client.AllowListener`.

**:link:DispatchUserMessage**(message: `:link:UserMessage`)

Called on every user message received from server.

**:link:SendStringCmd**(cmd: `:link:StringCmd`)

Called when console command is sent to server (e.g. `say hello global chat`).

**:link:AimbotTarget**(target: `:link:Entity`?)

Called when legitbot or ragebot switches target (target can be `nil` if the legitbot/ragebot stops targetting that entity).

**:link:Unload**()

Called when the lua is unloaded, use this for cleaning variables up or saving configurations (e.g. `:link:Socket.Close`).

> **Note**: This is not called if the game crashes or exits.
