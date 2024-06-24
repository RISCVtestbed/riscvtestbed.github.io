---
title: "Running on RISC-V"
icon: /images/cpu.png
icon_alt: Sign post
group: documentation
order: 2
---

We have a variety of RISC-V compute nodes within a Slurm cluster that you can execute your code upon, with more added as time progresses. This page details how to gain access to run your codes on the nodes and which are currently available.

## Accessing the cluster

You must first `ssh` to the `riscv-login` server where you will compile your code. The compiled code is then run on the RISC-V nodes using Slurm.

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

