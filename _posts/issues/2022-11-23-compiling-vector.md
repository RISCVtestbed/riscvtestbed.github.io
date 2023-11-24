---
title: "Compiling Vector Code"
layout: post
categories:
  - Issues
tags:
last_modified_at: 2022-11-23
---

Some of the [hardware]({% link _documentation/hardware.md %}) (e.g. Sophon SG2042 and Allwinner D1) within the testbed supports RISC-V V vector extension (RVV). Here we document and provide references for compiling code with vector instructions. 

A major caveat is that the first ratified RVV is version 1.0 ([spec](https://github.com/riscv/riscv-v-spec/blob/3570f998903f00352552b670f1f7b7334f0a144a/v-spec.adoc)), whereas the C920 and C906 cores in Sophon SG2042 and the Allwinner D1 SoCs were designed to support RVV 0.7.1 ([spec](https://github.com/riscv/riscv-v-spec/blob/0a24d0f61b5cd3f1f9265e8c40ab211daa865ede/v-spec.adoc)). The two specs are similar but not compatible. For more information, see [1](https://www.reddit.com/r/RISCV/comments/v1dvww/allwinner_d1_extensions/) [2](https://github.com/riscv/riscv-v-spec/issues/667).


On riscv-login, the following compilers modules (see [Getting Started]({% link _documentation/getting_started.md %})) support RVV 0.7.1:
- `riscv64-linux/gnu-8.4-rvv`
- `riscv64-linux/gnu-9.2-rvv`
- `riscv64-linux/gnu-10.2-rvv`

The following compiler modules support RVV 1.0

- `riscv64-linux/gnu-10.2-rvv`
- `riscv64-linux/llvm-15.0`
- `riscv64-linux/llvm-16.0`

### RVV 0.7.1
The simplest way to work with RVV 0.7.1 is in assembly language. The spec provides some [examples](https://github.com/riscv/riscv-v-spec/blob/0a24d0f61b5cd3f1f9265e8c40ab211daa865ede/vector-examples.adoc) of how to do so. Tests of memcpy and strcpy speeds on Allwinner D1 hardware using RVV 0.7.1 have been recorded [here](https://www.eevblog.com/forum/embedded-computing/risc-v-vector-extension-on-the-allwinner-d1/). 


Notes:
- Include `-march=...v` (e.g. `-march=rv64gcv` to include vector extension; to specify the version `-march=rv64gcv0p7`) 
- QEMU supports RVV 0.7.1
- `riscv64-linux/gnu-8.4-rvv` provides the best auto-vectorisation
- RVV 0.7.1 intrinsic manual for the `riscv64-linux/gnu-10.2-rvv` compiler: <https://occ-oss-prod.oss-cn-hangzhou.aliyuncs.com/resource//1663142187133/Xuantie+900+Series+RVV-0.7.1+Intrinsic+Manual.pdf>
- OpenBLAS optimized for RVV 0.7.1: <https://github.com/xianyi/OpenBLAS/tree/risc-v>


### RVV 1.0

Due to the fact that RVV 1.0 is the ratified version, there is significantly more support by compilers. The latest LLVM compiler and toolchain provide support for vector [intrinsics](https://github.com/riscv-non-isa/rvv-intrinsic-doc) (v0.10)and auto-vectorization. 

Notes:

- Include `-march=...v` (e.g. `-march=rv64gcv` to include vector extension; to specify the version `-march=rv64gcv1p0`)
- To use the Gnu `rvv-next` branch toolchain, also pull the `riscv-gcc-rvv-next` branch in `riscv-gcc`
- Instructions to build LLVM toolchain: <https://github.com/riscv-collab/riscv-gnu-toolchain/pull/1166> or <https://github.com/sifive/riscv-llvm>
- To enable auto-vectorization in gnu toolchain (`rvv-next`), configure with `--with-arch=rv64gcv` and compile with `-ftree-vectorize` or `-O3` (see [1](https://github.com/riscv-collab/riscv-gcc/issues/353) [2](https://github.com/riscv-collab/riscv-gnu-toolchain/issues/1055#issuecomment-1145980351))
- To enable auto-vectorization in clang, add the following flags `-march=rv64gv -target riscv64 -O2 -mllvm --riscv-v-vector-bits-min=N` (e.g. `N = 128` ) for vector length specific, and `-march=rv64gv -target riscv64 -O2 -mllvm -scalable-vectorization=on` for vector length agnostic
- Intrinsics and Auto-Vectorization (with Clang) can be tested on Compiler Explorer
- To view details for auto-vectorization by the compilers, add `-fopt-info-vec-all` for gcc  or `-Rpass=loop-vectorize -Rpass-missed=loop-vectorize -Rpass-analysis=loop-vectorize` for clang. (See <https://gcc.gnu.org/onlinedocs/gcc/Developer-Options.html#index-fopt-info-1337> and <https://llvm.org/docs/Vectorizers.html>)
- Talk at RISC-V Summit: [Getting the Most out of the LLVM Auto Vectorizer for RISC-V Vectors (RVV) - Kolya Panchenko, SiFive](https://www.youtube.com/watch?v=PEjXUBXNvuk)

Examples:

- Intrinsics on Compiler Explorer: <https://godbolt.org/z/xd1d1Tfdf>
- Auto-Vectorization on Compiler Explorer: <https://godbolt.org/z/PzjbnM93E>
- Example runs of Auto-Vectorized code: <https://www.luffca.com/2022/06/riscv-vector-vicuna-simulator/>

### RVV rollback
We have introduced a tool to translate RVV 1.0 assembly code to 0.7, which is available for download here <https://github.com/RISCVtestbed/rvv-rollback>. It is tested for the following workflow:

This is tested for the following workflow:
1. Clang 15.0 to compile .cpp source to RVV 1.0 `.s`
2. RVV-rollback to translate RVV1.0 `.s` to RVV0.7 `.s`
3. GCC 10.2 (Xuantie-900 linux-5.10.4 glibc gcc Toolchain V2.6.1 B-20220906) to assemble RVV0.7 `.s` to `.o`

The tool does not support some features introduced in v1.0, such as fractional LMUL and 64-bit elements.

### References:

- Linux patch for running vector code: <https://lore.kernel.org/linux-riscv/cover.1652257230.git.greentime.hu@sifive.com/>
- <https://www.reddit.com/r/RISCV/comments/qv7efu/compiler_explorer_supports_riscv_clang_with/>
- <https://www.andestech.com/wp-content/uploads/Andes-RISC-V-CON_An-Introduction-to-RISC-V-Vector-Programming-with-C-Intrinsic%E2%80%8B.pdf>
