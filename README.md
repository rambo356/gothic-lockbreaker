# Gothic Lockbreaker

Standalone lockpicking calculator for **Gothic 1 Remake**.

Gothic Lockbreaker helps players calculate a safe A/D lockpicking sequence by manually setting pin positions and plate links.

This is an external helper tool. It does **not** modify game files, saves, configs, memory, or executable files.

## Features

* Supports 4–7 plates
* Manual pin positions
* Manual plate links
* Shortest safe A/D sequence
* Step-by-step solution
* English, Russian and German UI
* Standalone Electron desktop app

## Requirements

* Windows 10 / 11
* Node.js LTS
* npm

## Install dependencies

```bash
npm install
```

## Run from source

```bash
npm start
```

This opens the app directly from the source files without creating an `.exe`.

## Build portable Windows executable

```bash
npm run dist:portable
```

The portable `.exe` will be created in the `dist` folder.

## Build Windows installer

```bash
npm run dist
```

The installer will be created in the `dist` folder.

## Build both portable and installer

```bash
npm run dist:all
```

Both output files will be created in the `dist` folder.

## Project structure

```text
index.html      Main application UI and lockpicking calculator logic
main.js         Electron window wrapper
package.json    Project scripts and Electron Builder configuration
favicon.png     Application icon
favicon.ico     Windows application icon
hero-image.png  Application artwork
```

## How the tool works

The user manually enters:

* number of plates;
* current pin positions;
* plate link setup.

The app then calculates a safe A/D sequence for the lockpicking minigame.

## Game access / safety

Gothic Lockbreaker does not connect to the game automatically.

It does not:

* read game files;
* edit game files;
* edit save files;
* inject anything into the game;
* access game memory;
* modify executable files;
* require installation into the game folder.

All lock data is entered manually by the user.

## Uploaded Nexus Mods file

The Nexus Mods upload is built from this source code using Electron Builder.

Mod page:

https://www.nexusmods.com/gothic1remake/mods/266?tab=files

## Feedback

Found a bug, translation issue or have an idea?

https://forms.gle/YHYMMS8AyyXtbFk56

## Support

This tool is free and will stay free.

https://boosty.to/rambo356

Support is completely optional and does not unlock any exclusive files or features.

## Credits

Created by Dmitry Gerasimov.

This is an unofficial fan-made utility and is not affiliated with Alkimia Interactive, THQ Nordic, or Piranha Bytes.
