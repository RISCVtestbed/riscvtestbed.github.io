---
title: "My First Vector Program"
icon: /images/computer.png
icon_alt: Icon of computer
author: 
  name: Richard Neale
  picture: /images/epcc-logo.png
---
Below is a step by step guide to writing your first RISC-V RVV 0.7.1 C program and running it on the EPCC RISC-V testbed.  It is assumed that you are familiar with the `vim` editor and the C programming language.

Once you have gained [access](https://riscv.epcc.ed.ac.uk/documentation/access/) to the EPCC RISC-V testbed you will be able to compile and run programs on several available systems.  You will need to be logged in to the EPCC RISC-V testbed login node before proceeding with this guide.

# Setting Up the Compiler

For this example we will use the GNU GCC compiler version 10.2 with support for RVV.  To enable this on the RISC-V Testbed login node we need to load the correct module:

```
module load riscv64-linux/gnu-10.2-rvv
```

# Creating a Makefile

We need to create an area to write our code in and provide a Makefile to enable us to easily build our program:

```bash
mkdir rvv-test
cd rvv-test
```

The `Makefile` needs to give the correct GCC command to crosscompile our code so that it can be run on the RISC-V Testbed:

```bash
vim Makefile
```

The Makefile:

```make
CC=riscv64-unknown-linux-gnu-gcc
CFLAGS=-O2 -march=rv64gcv -mabi=lp64d
TARGET=rvv-test
SRCFILE=rvv-test.c

$(TARGET):
        $(CC) $(CFLAGS) -o $(TARGET) $(SRCFILE)

clean:
        rm -f $(TARGET)
```

The complier executable we will use is `riscv64-unknown-linux-gnu-gcc`  
The `-march=rv6gcv` flag tells the compiler that the target executable is for a 64bit RISC-V processor with the Vector extensions.

Next we create our C program that will perform a vector addition of vectors a and b, then put the result in vector c.

```bash
vim rvv-test.c
```

```c
#include <stdio.h>
#include <riscv_vector.h>

int main() {
    // Initialize two small vectors and a result vector
    int16_t a[] = {1, 2, 3, 4};
    int16_t b[] = {5, 6, 7, 8};
    int16_t c[4]; // Result vector

    // Set the vector length to the maximum supported
    // for 16-bit elements in m1 mode
    size_t vl = vsetvlmax_e16m1();

    // Load vectors from memory
    vint16m1_t va = vle16_v_i16m1(a, vl);
    vint16m1_t vb = vle16_v_i16m1(b, vl);

    // Perform vector addition
    vint16m1_t vc = vadd_vv_i16m1(va, vb, vl);

    // Store the result back to the C array
    vse16_v_i16m1(c, vc, vl);

    // Print the results
    for(int i = 0; i < 4; i++) {
        printf("%d ", c[i]);
    }
    printf("\n");

    return 0;
}
```

We compile the code by typing `make`

Once we have our executable we can create a Slurm batch file to run the program on one of the EPCC Testbed Milk-V Pioneer computers:

```bash
vim rvv-test.srun
```

```bash
#!/bin/bash
#SBATCH -A <Your Username>
#SBATCH -n 1
#SBATCH --nodelist=rvc25
#SBATCH --time=00:01:00

./rvv-test
```

Remember to replace <Your Username> with your username on the RISC-V testbed.   
We set the nodelist to `rvc25` so that we target a Milk-V Pioneer computer which we know supports RVV version 0.7.1

Finally we can run our program:

```bash
sbatch rvv-test.srun
```

After entering the command above you will get a message like `Submitted batch job 9984` where the number will be unique to your run.

An output file will be created called `slurm-9984.out` (change the number to the one given by the submission output above).  This file will hopefully contain the output from your program.  If the run failed, this file will contain the error messages related to the failed run:

```bash
<My Username>@riscv-login:~/rvv-test$ more slurm-9984.out
6 8 10 12
```

And there we have it, your very first RISC-V RVV 0.7.1 vector C program running.
