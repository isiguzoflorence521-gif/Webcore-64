const folderPath = (path) => {
    const filename = path.split("/").pop();
    return path.substring(0, path.length - filename.length);
};

let scriptPath = (typeof window.EJS_pathtodata === "string") ? window.EJS_pathtodata : folderPath((new URL(document.currentScript.src)).pathname);
if (!scriptPath.endsWith("/")) scriptPath += "/";

function resolvePath(path) {
    // This fix removes the "src/" subfolder requirement
    return scriptPath + path;
}

async function loadScript(file) {
    const script = resolvePath(file);
    try {
        const module = await import(script);
        return module.default;
    } catch (e) {
        console.error("Failed to load script:", script);
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
    // Force load the minified files you downloaded with curl
    const EmulatorJS = await loadScript("emulator.min.js");
    loadStyle("emulator.min.css");

    if (!EmulatorJS) {
        console.error("Emulator engine not found in /data/ folder.");
        return;
    }

    const config = {
        gameUrl: window.EJS_gameUrl,
        dataPath: scriptPath,
        system: "n64",
        gameName: window.EJS_gameName || "N64 Game",
        startOnLoad: true
    };

    window.EJS_emulator = new EmulatorJS(document.getElementById('game'), config);
})();
