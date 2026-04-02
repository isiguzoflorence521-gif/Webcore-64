(async function() {
    try {
        const repoName = "/Webcore-64"; 
        const enginePath = repoName + "/data/src/";
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = enginePath + "emulator.min.css";
        document.head.appendChild(link);
        const module = await import(enginePath + "emulator.min.js");
        const EmulatorJS = module.default;

        const config = {
            gameUrl: window.EJS_gameUrl,
            dataPath: enginePath,
            system: "n64",
            startOnLoad: true
        };

        window.EJS_emulator = new EmulatorJS(document.getElementById('game'), config);
    } catch (e) {
        console.error("Webcore 64: Still failing to load from " + enginePath, e);
    }
})();
