const folderPath = (path) => {
    const filename = path.split("/").pop();
    return path.substring(0, path.length - filename.length);
};

let scriptPath = (typeof window.EJS_pathtodata === "string") ? window.EJS_pathtodata : folderPath((new URL(document.currentScript.src)).pathname);
if (!scriptPath.endsWith("/")) scriptPath += "/";

function resolvePath(path) {
    return scriptPath + "src/" + path;
}

function playStartupSequence() {
    const audio = new Audio('assets/startup.mp3');
    audio.volume = 0.7;
    audio.play().catch(e => console.warn("Audio blocked: Click the screen to enable sound."));

    // Wait 7 seconds, then fade out the loading screen
    setTimeout(() => {
        const screen = document.getElementById('loading-screen');
        if (screen) {
            screen.classList.add('hidden');
        }
        
        // Smoothly fade out the 8-second audio
        let fadeAudio = setInterval(() => {
            if (audio.volume > 0.05) {
                audio.volume -= 0.05;
            } else {
                audio.pause();
                clearInterval(fadeAudio);
            }
        }, 100);
    }, 7000);
}

async function loadScript(file) {
    const script = resolvePath(file);
    try {
        const module = await import(script);
        return module.default;
    } catch (e) {
        return null;
    }
}

function loadStyle(file) {
    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = resolvePath(file);
    document.head.appendChild(css);
}

(async function() {
    // 1. Load the Emulator Engine from data/src/
    const EmulatorJS = await loadScript("emulator.min.js");
    loadStyle("emulator.min.css");

    if (!EmulatorJS) {
        console.error("Webcore 64: Engine files missing from data/src/");
        return;
    }

    // 2. Start the 8-second Intro Sequence
    playStartupSequence();

    // 3. Initialize the Emulator
    const config = {
        gameUrl: window.EJS_gameUrl,
        dataPath: scriptPath + "src/",
        system: "n64",
        startOnLoad: true,
        gameName: window.EJS_gameName || "N64 Game"
    };

    const container = document.getElementById('game');
    if (container) {
        window.EJS_emulator = new EmulatorJS(container, config);
    }
})();
