(async function() {
    try {
        // Automatically find the path to this script (the 'data/' folder)
        const currentScriptPath = document.currentScript.src;
        const dataPath = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1);
        
        console.log("Webcore 64: Loading engine from", dataPath);

        // 1. Inject CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = dataPath + "emulator.min.css";
        document.head.appendChild(link);

        // 2. Import Engine Module
        // We use a cache-buster (?v=1) to ensure the browser doesn't use a broken old version
        const module = await import(dataPath + "emulator.min.js?v=1");
        const EmulatorJS = module.default;

        if (!EmulatorJS) throw new Error("EmulatorJS module failed to export.");

        // 3. Configuration
        const config = {
            gameUrl: window.EJS_gameUrl,
            dataPath: dataPath, // Pass the detected path to the emulator
            system: "n64",
            startOnLoad: true,
            gameName: window.EJS_gameName || "N64 Game"
        };

        // 4. Initialize in the 'game' div
        const container = document.getElementById('game');
        if (!container) {
            console.error("Error: Could not find <div id='game'> in your HTML.");
            return;
        }

        window.EJS_emulator = new EmulatorJS(container, config);
        console.log("Webcore 64: Engine initialized successfully!");

    } catch (e) {
        console.error("Webcore 64 Critical Load Error:", e.message);
        console.warn("Ensure emulator.min.js and emulator.min.css are in your /data/ folder.");
    }
})();

