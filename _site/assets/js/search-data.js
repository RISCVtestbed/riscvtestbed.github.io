var store = [{
        "title": "Running / Issues",
        "excerpt":"Here we will share some of our experience and issues encountered when running and building software for the RISC-V testbed. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/community/issues/"
      },{
        "title": "Success stories",
        "excerpt":"This page will contain reports and use-cases from testbed users who have leveraged RISC-V resources.The idea is to share the benefits that this technology can deliver for HPC and lessons learnt by applicationdevelopers that others can then apply to their codes. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/community/success/"
      },{
        "title": "",
        "excerpt":"Here we will share some of the upcoming and previous RISC-V workshops. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/workshops/"
      },{
        "title": "International workshop on RISC-V for HPC co-hosted at EuroPar 2024",
        "excerpt":"Important dates Paper Deadline: 6th May 2024 (AoE) Author Notification: 20th June 2024 Camera Ready: 1st July 2024 Workshop: 26th or 27th August 2024Workshop details Co-located with EuroPar 2024, this is workshop will be held on the 26th or 27th of August in Madrid, Spain. Workshop scope The goal of...","categories": ["Workshops"],
        "tags": [],
        "url": "http://localhost:4000/community/workshops/europar24-workshop/"
      },{
        "title": "Third International workshop on RISC-V for HPC",
        "excerpt":"Logistics Co-located with HPC Asia 2024, this workshop will run between 08:30 and 12:30 on the morning of January 25th 2024 in Nagoya, Japan Workshop details The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits of this technology with domain scientists,...","categories": ["Workshops"],
        "tags": [],
        "url": "http://localhost:4000/community/workshops/hpcasia24-workshop/"
      },{
        "title": "First International workshop on RISC-V for HPC",
        "excerpt":"Workshop details Co-located with ISC 2023, this is a half day afternoon workshop is on Thursday 25th May 2023 in Hamburg, Germany in Hall Y8 - 2nd Floor of the Congress Center Hamburg. The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the...","categories": ["Workshops"],
        "tags": [],
        "url": "http://localhost:4000/community/workshops/isc23-workshop/"
      },{
        "title": "Fourth International workshop on RISC-V for HPC",
        "excerpt":"Workshop details Co-located with ISC 2024, this is a half day morning workshop on Thursday 16th May 2024 in Hamburg, Germany in Hall Y8 - 2nd Floor of the Congress Center Hamburg. The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/community/workshops/isc24-workshop/"
      },{
        "title": "Second International workshop on RISC-V for HPC",
        "excerpt":"Workshop details Co-located with SC 2023, this is a half day afternoon workshop is on Monday 13th November 2023 between 2pm and 5:3pm in room 507 of the Denver Convention Centre, USA The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits...","categories": ["Workshops"],
        "tags": [],
        "url": "http://localhost:4000/community/workshops/sc23-workshop/"
      },{
        "title": "Applying for access",
        "excerpt":"Access to the RISC-V testbed is free for scientific and engieering workloads. There are two steps required for accessing the system, firstly we need to approve your access and secondly you will need to sign up to the system. Step one, access approval You should first send an email to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/access/"
      },{
        "title": "My First Vector Program",
        "excerpt":"Below is a step by step guide to writing your first RISC-V RVV 0.7.1 C program and running it on the EPCC RISC-V testbed. It is assumed that you are familiar with the vim editor and the C programming language. Once you have gained access to the EPCC RISC-V testbed...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/first_vector_prog/"
      },{
        "title": "Getting started",
        "excerpt":"This section describes how to access both the command line and GUI of the testbed system front-end. The testbed contains a front-end node riscv-login containing a 26-core Skylake Xeon Platinum CPU with 256GB RAM. The system drive is a 1TB SSD, and files are stored on 4TB of HDD RAID10...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/getting_started/"
      },{
        "title": "Testbed hardware",
        "excerpt":"The testbed contains both physical and soft-core RISC-V CPUs, and this page provides a brief overview of the different technolgies hosted within the testbed. Physical boards Milk-V Pioneer The Milk-V Pioneer is a microATX board powered by the SOPHGO SG2042, 64-core C920 64-bit RISC-V processor, with 64MB L3 cache and...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/hardware/"
      },{
        "title": "Running on RISC-V",
        "excerpt":"We have a variety of RISC-V compute nodes within a Slurm cluster that you can execute your code upon, with more added as time progresses. This page details how to gain access to run your codes on the nodes and which are currently available. Accessing the cluster You must first...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/documentation/running_riscv/"
      },{
        "title": "Compiling Vector Code",
        "excerpt":"Some of the hardware (e.g. Sophon SG2042 and Allwinner D1) within the testbed supports RISC-V V vector extension (RVV). Here we document and provide references for compiling code with vector instructions. A major caveat is that the first ratified RVV is version 1.0 (spec), whereas the C920 and C906 cores...","categories": ["Issues"],
        "tags": [],
        "url": "http://localhost:4000/issues/compiling-vector/"
      },{
        "title": "Toolchains & Cross-debugging",
        "excerpt":"In this post we cover the toolchains and debugging tools available to compile applications for RISC-V. These allow users to cross-compile RISC-V executables on the login node, which can then be run on the testbed nodes. The toolchains provide various binutils, such as ld - linker, as - assembler, and...","categories": ["Issues"],
        "tags": [],
        "url": "http://localhost:4000/issues/toolchains+debugging/"
      },{
        "title": "Benchmarks update",
        "excerpt":"Here we summarize the result of some benchmark tests performed on RISC-V hardware available as part of the testbed. RAJAPerf RAJAPerf tests a suite of loop-based computational kernels relevant for HPC. DongshanNezhaSTU (Allwinner D1-H) The DongshanNezhaSTU board contains the Allwinner D1 C906, which supports the V vector extension (version 0.7.1)....","categories": ["Success"],
        "tags": [],
        "url": "http://localhost:4000/success/benchmarks/"
      },{
        "title": "Third International workshop on RISC-V for HPC",
        "excerpt":"Logistics Co-located with HPC Asia 2024, this workshop will run between 08:30 and 12:30 on the morning of January 25th 2024 in Nagoya, Japan Workshop details The goal of this workshop is to continue building the community of RISC-V in HPC, sharing the benefits of this technology with domain scientists,...","categories": ["Workshops"],
        "tags": [],
        "url": "http://localhost:4000/workshops/hpcasia/"
      },{
        "title": "International workshop on RISC-V for HPC co-hosted at EuroPar 2024",
        "excerpt":"Important dates Paper Deadline: 6th May 2024 (AoE) Author Notification: 20th June 2024 Camera Ready: 1st July 2024 Workshop: 26th or 27th August 2024Workshop details Co-located with EuroPar 2024, this is workshop will be held on the 26th or 27th of August in Madrid, Spain. Workshop scope The goal of...","categories": ["Workshops"],
        "tags": [],
        "url": "http://localhost:4000/workshops/europar24/"
      },{
        "title": "RISC-V soft-core support",
        "excerpt":"As well as supporting physical hardware (e.g. Allwinner D1, SiFive U74, and 64-core SOPHGO SG2042 CPUs), the testbed also supports RISC-V soft-cores running on an ADM-PA101, which is an AMD/Xilinx Versal FPGA equipped with 16GB DDR. Background In order to simplify development, the ADM-PA101 has been set up to run...","categories": ["Issues"],
        "tags": [],
        "url": "http://localhost:4000/issues/PetaLinux-NFS-config/"
      },]
