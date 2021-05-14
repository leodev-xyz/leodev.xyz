
# Neverlose V2 Documentation: Globals


## **:link:g_GlobalVars**

> **Note**: Some of these are documented in the NL docs, but they don't make much sense.

|  Name                         |  Type             |  Description                                         |
| ----------------------------- | ----------------- | ---------------------------------------------------- |
|  realtime                     |  `:link:number`   |  Time since game start                               |
|  framecount                   |  `:link:number`   |  Frame counter                                       |
|  absoluteframetime            |  `:link:number`   |  ?                                                   |
|  absoluteframestarttimesddev  |  `:link:number`   |  ?                                                   |
|  curtime                      |  `:link:number`   |  Current time of the server                          |
|  frametime                    |  `:link:number`   |  Time spent on last frame render                     |
|  maxClients                   |  `:link:number`   |  Max players of the server                           |
|  tickcount                    |  `:link:number`   |  Tickcount of the server                             |
|  interval_per_tick            |  `:link:number`   |  Time between each tick (in seconds)                 |
|  interpolation_amount         |  `:link:number`   |  ?                                                   |
|  simTicksThisFrame            |  `:link:number`   |  ?                                                   |
|  network_protocol             |  `:link:number`   |  ?                                                   |
|  pSaveData                    |  ?                |  ?                                                   |
|  m_bClient                    |  `:link:boolean`  |  Server mode (you are the server)                    |
|  m_bRemoteClient              |  `:link:boolean`  |  Remote client mode (you are connected to a server)  |

// TODO


## **:link:g_ClientState**

|  Name                     |  Tyoe            |  Description                              |
| ------------------------- | ---------------- | ----------------------------------------- |
|  m_last_outgoing_command  |  `:link:number`  |  Last outgoing usercommand                |
|  m_choked_commands        |  `:link:number`  |  Amount of chocked usercommands in a row  |
|  m_last_command_ack       |  `:link:number`  |  Last acknowledged usercommand            |
|  m_command_ack            |  `:link:number`  |  ?                                        |

// TODO

## **:link:g_RenderBeams**

**:link:g_RenderBeams.CreateBeamPoints**(self, beam: `:link:BeamInfo_t`)

Creates beam points from the information of the specified `:link:BeamInfo_t`.

**:link:g_RenderBeams.DrawBeam**(self, beam: `:link:BeamInfo_t`)

Draws a beam from the information of the specified `:link:BeamInfo_t`.

This can only be called during a `:link:draw` callback.

**:link:g_RenderBeams.CreateBeamRing**(self, beam: `:link:BeamInfo_t`)

Creates a beam ring from the information of the specified `:link:BeamInfo_t`.

**:link:g_RenderBeams.CreateBeamRingPoint**(self, beam: `:link:BeamInfo_t`)

Creates beam ring points from the information of the specified `:link:BeamInfo_t`.

**:link:g_RenderBeams.CreateBeamCirclePoints**(self, beam: `:link:BeamInfo_t`)

Creates beam circle points from the information of the specified `:link:BeamInfo_t`.


## **:link:g_Config**

**:link:g_Config.FindVar**(self, tab: `:link:string`, subtab: `:link:string`, group: `:link:string`, option: `:link:string`, combo: `:link:string`?): `:link:CheatVar`

Returns the cheat variable at the specified path.


## **:link:g_DebugOverlay**

**:link:g_DebugOverlay.AddBoxOverlay**(self, origin: `:link:Vector`, mins: `:link:Vector`, max: `:link:Vector`, value: `:link:QAngle`, r: `:link:number`, g: `:link:number`, b: `:link:number`, a: `:link:number`, duration: `:link:number`)


**:link:g_DebugOverlay.AddSphereOverlay**(self, origin: `:link:Vector`, radius: `:link:number`, theta: `:link:number`, phi: `:link:number`, r: `:link:number`, g: `:link:number`, b: `:link:number`, a: `:link:number`, duration: `:link:number`)


**:link:g_DebugOverlay.AddTriangleOverlay**(self, p1: `:link:Vector`, p2: `:link:Vector`, p3: `:link:Vector`, r: `:link:number`, g: `:link:number`, b: `:link:number`, a: `:link:number`, noDepthTest: `:link:boolean`, duration: `:link:number`)

**:link:g_DebugOverlay.AddLineOverlay**(self, origin: `:link:Vector`, destination: `:link:Vector`, r: `:link:number`, g: `:link:number`, b: `:link:number`, noDepthTest: `:link:boolean`, duration: `:link:number`)

**:link:g_DebugOverlay.AddCapsuleOverlay**(self, origin: `:link:Vector`, destination: `:link:Vector`, radius: `:link:number`, r: `:link:number`, g: `:link:number`, b: `:link:number`, a: `:link:number`, noDeptTest: `:link:boolean`, duration: `:link:number`)


## **:link:g_CVar**

**:link:g_CVar.FindVar**(self, name: `:link:string`): `:link:ConVar`

Returns the convar class for the specified convar.


## **:link:g_EngineClient**

**:link:g_EngineClient.ClientCmd**(self, command: `:link:string`)

Executes the command in the console.

**:link:g_EngineClient.ClientCmdUnrestricted**(self, command: `:link:string`)

Executes the command in the console, but *unrestricted*.

**:link:g_EngineClient.ExecuteClientCmd**(self, command: `:link:string`)

Executes the command in the console.

**:link:g_EngineClient.GetAppId**(self): `:link:number`

Returns the app id of the game.

**:link:g_EngineClient.GetEngineBuildNumber**(self): `:link:number`

Returns the build number of the engine.

**:link:g_EngineClient.GetGameDirectory**(self): `.link:string`

Returns the path of the game directory.

**:link:g_EngineClient.GetLastTimestamp**(self): `:link:number`

Returns the timestamp of the last received server message.

**:link:g_EngineClient.GetLevelName**(self): `:link:string`

Returns the name of the current map (e.g. `Mirage`, `Dust2`, `Overpass`).

**:link:g_EngineClient.GetLevelNameShort**(self): `:link:string`

Returns the shortname of the current map (e.g. `de_mirage`, `de_dust2`, `de_overpass`)

**:link:g_EngineClient.GetMapGroupName**(self): `:link:string`

Returns the name of the mapgroup.

**:link:g_EngineClient.GetLocalPlayer**(self): `:link:number`

Returns the index of the local player.

**:link:g_EngineClient.GetMaxClients**(self): `:link:number`

Returns the maximum amount of clients that can be connected to the server.

**:link:g_EngineClient.GetChannelInfo**(self): `:link:INetChannelInfo`

Returns INetChannelInfo.

**:link:g_EngineClient.GetPlayerForUserId**(self, userid: `:link:number`): `:link:number`

Returns the player index from their userid.

**:link:g_EngineClient.GetPlayerInfo**(self, playerindex: `:link:number`): `:link:player_info_t`

Returns player information from player index.

**:link:g_EngineClient.GetProductVersionString**(self): `:link:string`

Returns CS:GO version string.

**:link:g_EngineClient.GetScreenSize**(self): `:link:Vector2`

Returns the size of the game window.

**:link:g_EngineClient.GetTimeScale**(self): `:link:number`

Returns the timescale of the server.

**:link:g_EngineClient.GetViewAngles**(self): `:link:QAngle`

Returns the viewangles of yourself.

**:link:g_EngineClient.IsConnected**(self): `:link:boolean`

Returns if you are connected to any server.

**:link:g_EngineClient.IsHammerRunning**(self): `:link:boolean`

Returns if hammer is running.

**:link:g_EngineClient.IsHltv**(self): `:link:boolean`

Returns if watching a hltv demo.

// TODO: ????

**:link:g_EngineClient.IsInGame**(self): `:link:boolean`

Returns if you're ingame.

**:link:g_EngineClient.IsOccluded**(self, min: `:link:Vector`, max: `:link:Vector`): `:link:boolean`

Returns if the bounds are occluded.

**:link:g_EngineClient.IsPaused**(self): `:link:boolean`

Returns if the game is paused.

**:link:g_EngineClient.IsPlayingDemo**(self): `:link:boolean`

Returns if a demo is being played back.

**:link:g_EngineClient.IsRecordingDemo**(self): `:link:boolean`

Returns if a demo is being recorded.

**:link:g_EngineClient.IsTakingScreenshot**(self): `:link:boolean`

Returns if a screenshot is being taken.

**:link:g_EngineClient.LevelLeafCount**(self): `:link:number`

Returns the number of leaves in the map.

**:link:g_EngineClient.MapHasHdrLighting**(self): `:link:boolean`

Returns if the map has HDR lighting.

**:link:g_EngineClient.RemoveAllPaint**(self)

Removes all paint.

**:link:g_EngineClient.SetBlurFade**(self, fade: `:link:number`)

Sets blur scale.

**:link:g_EngineClient.SetRestrictClientCommands**(self, restricted: `:link:boolean`)

Allows `:link:g_EngineClient.ClientCmd` to execute restricted commands.

> **Note**: Use `:link:g_EngineClient.ClientCmdUnrestricted` instead

**:link:g_EngineClient.SetTimescale**(self, scale: `:link:number`)

Sets timescale.

**:link:g_EngineClient.SetViewAngles**(self, angles: `:link:QAngle`)

Sets viewangles.

**:link:g_EngineClient.SupportsHdr**(self, supports: `:link:boolean`)

Enables/disables HDR support on this map.

**:link:g_EngineClient.WriteScreenshot**(self, filename: `:link:string`)

Takes a screenshot and saves it in the specified file.


## **:link:g_EngineTrace**

**:link:g_EngineTrace.TraceRay**(start: `:link:Vector3`, end: `:link:Vector3`, skip: `:link:C_BaseEntity`, mask: `:link:number`): `:link:Trace`

Traces a ray from start to end while skipping the specified entity.


## **:link:g_EntityList**

**:link:g_EntityList.GetClientEntity**(self, entity: `:link:number`): `:link:C_BaseEntity`

Returns entity class for the specified entity index.

**:link:g_EntityList.NumberOfEntities**(self, include_non_networkable: `:link:boolean`): `:link:number`

Returns the number of entities (includes non networkable if specified).

**:link:g_EntityList.GetHighestEntityIndex**(self): `:link:number`

Returns the highest entity index.

**:link:g_EntityList.GetClientEntityFromHandle**(self, handle: `:link:number`): `:link:C_BaseEntity`

Returns entity class from handle.

```lua
local me = g_EntityList:GetClientEntity(g_EngineClient:GetLocalPlayer())
local weapon_handle = me:GetProp("DT_BaseCombatCharacter", "m_hActiveWeapon")
local weap = g_EntityList:GetClientEntityFromHandle(weapon_handle)
```

**:link:g_EntityList.GetPlayerResource**(self): `:link:CSPlayerResource`

Returns the player resource class.

**:link:g_EntityList.GetGameRules**(self): `:link:CSGameRules`

Returns the game rules class.

**:link:g_EntityList.GetEntitiesByClassID**(self, classid: `:link:number`): Array[`:link:C_BaseEntity`]

Returns table with all entities with matching class id.

**:link:g_EntityList.GetEntitiesByName**(self, classname: `:link:string`): Array[`:link:C_BaseEntity`]

Returns table with all entities with matching class name.

**:link:g_EntityList.GetLocalPlayer**(self): `:link:C_BasePlayer`

Returns local player entity class.

**:link:g_EntityList.GetWeapon**(self, entityindex: `:link:number`): `:link:C_BaseCombatWeapon`

Returns weapon class from entity index.

**:link:g_EntityList.GetPlayer**(self, entityindex: `:link:number`): `:link:C_BasePlayer`

Returns player class from entity index.

**:link:g_EntityList.GetPlayerFromHandle**(self, handle: `:link:number`): `:link:C_BasePlayer`

Returns player class from handle.

**:link:g_EntityList.GetWeaponFromHandle**(self, handle: `:link:number`): `:link:C_BaseCombatWeapon`

Returns weapon class from handle.

**:link:g_EntityList.GetPlayers**(self): Array[`:link:C_BasePlayer`]

Returns table with all players.


## **:link:g_MatSystem**

**:link:g_MatSystem.CreateMaterial**(self, name: `:link:string`, material_value: `:link:string`, callback: `:link:function`): `:link:IMaterial`

Creates a material with the specified name and values.

The callback is called once the material is created and receives the `:link:IMaterial` as argument.

```lua
-- animated wireframe
g_MatSystem:CreateMaterial("testing_material",  [[
  "VertexLitGeneric"
  {
    "$basetexture" "nature/urban_puddle01a_ssbump"
    "$additive" "1"
    "$selfillum" "1"
    "$nocull" "1"
    "$wireframe" "1"
    "Proxies"
    {
            "TextureScroll"
            {
                    "texturescrollvar" "$BasetextureTransform"
                    "texturescrollrate" "0.5"
                    "texturescrollangle" "90"
            }
    }
  }  
]], function(mat)
  g_MatSystem:OverrideMaterial("LocalHands", mat)
end))
```

**:link:g_MatSystem.FindMaterial**(self, name: `:link:string`, group: `:link:string`): `:link:IMaterial`

Finds and returns the specified material.

**:link:g_MatSystem.FirstMaterial**(self): `:link:number`

Returns the first material's handle.

**:link:g_MatSystem.NextMaterial**(self, current_handle: `:link:number`): `:link:number`

Returns the next material handle.

```lua
local handle = g_MatSystem:FirstMaterial()
while handle do
    print("handle", handle, g_MatSystem:GetMaterial(handle):GetName())
    handle = g_MatSystem:NextMaterial(handle)
end
```

**:link:g_MatSystem.GetMaterial**(self, handle: `:link:number`): `:link:IMaterial`

Returns the material class of the handle.

**:link:g_MatSystem.OverrideMaterial**(self, type: `:link:string`, material: `:link:IMaterial`, color: `:link:Color`?)

Overrides the material of the type with the specified material and color.

Valid types are (case sensitive):
- Enemies
- Teammates
- Weapon
- Grenades
- Localplayer
- LocalWeapon
- LocalHands
- Ragdolls

**:link:g_MatSystem.RemoveOverrideMaterial**(self, type: `:link:string`, material: `:link:IMaterial`)

Undos an override by `:link:g_MatSystem.OverrideMaterial`.


## **:link:g_Render**

**:link:g_Render.Line**(self, start: `:link:Vector2`, end: `:link:Vector2`, color: `:link:Color`)

Renders a line.

**:link:g_Render.PolyLine**(self, color: `:link:Color`, ...: `:link:Vector2`)

Renders a line between each specified position.

**:link:g_Render.PolyFilled**(self, color: `:link:Color`, ...: `:link:Vector2`)

Fills the space between each specified position with the specified color.

**:link:g_Render.Box**(self, start: `:link:Vector2`, end: `:link:Vector2`, color: `:link:Color`)

Renders the outline of a box.

**:link:g_Render.BoxFilled**(self, start: `:link:Vector2`, end: `:link:Vector2`, color: `:link:Color`)

Renders a filled box.

**:link:g_Render.Circle**(self, position: `:link:Vector2`, radius: `:link:number`, segments: `:link:number`, color: `:link:Color`, width: `:link:number`?)

Renders the outline of a circle.

**:link:g_Render.CircleFilled**(self, position: `:link:Vector2`, radius: `:link:number`, segments: `:link:number`, color: `:link:Color`)

Renders a filled circle.

**:link:g_Render.CirclePart**(self, position: `:link:Vector2`, radius: `:link:number`, segments: `:link:number`, color: `:link:Color`, start: `:link:number`, end: `:link:number`)

Renders a partial circle only between start and end (both are radians).

**:link:g_Render.Text**(self, text: `:link:string`, position: `:link:Vector2`, color: `:link:Color`, size: `:link:number`, font: `:link:Font`?, outline: `:link:boolean`?)

Renders a text.

**:link:g_Render.WeaponIcon**(self, weapon_index: `:link:number`, position: `:link:Vector2`, color: `:link:Color`, size: `:link:number`, outline: `:link:boolean`?)

Renders the appropiate icon for the weapon.

**:link:g_Render.CalcTextSize**(self, text: `:link:string`, size: `:link:number`, font: `:link:Font`?): `:link:Vector2`

Returns the space the text would take in.

**:link:g_Render.CalcWeaponIconSize**(self, weapon_index: `:link:number`, size: `:link:number`): `:link:Vector2`

Returns the space the weapon icon would take in.

**:link:g_Render.InitFont**(self, name: `:link:string`, size: `:link:number`): `:link:Font`

Initializes and returns a font.

**:link:g_Render.ScreenPosition**(self, vector: `:link:Vector3`): `:link:Vector2`

Returns the positions location onscreen location.

**:link:g_Render.Circle3D**(self, position: `:link:Vector3`, segments: `:link:number`, radius: `:link:number`, color: `:link:Color`)

Renders a 3d circle.

**:link:g_Render.Circle3DFilled**(self, position: `:link:Vector3`, segments: `:link:number`, radius: `:link:number`, color: `:link:Color`)

Renders a filled 3d circle.

**:link:g_Render.GradientBoxFilled**(self, start: `:link:Vector3`, end: `:link:Vector3`, topleft: `:link:Color`, topright: `:link:Color`, bottomleft: `:link:Color`, bottomright: `:link:Color`)

Renders a filled gradient box.

**:link:g_Render.LoadImage**(self, image: `:link:string`, size: `:link:Vector2`): `:link:Image`

Loads an image from a string.

**:link:g_Render.LoadImageFromFile**(self, path: `:link:string`, size: `:link:Vector2`): `:link:Image`

Loads an image from a path.

**:link:g_Render.Image**(self, image: `:link:Image`, position: `:link:Vector2`, size: `:link:Vector2`, color: `:link:Color`?)

Displays an image.

**:link:g_Render.GetMenuPos**(self): `:link:Vector2`

Returns position of the menu.

**:link:g_Render.GetMenuSize**(self): `:link:Vector2`

Returns menu size.


## **:link:g_Panorama**

**:link:g_Panorama.Exec**(self, code: `:link:string`, panel: `:link:string`?): `:link:string`

Executes panorama code and returns the result.


## **:link:antiaim**

// TODO: values

**:link:antiaim.OverrideInverter**(inverted: `:link:boolean`)

Overrides inverter.

**:link:antiaim.OverrideLimit**(limit: `:link:number`)

Overrides desync limit (between 0 and 1).

**:link:antiaim.OverrideYawOffset**(offset: `:link:number`)

Overrides yaw offset.

**:link:antiaim.OverrideLBYOffset**(offset: `:link:number`)

Overrides LBY offset.

**:link:antiaim.OverridePitch**(pitch: `:link:number`)

Overrides your pitch.

**:link:antiaim.GetInverterState**(): `:link:boolean`

Returns if you're inverted or not.

**:link:antiaim.GetMinDesyncDelta**(): `:link:number`

Returns minimal desync delta.

**:link:antiaim.GetMaxDesyncDelta**(): `:link:number`

Returns maximal desync delta.

**:link:antiaim.GetFakeRotation**(): `:link:number`

Returns the rotation of your fake.

**:link:antiaim.OverrideDesyncOnShot**(mode: `:link:number`)

Overrides desync on shot mode.

|  Mode  |  Description                |
| ------ | --------------------------- |
|   0    |  disable override           |
|   1    |  left                       |
|   2    |  right                      |
|   3    |  overlap on shot with fake  |
|   4    |  opposite of fake           |

**:link:antiaim.GetCurrentRealRotation**(): `:link:number`

Returns the rotation of your real.


## **:link:cheat**

**:link:cheat.RegisterCallback**(callback_name: `:link:string`, callback: `:link:string`)

Registers a callback.  
See `:link:Callbacks` for a list of all possible callbacks.

**:link:cheat.FireBullet**(attacker: `:link:C_BasePlayer`, start: `:link:Vector`, end: `:link:Vector`): `:link:firebullet_t`

Simulates a bullet with wall penetration, damage fall off, armor calculations and everything.

**:link:cheat.AngleToForward**(angle: `:link:QAngle`): `:link:Vector`

Transforms an angle into a vector.

**:link:cheat.VectorToAngle**(vector: `:link:Vector`): `:link:QAngle`

Transforms a vector into an angle.

**:link:cheat.IsMenuVisible**(): `:link:boolean`

Returns if the menu is opened.

**:link:cheat.GetMousePos**(): `:link:Vector2`

Returns the position of the mouse.

**:link:cheat.IsKeyDown**(key: `:link:number`): `:link:boolean`

Returns if the key is pressed.

For all possible keys check [this](https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes).

**:link:cheat.GetCheatUserName**(): `:link:string`

Returns the account username.

**:link:cheat.GetBinds**(): Array[`:link:ActiveBind`]

Returns a table with all binds.

**:link:cheat.AddEvent**(name: `:link:string`)

Creates an event (messages in the top right).

**:link:cheat.AddNotify**(title: `:link:string`, name: `:link:string`)

Creates a notification.


## **:link:exploits**

**:link:exploits.GetCharge**(): `:link:number`

Returns the charge percentage.

**:link:exploits.AllowCharge**(disallowed: `:link:boolean`)

Allows/disallows charging.

> **Warning**: `exploits.AllowCharge(true)` will **disallow** charging!

**:link:exploits.ForceTeleport**()

Forces localplayer to teleport if doubletap is charged.

**:link:exploits.ForceCharge**()

Forces doubletap to charge.

**:link:exploits.OverrideDoubleTapSpeed**(speed: `:link:number`)

Overrides how many ticks doubletap will charge.


## **:link:fakelag**

**:link:fakelag.Choking**(): `:link:boolean`

Returns if the current packet is being choked.

**:link:fakelag.ForceSend**()

Chokes this tick and send packet on the next tick.

**:link:fakelag.SentPackets**(): `:link:number`

Returns how many packets were sent in a row without any choking.

**:link:fakelag.SetState**(send_packet: `:link:boolean`)

Whether to send the packet or not.


## **:link:http**

**:link:http.Get**(url: `:link:string`): `:link:string`

Sends a GET request to the URL and returns the content.

**:link:http.Post**(url: `:link:string`, params: `:link:string`): `:link:string`

Sends a POST request to the URL and returns the content.  
`params` will be the request body and the content type will be `application/x-www-form-urlencoded`

**:link:http.GetAsync**(url: `:link:string`, callback: `:link:function`)

Sends a GET request to the URL asynchronous.  
The specified callback function will be called with the content once the request finishes.

**:link:http.PostAsync**(url: `:link:string`, params: `:link:string`, callback: `:link:function`)

Sends a POST request to the URL asynchronous.  
The specified callback function will be called with the content once the request finishes.


## **:link:ragebot**

// TODO: how long? till called with nil?

**:link:ragebot.OverrideMinDamage**(entityindex: `:link:number`, damage: `:link:number`)

Overrides the min damage for the current tick.

**:link:ragebot.OverrideHitchance**(entityindex: `:link:number`, hitchance: `:link:number`)

Overrides the hitchance for the current tick.

**:link:ragebot.ForceSafety**(entityindex: `:link:number`)

Forces safepoint for the current tick.

**:link:ragebot.SetTargetPriority**(entityindex: `:link:number`, priority: `:link:number`)

Overrides the priority for the current tick.  
`priority` can be any number, higher value = higher priority.

**:link:ragebot.SetHitboxPriority**(entityindex: `:link:number`, hitbox: `:link:number`, priority: `:link:mnumber`)

Overrides the priority of the hitbox for the current tick.  
`priority` can be any number, higher value = higher priority.

**:link:ragebot.ForceHitboxSafety**(entityindex: `:link:number`, hitbox: `:link:number`)

Forces safepoint for the hitbox for the current tick.

**:link:ragebot.EnableHitbox**(entityindex: `:link:number`, hitbox: `:link:number`, state: `:link:boolean`)

Enables/disables hitbox for the current tick.

**:link:ragebot.EnableMultipoints**(entityindex: `:link:number`, hitbox: `:link:number`, state: `:link:boolean`)

Enables/disables multipoints of the hitbox for the current tick.

**:link:ragebot.IgnoreTarget**(entityindex: `:link:number`)

Ignores the target for the current tick.


## **:link:utils**

**:link:utils.CreateInterface**(module_name: `:link:string`, interface_name: `:link:string`)

???

// TODO

**:link:utils.PatternScan**(module_name: `:link:string`, pattern: `:link:string`)

Scans the module for the pattern.

**:link:utils.RandomFloat**(min: `:link:number`, max: `:link:number`): `:link:number`

Returns a random float between min and max.

**:link:utils.RandomInt**(min: `:link:number`, max: `:link:number`): `:link:number`

Returns a random int between min and max.

**:link:utils.RandomSeed**(seed: `:link:number`)

Seeds the pseudo random number generator.

**:link:utils.RegisterConVar**(name: `:link:string`, value: `:link:string`, flags: `:link:number`, description: `:link:string`, callback: `:link:function`): `:link:ConVar`

Registers a console variable.

[Available flags](https://gist.github.com/es3n1n/fe2051a24ffef32a8219823e7ef69b05#file-e_cvar_flags-lua-L3)

The callback is called everytime the convar's value is changed with three arguments:

- convar: `:link:ConVar`
- old: `:link:string`
- new: `:link:string`

**:link:utils.RegisterConCommand**(name: `:link:string`, flags: `:link:number`, description: `:link:string`, callback: `:link:function`): `:link:ConVar`

Registers a console command.

[Available flags](https://gist.github.com/es3n1n/fe2051a24ffef32a8219823e7ef69b05#file-e_cvar_flags-lua-L3)

The callback is called everytime the command is run with one argument which is the convar class.

**:link:utils.UnixTime**(): `:link:number`

Returns unix time of the server.


## **:link:esp**

**:link:esp.CustomText**(name: `:link:string`, classname: `:link:string`, preview: `:link:string`, callback: `:link:function`)

Adds a text to the esp that can be customized.

Possible class names:

- enemies
- mates
- local
- weapon
- grenade

The callback is called with one argument (`:link:C_BaseEntity`) every frame for each entity.
The callback should return the string that is displayed next to the entity.

```lua
esp.CustomText("Name", "enemies", "neverlose.cc", function(entity)
  return entity:GetPlayer():GetName()
end)
```

**:link:esp.CustomBar**(name: `:link:string`, classname: `:link:string`, callback: `:link:function`)

Adds a bar to the esp whose value can be customized.

The callback is called with one argument (`:link:C_BaseEntity`) every frame for each entity.
The callback should return a value between 0 and 100 that is used to fill the bar appropiately.
 
```lua
esp.CustomBar("Health", "enemies", function(entity)
  return entity:GetProp("m_iHealth")
end)
```


## **:link:menu**

**:link:menu.Switch**(group: `:link:string`, name: `:link:string`, default: `:link:boolean`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a switch.  
Use `:link:CheatVar.GetBool` for getting its state.

**:link:menu.SwitchColor**(group: `:link:string`, name: `:link:string`, default_switch: `:link:boolean`, default_color: `:link:Color`, tooltip: `:link:string`?): `:link:CheatVar`

Creatse a switch with a colorpicker.  
Use `:link:CheatVar.GetBool` for checking its switch state and `:link:CheatVar.GetColor` for getting its color.

**:link:menu.SliderInt**(group: `:link:string`, name: `:link:string`, default: `:link:number`, min: `:link:number`, max: `:link:number`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a slider.  
Use `:link:CheatVar.GetInt` for getting its value.

**:link:menu.SliderIntColor**(group: `:link:string`, name: `:link:string`, default_value: `:link:number`, min: `:link:number`, max: `:link:number`, default_color: `:link:Color`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a slider with a colorpicker.  
Use `:link:CheatVar.GetInt` for gettings its slider avalue and `:link:CheatVar.GetColor` for getting its color.

**:link:menu.SliderFloat**(group: `:link:string`, name: `:link:string`, default: `:link:number`, min: `:link:number`, max: `:link:number`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a slider.  
Use `:link:CheatVar.GetFloat` for getting its value.

**:link:menu.SliderFloatColor**(group: `:link:string`, name: `:link:string`, default_value: `:link:number`, min: `:link:number`, max: `:link:number`, default_color: `:link:Color`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a slider with a colorpicker.  
Use `:link:CheatVar.GetFloat` for gettings its slider avalue and `:link:CheatVar.GetColor` for getting its color.

**:link:menu.Combo**(group: `:link:string`, name: `:link:string`, items: Array[`:link:string`], default: `:link:number`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a combobox.  
Use `:link:CheatVar.GetInt` for getting the selected item (index).

**:link:menu.ComboColor**(group: `:link:string`, name: `:link:string`, items: Array[`:link:string`], default_value: `:link:number`, default_color: `:link:Color`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a combobox with a colorpicker.  
Use `:link:CheatVar.GetInt` for getting the selected item (index) and `:link:CheatVar.GetColor` for getting its color.

**:link:menu.MultiCombo**(group: `:link:string`, name: `:link:string`, items: Array[`:link:string`], default: `:link:number`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a multi combobox.  
Use `:link:CheatVar.GetBool` for checking if an index is selected.

**:link:menu.TextBox**(group: `:link:string`, name: `:link:string`, length: `:link:number`, default: `:link:string`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a textbox.  
Use `:link:CheatVar.GetString` for getting its value.

**:link:menu.Text**(group: `:link:string`, label: `:link:string`)

Creates a text.

**:link:menu.Button**(group: `:link:string`, name: `:link:string`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a button.  
Use `:link:CheatVar.RegisterCallback` for registering a callback.

**:link:menu.ColorEdit**(group: `:link:string`, name: `:link:string`, default: `:link:Color`, tooltip: `:link:string`?): `:link:CheatVar`

Creates a colorpicker.  
Use `:link:CheatVar.GetColor` for getting its color.

**:link:menu.GetRageHitboxState**(hitbox: `:link:number`): `:link:boolean`

Returns if the hitbox is enabled in the ragebot.

**:link:menu.GetRageMultipointState**(hitbox: `:link:number`): `:link:boolean`

Returns if multipoints of the hitbox are enabled in the ragebot.

**:link:menu.GetLegitHitboxState**(hitbox: `:link:number`): `:link:number`

Return value:

|  Value  |  Meaning          |
| ------- | ----------------- |
|    0    |  disabled         |
|    1    |  low priority     |
|    2    |  medium priority  |
|    3    |  high priority    |

**:link:menu.DestroyItem**(element: `:link:CheatVar`)

Destroys the element.
