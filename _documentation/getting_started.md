---
title: "Getting started"
icon: /images/sign-post.png
icon_alt: Sign post
order: 4
---

This section describes how to access both the command line and GUI of the testbed system front-end. 

The testbed contains a front-end node _riscv-login_ containing a 26-core Skylake Xeon Platinum CPU with 256GB RAM. The system drive is a 1TB SSD, and files are stored on 4TB of HDD RAID10 storage. Users can build their code on the front-end node, and they can be run on the RISC-V backend nodes (for details on submitting jobs, see [here]({% link _documentation/running_riscv.md %}))


### Command line access

The testbed system is only accessible via the _hydra-vpn_ proxy host, and in the previous _applying for access_ step you will have signed up for accounts on both _hydra-vpn_ and _riscv-login_. To access the testbed you need to therefore first ssh to _hydra-vpn_ via `ssh username@hydra-vpn.epcc.ed.ac.uk` , the first time that you access this you will need to use the password automatically allocated via the SAFE system (it can be retrieved via SAFE) and will be prompted to change this.

Once you have logged into hydra-vpn then you can access the testbed login node via `ssh username@riscv-login` . The workflow is illustrated below.

```console
username@localhost:~$ ssh username@hydra-vpn.epcc.ed.ac.uk
[username@hydra-vpn ~]$ ssh username@riscv-login
[username@riscv-login ~]$
```

>**ADVICE:**  
> It is possible to automate the proxy step by setting this up in your ssh .config file as a proxyjump

### Desktop access

<img src="/images/x2go_settings.png" width="450" height="450" align="right"/>

The lightweight XFCE desktop is installed on the front-end of the testbed system, which is especially useful for programming FPGAs as much of the tooling has a graphical component to it. The front-end is also running X2GO which tends to provide much better performance than vanilla X forwarding. Therefore we strongly suggest accessing the desktop via X2GO, with users just needing to install the client program which is available [here](https://wiki.x2go.org/doku.php/download:start).

Once the client is installed, create a new profile with settings matching those as illustrated below (assuming that you use the same username and password for both _hydra-vpn_ and the _riscv-login_ node.

>**NOTE:**  
> Whilst it is possible to run the individual graphical tools directly via X2GO, we suggest doing this via the XFCE desktop environment as find that this provides a much better user experience.

## RISC-V compilers and libraries

RISC-V compilers are available on the module environment:

```
bash-4.2$ module avail
...
------------------- /usr/local/share/riscv-compiler/modulefiles --------------------
   riscv32-linux/gnu-12.2       riscv64-linux/gnu-9.2-rvv     riscv64-linux/llvm-15.0
   riscv32-newlib/gnu-12.2      riscv64-linux/gnu-10.2-rvv    riscv64-linux/llvm-16.0 
   riscv64-linux/gnu-8.4-rvv    riscv64-linux/gnu-12.2        riscv64-newlib/gnu-12.2
```

The modules correspond to the following compiler configurations:

| Module | Compiler | Version | Library | Bit | ISA | ABI | Prefix |Source |
| --- | --- | --- | --- | --- | --- |--- | --- | --- |
| `riscv32-linux/gnu-12.2` | GNU | 12.2.0 | glibc (Linux) | 32 | RV32GC | ilp32d | `riscv32-unknown-linux-gnu-` | [RISC-V GNU Toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain) |
| `riscv64-linux/gnu-12.2` | GNU | 12.2.0 | glibc (Linux) | 64 | RV64GC | lp64d| `riscv64-unknown-linux-gnu-` | [RISC-V GNU Toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain)|
| `riscv32-newlib/gnu-12.2` | GNU | 12.2.0 | Newlib | 32 | RV32GC | ilp32d| `riscv32-unknown-elf-gnu-` | [RISC-V GNU Toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain) |
| `riscv64-newlib/gnu-12.2` | GNU | 12.2.0 | Newlib | 64 | RV64GC | lp64d| `riscv64-unknown-elf-gnu-` | [RISC-V GNU Toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain) |
| `riscv64-linux/gnu-8.4-rvv` | GNU | 8.4 | glibc (Linux) | 64 | RV64GC + V (0.7.1) | lp64d| `riscv64-unknown-linux-gnu-` | [XuanTie GNU Toolchain 20210618](https://datashare.ed.ac.uk/handle/10283/4835)  |
| `riscv64-linux/gnu-9.2-rvv` | GNU | 9.2 | glibc (Linux) | 64 | RV64GC + V (0.7.1) | lp64d| `riscv64-unknown-linux-gnu-` | [RISC-V GNU Toolchain: rvv-0.7.1](https://github.com/brucehoult/riscv-gnu-toolchain/tree/rvv-0.7.1) |
| `riscv64-linux/gnu-10.2-rvv` | GNU | 10.2 | glibc (Linux) | 64 | RV64GC + V (0.7.1/1.0) | lp64d| `riscv64-unknown-linux-gnu-` | [XuanTie GNU Toolchain V2.6.1 20220906](https://datashare.ed.ac.uk/handle/10283/4835) |
| `riscv64-linux/llvm-15.0` | LLVM | 15.0 | glibc (Linux) | 64 | RV64GC + V (1.0) | lp64d| N/A | [LLVM](https://github.com/riscv-collab/riscv-gnu-toolchain/pull/1166) |
| `riscv64-linux/llvm-16.0` | LLVM | 16.0 | glibc (Linux) | 64 | RV64GC + V (1.0) | lp64d| N/A | [LLVM](https://github.com/riscv-collab/riscv-gnu-toolchain/pull/1166) |



Once a compiler module is loaded (e.g. via `module load riscv64-linux/gnu-12.2` or `module load riscv64-linux/llvm-16.0`), the compilers and associated tools can be called with the prefix above for GNU (e.g. `riscv64-unknown-linux-gnu-gcc`) and without prefix (e.g `clang`) for LLVM.

For details of what tools are included in the toolchains, see [Toolchains & Cross-debugging]({% link _posts/issues/2023-01-11-toolchains+debugging.md %}). For more instructions on compiling with the V vector extension, see [V vector extension]({% link _posts/issues/2022-11-23-compiling-vector.md %}).



### Libraries

RISC-V libraries are also available in the module environment. 

```console
bash-4.2$ module avail
...
---------------------- /usr/local/share/riscv-software/modulefiles ----------------------
   fftw/3.3.10_gcc12.2_double/fftw-double
   fftw/3.3.10_gcc12.2_single/fftw-single
   hdf5/1.14.0_gcc12.2
   netcdf/4.x_gcc12.2
   openblas/0.3.21_C910V_gcc10.2
   openblas/0.3.21_riscv64_generic_gcc12.2 
   openmpi/4.1.4_gcc12.2
   petsc/3.18.4_debug
   petsc/3.18.4_release                    
```

To inspect the list of modules set in the user environment, run `module list`. More general details about the module environment can be found [here](https://linux.die.net/man/1/module). 

Note: all libraries are compiled using `riscv64-linux/gnu-12.2`, except for `openblas/0.3.21_C910V_gcc10.2` which has been compiled using [XuanTie GNU Toolchain V2.6.0 20220715](https://datashare.ed.ac.uk/handle/10283/4835).

### Compiling with MPI

To use the OpenMPI compiler wrappers (e.g. `mpicc`) on _riscv-login_, first load the `openmpi/4.1.4_gcc12.2` and `riscv64-linux/gnu-12.2` compiler module. Then the wrapper can be used along with the QEMU simulator included in `riscv64-linux/gnu-12.2`, 

```console
bash-4.2$ qemu-riscv64 /usr/local/share/riscv-software/openmpi4.1.4_gcc12.2/build/bin/mpicc [helloworld.c]
```

If you prefer to link the OpenMPI libraries manually, they can be found in
```
MPdir        = /usr/local/share/riscv-software/openmpi4.1.4_gcc12.2/build
MPinc        = -I$(MPdir)/include
MPlib        = $(MPdir)/lib/libmpi.a $(MPdir)/lib/libompitrace.a $(MPdir)/lib/libopen-rte.a  $(MPdir)/lib/libopen-pal.a -ldl
```