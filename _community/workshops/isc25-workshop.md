---
title: "International workshop on RISC-V for HPC at ISC"
icon: /images/podium.png
icon_alt: Award icon
categories:
  - Workshops
layout: post
group: workshops
order: 8
---

## Workshop details
<img align="right" src="https://www.hdfgroup.org/wp-content/uploads/2019/02/ISC_hp_logo_small_72dpi_rgb.png">
Co-located with ISC 2025, this is a half day afternoon workshop on Friday 13th June 2025 in Hamburg, Germany in Hall X5 - 1st Floor of the Congress Center Hamburg.

The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits of this technology with domain scientists, tool developers, and supercomputer operators. There are numerous potential advantages that RISC-V can provide to HPC and, assuming the significant rate of growth of this technology to date continues, as we progress further into the decade it is highly likely that RISC-V will become more relevant and widespread for HPC workloads. This workshop aims to bring together those already looking to popularise RISC-V in the field of HPC with the supercomputing community at-large. Sharing benefits of the architecture, success stories, and techniques we hope to further popularise the technology and increase involvement by the community in this exciting technology. 

## Workshop schedule

| Time        | Session           | Speaker  |
| ------------- |:-------------:| -----:|
| 14:00 - 14:05 | Welcome and aims | Nick Brown |
| 14:05 - 14:40 | Keynote: RISC-V in HPC, the RVI perspective | Andrea Gallo |
| 14:40 - 15:00 | Parallel FFTW on RISC-V: A Comparative Study including OpenMP, MPI, and HPX | Alexander Strack |
| 15:00 - 15:20 | Monte Cimone v2: HPC RISC-V Cluster Evaluation and Optimization | Emanuele Venieri |
| 15:20 - 15:40 | Evaluating RISC-V processor as an alternative for High Performance Computing | Aniket Garade |
| 15:40 - 15:47 | Vendor talk |  |
| 15:47 - 15:54 | Vendor talk |  |
| 15:54 - 16:00 | Vendor talk |  |
| 16:00 - 16:30 | Coffee Break | |
| 16:30 - 16:50 | Evaluation of RVV-enabled COTS Platforms with Matrix Multiplication and EXO | Francisco Igual |
| 16:50 - 17:10 | RISC-V in HPC: a look into tools for performance monitoring | Fabio Banchelli |
| 17:10 - 17:30 | Advancing the RISC-V Performance Simulation Ecosystem with Data Prefetching | Luís Crespo |
| 17:30 - 17:50 | Exploring Fast Fourier Transforms on the Tenstorrent Wormhole | Jake Davies |
| 17:50 - 18:00 | Streamlining Fedora Linux Distributions for RISC-V: A Scalable and Automated Approach | Yogeshwar Sonawane |


## Abstracts

### Parallel FFTW on RISC-V: A Comparative Study including OpenMP, MPI, and HPX

**_Presenter: Alexander Strack_**

Rapid advancements in RISC-V hardware development move the focus from low-level optimizations to higher-level parallelization.
Recent RISC-V chips such as the SOPHON SG2042 chip have 64 cores, making efficient parallelization as crucial as for established x86-64 chips. In this work, we evaluate the parallel scaling of the widely used FFTW library on RISC-V for MPI and OpenMP.
We compare it to a 64-core AMD EPYC 7742 CPU side by side for different types of FFTW planning.
Additionally, we investigate the effect of memory optimization on RISC-V in HPX-FFT, a parallel FFT library based on the asynchronous many-task runtime HPX using an FFTW backend.

We generally observe a performance delta between the x86-64 and RISC-V chips of factor eight for double-precision 2D FFT.
Effective memory optimizations in HPX-FFT on x86-64 do not translate to the RISC-V chip. Using jemalloc with HPX on RISC-V results in significant performance improvements. FFTW with MPI shows good scaling up to 64 cores on x86-64 and RISC-V regardless of planning. In contrast, FFTW with OpenMP requires measured planning on both architectures to achieve good scaling up to 64 cores. The results of our study mark an early step on the journey to large-scale parallel applications running on RISC-V.

### Monte Cimone v2: HPC RISC-V Cluster Evaluation and Optimization

**_Presenter: Emanuele Venieri_**

Many RISC-V (RV) platforms and SoCs have been announced in recent years targeting the HPC sector, but only a few of them are commercially available and engineered to fit the HPC requirements. The Monte Cimone project targeted assessing their capabilities and maturity, aiming to make RISC-V a competitive choice when building a datacenter. Nowadays, Systems-on-chip (SoCs) featuring RV cores with vector extension, form factor and memory capacity suitable for HPC applications are available in the market, but it is unclear how compilers and open-source libraries can take advantage of its performance. In this paper, we describe the performance assessment of the upgrade of the Monte Cimone (MCv2) cluster with the Sophgo SG2042 processor on HPC workloads. Also adding an exploration of BLAS libraries optimization. The upgrade increases the attained node's performance by 127x on HPL DP FLOP/s and 69x on Stream Memory Bandwidth.

### Evaluating RISC-V processor as an alternative for High Performance Computing

**_Presenter: Aniket Garade_**

The current landscape of High-Performance Computing (HPC) systems is predominantly dominated by x86-based processors, as reflected by the Top 500 list, which showcases their processing power and software ecosystem maturity. However, ARM architectures are steadily gaining traction, driven by their energy efficiency and increasing support in the software ecosystem. Recently, the open-source RISC-V architecture has emerged as a potential alternative, offering flexibility. As RISC-V gains momentum, it is essential to assess its performance. This paper presents an in-depth evaluation of the performance of the RISC-V-based SOPHGO SG2042 processor, comparing it against prominent high-performance processors, including Intel Sapphire Rapids (SPR) and other widely used architectures, through a series of applications based on the Berkeley dwarfs. We assess the processor's performance across a diverse range of computational tasks, covering areas such as dense and sparse linear algebra, spectral methods, graph traversal, and more. We also compare performance in terms of memory & network bandwidth. Our results reveal that while the SG2042 demonstrates strong performance in specific tasks such as Combination Logic and Dynamic Programming, it lags behind in most other applications along with network and memory bandwidth efficiency. However, it shows notable improvements in scalability for some of the benchmarks. The paper provides valuable insights into the potential of RISC-V-based systems for high-performance computing, highlighting both their strengths and limitations. As RISC-V continues to mature, this research provides an objective analysis of the architecture's current performance and its potential for future competitiveness in the high-performance processor landscape.

### Evaluation of RVV-enabled COTS Platforms with Matrix Multiplication and EXO

**_Presenter: Francisco Igual_**

We conduct a detailed performance comparison of state-of-the-art commercial-off-the-shelf (COTS) RISC-V processors, equipped with single-instruction multiple-data (SIMD) units, using the general matrix-matrix multiplication (GEMM). To address the differences in the implementation of the RISC-V ISA (instruction set architecture) in general, and its RVV vector extension in particular, we use Exo as a tool to accelerate the development of a complete family of micro-kernels that take into account the different characteristics of the architectures and facilitate the generation of highly optimized realizations of GEMM. We show that, since the specific optimizations differ between targets (even if they are under the same RVV umbrella), automatic generation and analytical models are essential tools to identify the optimal realizations.

### RISC-V in HPC: a look into tools for performance monitoring

**_Presenter: Fabio Banchelli_**

This paper explores the current state of performance monitoring on RISC-V-based high-performance computing systems. We analyze hardware counter support across several commercial and experimental RISC-V platforms, highlighting the challenges and advancements in utilizing tools like perf and PAPI. We propose modifications to the Linux kernel to enable user-level access to hardware counters and evaluate the overhead of different instrumentation methods compared to x86. It is a work-in-progress contribution that aims to enhance performance analysis capabilities within the growing RISC-V ecosystem for HPC.

### Advancing the RISC-V Performance Simulation Ecosystem with Data Prefetching

**_Presenter: Luís Crespo_**

As processor speeds continue to outpace memory access times, memory latency remains a critical bottleneck in modern computing systems. Addressing this challenge requires effective memory access optimizations, such as data prefetching, which can anticipate memory requests and reduce stalls. Meanwhile, RISC-V has emerged as a compelling open-source alternative to proprietary ISAs with increasing adoption in domains ranging from embedded systems to high-performance computing. However, as RISC-V systems scale in complexity, there is a growing need for accurate and efficient performance modeling to guide architectural optimizations. Accordingly, this paper enhances the RISC-V Olympia trace-based performance simulator by extending it to support prefetching mechanisms. Additional contributions include modifications to the Spike simulator and the development of a complementary parser for generating an open-source simulation trace format. The effectiveness of these prefetching strategies is evaluated, demonstrating their potential to reduce memory access latency and enhance RISC-V system performance.

### Streamlining Fedora Linux Distributions for RISC-V: A Scalable and Automated Approach

**_Presenter: Yogeshwar Sonawane_**

The RISC-V architecture, renowned for its open-source foundation and extensibility, drives innovation in custom processor development across diverse applications. However, this flexibility results in hardware straying from the standard. Bootstrapping tailored Linux distributions for specific RISC-V profiles that deviate from mandated standardized extensions is challenging. This is particularly evident in embedded devices and proprietary server applications.
The issue is compounded by the absence of robust package management systems, making toolchain management and dependency resolution more complex. This paper highlights the limitations of existing approaches, such as Linux From Scratch (LFS), Buildroot and The Yocto Project. While these frameworks enable developing Linux distributions for unique RISC-V hardware configurations, their reliance on manual processes makes it time-consuming, difficult to maintain and scale poorly.
To address these challenges, we propose a novel methodology tailored to the RV64G extension set, subset of RISC-V RVI profile. The approach begins by leveraging existing RISC-V images and adapting core toolchains to meet target-specific requirements. It incorporates the Koji build system to facilitate systematic package rebuilding and dependency management. Furthermore, a Python-based automation tool is introduced to minimize manual intervention and streamline workflows.
This strategy reduces development effort, enhances organization, and enables scalable customization. It bridges software gaps, empowering developers to create tailored Linux distributions for specialized computing, and fostering broader adoption in academia and industry.
