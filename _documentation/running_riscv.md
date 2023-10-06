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
| DongshanNezhaSTU #1 | rvc01 | 1 | 512MB | down <br />(TBA) |
| DongshanNezhaSTU #2 | rvc02 | 1 | 512MB | down <br />(TBA) |
| DongshanNezhaSTU #3 | rvc03 | 1 | 512MB | down <br />(TBA)|
| DongshanNezhaSTU #4 | rvc04 | 1 | 512MB | down <br />(TBA) |
| MangoPi MQ-Pro #1 | rvc05 | 1 | 1GB | up |
| MangoPi MQ-Pro #2 | rvc06 | 1 | 1GB | up |
| StarFive VisionFive V1 #1 | rvc07 | 2 | 8GB | up |
| StarFive VisionFive V1 #2 | rvc08 | 2 | 8GB | up |
| StarFive VisionFive V1 #3 | rvc09 | 2 | 8GB | down <br />(TBA) |
| HiFive Unmatched  | rvc10 | 4 | 16GB | up |
| StarFive VisionFive V2 #1 | rvc11 | 4 | 8GB | up |
| StarFive VisionFive V2 #2 | rvc12 | 4 | 8GB | up |
| StarFive VisionFive V2 #3 | rvc13 | 4 | 8GB | up |
| StarFive VisionFive V2 #4 | rvc14| 4 | 8GB | up |
| StarFive VisionFive V2 #5 | rvc15 | 4 | 8GB | up |
| StarFive VisionFive V2 #6 | rvc16 | 4 | 8GB | up |
| StarFive VisionFive V2 #7 | rvc17 | 4 | 8GB | up |
| StarFive VisionFive V2 #8 | rvc18 | 4 | 8GB | up |
| StarFive VisionFive V2 #9 | rvc19 | 4 | 8GB | up |
| StarFive VisionFive V2 #10 | rvc20 | 4 | 8GB | up | 
| StarFive VisionFive V2 #11 | rvc21 | 4 | 8GB | up |
| StarFive VisionFive V2 #12 | rvc22 | 4 | 8GB | up |
| StarFive VisionFive V2 #13 | rvc23 | 4 | 8GB | up |
| Milk-V Pioneer #1 | rvc24 | 64 | 128GB | up |
| Milk-V Pioneer #2 | rvc25 | 64 | 128GB | up |

### Submitting jobs

To submit a job to the RISC-V nodes, you can use the slurm command `sbatch [batch.sh]` to submit the script `batch.sh`. To specify which nodes to use, the flag `#SBATCH --nodelist=<names>` can be used.

Here we provide example slurm scripts which run a non-MPI and MPI executable:

Non-MPI `batch.sh`
```console
#!/bin/bash
#SBATCH -A username
#SBATCH -n 1
#SBATCH --nodelist=rvc05
#SBATCH --time=00:15:00

./executable
```



MPI `batch-mpi.sh`
```console
#!/bin/bash
#SBATCH -A username
#SBATCH -n 2
#SBATCH --nodelist=rvc05,rvc06
#SBATCH --time=00:15:00

export PMIX_MCA_psec=native

mpirun ./mpi-executable
```

