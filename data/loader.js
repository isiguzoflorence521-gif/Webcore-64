(async function() {
    try {
        const enginePath = "data/src/";
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = enginePath + "emulator.min.css";
        document.head.appendChild(link);
        const module = await import("./src/emulator.min.js");
        const EmulatorJS = module.default;

        const config = {
            gameUrl: window.EJS_gameUrl,
            dataPath: enginePath,
            system: "n64",
            startOnLoad: true
        };

        window.EJS_emulator = new EmulatorJS(document.getElementById('game'), config);
        console.log("Webcore 64: Running from data/src/");

    } catch (e) {
        console.error("Webcore 64: Still can't find files in data/src/", e);
    }
})();
