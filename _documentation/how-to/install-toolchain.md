---
title: "Installing the RISC-V GCC toolchain on Ubuntu"
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

# Setting up the RISC-V gcc toolchain
You may find that your work flow is aided by setting up the RISC-V gcc Toolchain on your local non-RISC-V computer to enable you to build (and catch compile time errors) locally. This is based on an AMD x64 system running Ubuntu 24.04.  

# Update System and install pre-requisites 
```bash
sudo apt update
sudo apt install autoconf automake autotools-dev curl python3 libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev
```

# Clone Toolchain Repository  
```bash
mkdir RISCV
cd RISCV
git clone --recursive https://github.com/riscv/riscv-gnu-toolchain
cd riscv-gnu-toolchain
```

# Configure and Build for rv64gcv  
```bash
mkdir build
cd build 
../configure --prefix=/opt/riscv --with-arch=rv64gcv --with-abi=lp64d
sudo make -j$(nproc)
```

# Add the RISC-V toolchain to the PATH 
```bash
export PATH=/opt/riscv/bin:$PATH
```

# Cross-Compile Your Code
```bash
riscv64-unknown-elf-gcc -march=rv64gcv071 -o example example.c
```
the `-march` flag can be `rv64gvc` to target the current rvv version or `rv64gcv071` to target RVV version 0.7.1 (which is what most of the EPCC RISC-V testbed supports).

You should now be able to build a RISC-V executable from C (or C++ or assembly) on you Ubuntu x64 computer.

In the next [step](install-spike.md) we will set up SPIKE, the RISC-V ISA Simulator, so you can run the RISC-V executable on your x64 Ubuntu computer.
