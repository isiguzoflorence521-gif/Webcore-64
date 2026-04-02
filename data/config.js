/** 
 * Webcore 64 Performance & Control Config
 * Optimized for ChromeOS and WebCore Architecture
 */

// Performance Toggles
window.EJS_threads = true;        // Enable SharedArrayBuffer for multi-threading
window.EJS_enable_webgl2 = true; // Use modern GPU rendering
window.EJS_DEBUG_XX = false;     // Set true only for development

// Default WASD Controls for N64 Analog
window.EJS_buttons = {
    'up': 'w',
    'down': 's',
    'left': 'a',
    'right': 'd',
    'start': 'enter',
    'select': 'shift',
    'a': 'k',
    'b': 'l',
    'l': 'q',
    'r': 'e',
    'z': 'j',
    'c-up': 'i',
    'c-down': 'm',
    'c-left': 'n',
    'c-right': 'p'
};
