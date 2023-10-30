---
title: "Testbed hardware"
icon: /images/processor.png
icon_alt: Processor icon
---

The testbed contains both physical and soft-core RISC-V CPUs, and this page provides a brief overview of the different technolgies hosted within the testbed.

# Physical boards

## Milk-V Pioneer
<img src="/images/milk-v-box-angle.png" width="150" height="150" align="left"/>
The Milk-V Pioneer is a microATX board powered by the SOPHGO SG2042, 64-core C920 64-bit RISC-V processor, with 64MB L3 cache and RVV 0.71 support. The board includes 128GB of DDR4 RAM, 1TB of PCIe 3.0 SSD module storage and 2x 10 Gigabit ethernet, running Fedora Linux 38. 

The testbed contains two of these boards. 

## HiFive Unmatched
<img src="/images/HiFive_unmatched.jpg" width="150" height="150" align="left"/>
The HiFive Unmatched is a Mini-ITX board powered by the SiFive Freedom U740 four-core, 64-bit dual-issue, superscalar RISC-V processor. The board includes 16GB of DDR4 RAM, 128GB of M.2 PCIe Gen 3 x4 SSD module storage and Gigabit ethernet, running Ubuntu 21.04 (hirsute) Linux. 

The system is configured with Open MPI 4.1, PETSc, LAPACK, BLAS, FFTW 3.3, HDF5, NetCDF, Python 3.9, Clang / LLVM 12.0, GCC and  GNU Fortran 10.3. 

## DongshanNezhaSTU Allwinner D1-H
<img src="/images/DongshanNezhaSTU.png" width="150" height="150" align="right"/>
This SBC contains the Allwinner D1 C906 RISC-V processor running at up to 1GHz. A single XuanTie C906 core implementing the RISC-V64 architecture (RV64IMAFDCV), it is equipped with 512MB DDR3 RAM and Gigabit ethernet. 

The testbed contains four of these boards. 

## Lichee RV Dock
<img src="/images/RV-Dock.jpg" width="150" height="150" align="left"/>
This is classed as a Linux development kit board, containing the Allwinner D1 running at up to 1GHz. Containing a single XuanTie C906 core (RV64IMAFDCV), this is an early mass-produced vector extended ISA core. There is 512MB of DDR3 on the board and ethernet via an extension board.

## MangoPi MQ-Pro
<img src="/images/MangoPi.webp" width="150" height="150" align="right"/>
An Allwinner D1 RISC-V based SBC, this contains the  XuanTie C906 core (RV64IMAFDCV), 1GB of DDR3 RAM, and ethernet via an extension board.

The testbed contains two of these boards.

## StarFive VisionFive V1
<img src="/images/VisionFive-V1.webp" width="150" height="150" align="left"/>
This board contains StarFive’s JH7100 SoC which is equipped with a U74 64-bit high-performance RISC-V dual-core processor with 2MB L2 cache, running at 1.5GHz. The JH7100 SoC also contains a deep learning processing engine and image/video processing sub-system which are available for use by codes. The board contains 8GB of DDR4 RAM, and gigabit ethernet.

The testbed contains two of these boards.

# FPGA hosted soft-cores

Our soft-cores currently run on an ADM-PA101 which is a Versal Prime equipped with 16GB DDR. At the time of writing this is driven via the host using PCIe and the Mercury platform to launch executables and manage memory transfer.
