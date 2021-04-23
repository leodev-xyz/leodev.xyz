
# Types used by onetap

**:link:Path**

A path consists of 1-4 strings.

```js
UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Hello World");
UI.GetValue("Hello World");  // searches for an element named "Hello World"

// WARNING: when using a single string, make sure you dont reuse one of onetap's names
UI.GetValue("Enabled"); // returns if FAKELAG is enabled
```


**:link:Angle**

An angle is a list of 3 numbers: `pitch`, `yaw` and `roll`.

```js
// TODO: get actual values :D
Local.GetViewAngles(); // [1, 2, 3]
Local.SetViewAngles([1, 2, 3]);
```


**:link:Vector2**

A 2 dimensional vector is a list of 2 numbers: `x` and `y`.  


**:link:Vector3**

A 3 dimensional vector is a list of 3 numbers: `x`, `y` and `z`.


**:link:RGBA**

A list of 4 numbers, `red`, `green`, `blue` and `alpha`.

See also: https://en.wikipedia.org/wiki/RGBA_color_model


**:link:Size**

Sizes 0 to 7 are special fonts, see `:link:Font` for more information.  
Sizes 8 to 48 are the default font with different sizes.


**:link:Font**

A font identifier is a `:link:number`.

For ids between 0 and 6 check this table:

|  Id  |  Description                                     |
| ---- | ------------------------------------------------ |
|   0  |  Default CS:GO font (depends on CS:GO language)  |
|   1  |  Bold font                                       |
|   2  |  Small font                                      |
|   3  |  Small & bold font                               |
|   4  |  Big font                                        |
|   5  |  Icons                                           |
|   6  |  Small icons                                     |

Font ids between 7 and 48 are the default font but with different sizes (even numbers only, odd numbers are invisible).

Using `:link:Render.AddFont` or `Render.FindFont` returns a new unique font id.


**:link:Hitbox**

A hitbox is a `:link:number` and is primarily used by events.

|  Id  |  Description  |
| ---- | ------------- |
|   0  |  Generic      |
|   1  |  Head         |
|   2  |  Chest        |
|   3  |  Stomach      |
|   4  |  Left Arm     |
|   5  |  Right Arm    |
|   6  |  Left Leg     |
|   7  |  Right Leg    |
|   8  |  Neck         |

> **Note**: There's also hitbox 10 called ["gear" which "alerts NPC, but doesn't do damage or bleed (1/100th damage)"](https://github.com/ValveSoftware/source-sdk-2013/blob/master/mp/src/game/shared/shareddefs.h#L345)  
> No idea what it does, and you probably will never have to deal with it using onetap, so I decided to leave it out.


**:link:Bone**

A bone is a `:link:number`.

|  Id  |  Description      |
| ---- | ----------------- |
|   0  |  Head             |
|   1  |  Neck (unused)    |
|   2  |  Pelvis           |
|   3  |  Body             |
|   4  |  Thorax           |
|   5  |  Chest            |
|   6  |  Upper chest      |
|   7  |  Left thigh       |
|   8  |  Right thigh      |
|   9  |  Left calf        |
|  10  |  Right calf       |
|  11  |  Left foot        |
|  12  |  Right foot       |
|  13  |  Left hand        |
|  14  |  Right hand       |
|  15  |  Left upper arm   |
|  16  |  Left forearm     |
|  17  |  Right upper arm  |
|  18  |  Right forearm    |
