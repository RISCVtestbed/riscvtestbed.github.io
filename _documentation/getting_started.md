---
title: "Getting started"
icon: /images/sign-post.png
icon_alt: Sign post
---

This section describes how to access both the command line and GUI of the testbed system. The testbed is part of a larger machine, NEXTGenIO, with testbed users building their codes on a specific front-end node, and then running on the individual RISC-V backend nodes. The front-end node contains two 48-core Cascade Lake Xeon Platinum CPUs, 512GB RAM, and files are stored on the Lustre high performance parallel filesystem which is also visible to the back-end nodes.

### Command line access

The testbed system is only accessible via the _hydra-vpn_ proxy host, and in the previous _applying for access_ step you will have signed up for accounts on both _hydra-vpn_ and _NEXTGenIO_. To access the testbed you need to therefore first ssh to _hydra-vpn_ via `ssh username@hydra-vpn.epcc.ed.ac.uk` , the first time that you access this you will need to use the password automatically allocated via the SAFE system (it can be retrieved via SAFE) and will be prompted to change this.

Once you have logged into hydra-vpn then you can access the testbed login node via `ssh username@nextgenio-login2` . This is the node  flow is illustrated below.

```console
username@localhost:~$ ssh username@hydra-vpn.epcc.ed.ac.uk
[username@hydra-vpn ~]$ ssh username@nextgenio-login2
[username@nextgenio-login2 ~]$
```

>**ADVICE:**  
> It is possible to automate the proxy step by setting this up in your ssh .config file as a proxyjump

### Desktop access

<img src="/images/x2go_settings.png" width="400" height="400" align="right"/>

The lightweight XFCE desktop is installed on the front-end of the testbed system, which is especially useful for programming FPGAs as much of the tooling has a graphical component to it. The front-end is also running X2GO which tends to provide much better performance than vanilla X forwarding. Therefore we strongly suggest accessing the desktop via X2GO, with users just needing to install the client program which is available [here](https://wiki.x2go.org/doku.php/download:start).

Once the client is installed, create a new profile with settings matching those as illustrated below (assuming that you use the same username and password for both _hydra-vpn_ and the _NEXTGenIO_ node.

>**NOTE:**  
> Whilst it is possible to run the individual graphical tools directly via X2GO, we suggest doing this via the XFCE desktop environment as find that this provides a much better user experience.

## RISC-V compilers and libraries

RISC-V compilers and libraries are available on the front-end either via the [Spack](spack.readthedocs.io/) or the module environment.

### Spack

The easiest way to access the Spack environment is to load the following environment script:

```console
[username@nextgenio-login2 ~]$ source /home/nx09/shared/riscv/riscv64_env.sh
[username@nextgenio-login2 ~][risc64-env]$ spack compiler
==> Available compilers
...
---------- gcc unknown-linux-riscv64 ----------
gcc@12.2.0
```

This will load the `riscv64` spack environment, which contains the RISC-V gcc compilers and precompiled libraries.

>**ADVICE:**  
> You can add this command into your _.bashrc_ file which will then make these modules available automatically.

The list of installed Spack libraries can be viewed via

```console
[username@nextgenio-login2 ~][risc64-env]$ spack find
==> In environment riscv64
...
==> Installed packages
---------- linux-unknown-linux-riscv64 / gcc@12.2.0 -------------
zlib@1.2.13  ...

---------- linux-centos7-skylake_avx512 / gcc@8.3.0 -------------
berkeley-db@18.1.40                ...
```

Libraries can be installed using `spack install [package][@version][%compiler][compiler flags (e.g. cppflag="-03")][^dependency@version] target=riscv64 os=unknown-linux`, and loaded via `spack load`. More details can be found [here](https://spack.readthedocs.io/en/latest/basic_usage.html).

### Modules

Alternatively, the compilers and packages installed in Spack can also be loaded via the module environment. Once the riscv64 Spack environment is activated using the script above, the available modules can be viewed via `module avail` and loaded via `module load [module]`.

```console
[username@nextgenio-login2 ~]$ source /home/nx09/shared/riscv/riscv64_env.sh
[username@nextgenio-login2 ~][risc64-env]$ module available
-- /lustre/home/nx09/shared/riscv/spack/share/spack/modules/linux-centos7-skylake_avx512 --
   berkeley-db-18.1.40-gcc-8.3.0-saop5y7                    ...

---------------------------- /home/nx09/shared/riscv/modulefiles -----------------------------
   gnu-riscv/12.2
```

To inspect the list of modules set in the user environment, run `module list`. More general details about the module environment can be found [here](https://linux.die.net/man/1/module).
