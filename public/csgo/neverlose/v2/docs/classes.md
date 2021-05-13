
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

Returns the netvar prop of this entity.


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

**:link:C_BaseCombatWeapon.IsRealoding**(self): `:link:boolean`

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
| ------- | -------------------------------------------------- |
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

**:link:IGameEvent.GetBool**(self, key: `:link:string`, default: `link:boolean`): `:link:boolean`

Returns the key value as boolean, falls back to the specified default value.

**:link:IGameEvent.GetInt**(self, key: `:link:string`, default: `link:number`): `:link:number`

Returns the key value as integer, falls back to the specified default value.

**:link:IGameEvent.GetFloat**(self, key: `:link:string`, default: `link:number`): `:link:number`

Returns the key value as float, falls back to the specified default value.

**:link:IGameEvent.GetString**(self, key: `:link:string`, default: `link:string`): `:link:string`

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

Sets this material's flag.
