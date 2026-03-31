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
├── .github/
│   └── workflows/
│       ├── node.js.yml            # Node / CI workflow (optional)
│       └── static.yml             # GitHub Pages deployment workflow
│
├── assets/
│   ├── logo.png                   # App logo
│   └── boxart/                    # Game thumbnails
│       ├── banjo_kazooie.png
│       ├── banjo_tooie.png
│       ├── goldeneye.png
│       ├── megaman64.png
│       ├── paper_mario.png
│       ├── perfect_dark.png
│       ├── sm64.png
│       ├── smash_bros.png
│       ├── starfox64.png
│       ├── wave_race_64.png
│       ├── zelda_mm.png
│       └── zelda_oot.png
│
├── data/                          # EmulatorJS core files
│   ├── emu-css.css                # Emulator canvas + fullscreen styles
│   ├── loader.js                  # EmulatorJS loader
│   ├── n64.js                     # N64 JavaScript bridge
│   └── n64.wasm                   # N64 WebAssembly core
│
├── roms/                          # N64 ROM files (ZIP)
│   ├── banjo_kazooie.zip
│   ├── sm64.zip
│   ├── smash_bros.zip
│   ├── starfox64.zip
│   └── (add more ROMs later)
│
├── .nojekyll                      # Disables Jekyll on GitHub Pages
├── 404.html                       # Custom 404 page
├── README.md                      # Project documentation
│
├── config.js                      # Emulator settings (WASD, performance)
├── games.json                     # Games database
├── index.html                     # Main menu UI
├── player.html                    # Emulator runtime page
├── style.css                      # Dark theme styling
│
├── sw.js                          # Service Worker (offline / caching)
├── update.js                      # Update handler / cache busting
