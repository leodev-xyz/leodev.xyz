
# Onetap V4 Documentation: Migrating from V3

Things to look out for when migrating a script from V3 to V4.

## UI Paths

Obvioulsy, V4 had a major UI rework and all UI paths are outdated.

There's no good guide because of the countless changes.


## Removed functions

- [`UI.AddLabel`](/csgo/onetap/v3/docs/globals#UI.AddLabel) has been removed
  - Sadly, there's no good alternative for this.

- [`UI.IsHotkeyActive`](/csgo/onetap/v3/docs/globals#UI.IsHotkeyActive) has been removed
  - Use `:link:UI.GetHotkeyState` instead

- [`UI.ToggleHotkey`](/csgo/onetap/v3/docs/globals#UI.ToggleHotkey) has been removed
  - Use `:link:UI.SetHotkeyState` instead


## Deprecations

- `:link:FrameStageNotify` has been deprecated

- `:link:UserCMD.ForceCrouch` has been deprecated
  - Use `:link:UserCMD.SetButtons` instead
- `:link:UserCMD.ForceJump` has been deprecated
  - Use `:link:UserCMD.SetButtons` instead
