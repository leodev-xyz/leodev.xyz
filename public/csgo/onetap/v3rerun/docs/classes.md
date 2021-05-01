
# Onetap V3 Re:Run Documentation: Classes


**:link:Path**

A path consists of 1-4 strings.

```js
ref = Reference("Misc", "JAVASCRIPT", "Script Items", "Hello World");
ref = Reference(["Misc", "JAVASCRIPT", "Script Items", "Hello World"]);
ref = Reference("Hello World");  // references an element named "Hello World" (can be anywhere)

// WARNING: when using a single string, make sure you dont reuse one of onetap's names
ref = Reference("Enabled"); // references fake-lag's enabled
```


**:link:Angle**

An angle has 3 values: `pitch`, `yaw` and `roll`.

```js
angle = new Angle(1, 2, 3)
angle.pitch === 1
angle.yaw === 2
angle.roll === 3
```


**:link:Vector2**

A 2 dimensional vector has 2 numbers: `x` and `y`.  


**:link:Vector3**

A 3 dimensional vector has 3 numbers: `x`, `y` and `z`.


**:link:RGBA**

4 numbers, `red`, `green`, `blue` and `alpha`.

See also: https://en.wikipedia.org/wiki/RGBA_color_model


## **:link:Reference**

**:link:Reference.GetValue**()

Returns the value of this UI element.

```js
fakelag_enable = Reference("Anti-Aim", "Fake-Lag", "Enabled");
fakelag_limit = Reference("Anti-Aim", "Fake-Lag", "Limit");
function getFakelag() {
    if(!fakelag_enable.GetValue())
        return 0;  // fakelag disabled
    return fakelag_limit.GetValue();
}
```

**:link:Reference.GetString**(): `:link:string`

Returns the string from this textbox.

**:link:Reference.GetColor**(): `:link:RGBA`

Returns the selected color from this colorpicker.

**:link:Reference.SetValue**(value)

Sets the value of this UI element.

```js
fakelag_enable = Reference("Anti-Aim", "Fake-Lag", "Enabled");
function disableFakeLag() {
    fakelag_enable.SetValue(false);
}
function toggleFakeLag() {
    fakelag_enable.SetValue(!fakelag_enable.GetValue())
}
```

**:link:Reference.SetColor**(value: `:link:RGBA`)

Sets the color of this colorpicker.

**:link:Reference.SetEnabled**(value: `:link:boolean`)

Enables/disables this checkbox.

**:link:Reference.IsHotkeyActive**(): `:link:boolean`

Returns whether this hotkey is active or not.

**:link:Reference.ToggleHotkey**(): `:link:number`

Toggles this hotkey.  
Returns the new active state. (0 = inactive, 1 = active)


## **:link:Entity**

**:link:Entity.IsTeammate**(): `:link:boolean`

Returns if this entity is a teammate.

**:link:Entity.IsEnemy**(): `:link:boolean`

Returns if this entity is an enemy.

**:link:Entity.IsBot**(): `:link:boolean`

Returns if this entity is a bot.

**:link:Entity.IsLocalPlayer**(): `:link:boolean`

Returns if this entity is yourself.

**:link:Entity.IsValid**(): `:link:boolean`

Returns if this entity is valid.

**:link:Entity.IsAlive**(): `:link:boolean`

Returns if this entity is alive.

**:link:Entity.IsDormant**(): `:link:boolean`

Returns if this entity is dormant.

**:link:Entity.GetClassID**(): `:link:number`

Returns the class id of this entity.

> **NOTE**: Class ids sometimes change during game updates, and shouldn't be used for identification.  
> Use `:link:Entity.GetClassName` instead.

**:link:Entity.GetClassName**(): `:link:string`

Returns the class name of this entity.

**:link:Entity.GetName**(): `:link:string`

Returns the name of this entity.

**:link:Entity.GetWeapon**(): `:link:Entity`

Returns the current held weapon of this entity.

**:link:Entity.GetWeapons**(): Array[`:link:Entity`]

Returns all weapons of this entity.

**:link:Entity.GetRenderOrigin**(): `:link:Vector3`

Returns the position of this entity.

**:link:Entity.GetRenderBox**()

Returns the render box of this entity as an array:  

[visible: `:link:boolean`, min_x: `:link:number`, min_y: `:link:number`, max_x: `:link:number`, max_y: `:link:number`]

**:link:Entity.GetProp**(table: `:link:string`, propname: `:link:string`)

Returns the value of the specified prop.

`table` will be the entity's classname most of the time (`CCSPlayer` for players).

**:link:Entity.SetProp**(table: `:link:string`, propname: `:link:string`, value)

Sets the specified prop to the specified value.

`table` will be the entity's classname most of the time (`CCSPlayer` for players).

**:link:Entity.GetHitboxPositions**(bone: `:link:Bone`): `:link:Vector3`

Returns the position of the bone.

**:link:Entity.GetEyePosition**(): `:link:Vector3`

Returns the position of the "eye" of this entity (the place where bullets come from).


## **:link:Material**

**:link:Material.SetKeyValue**(key: `:link:string`, value: `:link:string`)

Overrides value of the material.

> **Note**: Can only be called during a `:link:callback:Material` callback.

**:link:Material.Refresh**()

Overrides value of the material.

> **Note**: Can only be called during a `:link:callback:Material` callback.

**:link:Material.Destroy**(): `:link:boolean`

Destroy this entity and returns if the destruction was successful.
