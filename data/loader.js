const folderPath = (path) => {
    const filename = path.split("/").pop();
    return path.substring(0, path.length - filename.length);
};
function isAbsoluteUrl(path) {
    return /^[a-zA-Z][\w.+-]*:\/\/ /i.test(path);
}

let scriptPath = (typeof window.EJS_pathtodata === "string") ? window.EJS_pathtodata : folderPath((new URL(document.currentScript.src)).pathname);
if (!scriptPath.endsWith("/")) {
    scriptPath += "/";
}
if (!scriptPath.startsWith("/") && !isAbsoluteUrl(scriptPath)) {
    scriptPath = "../" + scriptPath;
}

const debug = window.EJS_DEBUG_XX === true;

if (debug) {
    console.log("Script Path:", scriptPath);
}

function resolvePath(path) {
    if ("undefined" != typeof EJS_paths && typeof EJS_paths[path] === "string") {
        return EJS_paths[path];
    } else {
        // Path fix: removed "src/" to load files directly from the data folder
        return scriptPath + path;
    }
}

async function loadScript(file) {
    try {
        const script = resolvePath(file);
        const module = await import(script);
        return module.default;
    } catch(e) {
        if (debug) console.error(e);
        const module = await filesMissing(file);
        return module.default;
    }
}

function loadStyle(file) {
    return new Promise(function(resolve) {
        let css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = resolvePath(file);
        css.onload = resolve;
        css.onerror = () => {
            filesMissing(file).then(e => resolve());
        }
        document.head.appendChild(css);
    })
}

async function filesMissing(file) {
    console.error("Failed to load " + file);
    let minifiedFailed = file.includes("min");
    const errorMessage = `Failed to load ${file}. Ensure the engine files are in your data folder.`;
    console[minifiedFailed ? "warn" : "error"](errorMessage);
    if (minifiedFailed) {
        if (file === "emulator.min.js") {
            return await loadScript("emulator.js");
        } else {
            await loadStyle("emulator.css");
        }
    }
}

function getLanguagePath(language) {
    if ("undefined" != typeof EJS_paths && typeof EJS_paths[language] === "string") {
        return { path: EJS_paths[language], fallback: null };
    }
    const base = scriptPath + "localization/" + language + ".json";
    let fallback = null;
    if (language.includes("-") || language.includes("_")) {
        fallback = scriptPath + "localization/" + language.split(/[-_]/)[0] + ".json";
    }
    return { path: base, fallback };
}

async function fetchJson(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (e) {
        console.warn("Failed to fetch language file:", path, e.message);
        return null;
    }
}

function mergeLanguages(baseJson, overrideJson) {
    if (!baseJson || !overrideJson) return baseJson || overrideJson || {};
    return { ...baseJson, ...overrideJson };
}

async function loadLanguage(config) {
    const defaultLangs = ["en", "en-US"];
    if (!config.language || defaultLangs.includes(config.language)) return config;
    let langData = {};
    const paths = getLanguagePath(config.language);
    try {
        const specificJson = await fetchJson(paths.path);
        if (paths.fallback) {
            const fallbackJson = await fetchJson(paths.fallback);
            langData = mergeLanguages(fallbackJson, specificJson || {});
        } else {
            langData = specificJson || {};
        }
        config.langJson = langData;
    } catch (e) {
        console.warn(`Language file error: ${e.message}`);
    }
    return config;
}

const config = {
    debug: debug,
    gameUrl: window.EJS_gameUrl,
    dataPath: scriptPath,
    system: window.EJS_core,
    biosUrl: window.EJS_biosUrl,
    gameName: window.EJS_gameName,
    color: window.EJS_color,
    volume: window.EJS_volume,
    startOnLoad: window.EJS_startOnLoaded,
    fullscreenOnLoad: window.EJS_fullscreenOnLoaded,
    threads: window.EJS_threads,
};

async function prepareLanguage() {
    try {
        const systemLang = Intl.DateTimeFormat().resolvedOptions().locale;
        config.language = window.EJS_language || systemLang;
        if (config.language && window.EJS_disableAutoLang !== false) {
            return await loadLanguage(config);
        }
    } catch (e) {
        delete config.language;
    }
}

(async function() {
    let EmulatorJS;
    if (debug) {
        EmulatorJS = await loadScript("emulator.js");
        await loadStyle("emulator.css");
    } else {
        EmulatorJS = await loadScript("emulator.min.js");
        await loadStyle("emulator.min.css");
    }

    if (!EmulatorJS) {
        console.error("EmulatorJS failed to load. Check your data/ folder.");
        return;
    }

    await prepareLanguage();
    // Assuming your game container has id 'game'
    window.EJS_emulator = new EmulatorJS(document.getElementById('game'), config);
})();
