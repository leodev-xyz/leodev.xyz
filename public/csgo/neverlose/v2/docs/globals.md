
# Neverlose V2 Documentation: Globals


## **:link:g_GlobalVars**

> **Note**: Some of these are documented in the NL docs, but they don't make much sense.

|  Name                         |  Type             |  Description                                         |
| ----------------------------- | ----------------- | ---------------------------------------------------- |
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
|  m_last_outgoing_command  |  `:link:number`  |  Last outgoing usercommand                |
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



