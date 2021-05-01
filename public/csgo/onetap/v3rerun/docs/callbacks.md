
# Onetap V3 Re:Run Documentation: Callbacks

Callbacks are functions that you can set which will be called when certain events happen.

You can register your callbacks using the `:link:Cheat.RegisterCallback` function.

```js
Cheat.RegisterCallback("Draw", function() {
    // draws white text in the top left
    Render.String(0, 0, 0, "Hello World", [255, 255, 255, 255]);
});
```

Some events have arguments, those are available using the `:link:Event` module.


## **:link:Callbacks**

**:link:CreateMove**

This callback is everytime a user command is sent to the server (once every tick).

`:link:UserCMD` can be accessed during this callback.

**:link:Draw**

Called everytime a frame is drawn (once every frame).

`:link:Render` can be accessed during this callback.

**:link:FrameStageNotify**

Called everytime the framestage changes (multiple times every frame).

`:link:Cheat.FrameStage` can be accessed during this callback.

**:link:Unload**

Called when the script is unloaded, this can be used for cleanup (e.g. resetting `:link:AntiAim.SetOverride`).  
This may not be called if the game is closed (or crashes).

**:link:callback:Material**

Called once every frame before the `:link:Draw` callback.

`:link:Material` can be accessed during this callback.

// TODO: when is this called

**:link:ragebot_fire**

Called everytime the ragebot shoots at an entity.

Arguments:

|  Name          |  Type     |  Description                                                   |
| -------------- | --------- | -------------------------------------------------------------- |
|  exploit       |  integer  |  0 = no exploit, 1 = 1st dt shot or hideshot, 2 = 2nd dt shot  |
|  target_index  |  integer  |  Entityindex of the target                                     |
|  hitchance     |  integer  |  Hitchance of the shot  (between 0 and 100)                    |
|  safepoint     |  integer  |  Targetting a safepoint                                        |
|  hitbox        |  integer  |  Targetted `:link:Hitbox`                                      |

**:link:player_say**

Called everytime a player says something.

> **Note**: This callback is very inconsistent and may not work.

Arguments:

|  Name    |  Type     |  Description                   |
| -------- | --------- | ------------------------------ |
|  userid  |  integer  |  Userid of the message author  |
|  text    |  string   |  Content of the message        |

## **:link:CSGO Events**

CS:GO has builtin events which can also be used as callbacks and with the `:link:Event` module.

Event list: https://wiki.alliedmods.net/Counter-Strike:_Global_Offensive_Events

```js
Cheat.RegisterCallback("player_death", function() {
    entity = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    Cheat.PrintChat(" \x02" + Entity.GetName(entity) + " \x01died!");
});
```

