
# Aimware V5 Documentation: Globals


**:link:print**(...)

Prints all arguments seperated by tabs in the aimware console.

**:link:LoadScript**(filename: `:link:string`)

Loads the specified script.

**:link:UnloadScript**(filename: `:link:string`)

Unloads the specified script.

**:link:GetScriptName**(): `:link:string`

Returns the filename of your script.


## **:link:entities**

**:link:entities.FindByClass**(name: `:link:string`): Array[`:link:Entity`]

Returns a list with all entities with the matching classname.

```lua
for _, ent in ipairs(entities.FindByClass("CCSPlayer")) do
    print(ent:GetName())
end
```

**:link:entities.GetLocalPlayer**(): `:link:Entity`

Returns yourself.

**:link:entities.GetByIndex**(index: `:link:number`): `:link:Entity`

Returns the entity matching the index.

**:link:entities.GetByUserID**(userid: `:link:number`): `:link:Entity`

Returns the entity matches the user id.

**:link:entities.GetPlayerRessources**(): `:link:Entity`

Returns the a dummy entity, useful for accessing the `CCSPlayerResource` proptable.


## **:link:client**

**:link:client.WorldToScreen**(pos: `:link:Vector3`): `:link:number`, `:link:number`

Translates world position into screen position and returns it.

**:link:client.Command**(command: `:link:string`, unrestrict: `:link:boolean`?)

Runs command in the console, you generally want to always set `unrestrict` to `true`.

**:link:client.ChatSay**(message: `:link:string`)

Says the message in the global chat.

**:link:client.ChatTeamSay**(message: `:link:string`)

Says the message in the team chat.

**:link:client.AllowListener**(name: `:link:string`)

Makes the `:link:FireGameEvent` callback listen to the specified event.

**:link:client.GetPlayerNameByIndex**(index: `:link:number`): `:link:string`

Returns the name of the player with the matching index.

Equivalent to:
```lua
entities.GetByIndex(index):GetName()
```

**:link:client.GetPlayerNameByUserID**(userid: `:link:number`): `:link:string`

Returns the name of the player with the matching userid.

Equivalent to:
```lua
entities.GetByUserID(userid):GetName()
```

**:link:client.GetPlayerInfo**(index: `:link:number`)

Returns the following table:

|  Name     |  Type     |  Description  |
| --------- | --------- | ------------- |
|  Name     |  string   |  Player name  |
|  UserID   |  integer  |  UserID       |
|  SteamID  |  integer  |  Steam2 ID    |
|  IsBot    |  boolean  |  Is a bot     |
|  IsGOTV   |  boolean  |  Is GOTV      |

**:link:client.GetLocalPlayerIndex**(): `:link:number`

Returns the index of yourself.

Equivalent to:
```lua
entities.GetLocalPlayer():GetIndex()
```

**:link:client.SetConVar**(name: `:link:string`, value, unrestrict: `:link:boolean`?)

Sets the specified console variable to the specified value.

// TODO: what is unrestrict


## **:link:globals**

**:link:globals.TickInterval**(): `:link:number`

Returns the time between each tick.

**:link:globals.TickCount**(): `:link:number`

Returns the tick the server is on.

**:link:globals.RealTime**(): `:link:number`

Returns the time in seconds since the game started.

**:link:globals.CurTime**(): `:link:number`

Returns the time of the server in seconds.

**:link:globals.FrameCount**(): `:link:number`

Returns the number of rendered frames.

**:link:globals.FrameTime**(): `:link:number`

Returns the time the last frame took to render.

> **NOTE**: According to aimware docs this might return `:link:globals.TickInterval` in some callbacks.
> Use `:link:globals.AbsoluteFrameTime` instead.

**:link:globals.AbsoluteFrameTime**(): `:link:number`

Returns the time the last frame took to render.

To convert to FPS use:
```lua
math.floor(1 / globals.AbsoluteFrameTime())
```

**:link:globals.MaxClients**(): `:link:number`

Returns the max player count of the server.


## **:link:callbacks**

**:link:callbacks.Register**(name: `:link:string`, function: `:link:function`)  
**:link:callbacks.Register**(name: `:link:string`, unique: `:link:string`, function: `:link:function`)

Registers a callback with the specified name and callback function.  
If you specify the `unique` argument, you can use `:link:callbacks.Unregister` to unregister the callback later.

See also: `:link:Callbacks`

**:link:callbacks.Unregister**(name: `:link:string`, unique: `:link:string`)

Unregisters a previously registered callback

```lua
callbacks.Register("Draw", "ragequit", function()
    client.Command("quit")
end)

callbacks.Unregister("Draw", "ragequit")
```


## **:link:draw**

**:link:draw.Color**(r: `:link:number`, g: `:link:number`, b: `:link:number`, a: `:link:number`)

Sets the RGBA color for drawing shapes and texts.

See also: https://en.wikipedia.org/wiki/RGBA_color_model

**:link:draw.Line**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`)

Draws a line from x1|y1 to x2]y2 with the color.

**:link:draw.FilledRect**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`)

Draws a filled rectangle with the top left point at x1|y1 and the bottom right point at x2|y2.

**:link:draw.OutlinedRect**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`)

Draws the outline of a rectangle with the top left point at x1|y1 and the bottom right point at x2|y2.

**:link:draw.RoundedRect**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`, radius: `:link:number`, topleft: `:link:number`, topright: `:link:number`, bottomleft: `:link:number`, bottomright: `:link:number`)

Draws the outline of a rectangle with the top left point at x1|y1 and the bottom right point at x2|y2 with rounded corners.

**:link:draw.RoundedRectFill**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`, radius: `:link:number`, topleft: `:link:number`, topright: `:link:number`, bottomleft: `:link:number`, bottomright: `:link:number`)

Draws a filled rectangle with the top left point at x1|y1 and the bottom right point at x2|y2 with rounded corners.

**:link:draw.ShadowRect**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`, radius: `:link:number`)

Draws a filled rectangle with the top left point at x1|y1 and the bottom right point at x2|y2 and its shadow.

**:link:draw.Triangle**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`, x3: `:link:number`, y3: `:link:number`)

Draws a filled triangle.

**:link:draw.FilledCircle**(x: `:link:number`, y: `:link:number`, radius: `:link:number`)

Draws a filled circle at x|y with the specified radius.

**:link:draw.OutlinedCircle**(x: `:link:number`, y: `:link:number`, radius: `:link:number`)

Draws the outline of a circle at x|y with the specified radius.

**:link:draw.GetTextSize**(text: `:link:string`): `:link:number`, `:link:number`

Returns width and height of the specified text with the current font.

**:link:draw.Text**(x: `:link:number`, y: `:link:number`, text: `:link:string`)

Draws the specified text at x|y with the current font.

**:link:draw.TextShadow**(x. `:link:number`, y: `:link:number`, text: `:link:string`)

Draws the specified text at x|y with the current font and its shadow.

**:link:draw.GetScreenSize**(): `:link:number`, `:link:number`

Returns resolution of the game (width, height).

**:link:draw.CreateFont**(name: `:link:string`, height: `:link:number`, weight: `:link:number`): `:link:Font`

Creates a font with the specified height and weight and returns it.

// TODO: return?

**:link:draw.AddFontResource**(ttf: `:link:string`)

Adds a `.ttf` font file to the available fonts.

// TODO: return?

**:link:draw.SetFont**(font: `:link:Font`)

Sets current font for drawing.

**:link:draw.CreateTexture**(rgba: `:link:RGBAData`, width: `:link:number`, height: `:link:number`): `:link:Texture`

Creates a new texture with the speciifed width and height from the rgba array.

**:link:draw.UpdateTexture**(texture: `:link:Texture`, rgba: `:link:RGBAData`)

Updates existing texture with new rgba data.

**:link:draw.SetTexture**(texture)

Sets current drawing texture (use `nil` to reset).  
Use shape drawing functions (e.g. `:link:draw.FilledRect`) for drawing the texture.

**:link:draw.SetScissorRect**()

// TODO


## **:link:common**

**:link:common.Time**(): `:link:number`

Returns the time since cheat was loaded.  
`:link:globals.RealTime` should be preferred over this.

**:link:common.DecodePNG**(data: `:link:string`): `:link:RGBAData`, `:link:number`, `:link:number`

Returns a list of rgba colors, the width and height of the png image.

**:link:common.DecodeJPEG**(data: `:link:string`): `:link:RGBAData`, `:link:number`, `:link:number`

Returns a list of rgba colors, the width and height of the jpeg image.

**:link:common.RasterizeSVG**(data: `:link:string`, scale: `:link:number`): `:link:RGBAData`, `:link:number`, `:link:number`

Returns a list of rgba colors, the width and height of the scaled svg image.


## **:link:gui**

**:link:gui.GetValue**(varname: `:link:string`)

Returns the value of the ui element with the specified varnamae.  

Return types:

|  Type                     |  Return type                                      |  Description                                         |
| ------------------------- | ------------------------------------------------- | ---------------------------------------------------- |
|  `:link:gui.Checkbox`     |  `:link:boolean`                                  |  Checkbox is checked                                 |
|  `:link:gui.Slider`       |  `:link:number`                                   |  Slider value                                        |
|  `:link:gui.Keybox`       |  `:link:number`                                   |  Key number; 0 = nothing; `:link:input.IsButtonDown` |
|  `:link:gui.Combobox`     |  `:link:number`                                   |  Index of which option was selected (**0 indexed**)  |
|  `:link:gui.Editbox`      |  `:link:string`                                   |  Entered string                                      |
|  `:link:gui.ColorPicker`  |  `:link:number`, `:link:number`, `:link:number`   |  Picked color                                        |


**:link:gui.SetValue**(varname: `:link:string`, value)

Sets the value of the specified variable to the specified value.

**:link:gui.Reference**(...: `:link:string`): `:link:GuiObject`

Returns an existing gui object.

**:link:gui.Checkbox**(parent: `:link:GuiObject`, varname: `:link:string`, name: `:link:string`, value: `:link:boolean`): `:link:GuiObject`

Creates a new checkbox and returns it.

**:link:gui.Slider**(parent: `:link:GuiObject`, varname: `:link:string`, name: `:link:string`, value: `:link:number`, min: `:link:number`, max: `:link:number`, step: `:link:number`?): `:link:GuiObject`

Creates a new slider and returns it.  
`step` defaults to 1.

**:link:gui.Keybox**(parent: `:link:GuiObject`, varname: `:link:string`, name: `:link:string`, key: `:link:number`?): `:link:GuiObject`

Creates a new keybox and returns it.  
`key` defaults to 0.

**:link:gui.Combobox**(parent: `:link:GuiObject`, varname: `:link:string`, name: `:link:string`, options...: `:link:string`): `:link:GuiObject`

Creates a new combobox and returns it.

```lua
gui.Combobox(parent, "example.combobox", "example combobox", "option 0", "option 1", "option 2", "option 3")

local options = {"option 0", "option 1", "option 2", "option 3"}
local combobox = gui.Combobox(parent, "example.combobox", "eaxmple combobox", unpack(options))
local option = options[combobox:GetValue() + 1] -- + 1 because it's zero indexed
```

**:link:gui.Editbox**(parent: `:link:GuiObject`, varname: `:link:string`, value: `:link:string`?): `:link:GuiObject`

Creates a new editbox and returns it.  
`value` defaults to an empty string.

**:link:gui.Text**(parent: `:link:GuiObject`, text: `:link:string`): `:link:GuiObject`

Creates a new text and returns it.

**:link:gui.Groupbox**(parent: `:link:GuiObject`, name: `:link:string`, x: `:link:number`, y `:link:number`, w `:link:number`, h `:link:number`): `:link:GuiObject`

Creates a new groupbox and returns it.

**:link:gui.ColorPicker**(parent: `:link:GuiObject`, varname: `:link:string`, name: `:link:string`, r: `:link:number`, g: `:link:number`, b: `:link:number`, a: `:link:number`): `:link:GuiObject`

Creates a new colorpicker and returns it.

**:link:gui.Window**(varname: `:link:string`, name: `:link:string`, x: `:link:number`, y: `:link:number`, w: `:link:number`, h: `:link:number`): `:link:GuiObject`

Creates a new window and returns it.

**:link:gui.Button**(parent: `:link:GuiObject`, name: `:link:string`, callback: `:link:function`): `:link:GuiObject`

Creates a new button and returns it.

The callback function is called everytime the button is pressed.

**:link:gui.Multibox**(parent: `:link:GuiObject`, name: `:link:string`): `:link:GuiObject`

Creates a new multibox and returns it.

**:link:gui.Command**(command: `:link:string`)

Executes a command in the aimware console.

Useful for setting variables that cannot be set using `:link:gui.SetValue` (e.g. `gui.Command('rbot.antiaim.base 90 "Desync Jitter"')`)

**:link:gui.Custom**(parent: `:link:GuiObject`, varname: `:link:string`, x: `:link:number`, y: `:link:number`, w: `:link:number`, h: `:link:number`, update: `:link:function`, write: `:link:function`, read: `:link:function`): `:link:GuiObject`

Creates a fully customizeable gui object and returns it.

Callbacks:

- **update**(x1: `:link:number`, y1: `:link:number`, x2: `:link:number`, y2: `:link:number`, active: `:link:boolean`)
- **write**()
- **read**(value)

TODO: wtf do they do

**:link:gui.Tab**(parent: `:link:GuiObject`, varname: `:link:string`, name: `:link:string`): `:link:GuiObject`

Creates a new tab and returns it.

**:link:gui.Listbox**(parent: `:link:GuiObject`, varname: `:link:string`, height: `:link:number`, options...: `:link:string`): `:link:GuiObject`

Creates a new listbox and returns it.

**:link:gui.XML**(xml)

// TODO


## **:link:input**

> **Note**: For possible keys check [Virtual Key Codes](https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes).

**:link:input.GetMousePos**(): `:link:number`, `:link:number`

Returns the position of the mouse cursor.

**:link:input.IsButtonDown**(button: `:link:number`): `:link:boolean`

Returns whether the button is helt down or not.

**:link:input.IsButtonPressed**(button: `:link:number`): `:link:boolean`

Returns whether the button is *newly* pressed (only for the start of the button being helt down).

> **Note**: There is some delay before this triggers again, so rapidly pressing and unpressing a key doesn't always work.

**:link:input.IsButtonReleased**(button: `:link:number`): `:link:boolean`

Returns whether the button is *newly* released (only for a short amount of time after the button is no longer helt down).

> **Note**: There is some delay before this triggers again, so rapidly pressing and unpressing a key doesn't always work.

**:link:input.GetMouseWheelDelta**(): `:link:number`

Returns accumulated mouse scroll.


## **:link:engine**

**:link:engine.TraceLine**(src: `:link:Vector3`, dst: `:link:Vector3`, mask: `:link:number`): `:link:Trace`

Traces line from src to dst.

// TODO: example cuz it's hard

**:link:engine.TraceHull**(src: `:link:Vector3`, dst: `:link:Vector3`, mins: `:link:Vector3`, maxs: `:link:Vector3`, mask: `:link:number`): `:link:Trace`

Traces hull from src to dst.

**:link:engine.GetPointContents**(x: `:link:number`, y: `:link:number`, z: `:link:number`)

Checks if given point is inside wall, returns contents

**:link:engine.GetMapName**(): `:link:string`

Returns current map name (e.g. `de_dust2`).

**:link:engine.GetServerIP**(): `:link:string`

Returns current server ip.

Returns `loopback` when hosting the server yourself.

**:link:engine.GetViewAngles**(): `:link:EulerAngles`

Returns your current viewangles.

**:link:engine.SetViewAngles**(angles: `:link:EulerAngles`)

Sets your current viweangles.

## **:link:file**

**:link:file.Open**(filename: `:link:string`, mode: `:link:string`): `:link:File`
mode "w" - write
mode "r" - read
mode "a" - append

Returns a file option for the specified filename.

|  Mode  |  Description                                                 |
| ------ | ------------------------------------------------------------ |
|   w    |  opens file in write mode (previous content is overwritten)  |
|   r    |  opens file in read mode                                     |
|   a    |  opens file in append mode                                   |


> **Warning**: When trying to open a file in `r`ead mode and the file didn't exist, this previously returned `nil`.
> This function now throws an uncatchable error (no idea how they did this)  
> Use `:link:file.Enumerate` for checking if the file exists first.

**:link:file.Delete**(filename: `:link:string`)

Deletes the file.

**:link:file.Enumerate**(callback: `:link:function`)

Calls the callback with every filename found in the cheat directory.

**:link:file.Write**(filename: `:link:string`, content: `:link:string`)

Writes the specified content in the specified file.

**:link:file.Read**(filename: `:link:string`): `:link:string`

Returns the content of the specified file.

> **Warning**: Trying to read from a non-existent file will throw an uncatchable error!


## **:link:http**

**:link:http.Get**(url: `:link:string`): `:link:string`
**:link:http.Get**(url: `:link:string`, callback: `:link:function`)

If no callback is specified, this function will freeze the entire game until the ressource has been fetched.

You should **never** call this function without a callback unless the ressource is crucial to the execution (and you should cache the result on disk then probably too).

```lua
-- Simple nonblocking auto updater

local VERSION = "1.0.0"

http.Get("https://myserver/myscript/version", function(version)
    if version == nil then return end -- nil means no internet connection
    if version == VERSION then return end -- no update
    http.Get("https://myserver/myscript/script.lua", function(code)
        if code == nil then return end -- no connection, abort
        file.Write(GetScriptName(), code)
        UnloadScript(GetScriptName())
        LoadScript(GetScriptName())
    end)
end)
```

## **:link:vector**

Here, a vector or angle is a list of 3 numbers.

**:link:vector.Add**(vector1, vector2)

Adds 2 vectors and returns the result.

```lua
vector.Add({1, 1, 1}, {2, 2, 2}) -- {3, 3, 3}
```

**:link:vector.Subtract**(vector1, vector2)

Subtracts 2 vectors and returns the result.

```lua
vector.Subtract({1, 1, 1}, {2, 2, 2}) -- {-1, -1, -1}
```

**:link:vector.Multiply**(vector, factor)

Multiplies a vector by the specified factor nand returns the result.

```lua
vector.Multiply({5, 5, 5}, 5) -- {25, 25, 25}
```

**:link:vector.Divide**(vector, factor)

Divides a vector by the specified factor nand returns the result.

```lua
vector.Divide({5, 5, 5}, 2) -- {2.5, 2.5, 2.5}
```

**:link:vector.Length**(vector): `:link:number`

Returns the euclidean distance to the vector.

```lua
vector.Length({1, 1, 1}) -- 1.7320508075688772
```

**:link:vector.LengthSqr**(vector): `:link:number`

Returns the Manhattan distance to the vector.

```lua
vector.Length({1, 1, 1}) -- 3
```

**:link:vector.Distance**(vector1, vector2): `:link:number`

Returns the euclidean distance between two vectors.

**:link:vector.Normalize**(vector)

Returns a normalized vector.

```lua
vector.Normalize({1, 2, 3}) -- {0.33333, 0.66666, 1}
vector.Normalize({1, 2, 3}) -- {0.16666, 0.33333, 0.5}
```

// TODO: if greatest or sum

**:link:vector.Angles**(angle)

**:link:vector.AngleForward**(angle)

**:link:vector.AngleRight**(angle)

**:link:vector.AngleUp**(angle)

**:link:vector.AngleNormalize**(angle)


## **:link:network**

**:network.Socket**(type: `:link:string`): `:link:Socket`

Opens a socket and returns it.  
Currently only type `UDP` is supported.

**:link:network.GetAddrInfo**(name: `:link:string`): `:link:string`

Resolves hostname to IP and returns it.

**:link:network.GetNameInfo**(address: `:link:string`): `:link:string`

Resolves IP to hostname and returns it.

> **Note**: Reverse DNS lookups can be spoofed.


## **:link:materials**

**materials.Find**(name: `:link:string`): `:link:Material`

Finds material by name and returns it.

**materials.Enumerate**(callback: `:link:function`)

Calls the callback with every loaded material.

**materials.Create**(name: `:link:string`, vmt: `:link:string`, type: `:link:string`)

Creates custom material following the [Valve Material Type](https://developer.valvesoftware.com/wiki/Material) syntax.


## **:link:panorama**

**:link:panorama.RunScript**(script: `:link:string`)

Runs javascript in the context of CSGO panorama UI.

[CS:GO Panorama API](https://developer.valvesoftware.com/wiki/CSGO_Panorama_API)


## **:link:cheat**

> **Note**: This module is undocumented and may change in the future.

**:link:cheat.IsFakeDucking**(): `:link:boolean`

Returns if you're fakeducking.


**:link:cheat.RequestSpeedBurst**()

No fucking idea.

// TODO
