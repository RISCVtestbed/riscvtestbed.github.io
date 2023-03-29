---
title: "Toolchains & Cross-debugging"
layout: post
categories:
  - Issues
tags:
last_modified_at: 2023-01-11
---

In this post we cover the toolchains and debugging tools available to compile applications for RISC-V. These allow users to cross-compile RISC-V executables on the login node, which can then be run on the testbed [nodes]({% link _documentation/running_riscv.md %}). The toolchains provide various binutils, such as `ld` - linker, `as` - assembler, and `objdump` - displays object file information. 

### GNU toolchain

The first toolchain is the RISC-V GNU Compuler Toolchain, which is available at <https://github.com/riscv-collab/riscv-gnu-toolchain>. The README provides comprehensive instructions to compile the toolchain. 

Different versions of this toolchain have already been installed on the login node and can be directly be loaded using `module load`, following the instructions [here]({% link _documentation/getting_started.md %}). Once loaded, the compilers and binutils can be called directly, e.g.

```
[username@riscv-login ~]$ module load riscv64-linux/gnu-12.2
[username@riscv-login ~]$ riscv64-unknown-linux-gnu-gcc --version
riscv64-unknown-linux-gnu-gcc (g) 12.2.0
Copyright (C) 2022 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

Notes:
- The toolchain can be compiled with two C standard libraries: GNU C Library (glibc) and Newlib. Newlib provides ISO C, is focused on size and is intended for embedded systems. On top of ISO C, glibc also provides other APIs including POSIX, BSD, XPG, making it more suitable for linux applications. Toolchains for both newlib and glibc in 32/64-bit are provided and can be loaded directly.
- The binaries have the prefix `riscv(32/64)-unknown-(elf/linux-gnu)-` for (32/64)-bit and (newlib/glibc) respectively
- When using the gnu compiler, the isa can be specified by `-march=ISA-string`, e.g. `-march=rv64gc`. For more options, see <https://gcc.gnu.org/onlinedocs/gcc/RISC-V-Options.html>

#### Simulator

The toolchain also includes a simulator (e.g. QEMU), which allows us to run RISC-V binaries on the host. To build the simulator, after configuring and building the gnu toolchain, additionally run `$ make build-sim SIM=qemu`. To use the simulator, just run `$ qemu-riscv64 (application)`.

Note:

- This has also been installed in the module `riscv64-linux/gnu-12.2` on _riscv-login_
- If the default compilers are too old, modify `Makefile.in` under `build-qemu` and add the following flags to `configure`:
```
  --cc=[c compiler] \
  --cxx=[c++ compiler]
```

### LLVM toolchain

LLVM also supports RISC-V, and at the moment provides better vector (1.0) support than gcc. To build the LLVM project, the gnu toolchain has to be first built. For reference see <https://llvm.org/docs/CMake.html> and <https://llvm.org/docs/GettingStarted.html>. Most important for building LLVM for RISC-V, the following flags have to be added to `cmake` (e.g. for 64-bit):
```
cmake ... -DLLVM_TARGETS_TO_BUILD="RISCV" \
     -DLLVM_ENABLE_PROJECTS="clang;lld" \
     -DLLVM_ENABLE_RUNTIMES="compiler-rt;libcxx;libcxxabi;libunwind" \
     -DLLVM_DEFAULT_TARGET_TRIPLE="riscv64-linux-gnu" \
     -DDEFAULT_SYSROOT="$(INSTALL_DIR)/sysroot" 
```
where `$(INSTALL_DIR)` is the gcc toolchain install directory. However, since the `-DDEFAULT_SYSROOT` is set, the flag `DGCC_INSTALL_PREFIX` will be ignored, which is actually necessary to find `libgcc`. A workaround is to merge the paths. 

This has been implemented in a PR <https://github.com/riscv-collab/riscv-gnu-toolchain/pull/1166>, which is currently the easiest way to build the LLVM project. To build this toolchain 
```
$ git clone https://github.com/cmuellner/riscv-gnu-toolchain.git
$ cd riscv-gnu-toolchain/
$ git checkout origin/llvm-new
$ ./configure --prefix=$(prefix) --with-arch=rv64gc --with-abi=lp64d --enable-llvm --enable-linux
$ make 
```
The LLVM binaries will be built in the same location in `$prefix`.


Notes:
- The LLVM project can currently be built only with glibc
- LLVM RISC-V reference: <https://llvm.org/docs//RISCVUsage.html>
- At the moment this PR will build LLVM 15.0. To build with an up to date LLVM, run `git submodule update --init --recursive` , then `cd LLVM` and `git fetch` to pull the latest LLVM.
- When configuring LLVM build, by default the C compiler uses /usr/bin/cc and CXX compiler uses /usr/bin/c++ . If the default compilers are too old, modify `Makefile.in` under `build-llvm-linux` and add the following flags to `cmake`:

```
-DCMAKE_C_COMPILER="[c compiler]" \
-DCMAKE_CXX_COMPILER="[c++ compiler]" \
```

### Vector

The upstream LLVM Compiler (clang) by default supports the vector extension and auto-vectorization. To build gcc with vector support and auto-vectorization, the rvv-next branch needs to checked out.

Notes:

- To enable vectorization in clang, add the flags `-march=rv64gcv  -menable-experimental-extensions -O2 -mllvm --riscv-v-vector-bits-min=128` or `-march=rv64gcv  -menable-experimental-extensions -O2 -mllvm -scalable-vectorization=on`
- To enable vectorization in gcc, add the flags `--with-arch=rv64gcv -O3`
- For more information, see the [Compiling Vector Code]({% link _posts/issues/2022-11-23-compiling-vector.md %}) page

### (Cross-)Debugging

The toolchain contains the debugger `riscv64-unknown-linux-gnu-gdb`. To debug RISC-V executables on the host, we need to use it in conjunction with the QEMU simulator. To do so, we first connect QEMU to the application by adding the `-g (port)` flag, e.g.
```
$ qemu-riscv64 -g 1234 ./hello-world
```

Next we need to set up gdb to connect to the QEMU instance. In a separate terminal, create the file `.gdbinit`, and include the target to connect to the port. For example, 

```
$ cat .gdbinit
target remote localhost:1234
tui enable
layout asm
break main
```
This will allow us to debug with the text user interface, with a breakpoint at `main`. 

Then, we can simply run the debugger
```
$ riscv64-unknown-linux-gnu-gdb ./hello-world
```
and commence debugging. There may be additional instructions prompted on screen here, which should be followed.




### References:

- The LLVM and cross-debugging instructions mainly come from the very helpful tutorial by Christoph Müllner: <https://youtu.be/mBNX843U2qE>
