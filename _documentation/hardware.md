---
title: "Testbed hardware"
icon: /images/processor.png
icon_alt: Processor icon
---

The testbed contains both physical and soft-core RISC-V CPUs, and this page provides a brief overview of the different technolgies hosted within the testbed.

# Physical boards

## HiFive Unmatched
<img src="/images/HiFive_unmatched.jpg" width="200" height="200" align="left"/>
The HiFive Unmatched is a Mini-ITX board powered by the SiFive Freedom U740 four-core, 64-bit dual-issue, superscalar RISC-V processor. The board includes 16GB of DDR4 RAM, 128GB of M.2 PCIe Gen 3 x4 SSD module storage and Gigabit ethernet, running Ubuntu 21.04 (hirsute) Linux. 

The system is configured with Open MPI 4.1, PETSc, LAPACK, BLAS, FFTW 3.3, HDF5, NetCDF, Python 3.9, Clang / LLVM 12.0, GCC and  GNU Fortran 10.3. 

## DongshanNezhaSTU Allwinner D1-H
<img src="/images/DongshanNezhaSTU.png" width="200" height="200" align="right"/>
This SBC contains the Allwinner D1 C906 RISC-V processor running at up to 1GHz. A single core implementing the RISC-V64 architecture, it is equipped with 512MB DDR3 RAM and Gigabit ethernet. The testbed contains four of these boards.


# FPGA hosted soft-cores

Our soft-cores currently run on an ADM-PA101 which is a Versal Prime equipped with 16GB DDR. At the time of writing this is driven via the host using PCIe and the Mercury platform to launch executables and manage memory transfer.
