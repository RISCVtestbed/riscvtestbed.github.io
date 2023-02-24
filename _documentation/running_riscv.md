---
title: "Running on RISC-V"
icon: /images/cpu.png
icon_alt: Sign post
---

We have a variety of RISC-V compute nodes within a Slurm cluster that you can execute your code upon, with more added as time progresses. This page details how to gain access to run your codes on the nodes and which are currently available.

## Accessing the cluster

You must first `ssh` to the `riscv-login` server where you will compile your code. The compiled code is then run on the RISC-V nodes using Slurm.

### List of available nodes

| Description  | Hostname | # of cores | DRAM | Status |
| ------------- | ------------- |  ------------- | ------------- | ------------- | 
| DongshanNezhaSTU #1 | rvc01 | 1 | 512MB | down \  (back online 28th Feb 2023) |
| DongshanNezhaSTU #2 | rvc02 | 1 | 512MB | down \  (back online 28th Feb 2023) |
| DongshanNezhaSTU #3 | rvc03 | 1 | 512MB | down \  (back online TBC) |
| DongshanNezhaSTU #4 | rvc04 | 1 | 512MB | down \  (back online TBC) |
| MangoPi MQ-Pro #1 | rvc05 | 1 | 1GB | up |
| MangoPi MQ-Pro #2 | rvc06 | 1 | 1GB | up |
| StarFive VisionFive V1 #1 | rvc07 | 2 | 8GB | up |
| StarFive VisionFive V1 #2 | rvc08 | 2 | 8GB | up |
| HiFive Unmatched  | rvc09 | 4 | 16GB | up |

