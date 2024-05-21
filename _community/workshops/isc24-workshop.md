---
title: "Fourth International workshop on RISC-V for HPC"
icon: /images/podium.png
icon_alt: Award icon
layout: post
group: workshops
order: 4 
---

## Workshop details
Co-located with ISC 2024, this is a half day morning workshop on Thursday 16th May 2024 in Hamburg, Germany in Hall Y8 - 2nd Floor of the Congress Center Hamburg.

The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits of this technology with domain scientists, tool developers, and supercomputer operators. There are numerous potential advantages that RISC-V can provide to HPC and, assuming the significant rate of growth of this technology to date continues, as we progress further into the decade it is highly likely that RISC-V will become more relevant and widespread for HPC workloads. This workshop aims to bring together those already looking to popularise RISC-V in the field of HPC with the supercomputing community at-large. Sharing benefits of the architecture, success stories, and techniques we hope to further popularise the technology and increase involvement by the community in this exciting technology. 

## Workshop schedule

| Time        | Session           | Speaker  |
| ------------- |:-------------:| -----:|
| 9:00 - 9:05 | Welcome and aims | Nick Brown |
| 9:05 - 9:40 | Keynote: The European PILOT: RISC-V accelerators for HPC and AI ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#keynote-the-european-pilot-risc-v-accelerators-for-hpc-and-ai)) | Carlos Puchol |
| 9:40 - 10:00 | Preparing to Hit the Ground Running: Adding RISC-V support to EESSI ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#preparing-to-hit-the-ground-running-adding-risc-v-support-to-eessi))| Julián Morillo |
| 10:00 - 10:20 | Scaling an Augmented RISC-V Processor Design with High-Level Synthesis ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#scaling-an-augmented-risc-v-processor-design-with-high-level-synthesis))| Johannes Schoder |
| 10:20 - 10:40 | Integrating RISC-V SIMT and Scalar Cores: Loosely to Tightly Coupled ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#integrating-risc-v-simt-and-scalar-cores-loosely-to-tightly-coupled))| Sooraj Chetput Venkataraghavan | 
| 10:40 - 11:00 | Performance Analysis of BERT on RISC-V Processors with SIMD Units ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#performance-analysis-of-bert-on-risc-v-processors-with-simd-units)) | Francisco Igual |
| 11:00 - 11:30 | Coffee Break | |
| 11:30 - 11:50 | Performance characterisation of the 64-core SG2042 RISC-V CPU for HPC ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#performance-characterisation-of-the-64-core-sg2042-risc-v-cpu-for-hpc)) | Nick Brown |
| 11:50 - 12:10 | RISE: RISC-V Software Ecosystem ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#rise-risc-v-software-ecosystem)) | Oliver Perks |
| 12:10 - 12:25 | Vendor talk: Semidynamics ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#vendor-talk-semidynamics)) ([slides](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/assets/files/isc24/SemiDynamics.pdf))| Volker Politz |
| 12:25 - 12:40 | Vendor talk: Codasip ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#vendor-talk-codasip)) ([slides](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/assets/files/isc24/Codasip.pdf))| Karel Masařík |
| 12:40 - 12:55 | Vendor talk: E4 Computer Engineering ([abstract](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/#vendor-talk-e4-computer-engineering)) | Daniele Gregori |
| 12:55 - 13:00 | Summary and workshop close | Nick Brown |


## Abstracts

### Keynote: The European PILOT: RISC-V accelerators for HPC and AI

**_Presenter: Carlos Puchol_**

The EUPILOT project will design, build, and validate the first EU-based accelerator platform for HPC (including compute-intensive AI), covering the whole spectrum of required technologies with European assets. This includes RISC-V based highly efficient and high-performance accelerators, and this project will provide a full accelerator technology as a foundation for European Exascale systems. Moreover, the capabilities of the RISC-V ecosystem will be further extended into the HPC and HPDA domains, and Europe will have the opportunity to drive the adoption of RISC-V’s rapidly growing ecosystem.  

On the hardware side, EUPILOT aims to build an end-to-end demonstrator of accelerators that could be used in a pre-exascale system. The project will produce three chip tapeouts. Increasing complexity and capability with each generation, these will contain a vector accelerator with up to 16 cores and a machine learning and stencil accelerator with up to eight cores, respectively. The accelerator chips will be mounted along low-power double data rate (LPDDR) memory, forming the chip modules that will be installed into standard accelerator boards. 

The hardware will only deliver benefits to users with a strong software ecosystem. Our stack will support traditional HPC applications, AI workloads as well as novel HPC/AI applications. Standards (e.g. OpenMP and MPI targeting HPC), open-software frameworks (e.g. Arax and oneDNN targeting AI) and European developments (e.g. DaCe, TAMPI or DLB) will be supported and provide programming productivity and usability. 

### Preparing to Hit the Ground Running: Adding RISC-V support to EESSI

**_Presenter: Julián Morillo_**

RISC-V-based high-performance processors and accelerators gain more interest for running scientific workloads. While RISC-V is already supported in Linux distributions such as Debian Sid and Ubuntu, a comprehensive stack of performance-optimized software installations is missing. For x86 64 and aarch64, EESSI already streams such software installations to any machine worldwide. Hence, we were also interested in whether one could provide such software stacks for RISC-V-based systems. The benefit would not only be that a stack with software installations optimized for RISC-V becomes easily accessible, but it would also integrate a development environment with toolchains and dependencies. This would help port more software to RISC-V, thereby increasing the platform’s viability for running scientific workloads. In this paper, we describe our work on supporting the RISC-V ISA in EESSI - what issues we encountered and how we solved them. We explain our progress on implementing the core components of EESSI - CernVM-FS and Gentoo Prefix - and discuss lessons learned that could provide valuable insights for software developers porting codes to RISC-V. In summary, our experience is that researchers will soon use RISC-V.

### Scaling an Augmented RISC-V Processor Design with High-Level Synthesis

**_Presenter: Johannes Schoder_**

Motivated by major applications in machine learning, novel hardware architectures are increasingly implementing on-chip accelerators. The open architecture of the RISC-V ISA is suited to match this current trend by supporting the flexibility to add instructions for domain-specific architectures. Also, recent advances in tools for high-level synthesis reduce the required effort for the hardware design process significantly.
Furthermore, program transformations rewriting a given computer code with some specified aim are a powerful software technique which, today, have not benefitted to a large extent from hardware support. The goal of this note is to analyze the potential of bringing together a custom scalable RISC-V processor design written for high-level synthesis with a particular type of program transformation on individual elementary operations. In these transformations, each scalar operation is augmented with a so-called transformed operation changing the semantics of the given program. An augmented RV32I processor design is introduced that implements not only the original operation but also its transformed operation in hardware.
The new design is simulated for the AMD Alveo U50 Data Center Accelerator Card. For each operation given in the original program, it enables the computation of 63 transformed operations in parallel with a lower bound on the speedup of roughly 13.

### Integrating RISC-V SIMT and Scalar Cores: Loosely to Tightly Coupled

**_Presenter: Sooraj Chetput Venkataraghavan_**

This paper investigates the integration of SIMT and scalar cores using the RISC-V based Vortex GPGPU. Initially, we detail a conventional integration with Purdue's SoCET SoC AFTx07 that follows the standard host-device CPU-GPU model found in contemporary products. Subsequently, we propose two innovative architectures designed to address control flow divergence, which impedes efficiency in parallel computing by causing threads to follow divergent execution paths. The first architecture introduces a system where threads are statically prioritized based on degrees of divergence: high-priority threads (highly divergent) are allocated to a scalar core, and lower-priority (less divergent) ones to the SIMT core, based on modifications to the Vortex GPU. Although preliminary results show improved performance for scalar core threads, the static nature of thread priority assignment results in unpredictable performance enhancements due to the scheduler's limited foresight on runtime fluctuations of thread divergence. The second architecture, currently under development, proposes a mechanism for runtime thread migration, setting a foundation for a system capable of adjusting to runtime conditions. A future, conceptual third architecture aims to dynamically assess the divergence of each thread, optimizing the integration of SIMT and scalar cores for advanced computing. This progression outlines a strategic approach to mitigate control flow divergence, promising a significant leap towards achieving higher efficiency in parallel processing systems.

### Performance Analysis of BERT on RISC-V Processors with SIMD Units

**_Presenter: Francisco Igual_**

Following the recent advances in open hardware in general, and RISC-V architectures in particular, we analyze the performance of transformer encoder inference on three low-power platforms with this type of architecture. For this purpose, we conduct a detailed profile of the inference process for two representative members of the BERT family, identifying the main bottlenecks and opportunities for optimisation on three RISC-V processors equipped with floating-point SIMD (single instruction, multiple data) units: XuanTie C906, C908, and C910.

### Performance characterisation of the 64-core SG2042 RISC-V CPU for HPC

**_Presenter: Nick Brown_**

Whilst RISC-V has grown phenomenally quickly in embedded computing, it is yet to gain significant traction in High Performance Computing (HPC). However, as we move further into the exascale era, the flexibility offered by RISC-V has the potential to be very beneficial in future supercomputers especially as the community places an increased emphasis on decarbonising its workloads. Sophon's SG2042 is the first mass produced, commodity available, high-core count RISC-V CPU designed for high performance workloads. First released in summer 2023, and at the time of writing now becoming widely available, a key question is whether this is a realistic proposition for HPC applications.

In this paper we use NASA's NAS Parallel Benchmark (NPB) suite to characterise performance of the SG2042 against other CPUs implementing the RISC-V, x86-64, and AArch64 ISAs. We find that the SG2042 consistently outperforms all other RISC-V solutions, delivering between a 2.6 and 16.7 performance improvement at the single core level. When compared against the x86-64 and AArch64 CPUs, which are commonplace for high performance workloads, we find that the SG2042 performs comparatively well with computationally bound algorithms but decreases in relative performance when the algorithms are memory bandwidth or latency bound. Based on this work, we identify that performance of the SG2042's memory subsystem is the greatest bottleneck.

### RISE: RISC-V Software Ecosystem

**_Presenter: Oliver Perks_**

The RISC-V Software Ecosystem (RISE) project is a collaborative effort led by industry leaders with a mission to accelerate the development of open source software for the RISC-V architecture. Working in close partnership with RISC-V International to expedite delivery of more innovative RISC-V products into the market, the target market segments include mobile, consumer electronics, datacenter & HPC, and automotive. The key missions of RISE include accelerating the development of open source software for RISC-V, raising the quality of RISC-V Platform software implementations and pushing the RISC-V Software ecosystem forward. It is important that efforts in RISC-V software development complement each other, and in this talk I will be exploring several activities that are currently underway in RISE that can benefit the HPC community.

### Vendor talk: Semidynamics

**_Presenter: Volker Politz_**

Founded in Barcelona on 2016, Semidynamics is a European supplier of RISC-V IP cores, specialising in high-bandwidth high-performance cores with vector units and tensor unit extensions targeted at machine learning and artificial intelligence applications. As a proud participant in the European Processor Initiative (EPI), our two flagship cores are the Atrevido and Avispado, with the former ideal for data-centre, HPC and AI, and the later for embedded computing and AI on the edge. The customisable and flexible nature of RISC-V enables us to develop a variety of specialised hardware solutions that will be interesting to the HPC community, including the Gazzillion Misses feature which hides memory latency and can be beneficial for a wide range of HPC applications.

### Vendor talk: Codasip

**_Presenter: Karel Masařík_**

One of Europe’s leading RISC-V companies, and with billions of chips already using our technology, Codasip is a processor solutions company which uniquely enables developers to differentiate their products. We deliver custom compute through the combination of the open RISC-V ISA, Codasip Studio processor design automation and high-quality processor IP. Our innovative approach enables developers to easily customize and differentiate their designs, for instance developing high-performing parts for the HPC community. I will describe Codasip's unique approach to custom RISC-V hardware and introduce our Codasip Labs tool which bridges the gap between innovative research and commercialization.

### Vendor talk: E4 Computer Engineering

**_Presenter: Daniele Gregori_**

Founded in 2002, E4 Computer Engineering is a Solution Provider recognized internationally for its high level of expertise in the fields of HPC, High Performance Data Analytics, AI and Deep Learning. Working with the most prestigious universities and with important research and computing centres, such as CERN in Geneva, E4 delivers state of the art computing solutions. Heavily involved in RISC-V, E4 developed Monte Cimone which is one of the world's first RISC-V HPC clusters, enabling first generation RISC-V hardware to be used by HPC developers. In this talk I will describe our work to date with RISC-V, and then introduce the new RISC-V products and technology areas that we are currently working with.
