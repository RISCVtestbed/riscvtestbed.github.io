---
title: "Benchmarks update"
layout: post
categories:
  - Issues
tags:
last_modified_at: 2022-11-21
---


Here we summarize the result of some benchmark tests performed on RISC-V [hardware]({% link _documentation/hardware.md %}) available as part of the testbed.

### RAJAPerf

[RAJAPerf](https://github.com/LLNL/RAJAPerf) tests a suite of loop-based computational kernels relevant for HPC.

#### DongshanNezhaSTU (Allwinner D1-H)

The DongshanNezhaSTU board contains the Allwinner D1 C906, which supports the [V vector extension]({% link _posts/issues/2022-11-23-compiling-vector.md %}) (version 0.7.1). The chip contains 128-bit wide vector registers and supports element sizes up to 32-bit. Because of this, we expect speedup from vectorizing routines with single-precision floating point numbers. The following plots show the speedup for RAJAPerf with float datatype, compiled using gcc8.4 without vector extension (i.e. `-march=rv64gc -O3`) and with vector extension (i.e. `-march=rv64gcv0p7 -O3`):

<img src="/images/rajaperf-float-speedup-basic.png"/>

<img src="/images/rajaperf-float-speedup-lcals.png"/>

<img src="/images/rajaperf-float-speedup-polybench.png"/>

<img src="/images/rajaperf-float-speedup-stream.png"/>

<img src="/images/rajaperf-float-speedup-apps.png"/>

<img src="/images/rajaperf-float-speedup-algorithm.png"/>

We observe that many kernels experience significant speedup from (auto-)vectorization, including stream kernels like Stream_ADD, Stream_COPY, Stream_MUL, Stream_TRIAD, as well as linear algebra routines such as Basic_SAXPY, Polybench_2MM, Polybench_GEMM, Polybench_GEMVER.

### ExCALIBUR benchmarks update

The ExCALIBUR project collects a series of [benchmarks](https://github.com/ukri-excalibur/excalibur-tests) for testing HPC systems. The following were built successfully and ran with the following results:

#### Sombrero

##### HiFive Unmatched

Size: small (global volume 32x24x24x24)

Single MPI-task (one core)

```
SOMBRERO 1
[MAIN][0] Case 1: 43.95e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 1: inf flop per byte communicated
[MAIN][0] Case 1: 0.85 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 1 43.95 Gflops in 732.286438 seconds
[RESULT][0] Case 1 0.06 Gflops/seconds

SOMBRERO 2
[MAIN][0] Case 2: 93.25e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 2: inf flop per byte communicated
[MAIN][0] Case 2: 1.03 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 2 93.25 Gflops in 1088.603271 seconds
[RESULT][0] Case 2 0.09 Gflops/seconds

SOMBRERO 3
[MAIN][0] Case 3: 93.25e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 3: inf flop per byte communicated
[MAIN][0] Case 3: 1.03 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 3 93.25 Gflops in 1326.380493 seconds
[RESULT][0] Case 3 0.07 Gflops/seconds

SOMBRERO 4
[MAIN][0] Case 4: 160.77e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 4: inf flop per byte communicated
[MAIN][0] Case 4: 1.17 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 4 160.77 Gflops in 1938.877197 seconds
[RESULT][0] Case 4 0.08 Gflops/seconds

SOMBRERO 5
[MAIN][0] Case 5: 350.46e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 5: inf flop per byte communicated
[MAIN][0] Case 5: 1.35 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 5 350.46 Gflops in 4686.009277 seconds
[RESULT][0] Case 5 0.07 Gflops/seconds

SOMBRERO 6
[MAIN][0] Case 6: 948.47e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 6: inf flop per byte communicated
[MAIN][0] Case 6: 1.57 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 6 948.47 Gflops in 11141.337891 seconds
[RESULT][0] Case 6 0.09 Gflops/seconds
```

4 MPI-tasks (4 cores)

```
SOMBRERO 1
[MAIN][0] Case 1: 43.95e9 floating point operations and 842.27e6 bytes communicated (both directions included)
[MAIN][0] Case 1: 52.18 flop per byte communicated
[MAIN][0] Case 1: 0.71 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 1 43.95 Gflops in 199.588638 seconds
[RESULT][0] Case 1 0.22 Gflops/seconds

SOMBRERO 2
[MAIN][0] Case 2: 93.25e9 floating point operations and 1263.40e6 bytes communicated (both directions included)
[MAIN][0] Case 2: 73.81 flop per byte communicated
[MAIN][0] Case 2: 0.88 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 2 93.25 Gflops in 297.452484 seconds
[RESULT][0] Case 2 0.31 Gflops/seconds

SOMBRERO 3
[MAIN][0] Case 3: 93.25e9 floating point operations and 1263.40e6 bytes communicated (both directions included)
[MAIN][0] Case 3: 73.81 flop per byte communicated
[MAIN][0] Case 3: 0.88 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 3 93.25 Gflops in 353.340668 seconds
[RESULT][0] Case 3 0.26 Gflops/seconds

SOMBRERO 4
[MAIN][0] Case 4: 160.77e9 floating point operations and 1684.54e6 bytes communicated (both directions included)
[MAIN][0] Case 4: 95.44 flop per byte communicated
[MAIN][0] Case 4: 1.01 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 4 160.77 Gflops in 515.570129 seconds
[RESULT][0] Case 4 0.31 Gflops/seconds

SOMBRERO 5
[MAIN][0] Case 5: 350.46e9 floating point operations and 2526.81e6 bytes communicated (both directions included)
[MAIN][0] Case 5: 138.70 flop per byte communicated
[MAIN][0] Case 5: 1.20 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 5 350.46 Gflops in 1218.988403 seconds
[RESULT][0] Case 5 0.29 Gflops/seconds

SOMBRERO 6
[MAIN][0] Case 6: 948.47e9 floating point operations and 4211.34e6 bytes communicated (both directions included)
[MAIN][0] Case 6: 225.22 flop per byte communicated
[MAIN][0] Case 6: 1.43 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 6 948.47 Gflops in 2872.089600 seconds
[RESULT][0] Case 6 0.33 Gflops/seconds

```

Notes:

- Medium size crashes for HiFive Unmatch (U740)
- Small size crashes for Lichee RV Dock (D1 C906)

#### HPGMG

#### HiFive Unmatched : 4 cores

GCC 12.1.0, with OpenMP
./hpgmg-fv 7 8

```
==== Performance Summary ======================================================
  h=3.906250000000000e-03  DOF=1.677721600000000e+07  time=110.205145  DOF/s=1.522e+05  MPI=1  OMP=4
  h=7.812500000000000e-03  DOF=2.097152000000000e+06  time=13.644428  DOF/s=1.537e+05  MPI=1  OMP=4
  h=1.562500000000000e-02  DOF=2.621440000000000e+05  time=1.716166  DOF/s=1.527e+05  MPI=1  OMP=4
```

#### Lichee RV Dock : 1 core

GCC 12.2.0
./hpgmg-fv 7 7

```
===== Performance Summary ======================================================
  h=7.812500000000000e-03  DOF=2.097152000000000e+06  time=58.475712  DOF/s=3.586e+04  MPI=1  OMP=1
  h=1.562500000000000e-02  DOF=2.621440000000000e+05  time=7.191099  DOF/s=3.645e+04  MPI=1  OMP=1
  h=3.125000000000000e-02  DOF=3.276800000000000e+04  time=0.882824  DOF/s=3.712e+04  MPI=1  OMP=1
```

#### Other issues

- Grid: takes too long to build
- SWIFTSIM: Ticks not defined for RISC-V
- CP2K: liblsan not supported for RISC-V
