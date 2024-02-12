---
title: "RISC-V Testbed RISC-V soft-core support"
layout: post
categories:
  - Issues
tags:
last_modified_at: 2024-02-12
---
As well as supporting physical hardware (e.g. Allwinner D1, SiFive U74, and 64-core SOPHGO SG2042 CPUs), the testbed also supports RISC-V soft-cores running on an ADM-PA101, which is an AMD/Xilinx Versal FPGA equipped with 16GB DDR. 
## Background
In order to simplify developent, the ADM-PA101 has been set up to run PetaLinux, to allow the soft-cores to be added to the Slurm cluster as the card has Ethernet access. To enable this, we need to configure PetaLinux to boot via 'tftp' and mount its root filesystem over NFS. 

### Networking / MAC address configuration
By default, PetaLinux configures the Ethernet port with a random MAC address. To allow a DHCP assigned IP address based on the MAC address, the following variables need to be set:

```
CONFIG_SUBSYSTEM_ETHERNET_VERSAL_CIPS_0_PSPMC_0_PSV_ETHERNET_0_MAC="00:c0:ff:ee:00:00"
CONFIG_SUBSYSTEM_ETHERNET_VERSAL_CIPS_0_PSPMC_0_PSV_ETHERNET_0_USE_DHCP=y
```

The hostname can be set as using `CONFIG_SUBSYSTEM_HOSTNAME="fpga01"`.


### Root filesystem user configuration
The default PetaLinux configuration will set up `root` and `petalinux` users. This configration can be overridden as follows:
```
CONFIG_ADD_EXTRA_USERS="root:root;user1:initialpassword;"
CONFIG_CREATE_NEW_GROUPS="aie;"
CONFIG_ADD_USERS_TO_GROUPS="user1:audio,video,aie;"
CONFIG_ADD_USERS_TO_SUDOERS="user1"
```
> NOTE: This sets the default `root` password to 'root' and should be changed. The `petalinux-build` command will raise a warning to remind you to change this. 

In the above example, `user1` has `sudo` access through the addition of `CONFIG_ADD_USERS_TO_SUDOERS="user1"`. The example also shows how groups can be added.

> NOTE: The first build of PetaLinux should be used to create the root filesystem (or use `petalinux-build -c rootfs` to rebuild), which should then be expanded into the NFS share directory (e.g. `/tftpboot/nfsroot`). 


### Root filesystem over NFS configuration
Using NFS for the root filesystem should be a trivial configuration change using `petalinux-config`. However, by default, the Xilinx PetaLinux configuration uses NFS v4 protocol for the client. Unfortunately, this is incompatible with the default Debian NFS server running on our login node. The answer is to force the PetaLinux boot to use NFS v3 which can be set in the `BOOTARGS` using the PetaLinux config UI or in the BOOTARGS variable of `project-spec/configs/config` file in the PetaLinux project directory (`sw/petalinux/base`):

```CONFIG_SUBSYSTEM_BOOTARGS_GENERATED="console=ttyAMA0  earlycon=pl011,mmio32,0xFF000000,115200n8 clk_ignore_unused root=/dev/nfs nfsroot=c0.ff.ee.00:/tftpboot/nfsroot,tcp,v3 ip=dhcp rw"```


Here we can see that the root file system is being set to a NFS mount (`root=/dev/nfs`) with the `nfsroot` option including the server and path, as well as forcing `tcp` and `v3` of the NFS protocol. 

## Issues
Unfortunately, the `CONFIG_SUBSYSTEM_BOOTARGS_GENERATED` setting, as the name suggests, is generated and gets wiped during the build. Therefore, the documentation states that the boot command arguments need to be placed in the chosen section of `sw/petalinux/system-user.dtsi` as follows:
```
chosen {
	stdout-path = "serial0:115200";
    	bootargs = "console=ttyAMA0 earlycon=pl011,mmio32,0xFF000000,115200n8 clk_ignore_unused root=/dev/nfs nfsroot=c0.ff.ee.00:/tftpboot/nfsroot,tcp,v3 ip=dhcp rw"
};
```

However, this breaks the build when `petalinux-build` generates other `.dtsi` files and we are unable to proceed further.

## Workaround for the RISC-V testbed
After much experimentation, the following approach can be used to build a PetaLinux image for the uSD card that will boot over 'tftp' and mount the root filesystem over NFS.

1. Expand the AlphaData supplied `ps_base_sw-admpa101-v1_2_0.tar.gz` in a working directory
2. Setup PetaLinux and Vivado environment (assuming Bash on Linux):
 - `source <petalinux_tools_directory>/settings.
sh`
 - `source <vivado_directory>/settings64.sh`
3. `cd ps_base_sw-admpa101-v1_2_0/fpga/proj/base` 
 - Run`vivado -mode batch -source mkxpr-base.tcl`
 - When complete, `vivado -mode batch -source do_build.tcl`
4. `cd ps_base_sw-admpa101-v1_2_0/sw/petalinux`
  - `petalinux-create -t project -s ../../os/simple.bsp`
5. `cd simple`
6.  `petalinux-build`
7. Make a cup of tea / coffee, drink slowly and wait...
8. Now either create a patch to the config file to add DHCP and NFS support using `diff`:
  - Copy the patch (here `config.patch`) to `ps_base_sw-admpa101-v1_2_0/sw/petalinux/simple`
  - `patch -b project-spec/configs/config config.patch`
  - *OR* edit the `project-spec/configs/config` directly to make the requred changes above
9. `petalinux-build`
10. `petalinux-package --boot --u-boot` (builds `BOOT.BIN`)
11. Copy `image.ub`, `boot.scr` and `BOOT.BIN` from `/tftpboot` to the uSD card (`petalinux-build` will place the files in `/tftpboot` by default).
 
>**Note:**
Ignore the following warning as once NFS is enabled, the user accounts will be configured from the NFS root file system:
>
>_WARNING: petalinux-image-minimal-1.0-r0 do_rootfs: Enabling autologin to user root.  This configuration should NOT be used in production!_

>As mentioned above, this build assumes that there is an expanded `rootfs` for the ARM cores in `/tftpboot/nfsroot` (previous `petalinux-build -c rootfs`)
