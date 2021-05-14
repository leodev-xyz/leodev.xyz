
# Neverlose V2 Documentation

This documentation is for Neverlose V2 because their docs are incomplete, poorly categorized and their snippets easily get out of sync.

- [Callbacks](callbacks.html)
- [Classes](classes.html)
- [Globals](globals.html)
- [Ressources](ressources.html)

If a function's first argument is `self`, it's a "method" and can be called using `:`.  
If a function's name starts with `__`, it's a [meta method](http://lua-users.org/wiki/MetamethodsTutorial)

```lua
entity.GetClassId(entity)
-- equivalent to
entity:GetClassId()

-- Vector.__add(self, vector)
Vector.new(1, 1, 1) + Vector.new(2, 2, 2)
```

> **Note**:
> This documentation contains information/snippets from [the official documentation](https://github.com/neverlosecc/api-documentation).


## Visual Studio Snippets

Visual Studio Snippets for Neverlose V2:

- [Lua](/csgo/neverlose/v2/snippets.lua.json)
- [Moonscript / Yuescript](/csgo/neverlose/v2/snippets.moon.json)

### Adding snippets

https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets

Put the content of the snippet file above into the snippet file you create.
