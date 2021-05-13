
# Neverlose V2 Documentation: Callbacks

Use `:link:cheat.RegisterCallback` for registering callbacks.


## `:link:Callbacks`

**:link:draw**()

Allows you to use all drawing related functions.

**:link:createmove**(usercmd: `:link:CUserCmd`)

UserCommand after cheat prediction.

**:link:prediction**(usercmd: `:link:CUserCmd`)

UserCommand inside cheat prediction.

**:link:pre_prediction**(usercmd: `:link:CUserCmd`)

UserCommand before cheat prediction.

**:link:destroy**()

Script was unloaded.

**:link:frame_stage**(framestage: `:link:number`)

Called on every frame stage.

// TODO: check argument

**:link:console**(command: `:link:string`)

Called when the user enters something in the console.

// TODO: keybinds or stricly only manual input?

**:link:registered_shot**(shot: `:link:_G:registered_shot`)

Called when the ragebot shot registers.

**:link:ragebot_shot**(shot: `:link:_G:ragebot_shot`)

Called when the ragebot shoots.

**:link:fire_bullet**(bullet: `:link:DT_FireBullets`)

Called everytime a bullet is fired (also includes other players).

**:link:override_view**(view: `:link:CViewSetup`)

Called everytime the game is calculating the view.
