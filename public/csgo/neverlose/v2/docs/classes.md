
# Neverlose V2 Documentation: Classes

## **:link:C_BaseEntity**

**:link:C_BaseEntity.GetClassId**(self): `:link:number`

Returns the class id of this entity.

See also: https://github.com/spirthack/CSGOSimple/blob/master/CSGOSimple/valve_sdk/misc/Enums.hpp#L162

**:link:C_BaseEntity.GetClassName**(self): `:link:string`

Returns the class name of this entity.

**:link:C_BaseEntity.GetProp**(self, propname: `:link:string`)

Returns the netvar prop of this entity.

**:link:C_BaseEntity.SetProp**(self, propname: `:link:string`, value, index: `:link:number`?)

Sets the netvar prop of this entity.

**:link:C_BaseEntity.IsPlayer**(self): `:link:boolean`

Returns if this entity is a player.

**:link:C_BaseEntity.GetPlayer**(self): `:link:C_BasePlayer`

Returns this entity as a BasePlayer class.

**:link:C_BaseEntity.IsWeapon**(self): `:link:boolean`

Returns if this entity is a weapon.

**:link:C_BaseEntity.GetWeapon**(self): `:link:C_BaseCombatWeapon`

Returns this entity as a Weapon class.

**:link:C_BaseEntity.GetRenderBounds**(self)

???

// TODO

**:link:C_BaseEntity.GetRenderOrigin**(self): `:link:Vector`

Returns the render origin of this entity (the position in the world of this entity).

**:link:C_BaseEntity.GetRenderAngles**(self): `:link:QAngle`

Returns the render angles of this entity (the viewangles of this entity).

**:link:C_BaseEntity.EntIndex**(self): `:link:number`

Returns the entity index of this entity.

**:link:C_BaseEntity.SetModelIndex**(self, modelindex: `:link:number`)

???

// TODO


## **:link:C_BaseCombatWeapon**

This class is a subclass of `:link:C_BaseEntity`.


**:link:C_BaseCombatWeapon.GetProp**(self, table: `:link:string`, propname: `:link:string`)

Returns the netvar prop of this weapon.

**:link:C_BaseCombatWeapon.SetProp**(self, table: `:link:string`, propname: `:link:string`, value, index: `:link:number`?)

Sets the netvar prop of this weapon.

**:link:C_BaseCombatWeapon.IsGrenade**(self): `:link:boolean`

Returns if this weapon is a grenade.

**:link:C_BaseCombatWeapon.IsKnife**(self): `:link:boolean`

Returns if this weapon is a knife.

**:link:C_BaseCombatWeapon.IsRifle**(self): `:link:boolean`

Returns if this weapon is a rifle.

**:link:C_BaseCombatWeapon.IsPistol**(self): `:link:boolean`

Returns if this weapon is a pistol.

**:link:C_BaseCombatWeapon.IsSniper**(self): `:link:boolean`

Returns if this weapon is a sniper.

**:link:C_BaseCombatWeapon.IsGun**(self): `:link:boolean`

Returns if this weapon is a gun.

**:link:C_BaseCombatWeapon.IsReloading**(self): `:link:boolean`

Returns if this weapon is being reloaded.

**:link:C_BaseCombatWeapon.GetInaccuracy**(self): `:link:number`

Returns the inaccuracy of this weapon.

**:link:C_BaseCombatWeapon.GetSpread**(self): `:link:number`

Returns the spread of this weapon.

**:link:C_BaseCombatWeapon.GetFireRate**(self): `:link:number`

Returns the fire rate of this weapon (in rounds per minute).

**:link:C_BaseCombatWeapon.GetMaxSpeed**(self): `:link:number`

Returns the maximum speed of this weapon.

**:link:C_BaseCombatWeapon.GetMaxClip**(self): `:link:number`

Returns the maximum bullets in a clip of this weapon.

**:link:C_BaseCombatWeapon.GetWeaponDamage**(self): `:link:number`

Returns the base damage of this weapon.

**:link:C_BaseCombatWeapon.GetWeaponRange**(self): `:link:number`

Returns the maximum distance (after which the bullets will despawn) of this weapon.

**:link:C_BaseCombatWeapon.GetWeaponID**(self): `:link:number`

Returns the weapon id (item definition index) of this weapon.

See also: https://github.com/spirthack/CSGOSimple/blob/master/CSGOSimple/valve_sdk/misc/Enums.hpp#L73


## **:link:C_BasePlayer**

This class is a subclass of `:link:C_BaseEntity`.

**:link:C_BasePlayer.IsVisible**(self, from: `:link:Vector`): `:link:boolean`

Returns if this player is visible from the specified position.

**:link:C_BasePlayer.GetEyePosition**(self): `:link:Vector`

Returns the eye position of this player (generally 64 units above its render origin).

**:link:C_BasePlayer.GetActiveWeapon**(self): `:link:C_BaseCombatWeapon`?

Returns the active weapon of this player.

**:link:C_BasePlayer.GetHitboxCenter**(self, hitbox: `:link:number`): `:link:Vector`

Returns the center of the specified hitbox of this entity.

**:link:C_BasePlayer.GetName**(self): `:link:string`

Returns the name of this player.

**:link:C_BasePlayer.IsDormant**(self): `:link:boolean`

Returns if this player is dormant.

**:link:C_BasePlayer.IsTeamMate**(self): `:link:boolean`

Returns if this player is a teammate.

**:link:C_BasePlayer.GetSequenceActivity**(self, sec: `:link:number`): `:link:number`

????

// TODO

**:link:C_BasePlayer.DrawHitbox**(self, hitbox: `:link:number`, color: `:link:Color`, tick: `:link:number`)

Changes the color of the specified hitbox to the specified color of this entity.

This can only be called during a `:link:draw` callback.

// TODO; wtf is tick


**:link:C_BasePlayer.GetNetworkState**(self): `:link:number`

Returns the network state of this entity.

|  Value  |  Meaning                                           |
|:-------:| -------------------------------------------------- |
|   -1    |  dormant and no data is available (or it expired)  |
|    0    |  not dormant (full info)                           |
|    1    |  dormant but cheat knows 100% where enemy is       |
|    2    |  dormant but with info from shared esp             |
|    3    |  dormant but updated by sounds                     |

**:link:C_BasePlayer.GetESPAlpha**(self): `:link:number`

Returns the esp alpha of this entity.

// TODO: ????


## **:link:ConVar**

**:link:ConVar.GetString**(self): `:link:string`

Returns this console variable as string.

**:link:ConVar.GetInt**(self): `:link:number`

Returns this console variable as integer.

**:link:ConVar.GetFloat**(self): `:link:number`

Returns this console variable as float.

**:link:ConVar.GetColor**(self): `:link:Color`

Returns this console variable as color.

**:link:ConVar.SetString**(self, value: `:link:string`)

Sets the console variable to a string.

**:link:ConVar.SetInt**(self, value: `:link:number`)

Sets the console variable to an integer.

**:link:ConVar.SetFloat**(self, value: `:link:number`)

Sets the console variable to a float.

**:link:ConVar.SetColor**(self, value: `:link:Color`)

Sets the console variable to a color.


## **:link:IGameEvent**

**:link:IGameEvent.GetName**(self, value: `:link:string`): `:link:string`

Returns the name of the event.

**:link:IGameEvent.GetBool**(self, key: `:link:string`, default: `:link:boolean`): `:link:boolean`

Returns the key value as boolean, falls back to the specified default value.

**:link:IGameEvent.GetInt**(self, key: `:link:string`, default: `:link:number`): `:link:number`

Returns the key value as integer, falls back to the specified default value.

**:link:IGameEvent.GetFloat**(self, key: `:link:string`, default: `:link:number`): `:link:number`

Returns the key value as float, falls back to the specified default value.

**:link:IGameEvent.GetString**(self, key: `:link:string`, default: `:link:string`): `:link:string`

Returns the key value as string, falls back to the specified default value.


## **:link:IMaterial**

**:link:IMaterial.ColorModulate**(self, r: `:link:number`, g: `:link:number`, b: `:link:number`)

Modulates this material's colors. rgb must be between 0 and 1.

**:link:IMaterial.AlphaModulate**(self, a: `:link:number`)

Modulates this material's alpha. a must be bertween 0 and 1.

**:link:IMaterial.GetName**(self): `:link:string`

Returns this material's name.

**:link:IMaterial.IsErrorMaterial**(self): `:link:boolean`

Returns if this material has an error/is broken.

**:link:IMaterial.SetMaterialVarFlag**(self, flag: `:link:number`, value: `:link:boolean`)

Sets a [material flag](https://developer.valvesoftware.com/wiki/Material_Flags) for this material.


## **:link:INetChannelInfo**

Flow types:

|  Value  |  Outgoing  |  Incoming  |
|:-------:|:----------:|:----------:|
|    0    |     √      |            |
|    1    |            |     √      |
|    2    |     √      |     √      |

**:link:INetChannelInfo.GetName**(self): `:link:string`

Returns the name of this channel.

**:link:INetChannelInfo.GetAddress**(self): `:link:string`

Returns the ip address of this channel.

**:link:INetChannelInfo.IsPlayback**(self): `:link:boolean`

Returns if this is a playback channel.

**:link:INetChannelInfo.GetLatency**(self, flow: `:link:number`): `:link:number`

Returns latency (real time, more accurate; fluctuates a lot)

**:link:INetChannelInfo.GetAvgLatency**(self, flow: `:link:number`): `:link:number`

Returns average latency (delayed, takes a while to adjust to new ping)

**:link:INetChannelInfo.GetAvgLoss**(self, flow: `:link:number`): `:link:number`

Returns average packet loss percetage between 0 and 1.

**:link:INetChannelInfo.GetAvgChoke**(self, flow: `:link:number`): `:link:number`

Returns average packet choke percentage between 0 and 1.

**:link:INetChannelInfo.GetAvgData**(self, flow: `:link:number`): `:link:number`

Returns average data transferred in bytes/second.

**:link:INetChannelInfo.GetAvgPackets**(self, flow: `:link:number`): `:link:number`

Returns average packets transferred in packets/second.

**:link:INetChannelInfo.GetTotalData**(self, flow: `:link:number`): `:link:number`

Returns total data sent in the specified flow.


## **:link:ActiveBind**

**:link:ActiveBind.GetName**(self): `:link:string`

Returns display name of the bind.

**:link:ActiveBind.GetValue**(self): `:link:number`

Returns the key the bind is bound to.

**:link:ActiveBind.IsActive**(self): `:link:boolean`

Returns if the bind is active.


## **:link:CUserCmd**

|  Name              |  Type             |  Sent to server  |  Description                                       |
| ------------------ | ----------------- |:----------------:| -------------------------------------------------- |
|  command_number    |  `:link:number`   |         √        |  for matching client and server commands           |
|  tick_count        |  `:link:number`   |         √        |  tick the usercommand is for                       |
|  viewangles        |  `:link:QAngle`   |         √        |  viewangles                                        |
|  aimdirection      |  `:link:Vector`   |         √        |  for pointing devices                              |
|  forwardmove       |  `:link:number`   |         √        |  forward velocity                                  |
|  sidemove          |  `:link:number`   |         √        |  sideways velocity                                 |
|  upmove            |  `:link:number`   |         √        |  upward velocity                                   |
|  buttons           |  `:link:number`   |         √        |  buttons (bitwise)                                 |
|  impulse           |  `:link:number`   |         √        |  impulse command                                   |
|  weaponselect      |  `:link:number`   |         √        |  current weapon id                                 |
|  weaponsubtype     |  `:link:number`   |         √        |  current weapon subtype                            |
|  random_seed       |  `:link:number`   |         √        |  random seed for shared rng                        |
|  mousedx           |  `:link:number`   |         √        |  mouse movement accumulated in x                   |
|  mousedy           |  `:link:number`   |         √        |  mouse movement accumulated in y                   |
|  hasbeenpredicted  |  `:link:boolean`  |         x        |  if this command has been predicted (client only)  |


## **:link:CheatVar**

|                                 |  `:link:CheatVar.GetBool`  |  `:link:CheatVar.GetInt`  |  `:link:CheatVar.GetFloat`  |  `:link:CheatVar.GetColor`  |  `:link:CheatVar.GetString`  |
| ------------------------------- |:--------------------------:|:-------------------------:|:---------------------------:|:---------------------------:|:----------------------------:|
|  `:link:menu.Switch`            |             √              |                           |                             |                             |                              |
|  `:link:menu.SwitchColor`       |             √              |                           |                             |              √              |                              |
|  `:link:menu.SliderInt`         |                            |             √             |                             |                             |                              |
|  `:link:menu.SliderIntColor`    |                            |             √             |                             |              √              |                              |
|  `:link:menu.SliderFloat`       |                            |                           |               √             |                             |                              |
|  `:link:menu.SliderFloatColor`  |                            |                           |               √             |              √              |                              |
|  `:link:menu.Combo`             |                            |             √             |                             |                             |                              |
|  `:link:menu.ComboColor`        |                            |             √             |                             |              √              |                              |
|  `:link:menu.MultiCombo`        |              √             |                           |                             |                             |                              |
|  `:link:menu.TextBox`           |                            |                           |                             |                             |               √              |
|  `:link:menu.Text`              |                            |                           |                             |                             |                              |
|  `:link:menu.Button`            |                            |                           |                             |                             |                              |
|  `:link:menu.ColorEdit`         |                            |                           |                             |              √              |                              |

**:link:CheatVar.GetBool**(self, element_index: `:link:number`?): `:link:boolean`

Returns this cheat variable's value as a boolean.  
For `:link:menu.Switch`, `:link:menu.SwitchColor` and `:link:menu.MultiCombo`.  
`element_index` is optional and only used for `:link:menu.MultiCombo`.

**:link:CheatVar.GetFloat**(self): `:link:number`

Returns this cheat variable's value as a float.  
For `:link:menu.SliderFloat` and `:link:menu.SliderFloatColor`.

**:link:CheatVar.GetInt**(self): `:link:number`

Returns this cheat variable's value as an integer.  
For `:link:menu.SliderInt`, `:link:SliderIntColor` and `:link:menu.Combo`.

**:link:CheatVar.GetColor**(self): `:link:Color`

Returns this cheat variable's value as a color.  
For `:link:menu.SwitchColor`, `:link:menu.SliderIntColor`, `:link:menu.SliderFloatColor`, `:link:menu.ComboColor` and `:link:menu.ColorEdit`.

**:link:CheatVar.GetString**(self): `:link:string`

Returns this cheat variable's value as a string  
For `:link:menu.TextBox`.

**:link:CheatVar.SetBool**(self, element_index: `:link:number`?, value: `:link:boolean`)

Sets this cheat variable to the new value.  
`element_index` is optional and only used for `:link:menu.MultiCombo`.

**:link:CheatVar.SetInt**(self, value: `:link:number`)

Sets this cheat variable to the new value.

**:link:CheatVar.SetFloat**(self, value: `:link:number`)

Sets this cheat variable to the new value.

**:link:CheatVar.SetColor**(self, color: `:link:Color`)

Sets this cheat variable to the new color.

**:link:CheatVar.SetString**(self, string: `:link:string`)

Sets this cheat variable to the new string.

**:link:CheatVar.RegisterCallback**(self, callback: `:link:function`)

Registers a callback that will be called everytime this cheat variable's value changes.

**:link:CheatVar.SetVisible**(self, visibility: `:link:boolean`)

Makes thi cheat variable visible/invisible.

**:link:CheatVar.SetTooltip**(self, tooltip: `:link:string`)

Overrides the tooltip of this cheat variable.

**:link:CheatVar.UpdateList**(self, items: Array[`:link:string`])

Updates the item list of this combobox.

**:link:CheatVar.GetList**(self): Array[`:link:string`]

Returns the item list of this combobox.


## **:link:Color**

Fields of a color instance:

|  Name  |  Type            |  Description                   |
|:------:| ---------------- | ------------------------------ |
|   r    |  `:link:number`  |  red ratio; between 0 and 1    |
|   g    |  `:link:number`  |  green ratio; between 0 and 1  |
|   b    |  `:link:number`  |  blue ratio; between 0 and 1   |
|   a    |  `:link:number`  |  alpha ratio; between 0 and 1  |


**:link:Color.new**(r: `:link:number`?, g: `:link:number`?, b: `:link:number`?, a: `:link:number`?): `:link:Color`

Creates a new color instance.  
rgba are values between 0 and 1.


## **:link:CViewSetup**

|  Name    |  Type            |  Description    |
| -------- | ---------------- | --------------- |
|  x       |  `:link:number`  |  X axis         |
|  y       |  `:link:number`  |  Y axis         |
|  width   |  `:link:number`  |  width          |
|  height  |  `:link:number`  |  height         |
|  fov     |  `:link:number`  |  field of view  |
|  origin  |  `:link:Vector`  |  origin         |
|  angles  |  `:link:QAngle`  |  angle          |


## **:link:DT_FireBullets**

|  Name             |  Type            |  Description            |
| ----------------- | ---------------- | ----------------------- |
|  m_iPlayer        |  `:link:number`  |  player                 |
|  m_nItemDefIndex  |  `:link:number`  |  item definition index  |
|  m_vecOrigin      |  `:link:Vector`  |  origin                 |
|  m_vecAngles      |  `:link:QAngle`  |  angles                 |
|  m_weapon         |  `:link:number`  |  weapon                 |
|  m_iWeaponID      |  `:link:number`  |  weapon id              |
|  m_iMode          |  `:link:number`  |  mode                   |
|  m_iSeed          |  `:link:number`  |  seed                   |
|  m_fInaccuracy    |  `:link:number`  |  accuracy               |
|  m_fRecoilIndex   |  `:link:number`  |  recoild index          |
|  m_fSpread        |  `:link:number`  |  spread                 |
|  m_fSoundType     |  `:link:number`  |  sound type             |


## **:link:QAngle**

Fields of a qangle instance:

|  Name   |  Type            |  Description                  |
| ------- | ---------------- | ----------------------------- |
|  pitch  |  `:link:number`  |  pitch; between -180 and 180  |
|  yaw    |  `:link:number`  |  yaw; between -180 and 180    |
|  roll   |  `:link:number`  |  roll; between -180 and 180   |


**:link:QAngle.new**(pitch: `:link:number`, yaw: `:link:number`, roll: `:link:number`): `:link:QAngle`

Creates a new qangle instance.  
ptich, yaw and roll are between -180 and 180.

**:link:QAngle.__add**(self, angle: `:link:QAngle`): `:link:QAngle`

Adds two angles.

```lua
local angle = QAngle.new(1, 1, 1) + QAngle.new(2, 2, 2)
assert angle.pitch == 3 and angle.pitch == 3 and angle.roll == 3
```

**:link:QAngle.__sub**(self, angle: `:link:QAngle`): `:link:QAngle`

Subtracts two angles.

```lua
local angle = QAngle.new(1, 1, 1) - QAngle.new(2, 2, 2)
assert angle.pitch == -1 and angle.pitch == -1 and angle.roll == -1
```

**:link:QAngle.__mul**(self, angle: `:link:QAngle`): `:link:QAngle`

Multiplies two angles.

```lua
local angle = QAngle.new(1, 1, 1) - QAngle.new(2, 2, 2)
assert angle.pitch == -1 and angle.pitch == -1 and angle.roll == -1
```

**:link:QAngle.__div**(self, angle: `:link:QAngle`): `:link:QAngle`

Divides two angles.

```lua
local angle = QAngle.new(1, 1, 1) - QAngle.new(2, 2, 2)
assert angle.pitch == -1 and angle.pitch == -1 and angle.roll == -1
```

**:link:QAngle.__len**(self): `:link:number`

Returns the length of the angle.

```lua
assert #QAngle.new(1, 1, 1) == 1.7320508076
```


## **:link:_G:ragebot_shot**

|  Name       |  Type            |  Description                             |
| ----------- | ---------------- | ---------------------------------------- |
|  index      |  `:link:number`  |  targetted entity index                  |
|  backtrack  |  `:link:number`  |  backtracked ticks                       |
|  hitchance  |  `:link:number`  |  hitchance of the shot                   |
|  damage     |  `:link:number`  |  damage of the shot                      |
|  hitgroup   |  `:link:number`  |  hitgroup that was hit                   |
|  shoot_pos  |  `:link:Vector`  |  position from where the shot was fired  |
|  angle      |  `:link:QAngle`  |  angle with which the shot was fired     |


## **:link:Rect**

Fields of a rectangle instance:

|  Name  |  Type            |  Description  |
|:------:| ---------------- | ------------- |
|   x    |  `:link:number`  |  x            |
|   y    |  `:link:number`  |  y            |
|   z    |  `:link:number`  |  z            |
|   w    |  `:link:number`  |  w            |

**:link:Rect.new**(x: `:link:number`?, y: `:link:number`?, z: `:link:number`?, w: `:link:number`?): `:link:Rect`

Creates a new rectangle instance.


## **:link:_G:registered_shot**

|  Name          |  Type            |  Description                            |
| -------------- | ---------------- | --------------------------------------- |
|  hitchance     |  `:link:number`  |  hitchance of the shot                  |
|  backtrack     |  `:link:number`  |  backtracked ticks                      |
|  hitgroup      |  `:link:number`  |  hitgroup that was aimed at             |
|  damage        |  `:link:number`  |  predicted damage                       |
|  target_index  |  `:link:number`  |  targetted entity index                 |
|  reason        |  `:link:number`  |  miss reason                            |
|  spread_angle  |  `:link:number`  |  spread angle (only for miss reason 2)  |

Miss reasons:

|  Reason  |  Meaning           |
|:--------:| ------------------ |
|    0     |  hit enemy         |
|    1     |  resolver          |
|    2     |  spread            |
|    3     |  occlusion         |
|    4     |  prediction error  |


## **:link:Trace**

|  Name               |  Type                  |  Description                                |
| ------------------- | ---------------------- | ------------------------------------------- |
|  startpos           |  `:link:Vector`        |  start position of the trace                |
|  endpos             |  `:link:Vector`        |  end position of the trace                  |
|  plane              |  ?                     |  surface normal at impact                   |
|  fraction           |  `:link:number`        |  time completed, 1.0 = didn't hit anything  |
|  contents           |  `:link:number`        |  contents of the surface that got hit       |
|  dispFlags          |  `:link:number`        |  displacements flags                        |
|  allsolid           |  `:link:boolean`       |  trace never left the solid                 |
|  startsolid         |  `:link:boolean`       |  trace started in a solid                   |
|  fractionleftsolid  |  `:link:number`        |  time we left solid                         |
|  hitgroup           |  `:link:number`        |  hitgroup that was hit                      |
|  physicsbone        |  `:link:number`        |  physicsbone that was hit (in studio)       |
|  worldSurfaceIndex  |  `:link:number`        |  index of the msurface2_t, if applicable    |
|  hit_entity         |  `:link:C_BaseEntity`  |  entity that was hit                        |
|  hitbox             |  `:link:number`        |  hitbox that was hit  (in studio)           |


## **:link:Vector**

Fields of a vector instance:

|  Name  |  Type            |  Description  |
|:------:| ---------------- | ------------- |
|   x    |  `:link:number`  |  x            |
|   y    |  `:link:number`  |  y            |
|   z    |  `:link:number`  |  z            |


**:link:Vector.new**(x: `:link:number`?, y: `:link:number`?, z: `:link:number`?): `:link:Vector`

Creates a new vector instance.  

**:link:Vector.__add**(self, vector: `:link:Vector`): `:link:Vector`

Adds two vectors.

```lua
local vector = Vector.new(1, 1, 1) + Vector.new(2, 2, 2)
assert vector.x == 3 and vector.y == 3 and vector.z == 3
```

**:link:Vector.__sub**(self, vector: `:link:Vector`): `:link:Vector`

Subtracts two vectors.

```lua
local vector = Vector.new(1, 1, 1) - Vector.new(2, 2, 2)
assert vector.x == -1 and vector.y == -1 and vector.z == -1
```

**:link:Vector.__mul**(self, vector: `:link:Vector`): `:link:Vector`

Multiplies two vectors.

```lua
local vector = Vector.new(1, 1, 1) - Vector.new(2, 2, 2)
assert vector.x == -1 and vector.y == -1 and vector.z == -1
```

**:link:Vector.__div**(self, vector: `:link:Vector`): `:link:Vector`

Divides two vectors.

```lua
local vector = Vector.new(1, 1, 1) - Vector.new(2, 2, 2)
assert vector.x == -1 and vector.y == -1 and vector.z == -1
```

**:link:Vector.__len**(self): `:link:number`

Returns the length of the vector.

```lua
assert #Vector.new(1, 1, 1) == 1.7320508076
```

**:link:Vector.Length**(self): `:link:number`

Returns the euclidean distance to the vector.

```lua
assert Vector.new(1, 1, 1):Length() == 1.7320508076
```

**:link:Vector.Length2D**(self): `:link:number`

Returns the euclidean distance to the vector ignoring the height (z).

```lua
assert Vector.new(1, 1, 1):Length() == 1.4142135624
```

**:link:Vector.DistTo**(self): `:link:number`

Returns the euclidean distance to the vector.

```lua
assert Vector.new(1, 1, 1):DistTo(Vector.new(2, 2, 2)) == 1.7320508076
```

**:link:Vector.Dot**(self, vector: `:link:Vector`): `:link:number`

Returns the dot of two vectors.

```lua
local my_vec = Vector.new(3.0, 2.0, 8.0)
local my_vec2 = Vector.new(4.0, 3.0, 1.0)
local dot = my_vec:Dot(my_vec2)
-- Expected value for dot: ((3.0 * 4.0) + (2.0 * 3.0) + (8.0 * 1.0)) = (12 + 6 + 8) = 26
```

**:link:Vector.Cross**(self, vector: `:link:Vector`): `:link:number`

Returns the cross of two vectors.

```lua
local my_vec = Vector.new(3.0, 2.0, 8.0)
local my_vec2 = Vector.new(4.0, 3.0, 1.0)
local dot = my_vec:Cross(my_vec2)
```


## **:link:Vector2**

Fields of a vector instance:

|  Name  |  Type            |  Description  |
|:------:| ---------------- | ------------- |
|   x    |  `:link:number`  |  x            |
|   y    |  `:link:number`  |  y            |


**:link:Vector2.new**(x: `:link:number`?, y: `:link:number`?): `:link:Vector2`

Creates a new vector instance.  

**:link:Vector2.__add**(self, vector: `:link:Vector2`): `:link:Vector2`

Adds two vectors.

```lua
local vector = Vector2.new(1, 1) + Vector2.new(2, 2)
assert vector.x == 3 and vector.y == 3
```

**:link:Vector2.__sub**(self, vector: `:link:Vector2`): `:link:Vector2`

Subtracts two vectors.

```lua
local vector = Vector2.new(1, 1) - Vector2.new(2, 2)
assert vector.x == -1 and vector.y == -1
```

**:link:Vector2.__mul**(self, vector: `:link:Vector2`): `:link:Vector2`

Multiplies two vectors.

```lua
local vector = Vector2.new(1, 1) - Vector2.new(2, 2)
assert vector.x == -1 and vector.y == -1
```

**:link:Vector2.__div**(self, vector: `:link:Vector2`): `:link:Vector2`

Divides two vectors.

```lua
local vector = Vector2.new(1, 1) - Vector2.new(2, 2)
assert vector.x == -1 and vector.y == -1
```

**:link:Vector2.__len**(self): `:link:number`

Returns the length of the vector.

```lua
assert #Vector2.new(1, 1) == 1.4142135624
```

**:link:Vector2.Length**(self): `:link:number`

Returns the euclidean distance to the vector.

```lua
assert Vector2.new(1, 1):Length() == 1.4142135624
```


## **:link:BeamInfo_t**

Fields of a beaminfo instance:

|  Name                |  Type                  |  Description  |
| -------------------- | ---------------------- | ------------- |
|  m_nType             |  `:link:number`        |   -           |
|  m_pStartEnt         |  `:link:C_BaseEntity`  |   -           |
|  m_pStartAttachment  |  `:link:number`        |   -           |
|  m_pEndEnt           |  `:link:C_BaseEntity`  |   -           |
|  m_nEndAttachment    |  `:link:number`        |   -           |
|  m_vecStart          |  `:link:Vector`        |   -           |
|  m_vecEnd            |  `:link:Vector`        |   -           |
|  m_nModelIndex       |  `:link:number`        |   -           |
|  m_pszModelName      |  `:link:string`        |   -           |
|  m_nHaloindex        |  `:link:number`        |   -           |
|  m_pszHaloName       |  `:link:string`        |   -           |
|  m_flHaloScale       |  `:link:number`        |   -           |
|  m_flLife            |  `:link:number`        |   -           |
|  m_flWidth           |  `:link:number`        |   -           |
|  m_flEndWidth        |  `:link:number`        |   -           |
|  m_flFadeLength      |  `:link:number`        |   -           |
|  m_flAmplitude       |  `:link:number`        |   -           |
|  m_flBrightness      |  `:link:number`        |   -           |
|  m_flSpeed           |  `:link:number`        |   -           |
|  m_nStartFrame       |  `:link:number`        |   -           |
|  m_flFrameRate       |  `:link:number`        |   -           |
|  m_flRed             |  `:link:number`        |   -           |
|  m_flGreen           |  `:link:number`        |   -           |
|  m_flBlue            |  `:link:number`        |   -           |
|  m_bRenderable       |  `:link:number`        |   -           |
|  m_nSegments         |  `:link:number`        |   -           |
|  m_nFlags            |  `:link:number`        |   -           |
|  m_vecCenter         |  `:link:Vector`        |   -           |
|  m_flStartRadius     |  `:link:number`        |   -           |
|  m_flEndRadius       |  `:link:number`        |   -           |


**:link:BeamInfo_t.new**(): `:link:BeamInfo_t`

Creeates a new beaminfo instance.


## **:link:PlayerInfo**

|  Name             |  Type             |  Description                                 |
| ----------------- | ----------------- | -------------------------------------------- |
|  fakeplayer       |  `:link:boolean`  |  is fake player (e.g. Bot)                   |
|  filesdownloaded  |  `:link:number`   |  amount of files downloaded from the server  |
|  ishltv           |  `:link:boolean`  |  is HTLV                                     |
|  iSteamID         |  `:link:number`   |  user's steam id                             |
|  steamID64        |  `:link:number`   |  user's steam64 id                           |
|  userId           |  `:link:number`   |  user id                                     |


## **:link:firebullet_t**

|  Name    |  Type            |  Description   |
| -------- | ---------------- | -------------- |
|  damage  |  `:link:number`  |  damage dealt  |
|  trace   |  `:link:Trace`   |  trace         |
