# 🚀 Webcore 64

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
├── index.html               # Main Menu (Fetches games.json)
├── player.html              # Emulator Engine (Runs the .zips)
├── config.js                # WASD & ChromeOS Performance Fixes
├── games.json               # Database (The 10 Games List)
├── style.css                # Dark Theme (Clean & Professional)
├── .gitignore               # Keeps /saves/ off GitHub
│
├── data/                    # EmulatorJS CDN or Local Loader files
│
├── roms/                    # Game Files (Must match games.json)
│   ├── sm64.zip
│   ├── zelda_oot.zip
│   ├── zelda_mm.zip
│   ├── goldeneye.zip
│   ├── banjo_kazooie.zip
│   ├── starfox64.zip
│   ├── perfect_dark.zip
│   ├── smash_bros.zip
│   ├── paper_mario.zip
│   └── wave_race_64.zip
│
├── assets/                  
│   ├── logo.png
│   └── boxart/              # Image Thumbnails
│       ├── sm64.png
│       ├── zelda_oot.png
│       ├── zelda_mm.png
│       ├── goldeneye.png
│       ├── banjo_kazooie.png
│       ├── starfox64.png
│       ├── perfect_dark.png
│       ├── smash_bros.png
│       ├── paper_mario.png
│       └── wave_race_64.png
│
└── saves/                   # Local storage for .sav and .state
