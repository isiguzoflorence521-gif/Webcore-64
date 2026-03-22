#ifndef MEMORY_H
#define MEMORY_H
#include <stdint.h>

uint32_t mem_read32(uint32_t addr);
void mem_write32(uint32_t addr, uint32_t val);

#endif
