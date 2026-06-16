---
title: "International workshop on RISC-V for HPC at ISC"
icon: /images/podium.png
icon_alt: Award icon
categories:
  - Workshops
layout: post
group: workshops
order: 10
---

## Workshop details
Co-located with ISC 2026, this is a half day afternoon workshop on Friday 26th June 2026 in Hamburg, Germany in Hall X10 - 1st Floor of the Congress Center Hamburg.

The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits of this technology with domain scientists, tool developers, and supercomputer operators. There are numerous potential advantages that RISC-V can provide to HPC and, assuming the significant rate of growth of this technology to date continues, as we progress further into the decade it is highly likely that RISC-V will become more relevant and widespread for HPC workloads. This workshop aims to bring together those already looking to popularise RISC-V in the field of HPC with the supercomputing community at-large. Sharing benefits of the architecture, success stories, and techniques we hope to further popularise the technology and increase involvement by the community in this exciting technology. 

## Workshop schedule

| Time        | Session           | Speaker  |
| ------------- |:-------------:| -----:|
| 14:00 - 14:05 | Welcome and aims | Nick Brown |
| 14:05 - 14:40 | Keynote: Disruptive Next Generation HPC-AI Accelerated Computing Platform | Doug Norton |
| 14:40 - 15:00 | Is RISC-V Ready for Machine Learning? Portable Gaussian Processes Using Asynchronous Tasks ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/isc26-workshop/#is-risc-v-ready-for-machine-learning-portable-gaussian-processes-using-asynchronous-tasks)) | Alexander Strack |
| 15:00 - 15:20 | Great Expectations: Benchmarking the Real-World Performance of RVV 1.0 in HPC ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/isc26-workshop/#great-expectations-benchmarking-the-real-world-performance-of-rvv-10-in-hpc))  | Prateek Chawla |
| 15:20 - 15:40 | Vector-length agnostic varint decoding on RISC-V ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/isc26-workshop/#performance-evaluation-of-a-vectorized-memcpy-implementation-on-a-multi-core-rv64-platform))  | Marco Vogel |
| 15:40 - 16:00 | Performance Evaluation of a Vectorized memcpy Implementation on a multi-core RV64 Platform ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/isc26-workshop/#performance-evaluation-of-a-vectorized-memcpy-implementation-on-a-multi-core-rv64-platform))  | Manolis Ploumidis |
| 16:00 - 16:30 | Coffee Break | |
| 16:30 - 16:45 | Vendor Talk: NextSilicon  | Dan Shechter |
| 16:45 - 17:00 | Evaluation of BeeGFS on a RISC-V Cluster for HPC Storage Infrastructure ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/isc26-workshop/#evaluation-of-beegfs-on-a-risc-v-cluster-for-hpc-storage-infrastructure)) | Yogeshwar Sonawane |
| 17:00 - 17:20 | Exploring spectral element methods on the Tenstorrent RISC-V accelerator ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/isc26-workshop/#exploring-spectral-element-methods-on-the-tenstorrent-risc-v-accelerator)) | Daniyal Arshad |
| 17:20 - 17:40 | Performance Evaluation of Fast Fourier Transforms on Emerging RISC-V Hardware with Vector Extension Support ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/isc26-workshop/#performance-evaluation-of-fast-fourier-transforms-on-emerging-risc-v-hardware-with-vector-extension-support)) | Daniel Seibel |
| 17:40 - 18:00 | Is RISC-V Ready for Massively Parallel Astrophysical Codes? ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/isc26-workshop/#is-risc-v-ready-for-massively-parallel-astrophysical-codes)) | Nitin Shukla |

## Abstracts

### Is RISC-V Ready for Machine Learning? Portable Gaussian Processes Using Asynchronous Tasks

**_Presenter: Alexander Strack_**

Gaussian processes are widely used in machine learning domains but remain computationally demanding, limiting their efficient scalability across diverse hardware platforms. The GPRat library targets these challenges with the help of the asynchronous many-task runtime HPX. In this work, we extend GPRat to enable portability across multiple hardware architectures and evaluate its performance on representative x86-64, ARM, and RISC-V chips. We conduct node-level strong-scaling and problem-size-scaling benchmarks for Gaussian Process prediction and hyperparameter optimization to assess single-core performance, parallel scalability, and architectural efficiency.

Our results show that while the x86-64 Zen2 chip achieves a 58% single-core performance advantage over the ARM-based Fujitsu A64FX, superior parallel scaling allows the 48-core ARM chip to outperform the 64-core Zen2 by 9% at full node utilization. The evaluated SOPHON SG2042 RISC-V chip exhibits substantially lower performance and weaker scalability, with single-core performance lagging by up to a factor of 14 and large-scale parallel workloads showing slowdowns of up to a factor of 25. For problem-size scaling, ARM and x86-64 systems demonstrate comparable performance within 25%. These findings highlight the growing competitiveness of ARM-based processors and emphasize the importance of wide-register vectorization support and memory subsystem improvements for upcoming RISC-V platforms.

### Great Expectations: Benchmarking the Real-World Performance of RVV 1.0 in HPC

**_Presenter: Prateek Chawla_**

Following the ratification of the RVV 1.0, new commercially available silicon has been adopting the extension. This paper revisits the question of RISC-V viability for High-Performance-Computing (HPC) by benchmarking the latest RVV-1.0-capable hardware (SiFive x280, SpacemiT x60/x100/A100 and T-Head C920v2). We assess these platforms using standard HPC benchmarks (BLAS, FFTW, HPL, HPCG) and synthetic workloads (STREAM, FMA throughput). Our findings show that while RVV 1.0 delivers significant performance improvements over scalar execution, hardware-specific implementation challenges remain. We detail these performance characteristics and discuss the remaining hurdles for RISC-V to become a mainstay in the HPC landscape.

### Vector-length agnostic varint decoding on RISC-V

**_Presenter: Marco Vogel_**

Variable-length integers (varints) are widely used in data serialization, compression, and database systems for their space efficiency, but their irregular structure makes decoding computationally expensive. While \mbox{vectorized} varint decoders exist for x86, and ARM NEON support exists for alternative formats such as Stream VByte, no \mbox{vectorized} decoder for the standard LEB128 format has been developed beyond x86. We present the first vectorized varint decoding algorithm for the RISC-V Vector Extension (RVV). Our approach leverages RVV's vector-length-agnostic design to create a decoder that adapts to different vector lengths without modification. Evaluation on two RISC-V platforms with distinct microarchitectures demonstrates up to 2.5x speedup over optimized scalar implementations, with performance varying across different varint distributions. Our results establish vectorized varint decoding as a viable optimization for RISC-V systems and provide insights into the practical considerations of designing vector-length-agnostic algorithms.

### Performance Evaluation of a Vectorized memcpy Implementation on a multi-core RV64 Platform

**_Presenter: Manolis Ploumidis_**

In this paper we explore the performance potential of vectorized memcpy for the Milk-V Pioneer system, a 64-core RISC-V development platform which offers support for the RISC-V Vector Extension (RVV). We explore three different memcpy implementation approaches: a scalar (non-vectorized) libc implementation, a compiler-autovectorized version, and a manually vectorized version using inline assembly with configurable element width (SEW) and vector register grouping (LMUL) parameters. Our results reveal that all vectorized memcpy implementations exhibit significant performance gains over the scalar one. Benefit can be as high as 88% for small buffers. We spot an interesting performance degradation phenomenon for larger buffers and larger lmul values. We also show that concurrent vectorized memcpy stream exhibit degraded performance when these streams share the path to the L2. Finally, we explore the performance potential of vectorized memcpy in the context of a custom MPI\_Bcast implementation. The benefit over a scalar implementation becomes more apparent for larger buffers and scenarios with no L2 sharing and can be as high as 26%.

### Evaluation of BeeGFS on a RISC-V Cluster for HPC Storage Infrastructure

**_Presenter: Yogeshwar Sonawane_**

The rapid emergence of the open RISC-V instruction set architecture (ISA) has accelerated research on compilers, operating systems, and compute workloads, yet the storage layer of high-performance computing (HPC) systems remains relatively unexplored on native RISC-V platforms. In our previous work, we demonstrated the deployment of the Lustre parallel file system on a RISC-V cluster. Building on that effort, this paper investigates the integration and performance behavior of the BeeGFS parallel file system on a RISC-V cluster based on StarFive VisionFive2 nodes. Storage performance is evaluated using IOR, MDTest, IO500, and Elbencho benchmarks. A comparable ARM-based Raspberry Pi 4B cluster was configured as a baseline platform for evaluating the RISC-V system. The results demonstrate the feasibility of BeeGFS on RISC-V and provide insights into distributed storage performance on emerging open hardware platforms.

### Exploring spectral element methods on the Tenstorrent RISC-V accelerator

**_Presenter: Daniyal Arshad_**

The growing availability of commodity RISC-V hardware has sparked interest in its use for High Performance Computing (HPC), with PCIe accelerator cards offering a practical near-term pathway to adoption. The Tenstorrent Wormhole is one example, with dedicated vector and matrix units across 128 Tensix cores, and is widely available.

In this paper we explore porting the AX kernel of Nekbone, a widely used HPC mini-application derived from the Gordon Bell Prize-winning Nek5000 spectral element solver, onto the Wormhole accelerator. This kernel evaluates the Poisson operator and we describe the mapping of the algorithm onto the Tensix. Initial performance results reveal that host-side data transposition, required for the z-direction gradient computation, is a severe bottleneck. Consequently we investigated two optimisation strategies that yield dramatic improvements, achieving 242.97 GFLOPS for 100,000 elements across 128 Tensix cores, outperforming a 24-core Xeon Platinum CPU and drawing approximately eight times less power than the CPU and GPU and 3 times less than an AMD U280 FPGA.

### Performance Evaluation of Fast Fourier Transforms on Emerging RISC-V Hardware with Vector Extension Support

**_Presenter: Daniel Seibel_**

This manuscript presents a performance evaluation of Fast Fourier Transform (FFT) implementations on emerging processors supporting the RISC-V Vector Extension (RVV 1.0). By introducing juFFTe, a light-weight high-performance library for discrete Fourier transforms, it is demonstrated how effective vectorization of performance-critical FFT kernels can be achieved on RVV-enabled hardware. Comprehensive benchmarks on three RVV 1.0-ready processors, the SiFive X280, the X100 core of the SpacemiT K3 and the C920v2 core of the Sophon SG2044, reveal substantial performance improvements of juFFTe over the widely used FFTW3 library. Although the RVV-enabled platforms show promising results at this stage of development, a comparison with AMD’s Zen 5 architecture indicates that RISC-V needs further maturing to reach the performance of established micro-architectures.

### Is RISC-V Ready for Massively Parallel Astrophysical Codes?

**_Presenter: Nitin Shukla_**

We present a performance and portability evaluation of three well-established astrophysical production codes, namely iPIC3D, PLUTO, and OpenGadget3, on a Sophgo SG2044 RISC-V processor, with comparisons to AMD EPYC 9554 (x86) and NVIDIA GH200 Grace (ARM) systems. These applications represent memory-bound, compute-bound, and hybrid workloads, respectively. Numerical correctness is verified across all platforms, confirming portability. RISC-V shows consistently lower performance, with slowdowns of about $3-6\times$ relative to x86 and $5-9\times$ relative to ARM. The gap is mainly due to limited memory bandwidth, shared cache constraints, narrower 128-bit vector units, and lower clock frequency. Memory-bound kernels are most affected, where early bandwidth saturation and L2 cache contention reduce scalability at higher thread counts. Hybrid MPI+OpenMP configurations reveal a trade-off between memory contention and communication overhead, with intermediate configurations achieving the best performance. These results indicate that RISC-V can support scientific workloads, although further hardware and software improvements are needed for competitive performance.

## Organisation 

### Organising committee

* Nick Brown (EPCC at the University of Edinburgh)
* Daniele Gregori (E4 Computer Engineering)
* Teresa Cervero (BSC)
* Matt Turner (HPE)
* Manolis Marazakis (FORTH)

### Program committee

* Oliver Perks (Rivos)
* John Leidel (Tactical Computing Labs)
* Maurice Jamieson (EPCC)
* Ruyman Reyes (Codeplay)
* Luis Plana (BSC)
* Joseph Lee (EPCC)
* Luc Berger-Vergait (Sandia National Laboratories)
* Chris Taylor (Tactical Computing Labs)
