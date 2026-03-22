#include <stdint.h>
// The RDP is the rasterizer. 
// In Webcore 64, this will send commands to WebGL via Emscripten
void rdp_process_list(uint32_t* display_list) {
    // Translate N64 triangles to WebGL triangles
}
