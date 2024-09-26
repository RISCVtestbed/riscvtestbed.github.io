---
title: "Setting up SPIKE - the RISC-V ISA Simulator"
icon: /images/computer.png
icon_alt: Icon of computer
layout: post
author: 
  name: Richard Neale
  picture: /images/epcc-logo.png
categories:
  - How To  
group: how-to
order: 0
---

SPIKE is the RISC-V ISA Simulator. It can be used to run simple test programs with out the need to boot in to a QEMU RISC-V instance or have access to RISC-V hardware.  Please note that runtimes will be slower than running on real RISC-V hardware especially for features such as RVV Vector extensions, so, any benchmarking must be done on real RISC-V hardware.

If you have not already set up the [RISC-V GCC Toolchain](install-toolchain.md) on your computer, please complete that step first.

# Spike setup
First install the pre-requisites.  
```bash
sudo apt-get update  
sudo apt-get install device-tree-compiler  
sudo apt-get install libboost-all-dev  
```

# Clone the SPIKE Repository
This should be set up in the RISCV directory you created when setting up the RISC-V GCC Toolchain.  
```bash
cd RISCV
git clone https://github.com/riscv-software-src/riscv-isa-sim.git  
git clone https://github.com/riscv/riscv-pk.git     
```

# Configure and Build SPIKE
If you are using an ARM CPU computer, change `x86_64-linux-gnu` to `aarch64-linux-gnu` in the `--with-boost-libdir=` option.  
```bash
cd riscv-isa-sim   
mkdir build   
cd build  
sudo ../configure --prefix=$RISCV --host=riscv64-unknown-elf --with-boost-libdir=/usr/lib/x86_64-linux-gnu/
make -j$(nproc)
sudo make install  
```

# Configure and Build RISCV-PK
RISCV-PK is the Proxy Kernal used by the SPIKE ISA Simulator.  
```bash
cd ../../riscv-pk
mkdir build
cd build
../configure --prefix=$RISCV --host=riscv64-unknown-elf 
make -j$(nproc)
sudo make install
```

# Test the Install
Go to a directory where you have compiled a RISC-V executable using the RISC-V GCC Toolchain and run it using the command line below.  In this example we have assumed that your executable is called `main`.  
```
spike --isa=RV64IMACV $RISCV/riscv-pk/build/pk ./main
```

You should now be able to run a RISC-V executable on an x64 Ubuntu computer.
