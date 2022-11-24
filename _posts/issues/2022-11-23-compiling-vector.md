---
title: "Compiling Vector Code"
layout: post
categories:
  - Issues
tags:
last_modified_at: 2022-11-23
---

Some of the [hardware]({% link _documentation/hardware.md %}) (Allwinner D1) within the testbed supports RISC-V V vector extension (RVV). Here we document and provide references for compiling code with vector instructions. 

A major caveat is that the first ratified RVV is version 1.0 ([spec](https://github.com/riscv/riscv-v-spec/blob/3570f998903f00352552b670f1f7b7334f0a144a/v-spec.adoc)), whereas the C906 core in the Allwinner D1 SoC was designed to support RVV 0.7.1 ([spec](https://github.com/riscv/riscv-v-spec/blob/0a24d0f61b5cd3f1f9265e8c40ab211daa865ede/v-spec.adoc)). The two specs are similar but not compatible. For more information, see [1](https://www.reddit.com/r/RISCV/comments/v1dvww/allwinner_d1_extensions/) [2](https://github.com/riscv/riscv-v-spec/issues/667).


On NextgenIO, The module `gnu-riscv64-linux/9.2-rvv0.7.1` (see [Getting Started]({% link _documentation/getting_started.md %})) can be loaded for gnu compilers supporting RVV 0.7.1.

### RVV 0.7.1
The simplest way to work with RVV 0.7.1 is in assembly language. The spec provides some [examples](https://github.com/riscv/riscv-v-spec/blob/0a24d0f61b5cd3f1f9265e8c40ab211daa865ede/vector-examples.adoc) of how to do so. Tests of memcpy and strcpy speeds on Allwinner D1 hardware using RVV 0.7.1 have been recorded [here](https://www.eevblog.com/forum/embedded-computing/risc-v-vector-extension-on-the-allwinner-d1/). 


Notes:
- QEMU supports RVV 0.7.1
- C906 toolchain and RVV 0.7.1 intrinsic manual: <https://lists.riscv.org/g/tech-vector-ext/message/677>
- OpenBLAS optimized for RVV 0.7.1: <https://github.com/xianyi/OpenBLAS/tree/risc-v>

### RVV 1.0

Due to the fact that RVV 1.0 is the first frozen version, there is significantly more support by compilers. The latest [Gnu](https://github.com/riscv-collab/riscv-gnu-toolchain) (`rvv-next` branch) and LLVM compilers and toolchains provide support for vector [intrinsics](https://github.com/riscv-non-isa/rvv-intrinsic-doc) and auto-vectorization. (See [here](https://github.com/riscv-collab/riscv-gcc/pull/329/commits/b5dc12d244cb92206c26ef71d4a1e0b6056c7cd0))

Notes:

- To use the Gnu `rvv-next` branch toolchain, also pull the `riscv-gcc-rvv-next` branch in `riscv-gcc`
- Instructions to build LLVM toolchain: <https://github.com/sifive/riscv-llvm>
- To enable auto-vectorization in gnu toolchain (`rvv-next`), configure with `--with-arch=rv64gcv` and compile with `-free-vectorize` or `-O3` (see [1](https://github.com/riscv-collab/riscv-gcc/issues/353) [2](https://github.com/riscv-collab/riscv-gnu-toolchain/issues/1055#issuecomment-1145980351))
- To enable auto-vectorization in clang, add the following flags `-march=rv64gv -target riscv64 -O2 -mllvm --riscv-v-vector-bits-min=xxx` (`xxx = 256/...` )
- Intrinsics and Auto-Vectorization (with Clang) can be tested on Compiler Explorer

Examples:

- Intrinsics on Compiler Explorer: <https://godbolt.org/z/xd1d1Tfdf>
- Auto-Vectorization on Compiler Explorer: <https://godbolt.org/z/PzjbnM93E>
- Example runs of Auto-Vectorized code: <https://www.luffca.com/2022/06/riscv-vector-vicuna-simulator/>

### References:

- Linux patch for running vector code: <https://lore.kernel.org/linux-riscv/cover.1652257230.git.greentime.hu@sifive.com/>
- <https://www.reddit.com/r/RISCV/comments/qv7efu/compiler_explorer_supports_riscv_clang_with/>
- <https://www.andestech.com/wp-content/uploads/Andes-RISC-V-CON_An-Introduction-to-RISC-V-Vector-Programming-with-C-Intrinsic%E2%80%8B.pdf>
