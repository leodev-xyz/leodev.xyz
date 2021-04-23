
# Onetap V3 Documentation: Globals

- `:link:Global`
- `:link:Globals`
- `:link:Sound`
- `:link:Cheat`
- `:link:Local`
- `:link:World`
- `:link:Input`
- `:link:Render`
- `:link:UI`
- `:link:Convar`
- `:link:Event`
- `:link:Entity`
- `:link:Trace`
- `:link:UserCMD`
- `:link:AntiAim`
- `:link:Exploit`
- `:link:Ragebot`
- `:link:Material`


**:link:__filename**: `:link:string`

Filename of the currently running script.


## **:link:Global**

> **Warning**: The usage of this module is discouraged.
> The `:link:Global` module is just purely linking to existing functions from other modules and therefore totally unneeded.

**:link:Global.Print**(text: `:link:string`)

This is an alias for `:link:Cheat.Print`, use it instead.

**:link:Global.PrintChat**(text: `:link:string`)

This is an alias for `:link:Cheat.PrintChat`, use it instead.

**:link:Global.PrintColor**(color: `:link:RGBA`, text: `:link:string`)

This is an alias for `:link:Cheat.PrintColor`, use it instead.

**:link:Global.RegisterCallback**(callback: `:link:string`, fn: `:link:string`)

This is an alias for `:link:Cheat.RegisterCallback`, use it instead.

**:link:Global.ExecuteCommand**(command: `:link:string`)

This is an alias for `:link:Cheat.ExecuteCommand`, use it instead.

**:link:Global.FrameStage**(): `:link:number`

This is an alias for `:link:Cheat.FrameStage`, use it instead.

**:link:Global.Tickcount**(): `:link:number`

This is an alias for `:link:Globals.Tickcount`, use it instead.

**:link:Global.Tickrate**(): `:link:number`

This is an alias for `:link:Globals.Tickrate`, use it instead.

**:link:Global.TickInterval**(): `:link:number`

This is an alias for `:link:Globals.TickInterval`, use it instead.

**:link:Global.Curtime**(): `:link:number`

This is an alias for `:link:Globals.Curtime`, use it instead.

**:link:Global.Realtime**(): `:link:number`

This is an alias for `:link:Globals.Realtime`, use it instead.

**:link:Global.Frametime**(): `:link:number`

This is an alias for `:link:Globals.Frametime`, use it instead.

**:link:Global.Latency**(): `:link:number`

This is an alias for `:link:Local.Latency`, use it instead.

**:link:Global.GetViewAngles**(): `:link:Angle`

This is an alias for `:link:Local.GetViewAngles`, use it instead.

**:link:Global.SetViewAngles**(angle: `:link:Angle`)

This is an alias for `:link:Local.SetViewAngles`, use it instead.
    
**:link:Global.GetMapName**(): `:link:string`

This is an alias for `:link:World.GetMapName`, use it instead.

**:link:Global.IsKeyPressed**(path: `:link:Path`): `:link:boolean`

This is an alias for `:link:Input.IsKeyPressed`, use it instead.

**:link:Global.GetScreenSize**(): `:link:Vector2`

This is an alias for `:link:Render.GetScreenSize`, use it instead.

**:link:Global.GetCursorPosition**(): `:link:Vector2`

This is an alias for `:link:Input.GetCursorPosition`, use it instead.

**:link:Global.PlaySound**(filename: `:link:string`)

This is an alias for `:link:Sound.Play`, use it instead.

**:link:Global.PlayMicrophone**(filename: `:link:string`)

This is an alias for `:link:Sound.PlayMicrophone`, use it instead.

**:link:Global.StopMicrophone**()

This is an alias for `:link:Sound.StopMicrophone`, use it instead.

**:link:Global.GetUsername**(): `:link:string`

This is an alias for `:link:Cheat.GetUsername`, use it instead.

**:link:Global.SetClanTag**(clantag: `:link:string`)

This is an alias for `:link:Local.SetClanTag`, use it instead.


## **:link:Globals**

**:link:Globals.Tickcount**(): `:link:number`

Returns the tick the server is on.

**:link:Globals.Tickrate**(): `:link:number`

Returns the server's tickrate. The tickrate is how many ticks the server processes each second.

**:link:Globals.TickInterval**(): `:link:number`

Returns the time between each tick.
This is equivalent to: 1 / `:link:Globals.Tickrate`()

**:link:Globals.Curtime**(): `:link:number`

Returns the time of the server in seconds.

**:link:Globals.Realtime**(): `:link:number`

Returns the time in seconds since the game started.

**:link:Globals.Frametime**(): `:link:number`

Returns the time the last frame took to render.
To convert to FPS use:

```js
Math.floor(1 / Globals.Frametime())
```

## **:link:Sound**

**:link:Sound.Play**(filename: `:link:string`)

Plays a sound from a `.wav` file.

**:link:Sound.PlayMicrophone**(filename: `:link:string`)

Plays a sound from a `.wav` file over the voicechat.

**:link:Sound.StopMicrophone**()

Interrupts the currently playing sound from `:link:Sound.PlayMicrophone`.

## **:link:Cheat**

**:link:Cheat.GetUsername**(): `:link:string`

Returns the name of the steam account at the point of the injection.

**:link:Cheat.RegisterCallback**(callback: `:link:string`, name: `:link:string`)

Registers a callback, check the `:link:Callbacks` documentation for more information.

```js
// function name must be declared globally
function onCreateMove() {
    // this gets called every tick
}
Cheat.RegisterCallback("CreateMove", "onCreateMove") // use the function NAME as string
```

**:link:Cheat.ExecuteCommand**(command: `:link:string`)

Executes a command in the CS:GO console.

```js
// TODO: better example :kek:
Cheat.ExecuteCommand("say I'm using OTC (chams.cc)") // cringe
```

**:link:Cheat.FrameStage**(): `:link:number`

Returns the current framestage.

|  Stage  |  Meaning                               |
| ------- | -------------------------------------- |
|    0    |  Frame Start                           |
|    1    |  Frame NetUpdate Start                 |
|    2    |  Frame NetUpdate PostDataUpdate Start  |
|    3    |  Frame NetUpdate PostDataUpdate End    |
|    4    |  Frame NetUpdate End                   |
|    5    |  Frame Render Start                    |
|    6    |  Frame Render End                      |

**:link:Cheat.Print**(text: `:link:string`)

Prints text into the CS:GO console.  
A newline `\n` is **not** automatically appended, so make sure you include one.

**:link:Cheat.PrintChat**(text: `:link:string`)

Prints text into your local chat (only you can see it).

You can use special bytes to change the color:

|  Byte   |  Color         |     |  Byte   |  Color         |     |  Byte   |  Color         |     |  Byte   |  Color         |
| ------- | -------------- | --- | ------- | -------------- | --- | ------- | -------------- | --- | ------- | -------------- |
|  \\x01  |  White         |     |  \\x05  |  Lighter green |     |  \\x09  |  Gold          |     |  \\x0D  |  Dark purple   |
|  \\x02  |  Dark red      |     |  \\x06  |  Light green   |     |  \\x0A  |  Gray          |     |  \\x0E  |  Light purple  |
|  \\x03  |  Purple        |     |  \\x07  |  Red           |     |  \\x0B  |  Aqua          |     |  \\x0F  |  Light red     |
|  \\x04  |  Green         |     |  \\x08  |  Gray          |     |  \\x0C  |  Blue          |     |         |                |

> **Warning**: The first character cannot be a color changing byte, adding a space at the start of the string fixes this issue.

**:link:Cheat.PrintColor**(color: `:link:RGBA`, text: `:link:string`)

Same as `:link:Cheat.Print` but colored.


## **:link:Local**

**:link:Local.Latency**(): `:link:number`

Returns your latency to the server in seconds.

**:link:Local.GetViewAngles**(): `:link:Angle`

Returns your current viweangles.

```js
function onDraw() {
    const angles = Global.GetViewAngles();
    Render.String(5, 5, 0, "Angles: pitch=" + angles[0] + " yaw=" + angles[1] + " roll=" + angles[2], [255, 0, 0, 255]);
}
Global.RegisterCallback("Draw", "onDraw");
```

**:link:Local.SetViewAngles**(angle: `:link:Angle`)

Sets your current viewangles to the specified one.

**:link:Local.SetClanTag**(clantag: `:link:string`)

Changes your clantag to the specified one.

**:link:Local.GetRealYaw**(): `:link:number`

Returns the yaw of your real.

**:link:Local.GetFakeYaw**(): `:link:number`

Returns the yaw of your fake.

**:link:Local.GetSpread**(): `:link:number`

Returns the spread of your selected gun.

**:link:Local.GetInaccuracy**(): `:link:number`

Returns the inaccuracy of your selected gun with other factors calculated (e.g. moving inaccuracy)


## **:link:World**

**:link:World.GetMapName**(): `:link:string`

Returns the current map name. (e.g. `de_dust2`, `de_mirage`)


**:link:World.GetServerString**(): `:link:string`

Returns the current server (ip, port, offline match, ...) as a string.  
This is used in the watermark.


## **:link:Input**

**:link:Input.GetCursorPosition**(): `:link:Vector2`

Returns the current position of the cursor (mouse).

**:link:Input.IsKeyPressed**(key: `:link:number`): `:link:boolean`

Returns if the key is currently pressed.

For possible keys check [Virtual Key Codes](https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes).


## **:link:Render**

> **Note**: Can only be used during a `:link:Draw` callback.

**:link:Render.String**(x: `:link:number`, y: `:link:number`, align: `:link:number`, text: `:link:string`, color: `:link:RGBA`, size: `:link:Size`)

Renders the string text at the position x|y on the screen.

`align === 0` is left-aligned and everything else is centered.  
`size` is optional.

```js
// this will render a red colored string at the top left of the screen
Render.String(0, 0, 0, "Hello World", [255, 0, 0, 255]); 
```

**:link:Render.TextSize**(text: `:link:string`, size: `:link:Size`): `:link:Vector2`

Returns `width` and `height` the text would need to be rendered.

**:link:Render.Line**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`, color: `:link:RGBA`)

Renders a line from x1|y1 to x2|y2.

**:link:Render.Rect**(x: `:link:number`, y: `:link:number`, width: `:link:number`, height: `:link:number`, color: `:link:RGBA`)

Renders the outline of a rectangle at x|y with the specified width and height.

**:link:Render.FilledRect**(x: `:link:number`, y: `:link:number`, width: `:link:number`, height: `:link:number`, color: `:link:RGBA`)

Renders a filled reactangle at x|y with the specified width and height.

**:link:Render.GradientRect**(x: `:link:number`, y: `:link:number`, width: `:link:number`, height: `:link:number`, direction: `:link:number`, color1: `:link:RGBA`?, color2: `:link:RGBA`?)

Renders a gradient reactangle at x|y with the specified width and height.

**:link:Render.Circle**(x: `:link:number`, y: `:link:number`, radius: `:link:number`, color: `:link:RGBA`)

Renders a circle at x|y with the specified color and radius.

**:link:Render.FilledCircle**(x: `:link:number`, y: `:link:number`, radius: `:link:number`, color: `:link:RGBA`)

Renders a circle at x|y with the specified color and radius.

**:link:Render.Polygon**(points, color: `:link:RGBA`)

Renders a polygon/triangle, the 3 corners are the `points` list.

```js
function onDraw() {
    // draws a simple red polygon
    Render.Polygon([[50, 0], [25, 50], [75, 50]], [255, 0, 0, 255]);
}
Cheat.RegisterCallback("Draw", "onDraw");
```

**:link:Render.WorldToScreen**(position: `:link:Vector3`): `:link:Vector2`

Transforms a world position to a screen position.

**:link:Render.AddFont**(name: `:link:string`, size: `:link:number`, weight: `:link:number`): `:link:number`

Creates a new font with the specified name, size and weight, and returns its font identifier.

**:link:Render.FindFont**(name: `:link:string`, size: `:link:number`, weight: `:link:number`): `:link:number`

Returns font identifier.  
Returns 0 if the font is not found.

**:link:Render.StringCustom**(x: `:link:number`, y: `:link:number`, align: `:link:number`, text: `:link:string`, color: `:link:RGBA`, font: `:link:number`)

Renders the string text at x|y with a custom font (see also `:link:Font`).

**:link:Render.TexturedRect**(x, y, width, height, texture)

Renders the texture at x|y with the specified width and height.

**:link:Render.AddTexture**(filename: `:link:string`): `:link:number`

Returns a texture loaded from a file.

**:link:Render.TextSizeCustom**(text: `:link:string`, font: `:link:number`): `:link:Vector2`

Like `:link:Render.TextSize` but for custom fonts.

**:link:Render.GetScreenSize**(): `:link:Vector2`

Returns the width and height of the screen (not the CS:GO window!).


## **:link:UI**

**:link:UI.GetValue**(path: `:link:Path`)

Returns the value of the specified UI element.

```js
function getFakelag() {
    if(!UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled"))
        return 0;  // fakelag disabled
    return UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
}
```

**:link:UI.SetValue**(path: `:link:Path`, value)

Sets the value of the specified UI element.

```js
function disableFakeLag() {
    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", false);
}
function toggleFakeLag() {
    var fakelag_enabled = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
    UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", !fakelag_enabled);
}
```

**:link:UI.AddCheckbox**(name: `:link:string`)

Creates a checkbox element in the scripting section.  
Returns the path to it as a list.

**:link:UI.AddSliderInt**(name: `:link:string`, min: `:link:number`, max: `:link:number`)

Creates a slider element with the specified range in the scripting section.  
Returns the path to it as a list.

**:link:UI.AddSliderFloat**(name: `:link:string`, min: `:link:number`, max: `:link:number`)

Creates a slider element with the specified range in the scripting section.  
Returns the path to it as a list.

**:link:UI.AddHotkey**(name: `:link:string`)

Creates a hotkey element in the scripting section.  
Returns the path to it as a list.

Use `:link:UI.IsHotkeyActive` to check if the hotkey is active.

**:link:UI.AddLabel**(text: `:link:string`)

Creates a label element in the scripting section.

**:link:UI.AddDropdown**(name: `:link:string`, options)

Creates a dropdown elemnt in the scripting section.  
`options` is a list of `:link:string`.  
Returns the path to it as a list.

`:link:UI.GetValue` on a dropdown returns a zero-indexed `:link:number`

```js
UI.AddDropdown("sample dropdown", ["option 0", "option 1", "option 2"])

// by default the first option is selected
UI.GetValue("sample dropdown") // 0
UI.SetValue("sample dropdown", 2) // sets dropdown to "option 2"
```

**:link:UI.AddMultiDropdown**(name: `:link:string`, options)

Creates a mnlti dropdown element in the scripting section.  
`options` is a list of `:link:string`.  
Returns the path to it as a list.

`:link:UI.GetValue` on a dropdown returns a `:link:number` which has the bits of the active options set.

```js
UI.AddMultiDropdown("sample multidropdown", ["option 0", "option 1", "option 2"])

UI.GetValue("sample multidropdown") // 0, because nothing is set
UI.SetValue("sample multidropdown", 0b101) // selects option 0 and 2 (bitwise)
UI.GetValue("sample multidropdown") // 5, because option 0 and 2 are set
```

**:link:UI.AddColorPicker**(name: `:link:string`)

Creates a colorpicker element in the scripting section.  
Returns the path to it as a list.

**:link:UI.AddTextbox**(name: `:link:string`)

Creates a textbox element in the scripting section.  
Returns the path to it as a list.

**:link:UI.SetEnabled**(path: `:link:Path`, value: `:link:boolean`)

Enables/disables the checkbox at the specified path.

**:link:UI.GetString**(path: `:link:Path`): `:link:string`

Returns the string in the textbox at the specified path.

**:link:UI.GetColor**(path: `:link:Path`): `:link:RGBA`

Returns the selected color from the colorpicker at the specified path.

**:link:UI.SetColor**(path: `:link:Path`, color: `:link:RGBA`)

Sets the color at the specified path to the specified color.

**:link:UI.IsHotkeyActive**(path: `:link:Path`): `:link:boolean`

Returns whether the hotkey at the specified path is active or not.

**:link:UI.ToggleHotkey**(path: `:link:Path`): `:link:number`

Toggles the hotkey at the specified path.  
Returns the new active state. (0 = inactive, 1 = active)

**:link:UI.IsMenuOpen**(): `:link:boolean`

Returns if the menu is opened.


## **:link:Convar**

**:link:Convar.GetInt**(name: `:link:string`): `:link:number`

Returns the current value of the specified console variable.

**:link:Convar.SetInt**(name: `:link:string`, value: `:link:number`)

Sets the value of the specified console variable to the specified value.

**:link:Convar.GetFloat**(name: `:link:string`): `:link:number`

Returns the current value of the specified console variable.

**:link:Convar.SetFloat**(name: `:link:string`, value: `:link:number`)

Sets the value of the specified console variable to the specified value.

**:link:Convar.GetString**(name: `:link:string`): `:link:string`

Returns the current value of the specified console variable.

**:link:Convar.SetString**(name: `:link:string`, value: `:link:string`)

Sets the value of the specified console variable to the specified value.


## **:link:Event**

> **Note**: Can only used during a `:link:Callbacks`.

**:link:Event.GetInt**(name: `:link:string`): `:link:number`

Returns the integer representation of the specified variable.

**:link:Event.GetFloat**(name: `:link:string`): `:link:number`

Returns the floating point representation of the specified variable.

**:link:Event.GetString**(name: `:link:string`): `:link:string`

Returns the string representation of the specified variable.


## **:link:Entity**

**:link:Entity.GetEntities**(): Array[`:link:number`]

Returns the entityindex of every entity.

**:link:Entity.GetEntitiesByClassID**(classid: `:link:number`): Array[`:link:number`]

Returns the entityindex of every entity with that class id.

**:link:Entity.GetPlayers**(): Array[`:link:number`]

Returns the entityindex of every player.

**:link:Entity.GetEnemies**(): Array[`:link:number`]

Returns the entityindex of every enemy.

**:link:Entity.GetTeammates**(): Array[`:link:number`]

Returns the entityindex of every teammates.

**:link:Entity.GetLocalPlayer**(): `:link:number`

Returns the entityindex of yourself.

**:link:Entity.GetGameRulesProxy**(): `:link:number`

Returns the entityindex of the gamerules proxy.

// TODO: maybe link to some information about the GameRulesProxy?

**:link:Entity.GetEntityFromUserID**(userid: `:link:number`): `:link:number`

Returns the entityindex of the player with the matching user id.

**:link:Entity.IsTeammate**(entityindex: `:link:number`): `:link:boolean`

Returns if the entity is a teammate.

**:link:Entity.IsEnemy**(entityindex: `:link:number`): `:link:boolean`

Returns if the entity is an enemy.

**:link:Entity.IsBot**(entityindex: `:link:number`): `:link:boolean`

Returns if the entity is a bot.

**:link:Entity.IsLocalPlayer**(entityindex: `:link:number`): `:link:boolean`

Returns if the entity is yourself.

**:link:Entity.IsValid**(entityindex: `:link:number`): `:link:boolean`

Returns if the entity is valid (e.g. exists, player is still connected, ...).

**:link:Entity.IsAlive**(entityindex: `:link:number`): `:link:boolean`

Returns if the entity is alive.

**:link:Entity.IsDormant**(entityindex: `:link:number`): `:link:boolean`

Returns if the entity is dormant.

**:link:Entity.GetClassID**(entityindex: `:link:number`): `:link:number`

Returns the class id of the entity.

> **NOTE**: Class ids sometimes change during game updates, and shouldn't be used for identification.  
> Use `:link:Entity.GetClassName` instead.

**:link:Entity.GetClassName**(entityindex: `:link:number`): `:link:string`

Returns the name of the class the entity belongs to.

**:link:Entity.GetName**(entityindex: `:link:number`): `:link:string`

Returns the display name of the entitiy.

> **NOTE**: Do not use this to differentiate between items, because this language dependent.  
> Doing so, will make your script only work in a specific game language.

**:link:Entity.GetWeapon**(entityindex: `:link:number`): `:link:number`

Returns the current held weapon's entityindex by the entity.

```js
var lp = Entity.GetLocalPlayer();
if(Entity.IsAlive(lp)) {
    var weapon = Entity.GetWeapon(lp);
    Cheat.Print("holding: " + Entity.GetClassName(weapon));
}
```

**:link:Entity.GetWeapons**(entityindex: `:link:number`): Array[`:link:number`]

Returns the entityindex of every weapon the entity has (primary weapon, pistol, knife, zeus, grenades, ...)

**:link:Entity.GetRenderOrigin**(entityindex: `:link:number`): `:link:Vector3`

Returns position of the entity.

**:link:Entity.GetRenderBox**(entityindex: `:link:number`)

Returns the render box of the entity as an array:  

[visible: `:link:boolean`, min_x: `:link:number`, min_y: `:link:number`, max_x: `:link:number`, max_y: `:link:number`]

**:link:Entity.GetProp**(entityindex: `:link:number`, table: `:link:string`, propname: `:link:string`)

Returns the value of the specified prop.

`table` will be the entity's classname most of the time (`CCSPlayer` for players).

**:link:Entity.SetProp**(entityindex: `:link:number`, table: `:link:string`, propname: `:link:string`, value)

Sets the specified prop to the specified value.

`table` will be the entity's classname most of the time (`CCSPlayer` for players).

**:link:Entity.GetHitboxPosition**(entityindex: `:link:number`, bone: `:link:Bone`): `:link:Vector3`

Returns the position of the bone.

**:link:Entity.GetEyePosition**(entityindex: `:link:number`): `:link:Vector3`

Returns the position of the "eye" of the entity (the place where bullets come from).


## **:link:Trace**

**:link:Trace.Line**(entityindex: `:link:number`, start: `:link:Vector3`, end: `:link:Vector3`)

Traces a line between start and end, ignoring the specified entity.

[target: `:link:number`, fraction: `:link:number`]

- `target` is the entityindex of what was hit
- `fraction` has 3 possible values:
  - 1.0: didn't hit anything
  - 0.5: hit something halfway through
  - 0.1: hit something


**:link:Trace.Bullet**(source: `:link:number`, target: `:link:number`, start: `:link:Vector3`, end: `:link:Vector3`)

Traces a bullet between start and end.  
Returns `undefined` if the target is not hit.

[target: `:link:number`, damage: `:link:number`, visibility: `:link:boolean`, hitbox: `:link:number`]

- `target` is the entityindex from the function call
- `damage` is the damage your current gun would deal
- `visibility` is whether the target is visible
- `hitbox` is the hitbox that gets hit, see also: `:link:Hitbox`

> **Warning**: If you've teamcheck on, this will return 0 damage on teammates and yourself!


## **:link:UserCMD**

> **NOTE**: This can only be used during a `:link:CreateMove` callback.

**:link:UserCMD.SetMovement**(movement: `:link:Vector3`)

Sets the movement for the current user command.

**:link:UserCMD.GetMovement**(): `:link:Vector3`

Returns the planned movement for the current user command.

**:link:UserCMD.SetAngles**(angles: `:link:Vector3`)

Sets the viewangles for the current user command.

**:link:UserCMD.ForceJump**(value: `:link:boolean`)

Forces yourself to jump (or not) in this user command.

**:link:UserCMD.ForceCrouch**(value: `:link:boolean`)

Forces yourself to crouch (or not) in this user command.


## **:link:AntiAim**

**:link:AntiAim.GetOverride**(): `:link:number`

Returns whether the antiaim is being managed by a script.  
`1` means it is and `0` means it isn't.

**:link:AntiAim.SetOverride**(managed: `:link:number`)

Enables/disables management of the antiaim.

> **Warning**: A `:link:boolean` is **not supported**.  
> Use `0` instead of `false` and `1` instead of `true`.

**:link:AntiAim.SetRealOffset**(degrees: `:link:number`)

Sets the offset of your real (relative to your `:link:AntiAim.SetFakeOffset`).  
Degrees should be between -58 and 58.

**:link:AntiAim.SetFakeOffset**(degrees: `:link:number`)

Sets your yaw offset (relative to -180).  
Degrees should be between -180 and 180.

**:link:AntiAim.SetLBYOffset**(degrees: `:link:number`)

Sets the offset of your fake (relative to your `:link:AntiAim.SetFakeOffset`).  
Degrees should be between -58 and 58.


## **:link:Exploit**

**:link:Exploit.GetCharge**(): `:link:number`

Returns the current doubletap charge percentage between 0 and 1 and `-1` if disabled.

**:link:Exploit.Recharge**()

Forces the ragebot to recharge the doubletap as soon as possible.

**:link:Exploit.DisableRecharge**()

Disables automatic recharge.

**:link:Exploit.EnableRecharge**()

Enables automatic recharge.


## **:link:Ragebot**

> **Note**: Can only be used during a `:link:CreateMove` callback.

**:link:Ragebot.GetTarget**(): `:link:number`

Returns the entityindex of the targetted entity.  
Returns 0 if no entity is being targetted.

**:link:Ragebot.IgnoreTarget**(entityindex: `:link:number`)

Ignores the specified entity for the current tick.

**:link:Ragebot.ForceTarget**(entityindex: `:link:number`)

Forces the ragebot to shoot the specified entity for the current tick.

**:link:Ragebot.ForceTargetSafety**(entityindex: `:link:number`)

Forces the ragebot to only shoot safepoint for the specified entity for the current tick.

**:link:Ragebot.ForceTargetHitchance**(entityindex: `:link:number`, hitchance: `:link:number`)

Forces the ragebot to only shoot with at least the specified hitchance for the specified entity for the current tick.  
Hitchance is a number between 0 and 100.

**:link:Ragebot.ForceTargetMinimumDamage**(entityindex: `:link:number`, damage: `:link:number`)

Forces the ragebot to shoot for at least the specified damage for the specified entity for the current tick.  
Damage 0 is treated as dynamic min damage.
Damage over 100 is treated as `HP + (damage - 100)`.

**:link:Ragebot.ForceHitboxSafety**(hitbox: `:link:Hitbox`)

Forces the ragebot to only shoot safepoint of the specified hitbox for the current tick.


## **:link:Material**

Useful ressources:
  - https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters
  - https://developer.valvesoftware.com/wiki/VertexLitGeneric

**:link:Material.Create**(name: `:link:string`): `:link:boolean`

Creates a material and returns if the creation was successful.

The material is added to the "Visible type" dropdown in the chams section of the menu.

**:link:Material.Destroy**(name: `:link:string`): `:link:boolean`

Destroys a material and returns if the destruction was successful.

**:link:Material.Get**(name: `:link:string`): `:link:number`

Returns the materialindex of the material.  
The materialindex may change between callback execution, so don't store the index.

> **Note**: Can only be called during a `:link:callback:Material` callback.

**:link:Material.SetKeyValue**(materialindex: `:link:number`, key: `:link:string`, value: `:link:string`)

Overrides value of the material.

> **Note**: Can only be called during a `:link:callback:Material` callback.

**:link:Material.Refresh**(materialindex: `:link:number`)

Refreshes the material with the new values set using `:link:Material.SetKeyValue`.

> **Note**: Can only be called during a `:link:callback:Material` callback.
