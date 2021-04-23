
# Aimware V5 Documentation: Classes


## **:link:Entity**

**:link:Entity.GetName**(): `:link:string`

Returns entity name.

**:link:Entity.GetClass**(): `:link:string`

// TODO

**:link:Entity.GetIndex**(): `:link:number`

Returns the index of the entity (only for players).

**:link:Entity.GetTeamNumber**(): `:link:number`

Returns the team number.

|  Teamnumber  |  Name                |
| ------------ | -------------------- |
|      1       |  Spectator           |
|      2       |  Counter-Terrorists  |
|      3       |  Terrorists          |

**:link:Entity.GetAbsOrigin**(): `:link:Vector3`

Returns origin position of the entity.

**:link:Entity.GetMins**()

// TODO

**:link:Entity.GetMaxs**()

// TODO

**:link:Entity.GetHealth**(): `:link:number`

Returns how much health the entity has.

**:link:Entity.GetMaxHealth**(): `:link:number`

Returns the maximum health of the entity.

**:link:Entity.IsPlayer**(): `:link:boolean`

Returns if the entity is a player.

**:link:Entity.IsAlive**(): `:link:boolean`

Returns if the entity is alive.

**:link:Entity.GetProp**(name: `:link:string`)

Returns the value of the prop.

**:link:Entity.SetProp**(name: `:link:string`, value)

Sets the value of the prop.

**:link:Entity.GetPropFloat**(...: `:link:string`): `:link:number`

Interprets the value at the path as a float and returns it.  
Accepts nested paths.

**:link:Entity.GetPropInt**(...: `:link:string`): `:link:number`

Interprets the value at the path as an int and returns it.  
Accepts nested paths.

**:link:Entity.GetPropBool**( ... : `:link:string`): `:link:boolean`

Interprets the value at the path as a boolean and returns it.  
Accepts nested paths.

**:link:Entity.GetPropString**( ... : `:link:string`): `:link:string`

Interprets the value at the path as a string and returns it.  
Accepts nested paths.

**:link:Entity.GetPropVector**( ... : `:link:string`): `:link:Vector3`

Interprets the value at the path as a Vector3 and returns it.  
Accepts nested paths.

**:link:Entity.GetPropEntity**( ... : `:link:string`): `:link:Entity`

Interprets the value at the path as an Entity and returns it.  
Accepts nested paths.

**:link:Entity.SetPropFloat**(value: `:link:number`, ...: `:link:string`)

Sets the value at the path to a float.  
Accepts nested paths.

**:link:Entity.SetPropInt**(value: `:link:number`, ...: `:link:string`)

Sets the value at the path to an int.  
Accepts nested paths.

**:link:Entity.SetPropBool**(value: `:link:boolean`, ...: `:link:string`)

Sets the value at the path to a boolean.  
Accepts nested paths.

**:link:Entity.SetPropVector**(value: `:link:Vector3`, ...: `:link:string`)

Sets the value at the path to a Vector3.  
Accepts nested paths.

**:link:Entity.SetPropEntity**(value: `:link:Entity`, ...: `:link:string`)

Sets the value at the path to an Entity.  
Accepts nested paths.

**:link:Entity.GetHitboxPosition**(hitbox: `:link:Hitbox`): `:link:Vector3`

**:link:Entity.GetBonePosition**(bone: `:link:Bone`): `:link:Vector3`

**:link:Entity.GetWeaponID**(): `:link:number`

// TODO

**:link:Entity.GetWeaponType**(): `:link:number`

// TODO

**:link:Entity.GetWeaponSpread**(): `:link:number`

**:link:Entity.GetWeaponInaccuracy**(): `:link:number`


## **:link:EspBuilder**

**:link:EspBuilder.Color**(r: `:link:number`, g: `:link:number`, b: `:link:number`, a: `:link:number`)

Sets the RGBA color for future text/bars/icons.

**:link:EspBuilder.GetEntity**(): `:link:Entity`

Returns the entity this esp builder is for.

**:link:EspBuilder.GetRect**()

// TODO

**:link:EspBuilder.AddTextTop**(text: `:link:string`)

Adds the specified text on the top.

**:link:EspBuilder.AddTextBottom**(text: `:link:string`)

Adds the specified text on the bottom.

**:link:EspBuilder.AddTextLeft**(text: `:link:string`)

Adds the specified text at the left.

**:link:EspBuilder.AddTextRight**(text: `:link:string`)

Adds the specified text at the right.

**:link:EspBuilder.AddBarTop**(percentage: `:link:number`)

Adds a bar with the specified percentage on the top (left to right, 0 - 1)

// TODO: percent range

**:link:EspBuilder.AddBarBottom**(percentage: `:link:number`)

Adds a bar with the specified percentage on the bottom (left to right, 0 - 1)

// TODO: percent range

**:link:EspBuilder.AddBarLeft**(percentage: `:link:number`)

Adds a bar with the specified percentage on the left (bottom to top, 0 - 1)

// TODO: percent range

**:link:EspBuilder.AddBarRight**(percentage: `:link:number`)

Adds a bar with the specified percentage on the right (bottom to top, 0 - 1)

// TODO: percent range

**:link:EspBuilder.AddIconTop**(texture: `:link:Texture`)

// TODO

**:link:EspBuilder.AddIconBottom**(texture: `:link:Texture`)

**:link:EspBuilder.AddIconLeft**(texture: `:link:Texture`)

**:link:EspBuilder.AddIconRight**(texture: `:link:Texture`)


## **:link:UserCmd**

Fields:

> **Note**: I'm only a human and have no idea what most of these do. (TODO)

|  Name              |  Type                 |  Description
| ------------------ | --------------------- | ----------------------------------------------------- |
|  command_number    |  `:link:number`       |  ---                                                  |
|  tick_count        |  `:link:number`       |  tick count                                           |
|  viewangles        |  `:link:EulerAngles`  |  ViewAngles (use `UserCmd.Set/GetViewAngles` instead) |
|  aimdirection      |  `:link:Vector3`      |  ---                                                  |
|  forwardmove       |  `:link:number`       |  ---                                                  |
|  sidemove          |  `:link:number`       |  ---                                                  |
|  upmove            |  `:link:number`       |  ---                                                  |
|  buttons           |  `:link:number`       |  buttons (bitwise)                                    |
|  impulse           |  `:link:number`       |  ---                                                  |
|  weaponselect      |  `:link:number`       |  ---                                                  |
|  weaponsubtype     |  `:link:number`       |  ---                                                  |
|  random_seed       |  `:link:number`       |  ---                                                  |
|  mousedx           |  `:link:number`       |  ---                                                  |
|  mousedy           |  `:link:number`       |  ---                                                  |
|  hasbeenpredicted  |  `:link:boolean`      |  ---                                                  |
|  headangles        |  `:link:EulerAngles`  |  ---                                                  |
|  headoffset        |  `:link:Vector3`      |  ---                                                  |
|  sendpacket        |  `:link:boolean`      |  if the usercmd is choked, set to false to choke      |


**:link:UserCmd.SetViewAngles**(pitch: `:link:number`, yaw: `:link:number`, roll: `:link:number`)

Sets the viewangles of this usercmd.

**:link:UserCmd.GetViewAngles**(): `:link:number`, `:link:number`, `:link:number`

Returns pitch, yaw, roll of the current viewangles of this usercmd.

**:link:UserCmd.SetSendPacket**(sendpacket: `:link:boolean`)

Determines whether to send the usercmd or not.

**:link:UserCMD.GetSendPacket**(): `:link:boolean`

Returns if the usercmd is sent or not (choked).

**:link:UserCMD.SetButtons**(buttons)

Setter for the `buttons` field.

**:link:UserCMD.GetButtons**()

Getter for the `buttons` field.

**:link:UserCMD.SetForwardMove**(factor: `:link:number`)

Setter for the `forwardmove` field.

**:link:UserCMD.GetForwardMove**()

Getter for the `forwardmove` field.

**:link:UserCMD.SetSideMove**(factor: `:link:number`)

Setter for the `sidemove` field.

**:link:UserCMD.GetSideMove**()

Getter for the `sidemove` field.

**:link:UserCMD.SetUpMove**(factor: `:link:number`)

Setter for the `upmove` field.

**:link:UserCMD.GetUpMove**()

Getter for the `upmove` field.


## **:link:GameEvent**

See [this list](https://wiki.alliedmods.net/Counter-Strike:_Global_Offensive_Events) for all game events and fields.

**:link:GameEvent.GetName**(): `:link:string`

Returns the game event name (e.g. `player_hurt`).

**:link:GameEvent.GetString**(field: `:link:string`): `:link:string`

Returns the field as string.

**:link:GameEvent.GetInt**(field: `:link:string`): `:link:number`

Returns the field as int.

**:link:GameEvent.GetFloat**(field: `:link:string`): `:link:number`

Returns the field as float.


## **:link:GuiObject**

**:link:GuiObject.GetName**(): `:link:string`

Returns the name of the gui object.

**:link:GuiObject.SetValue**(...)

Sets the value of the gui object.  
For a `:link:gui.ColorPicker` this takes 4 `:link:number` arguments, otherwise only a single `:link:number`.

**:link:GuiObject.GetValue**()

Returns the value of the gui object.

Returns 4 `:link:number` for a `:link:gui.ColorPicker`, otherwise only one `:link:number`.

**:link:GuiObject.SetActive**(active: `:link:boolean`)

Makes the window appear or disappear.

> **Note**: Only for `:link:gui.Window`.

**:link:GuiObject.IsActive**(): `:link:boolean`

Returns if the window is visible.

> **Note**: Only for `:link:gui.Window`.

**:link:GuiObject.SetText**(text: `:link:string`)

Sets the current displayed text.

> **Note**: Only for `:link:gui.Text`.

**:link:GuiObject.SetOpenKey**(key: `:link:number`)

Changes the window's open/close keybind.

> **Note**: Only for `:link:gui.Window`.

**:link:GuiObject.SetDescription**(text: `:link:string`)

Adds a description to the gui object.

**:link:GuiObject.SetOptions**(...: `:link:string`)

Sets options for a `:link:gui.Combobox` or `:link:gui.Listbox`.

**:link:GuiObject.SetPosX**(x: `:link:number`)

Sets relative x position to the parent.

**:link:GuiObject.SetPosY**(y: `:link:number`)

Sets relative y position to the parent.

**:link:GuiObject.SetWidth**(width: `:link:number`)

Sets width of the gui object.

**:link:GuiObject.SetHeight**(height: `:link:number`)

Sets height of the gui object.

**:link:GuiObject.SetInvisible**(invisibility: `:link:boolean`)

Makes gui object invisible or visible.

**:link:GuiObject.SetDisabled**(disabled: `:link:boolean`)

Makes gui disabled (not clickable) or enabled.

**:link:GuiObject.Remove**()

Removes gui object.

**:link:GuiObject.Reference**(...)

Like `:link:gui.Reference` but for children.

**:link:GuiObject.Children**(): `:link:function`

Returns a generator for the gui objects children.


## **:link:File**

**:link:File.Read**(): `:link:string`

Returns the file content.  
File must be opened in `r` mode.

**:link:File.Write**(content: `:link:string`)

Writes the content to the file.  
File must be opened in `w` or `a` mode.

**:link:File.Size**(): `:link:number`

Returns the flesize.  
File must be opened in `r` mode.

**:link:File.Close**()

Closes the file.  
Future file operations will fail.

> **Warning**: This **must** be called once you're done with file operations.

## **:link:UserMessage**

[User Message Protobuf](https://github.com/SteamDatabase/Protobufs/blob/master/csgo/cstrike15_usermessages.proto)

**:link:UserMessage.GetID**(): `:link:number`

Returns the [message id](https://github.com/SteamDatabase/Protobufs/blob/master/csgo/cstrike15_usermessages.proto#L8).

**:link:UserMessage.GetInt**(...)

Returns the value as an integer at the path.

**:link:UserMessage.GetFloat**(...)

Returns the value as a float at the path.

**:link:UserMessage.GetString**(...)

Returns the value as a strbg at the path.


## **:link:StringCmd**

**:link:StringCmd.Get**(): `:link:string`

Returns the command about to be sent.

**:link:StringCmd.Set**(command: `:link:string`)

Overwrites the command.  
If `command` is an empty string, the command won't be sent.


## **:link:Socket**

> **Note**: UDP packets are restricted to 64kb.

**:link:Socket.Bind**(ip: `:link:string`, port: `:link:number`)

Binds the socket to the ip and port to accept incoming messages.  
Returns true if bound successfully.

**:link:Socket.SendTo**(ip: `:link:string`, port: `:link:number`, message: `:link:string`)

Sends the message over UDP to the destination ip and port.  
Returns message size.

**:link:Socket.RecvFrom**(ip: `:link:string`, port: `:link:number`, size: `:link:number`): `:link:string`, `:link:string`, `:link:number`

Returns msg, ip, port coming from the specified ip and port.
This is non-blocking and returns `nil` when there's no packet.

**:link:Socket.Close**()

Closes the socket.  
Future socket operations will fail.

> **Warning**: This **must** be called once you're done with socket operations.


## **:link:Material**

**:link:Material.GetName**(): `:link:string`

Returns material nane.

**:link:Material.GetTextureGroupName**(): `:link:string`

Returns group the material is part of.

**:link:Material.AlphaModulate**(alpha: `:link:number`)

Modulates transparency of material.

**:link:Material.ColorModulate**(r: `:link:number`, g: `:link:number`, b: `:link:number`)

Modulates color of material.

**:link:Material.SetMaterialVarFlag**(flag: `:link:string`, value)

Changes material var flag.

**:link:Material.SetShaderParam**(name: `:link:string`, value)

Sets the shader paramater.  
Shader parameters can be found [here](https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters).


## **:link:DrawModelContext**

**:link:DrawModelContext.GetEntity**(): `:link:Entity`

Returns entity linked to the drawn model, can be nil (e.g. dropped weapon).

**:link:DrawModelContext.ForcedMaterialOverride**( mat )

Replaces material used to draw the model.  
Material can be found or created via the `:link:materials` api.

**:link:DrawModelContext.DrawExtraPass**()

Redraws the model.  
Can be used to achieve various effects with different materials.


## **:link:Vector3**

Fields:

|  Name  |  Type            |  Description   |
| ------ | ---------------- | -------------- |
|   x    |  `:link:number`  |  x coordinate  |
|   y    |  `:link:number`  |  y coordinate  |
|   z    |  `:link:number`  |  z coordinate  |


**:link:Vector3.Length**(): `:link:number`

Returns the euclidean distance from the origin to the vector.

```lua
Vector3(1, 1, 1):Length() -- 1.7320508075688772
```

**:link:Vector3.LengthSqr**(): `:link:number`

Returns the Manhattan distance from the origin to the vector.

```lua
Vector3(1, 1, 1):LengthSqr() -- 3
```

**:link:Vector3.Length2D**(): `:link:number`

Returns the euclidean distance from the origin to the vector ignoring height.

```lua
Vector3(1, 0, 1):Length2D() -- 1.4142135623730951
Vector3(1, 1000, 1):Length2D() -- 1.4142135623730951
```

**:link:Vector3.Length2DSqr**(): `:link:number`

Returns the Manhattan distance from the origin to the vector ignoring height.

```lua
Vector3(1, 0, 1):Length2DSqr() -- 2
Vector3(1, 1000, 1):Length2DSqr() -- 2
```

**:link:Vector3.Dot**(vector: `:link:Vector3`)

// TODO

**:link:Vector3.Cross**(vector: `:link:Vector3`)

// TODO

**:link:Vector3.Clear**()

// TODO

**:link:Vector3.Normalize**()

// TODO

**:link:Vector3.Right**()

// TODO

**:link:Vector3.Up**()

// TODO

**:link:Vector3.Angles**()

// TODO


## **:link:EulerAngles**

Fields:

|  Name   |  Type            |  Description   |
| ------- | ---------------- | -------------- |
|  pitch  |  `:link:number`  |  pitch angle   |
|  yaw    |  `:link:number`  |  yaw angle     |
|  roll   |  `:link:number`  |  roll angle    |


**:link:EulerAngles.Clear**()

// TODO

**:link:EulerAngles.Forward**()

// TODO

**:link:EulerAngles.Normalize**()

// TODO

**:link:EulerAngles.Right**()

// TODO

**:link:EulerAngles.Up**()

// TODO


## **:link:Trace**

More information can be found at [Valve Wiki](https://developer.valvesoftware.com/wiki/UTIL_TraceLine#trace_t_.26tr)

Fields:

|  Name          |  Type             |  Description                      |
| -------------- | ----------------- | --------------------------------- |
|  fraction      |  `:link:number`   |  check wiki                       |
|  entity        |  `:link:Entity`   |  entity that was hit              |
|  place.normal  |  `:link:Vector3`  |  start of the plane that was hit  |
|  contents      |  `:link:number`   |  check wiki                       |
|  hitbox        |  `:link:Bone`     |  bone that was hit                |
|  hitgroup      |  `:link:Hitbox`   |  hitbox that was hit              |
|  allsolid      |  `:link:boolean`  |  check wiki                       |
|  startsolid    |  `:link:boolean`  |  check wiki                       |
