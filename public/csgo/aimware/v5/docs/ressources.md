
# Aimware V5 Documentation: Ressources

**:link:Font**

// TODO

**:link:Texture**

// TODO

**:link:RGBAData**

RGBA data is a list of rgba numbers used for textures.

```lua
{{255, 0, 0, 255}, {255, 0, 0, 255}, {255, 0, 0, 255}, {255, 0, 0, 255}} -- 2x2 red square (also a 1x4 and 4x1 square)
```


**:link:Hitbox**

A hitbox is a `:link:number`.

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
