---
title: "My First Vector Program"
author: Richard Neale
icon: /images/computer.png
icon_alt: Icon of computer
---

# My First Vector Program

Below is a step by step guide to writing your first RISC-V RVV 0.7.1 C program and running it on the EPCC RISC-V testbed.  It is assumed that you are familiar with the `vim` editor and the C programming language.

Once you have gained [access](https://riscv.epcc.ed.ac.uk/documentation/access/) to the EPCC RISC-V testbed you will be able to compile and run programs on several available systems.  You will need to be logged in to the EPCC RISC-V testbed login node before proceeding with this guide.

# Setting Up the Compiler

For this example we will use the GNU GCC compiler version 10.2 with support for RVV.  To enable this on the RISC-V Testbed login node we need to load the correct module:

```
module load riscv64-linux/gnu-10.2-rvv
```

# Creating a Makefile

We need to create an area to write our code in and provide a Makefile to enable us to easily build our program:

```
mkdir rvv-test
cd rvv-test
```

The `Makefile` needs to give the correct GCC command to crosscompile our code so that it can be run on the RISC-V Testbed:

```
vim Makefile
```
