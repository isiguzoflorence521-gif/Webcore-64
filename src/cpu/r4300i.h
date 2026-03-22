#ifndef R4300I_H
#define R4300I_H
#include <stdint.h>

typedef struct {
    uint64_t gpr[32]; // General Purpose Registers
    uint64_t pc;      // Program Counter
    uint64_t hi, lo;  // Multiply/Divide registers
} n64_cpu_t;

void cpu_execute_instr(uint32_t instr);
#endif
