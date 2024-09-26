---
title: "My First C Assembly Hybrid Vector Program"
icon: /images/computer.png
icon_alt: Icon of computer
layout: post
author: 
  name: Richard Neale
  picture: /images/epcc-logo.png
categories:
  - How To  
group: how-to
order: 99
---

Following on from [part 1](https://riscv.epcc.ed.ac.uk/documentation/first_vector_prog/), next up we look at combining C and RISC-V assembly in your second RISC-V RVV 0.7.1 program and running it on the EPCC RISC-V testbed.  It is assumed that you are familiar with the `vim` editor, the C programming language and some RISC-V assembly language.

As with part one, you will need [access](https://riscv.epcc.ed.ac.uk/documentation/access/) to the EPCC RISC-V testbed to be able to compile and run programs on several available systems.  You will need to be logged in to the EPCC RISC-V testbed login node before proceeding with this guide.  I have included code for RISC-V RVV version 1.0 and the SPIKE command line to run it, but no support will be given in this document in setting up SPIKE.

# Setting Up the Compiler

For this example we will use the GNU GCC compiler version 10.2 with support for RVV.  This version of the GCC compiler will also be used to assemble the assembly language portion of the program. To enable this on the RISC-V Testbed login node we need to load the correct module:

```
module load riscv64-linux/gnu-10.2-rvv
```

# Creating a Makefile

We need to create an area to write our code in and provide a Makefile to enable us to easily build our program:

```
mkdir rvv-casm-test
cd rvv-casm-test
```

The `Makefile` needs to give the correct GCC command to compile and assemble our code so that it can be run on the RISC-V Testbed:

```
vim Makefile
```

The Makefile:

```makefile
CFLAGS=-march=rv64gcv0p7 -mabi=lp64d -mno-relax
CC=riscv64-unknown-linux-gnu-gcc
SRC=main.c RVVaddition.s
TARGET=RVVaddition

$(TARGET):$(SRC)
	$(CC) -v $(CFLAGS) -o $(TARGET) $(SRC)

run:
	$(RISCV)/riscv-isa-sim/build/spike --isa=RV64IMACV $(RISCV)/riscv-pk/build/pk ./$(TARGET)

clean:
	rm -f $(TARGET)

```

The compiler executable we will use is `riscv64-unknown-linux-gnu-gcc`  
The `-march=rv6gcv0p7` flag tells the compiler that the target executable is for a 64bit RISC-V processor with the Vector extensions version 0.7.

The `run:` option in the Makefile is only needed if you are testing on your own computer using SPIKE.

# The C Part of the Program

Next we create our C program that will set up the Vectors and handle the I/O as well as calling the assembly function to do the vector addition.

```
vim main.c
```

```c
/* 
 * program to add two 4 evelmet vectors together
 * using RISC-V RVV assembly instructions
 */
 
#include <stdio.h>

// Function prototype for the vec_add assembly function
void vec_add(int *vec1, int *vec2, int *result);

int main() {
    // Initialize two small vectors and a result vector
    int vectorA[4] = {1, 2, 3, 4};
    int vectorB[4] = {5, 6, 7, 8};
    int vectorC[4] = {0};

    // Output vectorA and vectorB to the terminal
    printf("Vector A: ");
    for (int i = 0; i < 4; i++) {
        printf("%2d ", vectorA[i]);
    }
    printf("\n");

    printf("Vector B: ");
    for (int i = 0; i < 4; i++) {
        printf("%2d ", vectorB[i]);
    }
    printf("\n");

    // Call the vec_add assembly function to add 
    // vectorA and vectorB and return vectorC
    vec_add(vectorA, vectorB, vectorC);

    // Output the result to the terminal
    printf("vector C: ");
    for (int i = 0; i < 4; i++) {
        printf("%2d ", vectorC[i]);
    }
    printf("\n");

    return 0;
}
```
# The Assembly Part of the Program

Next we create the assembly function.  C code file names have a .c suffix but assembly language code files have a .s suffix.

Note: if you are working on your own RISC-V system and it has RVV version 1.0, then see below for RVV 1.0 versions of the Makefile and RVVaddition.s

To create and edit the assembly file we are going to use, open vim as follows:
```
vim RVVaddition.s
```

The function name is `vec_add`.

The first thing we do in the function is to use the `vsetvli` command to set the vector length to 4 elements of 32 bits each.

The reference to three arguments passed in to the function are held in RISC-V registers:  
`(a0)` for `vectorA`  
`(a1)` for `vectorB`  
`(a2)` for `vectorC`

You may have noticed the brackets round some of the register names.  The brackets means that the data in the register is a pointer.  So in the above we can see that `(a0)` has become a pointer to `vectorA`.

We load the data from `(a0)` and `(a1)` in to the RVV vector registers `v0` and `v8` respectively using the `vlw.v` instruction.

Then we perform the vector addition with the element-wise `vadd.vv` instruction. This adds vector registers `v0` and `v8` and puts the result in `v0`.

Finally, using the `vsw.v` instruction, we copy the result from `v0` to `(a2)` - remember, the brackets round `(a2)` denote it being a pointer to `vectorC`.

And at the end we `ret`urn to the calling C program.

You may have noticed that some vector instructions have a `.v` suffix and some have a `.vv` suffix.  The single `.v` denotes that one vector register is used and the double `.vv` denotes that it is an instruction the takes both data elements directly from vector registers.

```nasm
# RISC-V assembly function to add two 4 element vectors
# and return the result to the calling C program

.global vec_add

.section .text
vec_add:
    # Set vector length to 4 elements of 32 bits each
    li t0, 4                  # Number of elements
    vsetvli t0, t0, e32, m1   # Set vector length to 4 elements of 32-bit each

    # Load vectors from memory
    vlw.v v0, (a0)            # Load vectorA into v0
    vlw.v v8, (a1)            # Load vectorB into v8

    # Perform vector addition
    vadd.vv v0, v0, v8        # v0 = v0 + v1

    # Store result in memory
    vsw.v v0, (a2)            # Store v0 into vectorC

    ret
```

We compile the code by typing `make`

# Running on the Testbed

Once we have our executable we can create a Slurm batch file to run the program on one of the EPCC Testbed Milk-V Pioneer computers:

```
vim rvvaddition.srun
```

```bash
#!/bin/bash
#SBATCH -A <Your Username>
#SBATCH -n 1
#SBATCH --nodelist=rvc25
#SBATCH --time=00:01:00

./RVVaddition
```

Remember to replace \<Your Username\> with your EPCC RISC-V testbed username.   

We set the nodelist to `rvc25` so that we target a Milk-V Pioneer computer which we know supports RVV version 0.7.1

Finally we can run our program:

```
sbatch rvvaddition.srun
```

After entering the command above you will get a message like `Submitted batch job 9984` where the number will be unique to your run.

An output file will be created called `slurm-9984.out` (change the number to the one given by the submission output above).  This file will hopefully contain the output from your program.  If the run failed, this file will contain the error messages related to the failed run.

Here is the expected output from our vector addition program:

```
<My Username>@riscv-login:~/rvv-test$ more slurm-9984.out
Vector A:  1  2  3  4
Vector B:  5  6  7  8
Vector C:  6  8 10 12
```

And there we have it, a C program that calls a RISC-V RVV 0.7.1 assembly function.  This whole program could have been written in RISC-V assembly language, but handling I/O in C is so much easier for us humans to deal with.  Coding it this way means you get the power of the RISC-V RVV assembly instructions with the ease of interfacing with the user via C.

# Footnote for RVV 1.0 users.

The RVV 1.0 Makefile should be as follows:

```makefile
CFLAGS=-march=rv64gcv -mabi=lp64d -mno-relax
CC=riscv64-unknown-linux-gnu-gcc
SRC=main.c RVVaddition.s
TARGET=RVVaddition

$(TARGET):$(SRC)
	$(CC) -v $(CFLAGS) -o $(TARGET) $(SRC)

run:
	$(RISCV)/riscv-isa-sim/build/spike --isa=RV64IMACV $(RISCV)/riscv-pk/build/pk ./$(TARGET)

clean:
	rm -f $(TARGET)
```

The RVV 1.0 RVVaddition.s should be as follows:

```nasm
# RISC-V assembly function to add two 4 element vectors
# and return the result to the calling C program

.global vec_add

.section .text
vec_add:
    # Set vector length to 4 elements of 32 bits each
    li t0, 4                  # Number of elements
    vsetvli t0, t0, e32, m2   # Set vector length to 4 elements of 
                              # 32-bit each, with 2 registers per element
    
    # Load vectors from memory
    vle32.v v0, (a0)          # Load vec1 into v0
    vle32.v v8, (a1)          # Load vec2 into v8
    
    # Perform vector addition
    vadd.vv v0, v0, v8        # v0 = v0 + v8
    
    # Store result in memory
    vse32.v v0, (a2)          # Store v0 into result
    
    ret                       # Return to calling program
```
The main.c code stays the same.
