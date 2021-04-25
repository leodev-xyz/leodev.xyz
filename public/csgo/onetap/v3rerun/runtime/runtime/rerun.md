
Onetap **Re**mastered **Run**time (shortform: Re:Run, don't ask where the `:` came from)

Re:Run is a project to make the onetap runtime better, remove code, simplify code and make it more user friendly.

### What it does

- removes the `Global` module
  - it only linked to already existing functions and was totally unneeded
- adds `:link:Reference` for better interactions with the onetap UI
- adds `:link:Entity` for better interacting with entities
- adds `:link:Material` for better interacting with materials
- allows diretly passing callbacks to `:link:Cheat.RegisterCallback`
- adds an error handler for callbacks, so that errors won't be silently ignored

### How to use it

You can just put the runtime code at the top of your code and you'll have the runtime.

```js
(function(){...}).call(this);

Cheat.RegisterCallback("Draw", function() {
    throw new Error("Hello World");
})
```


You can also `require()` the runtime like this:

```js
require("runtime.js").call(thus);
```
