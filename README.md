# 🚀 Webcore 64
![Webcore 64 Logo](assets/logo.png)


**Webcore 64** is a high-performance, browser-based Nintendo 64 emulator library specifically optimized for **ChromeOS** and low-power hardware. It features a searchable database of the entire N64 library and custom configurations to fix common emulation bugs.

## ✨ Features
- **Chromebook Optimized:** Pre-configured with the `Rice` video plugin to eliminate audio lag and stuttering.
- **Fixed Controls:** Keyboard inputs are mapped to the N64 **Analog Stick** (WASD) so character movement works by default.
- **Graphical Fixes:** Enabled frame-buffer emulation to remove "character lines" and polygon seams on 3D models.
- **Massive Library:** Searchable interface designed to handle 388+ titles instantly.

## 🎮 Controls


| N64 Command | Keyboard Key |
| :--- | :--- |
| **Move (Analog Stick)** | `W` `A` `S` `D` |
| **A Button (Jump)** | `X` |
| **B Button (Attack)** | `Z` |
| **Z Trigger (Crouch)** | `Space` |
| **Start** | `Enter` |
| **C-Buttons (Camera)** | `I` `J` `K` `L` |
| **L / R Shoulders** | `Q` / `E` |

## 📁 Project Structure
```text
Webcore-64/
│
├── index.html                # Main Menu (loads games.json)
├── player.html               # Emulator runtime page
├── config.js                 # WASD controls + ChromeOS tweaks
├── games.json                # Game database
├── style.css                 # Dark UI theme
├── .gitignore                # Ignores /saves/
│
├── data/                     # EmulatorJS core files
│   ├── emu-css.css           # Emulator display styles
│   ├── loader.js             # EmulatorJS loader (required)
│   ├── n64.js                # N64 JavaScript core
│   └── n64.wasm              # N64 WebAssembly binary
│
├── roms/                     # N64 ROMs (ZIP only)
│   ├── sm64.zip
│   ├── zelda_oot.zip
│   ├── zelda_mm.zip
│   ├── goldeneye.zip
│   ├── banjo_kazooie.zip
│   ├── banjo_tooie.zip
│   ├── starfox64.zip
│   ├── perfect_dark.zip
│   ├── smash_bros.zip
│   ├── paper_mario.zip
│   ├── wave_race_64.zip
│   └── megaman64.zip
│
├── assets/
│   ├── logo.png              # App logo
│   └── boxart/               # Game thumbnails
│       ├── sm64.png
│       ├── zelda_oot.png
│       ├── zelda_mm.png
│       ├── goldeneye.png
│       ├── banjo_kazooie.png
│       ├── banjo_tooie.png
│       ├── starfox64.png
│       ├── perfect_dark.png
│       ├── smash_bros.png
│       ├── paper_mario.png
│       ├── wave_race_64.png
│       └── megaman64.png
│
└── saves/                    # Local save data (.sav / .state)
