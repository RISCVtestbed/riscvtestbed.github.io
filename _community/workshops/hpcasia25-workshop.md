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

Co-located with <a href="https://event1.nchc.org.tw/hpcasia2025/index.html">HPC Asia 2025</a>, this workshop will run between 8:30 a.m. and noon on February 19th in Hsinchu, Taiwan

## Workshop details

The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits of this technology with domain scientists, tool developers, and supercomputer operators. RISC-V is an open standard Instruction Set Architecture (ISA) which enables the royalty free development of CPUs and a common software ecosystem to be shared across them. Following this community driven ISA standard, a very diverse set of CPUs have been, and continue to be, developed which are suited to a range of workloads. Whilst RISC-V has become very popular already in some fields, and in 2022 the ten billionth RISC-V core was shipped, to date it has yet to gain traction in HPC.

## Workshop schedule

| Time        | Session           | Speaker  |
| ------------- |:-------------:| -----:|
| 09:00 - 09:10 | Welcome and aims | Nick Brown |
| 09:10 - 09:50 | **Keynote:**  The Open Hardware Group, an open approach to RISC-V | Flo Wohlrab |
| 09:50 - 10:10 | RISC-V accelerator chips for HPC, AI/ML/DL | Akira Tsukamoto |
| 10:10 - 10:30 | Break |  |
| 10:30 - 11:00 | Scaling HPC with Andes Technology: Optimizing Performance at Every Level ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/hpcasia25-workshop#scaling-hpc-with-andes-technology-optimizing-performance-at-every-level)) | Jason Yung-Cheng Lin |
| 11:00 - 11:30 | Providing Full Stack Edge AI solutions with RISC-V | Albert Liu |
| 11:30 - 12:00 | Accelerating inference at the edge for new data insights | A-Tang |
| 12:00 - 12:15 | Tensix for accelerating AI and HPC | Tapankumar Joshi |
| 12:15 - 12:30 | Investigating a multi-socket high core-count RISC-V system for HPC workloads ([abstract](https://riscv.epcc.ed.ac.uk/community/workshops/hpcasia25-workshop#user-content-investigating-a-multi-socket-high-core-count-risc-v-system-for-hpc-workload)) | Nick Brown |
| 12:30 | Workshop concludes | |

## Abstracts

### Scaling HPC with Andes Technology: Optimizing Performance at Every Level

**_Presenter: Jason Yung-Cheng Lin_**

As a founding and premier member of RISC-V International, Andes Technology contributes to high-performance computing (HPC) with superior out-of-order execution CPU cores and vector processors optimized for HPC workloads. Additionally, Andes offers an instruction customization environment that enables developers to accelerate performance-critical functions. AndesAIRE, the AI software stack, further enhances AI workload optimization, supporting large-scale AI/ML applications from edge devices to the cloud. This session will showcase how Andes Technology’s innovations are driving performance improvements across HPC environments.

### Investigating a multi-socket high core-count RISC-V system for HPC workload

**_Presenter: Nick Brown_**

Whilst RISC-V has become popular in fields such as embedded computing, it is yet to find mainstream success in High Performance Computing (HPC). However, the 64-core RISC-V SG2042 is a potential game changer as it provides a commodity available CPU with much higher core-count than existing technologies. In this work we benchmark the SG2042 CPU hosted in an experimental, dual-socket, system to explore the performance properties of the CPU when running a common HPC benchmark suite especially across socket. Earlier benchmarks found that, on the Milk-V Pioneer that CPU is memory bound and this work confirms, even on a different system we still see those limitations. However, such a multi-socket configuration does provide an improvement in performance which helps close the gap between common HPC deployments.
