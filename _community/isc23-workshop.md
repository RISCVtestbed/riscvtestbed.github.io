---
title: "First International workshop on RISC-V for HPC"
icon: /images/podium.png
icon_alt: Award icon
---

## Workshop details
Co-located with ISC 2023, this is a half day afternoon workshop is on Thursday 25th May 2023 in Hamburg, Germany. The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits of this technology with domain scientists, tool developers, and supercomputer operators. There are numerous potential advantages that RISC-V can provide to HPC and, assuming the significant rate of growth of this technology to date continues, as we progress further into the decade it is highly likely that RISC-V will become more relevant and widespread for HPC workloads. This workshop aims to bring together those already looking to popularise RISC-V in the field of HPC with the supercomputing community at-large. Sharing benefits of the architecture, success stories, and techniques we hope to further popularise the technology and increase involvement by the community in this exciting technology. 

## Workshop schedule

| Time        | Session           | Speaker  |
| ------------- |:-------------:| -----:|
| 14:00 - 14:05 | Welcome and aims | Nick Brown |
| 14:05 - 14:40 | Keynote: Paving the Road for RISC-V Supercomputers with Open Hardware ([abstract](keynote-paving-the-road-for-risc-v-supercomputers-with-open-hardware))| Luca Benini |
| 14:40 - 15:00 | Evaluation of HPC Workloads Running on Open-Source RISC-V Hardware ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#evaluation-of-hpc-workloads-running-on-open-source-risc-v-hardware))| Clay Hughes |
| 15:00 - 15:20 | Test-driving RISC-V Vector hardware for HPC ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#test-driving-risc-v-vector-hardware-for-hpc))| Joseph Lee |
| 15:20 - 15:40 | Software Development Vehicles to enable extended and early co-design: a RISC-V and HPC case of study ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#software-development-vehicles-to-enable-extended-and-early-co-design-a-risc-v-and-hpc-case-of-study))| Filippo Mantovani | 
| 15:40 - 16:00 | Challenges and Opportunities for RISC-V Architectures towards Genomics-based Workloads ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#challenges-and-opportunities-for-risc-v-architectures-towards-genomics-based-workloads))| Aaron Call |
| 16:00 - 16:30 | Coffee Break | |
| 16:30 - 16:50 | Optimizations for very long and sparse vector operations on a RISC-V VPU : a work-in-progress ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#optimizations-for-very-long-and-sparse-vector-operations-on-a-risc-v-vpu--a-work-in-progress))| Gopinath Vasanth Mahale |
| 16:50 - 17:10 | Backporting RISC-V vector assembly ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#backporting-risc-v-vector-assembly))| Joseph Lee |
| 17:10 - 17:20 | Functional Testing with STLs: A Step Towards Reliable RISC-V-based HPC Commodity Clusters ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#functional-testing-with-stls-a-step-towards-reliable-risc-v-based-hpc-commodity-clusters))| Jacopo Sini |
| 17:20 - 17:30 | Prototyping reconfigurable RRAM-based AI accelerators using the RISC-V ecosystem and Digital Twins ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#prototyping-reconfigurable-rram-based-ai-accelerators-using-the-risc-v-ecosystem-and-digital-twins))| Markus Fritscher |
| 17:30 - 17:40 | Realization and optimization of FFT algorithm on RISC-V CPUs ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#realization-and-optimization-of-fft-algorithm-on-risc-v-cpus))| Xianyi Zhang |
| 17:40 - 17:50 | Performance Modelling-driven Optimization of RISC-V Hardware for Efficient SpMV ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#performance-modelling-driven-optimization-of-risc-v-hardware-for-efficient-spmv))| Alexandre Rodrigues |
| 17:50 - 18:00 | Accelerating Neural Networks using Open Standard Software on RISC-V ([abstract](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/_community/isc23-workshop.md#accelerating-neural-networks-using-open-standard-software-on-risc-v))| Peter Žužek |


## Abstracts

### Keynote: Paving the Road for RISC-V Supercomputers with Open Hardware

**_Presenter: Luca Benini_**

To address the fundamental challenge of scaling (up) FLOPS in a regime of diminishing returns from scaling  (down) technology, we must minimize all overheads associated with instruction and data movement, data-flow management, communication.  Additionally we must embrace domain specialization without compromising programmability.  Open instruction sets (RISC-V), open architectures, and open hardware are key enablers for  boosting architectural efficiency and for domain specialization. In this talk, I will discuss lesson learned  and pinpoint key challenges in designing open-source  RISC-V chips and systems  for efficient parallel computing, moving from ultra-low power Systems-on-Chip to high-performance many-core chiplets, toward the first RISC-V supercomputer.

### Evaluation of HPC Workloads Running on Open-Source RISC-V Hardware

**_Presenter: Clay Hughes_**

The emerging RISC-V ecosystem has the potential to im- prove the speed, fidelity, and quality of hardware / software co-design R&D activities. However, the suitability of the RISC-V ecosystem for co-design targeting HPC use cases is not yet well understood. In this pa- per, we examine the performance of several HPC benchmark workloads running on simulated open-source hardware RISC-V cores running un- der the FireSim FPGA-accelerated simulation tool. To provide a realistic and reproducible HPC software stack, we port the Spack package man- ager to RISC-V and use it to build our workloads. Our key finding is that each of the RISC-V cores evaluated is capable of running complex HPC workloads executing for many trillions of instructions under simulation, with simulation rates of approximately 1/50th real-time. Additionally we provide a baseline set of performance results that can be compared against in future studies. Our results highlight the readiness of the RISC- V ecosystem for performing open co-design activities for HPC. We expect performance to improve as co-design activities targeting RISC-V ramp up and the RISC-V community makes further contributions to this space.

### 	Test-driving RISC-V Vector hardware for HPC

**_Presenter: Joseph Lee_**

Whilst the RISC-V Vector extension (RVV) has been ratified, at the time of writing both hardware implementations and open source software support are still limited for vectorisation on RISC-V. This is important because vectorisation is crucial to obtaining good performance for High Performance Computing (HPC) workloads and, as of April 2023, the Allwinner D1 SoC, containing the XuanTie C906 processor, is the only mass-produced and commercially available hardware supporting RVV. This paper surveys the current state of RISC-V vectorisation as of 2023, reporting the landscape of both the hardware and software ecosystem. Driving our discussion from experiences in setting up the Allwinner D1 as part of the EPCC RISC-V testbed, we report the results of benchmarking the Allwinner D1 using the RAJA Performance Suite, which demonstrated reasonable vectorisation speedup using vendor-provided compiler, as well as favourable performance compared to the StarFive VisionFive V2 with SiFive's U74 processor.

### Software Development Vehicles to enable extended and early co-design: a RISC-V and HPC case of study

**_Presenter: Filippo Mantovani_**

Prototyping HPC systems with low-to-mid technology readiness level (TRL) systems is critical for providing feedback to hardware designers, the system software team (e.g., compiler developers), and early adopters from the scientific community. The typical approach to hardware design and HPC system prototyping often limits feedback or only allows it at a late stage. In this paper, we present a set of tools for co-designing HPC systems, called software development vehicles (SDV). We use an innovative RISC-V design as a demonstrator, which includes a scalar CPU and a vector processing unit capable of operating large vectors up to 16~kbits. We provide an incremental methodology and early tangible evidence of the co-design process that provide feedback to improve both architecture and system software at a very early stage of system development.

### Challenges and Opportunities for RISC-V Architectures towards Genomics-based Workloads

**_Presenter: Aaron Call_**

The use of large-scale supercomputing architectures is a hard requirement for scientific computing Big-Data applications. An example is genomics analytics, where millions of data transformations and tests per patient need to be done to find relevant clinical indicators. Therefore, to ensure open and broad access to high-performance technologies, governments, and academia are pushing toward the introduction of novel computing architectures in large-scale scientific environments. This is the case of RISC-V, an open-source and royalty-free instruction-set architecture.

To evaluate such technologies, here we present the Variant-Interaction Analytics use case benchmarking suite and datasets. Through this use case, we search for possible genetic interactions using computational and statistical methods, providing a representative case for heavy ETL (Extract, Transform, Load) data processing. Current implementations are implemented in x86-based supercomputers (e.g. MareNostrum-IV at the Barcelona Supercomputing Center (BSC)), and future steps propose RISC-V as part of the next MareNostrum generations.

Here we describe the Variant Interaction Use Case, highlighting the characteristics leveraging high-performance computing, indicating the caveats and challenges towards the next RISC-V developments and designs to come from a first comparison between x86 and RISC-V architectures on real Variant Interaction executions over real hardware implementations.

### Optimizations for very long and sparse vector operations on a RISC-V VPU : a work-in-progress

**_Presenter: Gopinath Vasanth Mahale_**

A significant scope to vectorize the present-day workloads in scientific computations and machine learning have highlighted Vector Processing Unit (VPU) as a target accelerator. There is a need to efficiently handle these vector operations involving very long vectors and sparse vectors to improve performance as well as to save energy. This paper presents enhancements to a RISC-V VPU to achieve this and a supporting infrastructure around the VPU in a manycore system. This work-in-progress paper discusses the current results on the enhanced VPU with pointers to the planned modifications.

### Backporting RISC-V vector assembly

**_Presenter: Joseph Lee_**

Leveraging vectorisation, the ability for a CPU to apply operations to multiple elements of data concurrently, is critical for high performance workloads. However, at the time of writing, commercially available physical RISC-V hardware that provides the RISC-V vector extension (RVV) only supports version 0.7.1, which is incompatible with the latest ratified version 1.0. The challenge is that upstream compiler toolchains, such as Clang, only target the ratified v1.0 and do not support the older v0.7.1. Because v1.0 is not compatible with v0.7.1, the only way to program vectorised code is to use a vendor-provided, older compiler. In this paper we introduce the rvv-rollback tool which translates assembly code generated by the compiler using vector extension v1.0 instructions to v0.7.1. We utilise this tool to compare vectorisation performance of the vendor-provided GNU 8.4 compiler (supports v0.7.1) against LLVM 15.0 (supports only v1.0), where we found that the LLVM compiler is capable of auto-vectorising more computational kernels, and delivers greater performance than GNU in most, but not all, cases. We also tested LLVM vectorisation with vector length agnostic and specific settings, and observed cases with significant difference in performance.

### Functional Testing with STLs: A Step Towards Reliable RISC-V-based HPC Commodity Clusters

**_Presenter: Jacopo Sini_**

The reliability of High-Performance Computing (HPC) systems is an essential concern due to their massive size and the complexity of their operation. Thus, functional tests have been extensively used to monitor HPC systems and use software routines to verify the software stack’s operation, mainly focusing on high-level abstraction features. However, the miniaturization of transistor technologies and the
increment of computational resources (to face the performance and computation capabilities of HPC systems for the exascale generation) impose
new reliability challenges that involve the development of clever testing strategies considering the underlying hardware characteristics. Interestingly, resorting to open-hardware architectures (such as RISC-V-based platforms) in the HPC domain offers a unique opportunity to effectively combine traditional HPC functional testing techniques with the adoption of effective fine-grain hardware testing solutions, such as those based on the Software-Based Self-Test (SBST) strategy.

This work proposes the SBST strategy as an enhanced and complementary technique for functional testing of RISC-V platforms for HPC systems. The method provides fine-grain evaluations of the CPU cores, including quantitative information on the state of the CPU cores and the presence of faults. For the experiments, we resort to two RISC-V cores (RI5CY and ibex) to develop and verify the effectiveness of the SBST strategy. In total, we developed 11 STLs (SBST routines) showing that a considerable percentage of hardware faults (from about 82% and up to 90%) can be detected with minimal overhead, thus, allowing their use during empty time intervals or in combination with other in-field functional testing approaches for HPC clusters.

### Prototyping reconfigurable RRAM-based AI accelerators using the RISC-V ecosystem and Digital Twins

**_Presenter: Markus Fritscher_**

The recent decades have given advent to the rise of sophisticated High Performance Computing (HPC) accelerators, vastly speeding up calculations. In the last years dedicated AI accelerators, meant for the evaluation of Artificial Neural Networks, have gathered traction. Resistive Random Access Memory (RRAM) devices are a possible future candidate for these accelerators since crossbar implementations allow for the evaluation of matrix vector multiplications in O(1). Unfortunately integrating these novel devices into accelerators challenges since they still suffer from device variations and require sophisticated peripheral circuitry. Additionally, suitable design flows are missing since these cells are difficult to integrate into the traditional digital flow. While multiple foundries are able to fabricate promising RRAM prototypes suffering less from device variations, full system integration tends to be lacking. Fortunately the rise of the RISC-V ecosystem has enabled eased access to a fully customizable ISA. We propose to exploit the advantages of the RRAM devices combined with the flexibility of RISC-V cores by integrating multiple RRAM-based blocks into a RISC-V core via Memory Mapped I/O (MMIO), resulting in an architecture which can be reconfigured in software. Additionally, we propose a possible approach for the design, simulation and verification of large RRAM systems, namely setting up three closely intertwined simulation environments and illustrate its applicability by integrating, characterizing and validating a RRAM based MVM block fabricated in 130nm technology. Finally, we demonstrate that RRAM technologies might be ready for HPC.

### Realization and optimization of FFT algorithm on RISC-V CPUs

**_Presenter: Xianyi Zhang_**

RISC-V is a simplified instruction set architecture that has only emerged recently. Compared with other commercial ISAs, it is open and has the characteristics of flexibility, high scalability, and high efficiency. It is being used more and more widely, especially in the field of high-performance computing. As a high-performance basic algorithm library, the FFT algorithm library plays a vital role in the RISC-V software ecosystem. However, there has yet to be a high-performance implementation of FFT based on RISC-V architecture. Aiming at the above problems, combined with the characteristics of the RISC-V instruction set architecture, and this paper implements a high-performance even-radix FFT algorithm library on a RISC-V architecture CPU using methods such as butterfly network, butterfly kernel optimization, and SIMD optimization.
The experimental results show that the even base FFT algorithm library implemented in this paper has a pronounced improvement compared with FFTW in the RISC-V CPUs.

### Performance Modelling-driven Optimization of RISC-V Hardware for Efficient SpMV

**_Presenter: Alexandre Rodrigues_**

The growing need for inference on edge devices brings with it a necessity for efficient hardware, optimized for particular computational kernels, such as Sparse Matrix-Vector Multiplication (SpMV). With the RISC-V Instruction Set Architecture (ISA) providing unprecedented freedom to hardware designers, there is now a greater opportunity to tailor these microarchitectures to both the application requirements
and the data it is expected to process. In this paper, we demonstrate the use of the insights provided by the Cache-Aware Roofline Model in the hardware design process, optimizing a RISC-V architecture for efficient and performant execution of SpMV. Specifically, we assess the effect architectural parameters associated to the processor’s cache and floating-point unit have on the performance of the architecture and SpMV. Following a reparameterization closely guided by the Cache-Aware Roofline Model (CARM), we demonstrate a 2.04× improvement in performance and a significant decrease in wasted computational resources.

### Accelerating Neural Networks using Open Standard Software on RISC-V

**_Presenter: Peter Žužek_**

Deep neural networks have the ability to learn patterns from huge amounts of data and hence have been adopted in many high performance computing and scientific applications. To achieve cost effective performance on such applications, vendors and chip designers are increasingly looking at domain-specific accelerators.
To facilitate adapting the design to the needs of the workload, we need a generic open standard solution all through the stack - software to hardware.

On the hardware side, RISC-V ISA has a minimal base integer set and provides custom extensions which works as a good starting point for designing these special accelerators. This design can further benefit from the RISC-V vector extensions which help achieving high compute density leading to performance improvement for user applications. On the software side, SYCL provides a C++-based portable parallel programming model to target various devices. Thus, enabling SYCL applications to run on RISC-V accelerators provides an open standard way of accelerating neural networks.

This paper elaborates the usage of open standards and open source technology to run complex SYCL applications on RISC-V vector processors.

## Organisation 

### Organising committee

* Nick Brown (EPCC at the University of Edinburgh)
* John Davis (Barcelona Supercomputing Centre)
* John Leidel (Tactical Computing Labs)
* Andy Gothard (Siemens)
* Michael Wong (Codeplay)

### Program committee

* Oliver Perks (Rivos)
* Unsal Osman (BSC)
* Maurice Jamieson (EPCC)
* Ruyman Reyes (Codeplay)
* Luis Plana (BSC)
* Joseph Lee (EPCC)
* Luc Berger-Vergait (Sandia National Laboratories)
* Teresa Cervero (BSC)
* Chris Taylor (Tactical Computing Labs)

