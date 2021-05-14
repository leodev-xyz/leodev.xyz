
# Generator of leodev.xyz

[![Discord](https://discord.com/api/guilds/756989147163656273/widget.png)](https://discord.gg/FCnK6xp)


The source code of my website: https://leodev.xyz


## Building

### Dependencies

Node dependencies: `npm i`

For compiling `.moon` files, you need the [MoonScript](https://moonscript.org/#installation) compiler.


### Generating website

Use `make` to generate all files (html/js/css, ...).

All generated files will be in the `dist/` directory, ready to be served with a simple webserver.
(e.g. `python3 -m http.server`)
