
# Onetap V3 Re:Run Documentation: Globals

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
- `:link:Entities`
- `:link:Trace`
- `:link:UserCMD`
- `:link:AntiAim`
- `:link:Exploit`
- `:link:Ragebot`
- `:link:Material`


**:link:__filename**: `:link:string`

Filename of the currently running script.

**:link:fn:Reference**(path: `:link:Path`): `:link:Reference`

Returns a `:link:Reference` to the specified ui element.

**:link:fn:Entity**(entityindex: `:link:number`): `:link:Entity`

Returns the `:link:Entity` for the specified entity.

**:link:fn:Vector2**(x: `:link:number`, y: `:link:number`): `:link:Vector2`

Returns a `:link:Vector2` with the specified coordinates.

**:link:fn:Vector3**(x: `:link:number`, y: `:link:number`, z: `:link:number`): `:link:Vector3`

Returns a `:link:Vector3` with the specified coordinates.

**:link:fn:Angle**(pitch: `:link:number`, yaw: `:link:number`, roll: `:link:number`): `:link:Angle`

Returns `:link:Angle` with the specified pitch/yaw/roll values.

**:link:fn:RGBA**(r: `:link:number`, g: `:link:number`, b: `:link:number`, a: `:link:number`): `:link:RGBA`

Returns a `:link:RGBA` color with the specified red/green/blue/alpha values.


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

**:link:Cheat.RegisterCallback**(callback: `:link:string`, name: `:link:function`)

Registers a callback, check the `:link:Callbacks` documentation for more information.

```js
Cheat.RegisterCallback("CreateMove", function() {
    // called every tick
})
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
Global.RegisterCallback("Draw", function() {
    const angles = Global.GetViewAngles();
    Render.String(5, 5, 0, "Angles: pitch=" + angles.pitch + " yaw=" + angles.yaw + " roll=" + angles.roll, [255, 0, 0, 255]);
});
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
Cheat.RegisterCallback("Draw", function() {
    // draws a simple red polygon
    Render.Polygon([[50, 0], [25, 50], [75, 50]], [255, 0, 0, 255]);
});
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

**:link:UI.AddCheckbox**(name: `:link:string`): `:link:Reference`

Creates a checkbox element in the scripting section and returns a reference to it.

**:link:UI.AddSliderInt**(name: `:link:string`, min: `:link:number`, max: `:link:number`): `:link:Reference`

Creates a slider element with the specified range in the scripting section and returns a reference to it.

**:link:UI.AddSliderFloat**(name: `:link:string`, min: `:link:number`, max: `:link:number`): `:link:Reference`

Creates a slider element with the specified range in the scripting section and returns a reference to it.

**:link:UI.AddHotkey**(name: `:link:string`): `:link:Reference`

Creates a hotkey element in the scripting section and returns a reference to it.

Use `:link:Reference.IsHotkeyActive` to check if the hotkey is active.

**:link:UI.AddLabel**(text: `:link:string`): `:link:Reference`

Creates a label element in the scripting section and returns a reference to it.

**:link:UI.AddDropdown**(name: `:link:string`, options): `:link:Reference`

Creates a dropdown element in the scripting section and returns a reference to it.  
`options` is a list of `:link:string`.

`:link:Reference.GetValue` on a dropdown returns a zero-indexed `:link:number`

```js
UI.AddDropdown("sample dropdown", ["option 0", "option 1", "option 2"])

// by default the first option is selected
UI.GetValue("sample dropdown") // 0
UI.SetValue("sample dropdown", 2) // sets dropdown to "option 2"
```

**:link:UI.AddMultiDropdown**(name: `:link:string`, options): `:link:Reference`

Creates a mnlti dropdown element in the scripting section and returns a reference to it.  
`options` is a list of `:link:string`.

`:link:Reference.GetValue` on a dropdown returns a `:link:number` which has the bits of the active options set.

```js
UI.AddMultiDropdown("sample multidropdown", ["option 0", "option 1", "option 2"])

UI.GetValue("sample multidropdown") // 0, because nothing is set
UI.SetValue("sample multidropdown", 0b101) // selects option 0 and 2 (bitwise)
UI.GetValue("sample multidropdown") // 5, because option 0 and 2 are set
```

**:link:UI.AddColorPicker**(name: `:link:string`): `:link:Reference`

Creates a colorpicker element in the scripting section and returns a reference to it.

**:link:UI.AddTextbox**(name: `:link:string`): `:link:Reference`

Creates a textbox element in the scripting section and returns a reference to it.

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


## **:link:Entities**

**:link:Entities.GetEntities**(): Array[`:link:Entity`]

Returns the entityindex of every entity.

**:link:Entities.GetEntitiesByClassID**(classid: `:link:number`): Array[`:link:Entity`]

Returns the entityindex of every entity with that class id.

**:link:Entities.GetPlayers**(): Array[`:link:Entity`]

Returns the entityindex of every player.

**:link:Entities.GetEnemies**(): Array[`:link:Entity`]

Returns the entityindex of every enemy.

**:link:Entities.GetTeammates**(): Array[`:link:Entity`]

Returns the entityindex of every teammates.

**:link:Entities.GetLocalPlayer**(): `:link:Entity`

Returns the entityindex of yourself.

**:link:Entities.GetGameRulesProxy**(): `:link:Entity`

Returns the entityindex of the gamerules proxy.

// TODO: maybe link to some information about the GameRulesProxy?

**:link:Entities.GetEntityFromUserID**(userid: `:link:number`): `:link:Entity`

Returns the entityindex of the player with the matching user id.


## **:link:Trace**

**:link:Trace.Line**(entityindex: `:link:Entity`, start: `:link:Vector3`, end: `:link:Vector3`)

Traces a line between start and end, ignoring the specified entity.

[target: `:link:Entity`, fraction: `:link:number`]

- `target` is the entity who was hit
- `fraction` has 3 possible values:
  - 1.0: didn't hit anything
  - 0.5: hit something halfway through
  - 0.1: hit something


**:link:Trace.Bullet**(source: `:link:Entity`, target: `:link:Entity`, start: `:link:Vector3`, end: `:link:Vector3`)

Traces a bullet between start and end.  
Returns `undefined` if the target is not hit.

[target: `:link:Entity`, damage: `:link:number`, visibility: `:link:boolean`, hitbox: `:link:number`]

- `target` is the entity from the function call
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

**:link:Ragebot.GetTarget**(): `:link:Entity`

Returns the targetted entity.  
Returns 0 if no entity is being targetted.

**:link:Ragebot.IgnoreTarget**(entity: `:link:Entity`)

Ignores the specified entity for the current tick.

**:link:Ragebot.ForceTarget**(entity: `:link:Entity`)

Forces the ragebot to shoot the specified entity for the current tick.

**:link:Ragebot.ForceTargetSafety**(entity: `:link:Entity`)

Forces the ragebot to only shoot safepoint for the specified entity for the current tick.

**:link:Ragebot.ForceTargetHitchance**(entity: `:link:Entity`, hitchance: `:link:number`)

Forces the ragebot to only shoot with at least the specified hitchance for the specified entity for the current tick.  
Hitchance is a number between 0 and 100.

**:link:Ragebot.ForceTargetMinimumDamage**(entity: `:link:Entity`, damage: `:link:number`)

Forces the ragebot to shoot for at least the specified damage for the specified entity for the current tick.  
Damage 0 is treated as dynamic min damage.
Damage over 100 is treated as `HP + (damage - 100)`.

**:link:Ragebot.ForceHitboxSafety**(hitbox: `:link:Hitbox`)

Forces the ragebot to only shoot safepoint of the specified hitbox for the current tick.


## **:link:Material**

Useful ressources:
  - https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters
  - https://developer.valvesoftware.com/wiki/VertexLitGeneric

**:link:Material.Create**(name: `:link:string`): `:link:Material`?

Creates a material and returns it or `false` if it fails.

The material is added to the "Visible type" dropdown in the chams section of the menu.


**:link:Material.Get**(name: `:link:string`): `:link:Material`

Returns the material.
