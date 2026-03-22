#include "r4300i.h"
#include "../hw/memory.h"

void cpu_step(n64_cpu_t *cpu) {
    uint32_t instr = mem_read32(cpu->pc);
    uint8_t opcode = (instr >> 26) & 0x3F;

    switch(opcode) {
        case 0x0F: // LUI
            // cpu->gpr[rt] = immediate << 16;
            break;
        case 0x0D: // ORI
            // cpu->gpr[rt] = cpu->gpr[rs] | immediate;
            break;
        // Add more MIPS opcodes here
    }
    cpu->pc += 4;
}
