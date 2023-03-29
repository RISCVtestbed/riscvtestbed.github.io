---
title: "Benchmarks update"
layout: post
categories:
  - Success
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

<img src="/images/rajaperf-float-speedup-polybench.png"/>∂

<img src="/images/rajaperf-float-speedup-stream.png"/>

<img src="/images/rajaperf-float-speedup-apps.png"/>

<img src="/images/rajaperf-float-speedup-algorithm.png"/>

We observe that many kernels experience significant speedup from (auto-)vectorization, including stream kernels like Stream_ADD, Stream_COPY, Stream_MUL, Stream_TRIAD, as well as linear algebra routines such as Basic_SAXPY, Polybench_2MM, Polybench_GEMM, Polybench_GEMVER.
