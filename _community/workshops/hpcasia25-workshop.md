---
title: "International workshop on RISC-V for HPC at HPC Asia 2025"
icon: /images/podium.png
icon_alt: Award icon
categories:
  - Workshops
layout: post
group: workshops
order: 7
---

## Logistics
<img align="right" src="/images/hpc_asia25_logo-small.png" width=150>

Co-located with <a href="https://event1.nchc.org.tw/hpcasia2025/index.html">HPC Asia 2025</a>, this workshop will run between 8:30 a.m. and noon on February 19th in Hsinchu, Taiwan.

*Location:* Plum Blossom Room at the Sheraton Hsinchu Hotel

## Workshop details

The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits of this technology with domain scientists, tool developers, and supercomputer operators. RISC-V is an open standard Instruction Set Architecture (ISA) which enables the royalty free development of CPUs and a common software ecosystem to be shared across them. Following this community driven ISA standard, a very diverse set of CPUs have been, and continue to be, developed which are suited to a range of workloads. Whilst RISC-V has become very popular already in some fields, and in 2022 the ten billionth RISC-V core was shipped, to date it has yet to gain traction in HPC.

## Workshop schedule

| Time        | Session           | Speaker  |
| ------------- |:-------------:| -----:|
| 09:00 - 09:10 | Welcome and aims | Nick Brown |
| 09:10 - 09:50 | **Keynote:**  OpenHW Foundation RISC-V Cores: Empowering the Hardware Revolution ([slides](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/assets/files/hpcasia25/Openhw.pdf)) ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/hpcasia25-workshop#keynote-openhw-foundation-risc-v-cores-empowering-the-hardware-revolution)) | Flo Wohlrab (CEO of [Open HW group](https://openhwfoundation.org/)) |
| 09:50 - 10:10 | Challenges in HPC, AI/ML/DL for RISC-V accelerator chips ([slides](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/assets/files/hpcasia25/Openchip.pdf)) ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/hpcasia25-workshop#challenges-in-hpc-aimldl-for-risc-v-accelerator-chip)) | Akira Tsukamoto (Security and Ecosystem Architect Fellow of [Openchip](https://openchip.com/)) |
| 10:10 - 10:15 | Tenstorrent Tensix accelerators ([slides](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/assets/files/hpcasia25/Tenstorrent.pdf)) | Eugene Tan (Regional Manager [Tenstorrent](https://tenstorrent.com/)) |
| 10:15 - 10:30 | Break |  |
| 10:30 - 11:00 | Scaling HPC with Andes Technology: Optimizing Performance at Every Level ([slides](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/assets/files/hpcasia25/Andes.pdf)) ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/hpcasia25-workshop#scaling-hpc-with-andes-technology-optimizing-performance-at-every-level)) | Jason Yung-Cheng Lin (Senior Technical Marketing Manager of [Andes](https://www.andestech.com/en/)) |
| 11:00 - 11:30 | Scaling GPT: The Future is on the Edge | Albert Liu (Founder & CEO of [Kneron](https://www.kneron.com/)) |
| 11:30 - 12:00 | Revolutionizing AI Workloads with ​Digital In-Memory Computing and RISC-V technology ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/hpcasia25-workshop#revolutionizing-ai-workloads-with-digital-in-memory-computing-and-risc-v-technology)) | A-Tang (Software Engineering Manager of [Axelera.AI](https://www.axelera.ai/)) |
| 12:00 - 12:10 | Towards Zettascale computing with RISC-V and Posits ([slides](https://github.com/RISCVtestbed/riscvtestbed.github.io/blob/main/assets/files/hpcasia25/Calligo.pdf)) | Anantha P Kinnal (MD and chairman of [Calligo Tech](https://calligotech.com/)) |
| 12:10 - 12:30 | Investigating a multi-socket high core-count RISC-V system for HPC workloads ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/hpcasia25-workshop#investigating-a-multi-socket-high-core-count-risc-v-system-for-hpc-workload)) | Nick Brown (Senior Research Fellow at [EPCC, University of Edinburgh](https://www.epcc.ed.ac.uk)) |
| 12:30 | Workshop concludes | |

## Abstracts

### Keynote: OpenHW Foundation RISC-V Cores: Empowering the Hardware Revolution

**_Presenter: Flo Wohlrab_**

This presentation explores the significance of industrial-grade, open-source RISC-V cores in the AI landscape, focusing on the OpenHW Foundation's RISC-V solutions.

RISC-V's ubiquity is undeniable, especially with the rise of AI and increased industrial use cases. Many of these applications utilize open-source RISC-V IP cores from the OpenHW Foundation. We delve into the details of these cores, their applications, and the collaborative efforts that drive their development.

From deeply embedded cores like the CVE2 (ideal for replacing FSMs or handling small control tasks) to the MCU-level CVE4 (shipping in millions of devices) and the Linux-capable CVA6 (utilized by AI companies and industrial conglomerates), we examine the diverse range of OpenHW RISC-V cores. We also discuss the ecosystem surrounding these cores, including upstream compilers and the collaborative OpenHW framework.

Additionally, we explore the motivations of major players like Thales and Silicon Labs to adopt open-source RISC-V cores and how this strategy supports their business goals. Understanding the dynamics of this collaborative approach provides valuable insights into the future of RISC-V and its role in shaping the AI landscape.

### Challenges in HPC, AI/ML/DL for RISC-V accelerator chip

**_Presenter: Akira Tsukamoto_**

HPC began with applications like computational fluid dynamics, processed on vector computers such as the CDC STAR-100 and CRAY-1. These systems were dominant from the 1970s to early 2000s, before general-purpose microprocessors took over due to Dennard scaling and Moore's law. The shift in computing started with SIMD instructions for parallel processing. Generative AI further advanced this trend, moving from vector and SIMD systems to GPGPUs, which excel in AI and machine learning tasks. The talk will delve into the engineering challenges and innovations on what the future accelerators must address the growing demands for computational power and efficiency. Innovations in RISC-V vector implementations offer a flexible and power-efficient alternative to GPUs, focusing on long vector systems, balancing vector performance with memory bandwidth, and enhancing usability.

### Scaling HPC with Andes Technology: Optimizing Performance at Every Level

**_Presenter: Jason Yung-Cheng Lin_**

As a founding and premier member of RISC-V International, Andes Technology contributes to high-performance computing (HPC) with superior out-of-order execution CPU cores and vector processors optimized for HPC workloads. Additionally, Andes offers an instruction customization environment that enables developers to accelerate performance-critical functions. AndesAIRE, the AI software stack, further enhances AI workload optimization, supporting large-scale AI/ML applications from edge devices to the cloud. This session will showcase how Andes Technology’s innovations are driving performance improvements across HPC environments.

### Revolutionizing AI Workloads with ​Digital In-Memory Computing and RISC-V technology 

**_Presenter: A-Tang_**

In this presentation, we will explore the advanced integration of Digital In-Memory Computing (D-IMC) and RISC-V technology by Axelera AI to accelerate AI inference workloads. Our approach uniquely combines the high energy efficiency and throughput of D-IMC with the versatility of RISC-V technology, creating a powerful and scalable platform. This platform is designed to handle a wide range of AI tasks, from advanced computer vision at the edge to emerging AI challenges. We will demonstrate how our scalable architecture not only meets but exceeds the demands of modern AI applications. Our platform enhances performance while significantly reducing energy use and operational costs. By pushing the boundaries of Edge AI and venturing into new AI domains, Axelera AI is setting new benchmarks in AI processing efficiency and deployment capabilities.

### Investigating a multi-socket high core-count RISC-V system for HPC workload

**_Presenter: Nick Brown_**

Whilst RISC-V has become popular in fields such as embedded computing, it is yet to find mainstream success in High Performance Computing (HPC). However, the 64-core RISC-V SG2042 is a potential game changer as it provides a commodity available CPU with much higher core-count than existing technologies. In this work we benchmark the SG2042 CPU hosted in an experimental, dual-socket, system to explore the performance properties of the CPU when running a common HPC benchmark suite especially across socket. Earlier benchmarks found that, on the Milk-V Pioneer that CPU is memory bound and this work confirms, even on a different system we still see those limitations. However, such a multi-socket configuration does provide an improvement in performance which helps close the gap between common HPC deployments.
