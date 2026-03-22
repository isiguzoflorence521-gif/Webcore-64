#include "memory.h"

uint8_t rdram[0x800000]; // 8MB Expansion Pak support

uint32_t mem_read32(uint32_t addr) {
    // Check if address is in RDRAM range (0x80000000)
    if (addr >= 0x80000000 && addr <= 0x807FFFFF) {
        return *(uint32_t*)&rdram[addr & 0x7FFFFF];
    }
    // Handle PIF, RI, VI, AI registers...
    return 0;
}
