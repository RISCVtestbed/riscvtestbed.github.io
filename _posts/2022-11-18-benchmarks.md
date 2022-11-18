---
title: "Benchmarks update"
layout: post
categories:
  - Issues
tags:
last_modified_at: 2022-11-18
---


Here we summarize the result of some benchmark tests performed on RISC-V [hardware]({% link _documentation/hardware.md %}) available as part of the testbed:

### RAJAPerf

[RAJAPerf](https://github.com/LLNL/RAJAPerf) tests a suite of loop-based computational kernels relevant for HPC.

#### HiFive Unmatched : 4 cores

GCC 12.1.0, with OpenMP

```
Mean Runtime Report (sec.)  ,  ,  ,  ,  ,  ,  ,  , 
Kernel                      , Base_Seq , Base_Seq , Lambda_Seq , RAJA_Seq , RAJA_Seq , Base_OpenMP , Lambda_OpenMP , RAJA_OpenMP
Kernel                      , default  , library  , default    , default  , library  , default     , default       , default    
Basic_DAXPY                 , 28.156356 ,  Not run ,  28.160198 , 28.160108 ,  Not run ,    7.396172 ,      7.543231 ,    7.409460
Basic_DAXPY_ATOMIC          , 28.162442 ,  Not run ,  28.160992 , 28.579611 ,  Not run ,    8.475086 ,      9.263063 ,    8.472266
Basic_IF_QUAD               , 43.075895 ,  Not run ,  42.970633 , 43.016971 ,  Not run ,   11.112337 ,     11.981280 ,   11.422651
Basic_INDEXLIST             , 3.360099 ,  Not run ,   3.372581 ,  Not run ,  Not run ,    2.210051 ,      2.222299 ,     Not run
Basic_INDEXLIST_3LOOP       , 11.422170 ,  Not run ,  11.485078 , 11.510787 ,  Not run ,    3.800157 ,      3.811743 ,    3.872867
Basic_INIT3                 , 74.289326 ,  Not run ,  74.518820 , 74.443681 ,  Not run ,   19.571704 ,     19.702600 ,   19.685256
Basic_INIT_VIEW1D           , 93.787948 ,  Not run ,  93.743727 , 92.125738 ,  Not run ,   23.999585 ,     24.429108 ,   23.519078
Basic_INIT_VIEW1D_OFFSET    , 92.108568 ,  Not run ,  92.112849 , 93.752046 ,  Not run ,   23.535854 ,     24.218006 ,   23.530862
Basic_MAT_MAT_SHARED        , 48.164883 ,  Not run ,  48.322539 , 48.313111 ,  Not run ,   11.879200 ,     12.603324 ,   13.064987
Basic_MULADDSUB             , 57.249118 ,  Not run ,  57.254810 , 57.227810 ,  Not run ,   15.314176 ,     15.261400 ,   15.221371
Basic_NESTED_INIT           , 48.745103 ,  Not run ,  48.757332 , 48.758014 ,  Not run ,   12.399886 ,     12.407606 ,   12.700543
Basic_PI_ATOMIC             , 3.467215 ,  Not run ,   3.467383 , 3.804098 ,  Not run ,    8.160155 ,      8.134048 ,    8.179774
Basic_PI_REDUCE             , 3.466756 ,  Not run ,   3.466645 , 3.466717 ,  Not run ,    0.870042 ,      0.870113 ,    0.869903
Basic_REDUCE3_INT           , 0.749383 ,  Not run ,   0.749206 , 0.651968 ,  Not run ,    0.168497 ,      0.173837 ,    0.213806
Basic_REDUCE_STRUCT         , 2.519068 ,  Not run ,   2.518919 , 2.519451 ,  Not run ,    0.682301 ,      0.683614 ,    0.694366
Basic_TRAP_INT              , 6.515099 ,  Not run ,   6.518379 , 6.820636 ,  Not run ,    1.631595 ,      1.631716 ,    1.631639
Lcals_DIFF_PREDICT          , 80.248259 ,  Not run ,  80.201901 , 80.306518 ,  Not run ,   20.922983 ,     20.919771 ,   20.920993
Lcals_EOS                   , 63.528947 ,  Not run ,  63.673790 , 63.599122 ,  Not run ,   17.279630 ,     17.408710 ,   17.155007
Lcals_FIRST_DIFF            , 110.898358 ,  Not run , 110.833103 , 110.871676 ,  Not run ,   29.262502 ,     29.247035 ,   29.250981
Lcals_FIRST_MIN             , 2.206986 ,  Not run ,   2.206673 , 2.208901 ,  Not run ,    0.581173 ,      0.582285 ,    0.582162
Lcals_FIRST_SUM             , 111.339359 ,  Not run , 111.334948 , 111.336875 ,  Not run ,   29.285727 ,     29.293784 ,   29.344087
Lcals_GEN_LIN_RECUR         , 114.707440 ,  Not run , 114.699770 , 114.850399 ,  Not run ,   30.496750 ,     30.516495 ,   30.553395
Lcals_HYDRO_1D              , 84.761232 ,  Not run ,  84.632124 , 84.723004 ,  Not run ,   22.498738 ,     25.904121 ,   22.373559
Lcals_HYDRO_2D              , 74.733944 ,  Not run ,  74.744774 , 74.482951 ,  Not run ,   19.814321 ,     20.589137 ,   19.747476
Lcals_INT_PREDICT           , 131.189990 ,  Not run , 131.116771 , 132.726070 ,  Not run ,   35.131865 ,     38.455856 ,   35.099486
Lcals_PLANCKIAN             , 16.353729 ,  Not run ,  16.264036 , 16.362683 ,  Not run ,    4.213773 ,      4.301006 ,    4.257093
Lcals_TRIDIAG_ELIM          , 113.850555 ,  Not run , 113.894233 , 113.783551 ,  Not run ,   30.381486 ,     30.402327 ,   30.418512
Polybench_2MM               , 250.481996 ,  Not run , 250.445174 , 250.404396 ,  Not run ,   64.605405 ,     64.698303 ,   64.628299
Polybench_3MM               , 362.611802 ,  Not run , 362.934388 , 363.009884 ,  Not run ,   93.638757 ,     93.761213 ,   93.567750
Polybench_ADI               , 9.241930 ,  Not run ,   9.286973 , 9.235973 ,  Not run ,    2.520005 ,      2.683558 ,    2.529141
Polybench_ATAX              , 7.795696 ,  Not run ,   7.793319 , 7.801256 ,  Not run ,    2.108401 ,      2.117272 ,    2.130762
Polybench_FDTD_2D           , 71.340544 ,  Not run ,  71.314211 , 71.351817 ,  Not run ,   18.850686 ,     18.820853 ,   18.874003
Polybench_FLOYD_WARSHALL    , 515.280074 ,  Not run , 518.571015 , 520.893399 ,  Not run ,  135.033489 ,    134.900037 ,  136.828812
Polybench_GEMM              , 298.294130 ,  Not run , 297.988367 , 297.962199 ,  Not run ,   77.541799 ,     77.891847 ,   77.806695
Polybench_GEMVER            , 2.910385 ,  Not run ,   2.747789 , 2.817910 ,  Not run ,    0.751431 ,      0.734745 ,    0.739523
Polybench_GESUMMV           , 5.067033 ,  Not run ,   5.064056 , 5.065522 ,  Not run ,    1.366681 ,      1.367424 ,    1.366529
Polybench_HEAT_3D           , 81.603046 ,  Not run ,  80.579647 , 80.772718 ,  Not run ,   22.894627 ,     22.745314 ,   23.459976
Polybench_JACOBI_1D         , 215.967331 ,  Not run , 215.920668 , 215.900962 ,  Not run ,   56.346301 ,     56.524528 ,   56.325029
Polybench_JACOBI_2D         , 356.910886 ,  Not run , 356.898817 , 357.178124 ,  Not run ,   95.365111 ,     94.722866 ,   95.181070
Polybench_MVT               , 7.549005 ,  Not run ,   7.554824 , 7.564624 ,  Not run ,    2.055290 ,      2.036335 ,    2.037146
Stream_ADD                  , 73.538527 ,  Not run ,  73.495234 , 73.430349 ,  Not run ,   19.687102 ,     19.741683 ,   19.928975
Stream_COPY                 , 87.312974 ,  Not run ,  87.313775 , 87.316370 ,  Not run ,   23.322273 ,     23.252412 ,   23.634359
Stream_DOT                  , 81.297236 ,  Not run ,  81.295203 , 81.302159 ,  Not run ,   21.955246 ,     21.950310 ,   21.975636
Stream_MUL                  , 98.802959 ,  Not run ,  98.694173 , 98.687183 ,  Not run ,   25.915892 ,     26.692723 ,   26.311124
Stream_TRIAD                , 73.487979 ,  Not run ,  73.574303 , 73.556661 ,  Not run ,   19.709719 ,     23.759913 ,   19.969425
Apps_CONVECTION3DPA         , 7.133527 ,  Not run ,    Not run , 7.129297 ,  Not run ,    1.840470 ,       Not run ,    1.757540
Apps_DEL_DOT_VEC_2D         , 37.606192 ,  Not run ,  37.622300 , 37.485531 ,  Not run ,    9.090235 ,      9.239236 ,    9.067611
Apps_DIFFUSION3DPA          , 13.464221 ,  Not run ,    Not run , 13.834301 ,  Not run ,    3.601767 ,       Not run ,    3.572561
Apps_ENERGY                 , 96.822821 ,  Not run ,  96.830381 , 97.310260 ,  Not run ,   25.517090 ,     27.140496 ,   27.977542
Apps_FIR                    , 22.949951 ,  Not run ,  22.948945 , 22.949806 ,  Not run ,    5.971900 ,      5.905872 ,    5.826028
Apps_HALOEXCHANGE           , 1.831457 ,  Not run ,   1.831999 , 1.836823 ,  Not run ,    0.516424 ,      0.517390 ,    0.524733
Apps_HALOEXCHANGE_FUSED     , 1.833806 ,  Not run ,   1.834912 , 1.839688 ,  Not run ,    0.515492 ,      0.515583 ,    0.528154
Apps_LTIMES                 , 15.837357 ,  Not run ,  15.834466 , 15.835628 ,  Not run ,    3.974183 ,      3.977875 ,    3.975899
Apps_LTIMES_NOVIEW          , 15.835583 ,  Not run ,  15.834872 , 15.838630 ,  Not run ,    3.979088 ,      3.977522 ,    3.978006
Apps_MASS3DPA               , 5.396602 ,  Not run ,    Not run , 5.382020 ,  Not run ,    1.417330 ,       Not run ,    1.530032
Apps_NODAL_ACCUMULATION_3D  , 15.992043 ,  Not run ,  15.995455 , 16.653659 ,  Not run ,    5.332824 ,      6.441306 ,    5.337633
Apps_PRESSURE               , 123.531452 ,  Not run , 123.557072 , 123.578045 ,  Not run ,   32.582835 ,     37.900791 ,   32.895015
Apps_VOL3D                  , 29.922857 ,  Not run ,  29.865468 , 30.084616 ,  Not run ,    9.315884 ,     10.949640 ,    8.623637
Algorithm_SCAN              , 5.461366 ,  Not run ,   5.461143 , 5.461580 ,  Not run ,    2.386610 ,      2.382014 ,    6.641378
Algorithm_SORT              , 6.086460 ,  Not run ,    Not run , 7.316730 ,  Not run ,     Not run ,       Not run ,    5.346358
Algorithm_SORTPAIRS         , 15.383450 ,  Not run ,    Not run , 15.143971 ,  Not run ,     Not run ,       Not run ,   11.189655
Algorithm_REDUCE_SUM        , 1.130474 ,  Not run ,   1.129760 , 1.130411 ,  Not run ,    0.295031 ,      0.294790 ,    0.295923
Algorithm_MEMSET            , 2.880395 , 2.816004 ,   2.879100 , 2.880073 , 2.818458 ,    0.751603 ,      0.828852 ,    0.751767
Algorithm_MEMCPY            , 4.855682 , 4.701605 ,   4.856377 , 4.856770 , 4.701167 ,    1.294277 ,      1.294691 ,    1.316501
```

#### Lichee RV Dock : 1 core

GCC 12.2.0

```
Mean Runtime Report (sec.)  ,  ,  ,  ,  , 
Kernel                      , Base_Seq , Base_Seq , Lambda_Seq , RAJA_Seq , RAJA_Seq
Kernel                      , default  , library  , default    , default  , library 
Basic_DAXPY                 , 6.468499 ,  Not run ,   6.458172 , 6.452166 ,  Not run
Basic_DAXPY_ATOMIC          , 6.447585 ,  Not run ,   6.450198 , 7.851907 ,  Not run
Basic_IF_QUAD               , 19.394074 ,  Not run ,  19.367282 , 19.297223 ,  Not run
Basic_INDEXLIST             , 1.535967 ,  Not run ,   1.546080 ,  Not run ,  Not run
Basic_INDEXLIST_3LOOP       , 2.849896 ,  Not run ,   2.822777 , 2.987178 ,  Not run
Basic_INIT3                 , 25.216073 ,  Not run ,  24.617879 , 24.648837 ,  Not run
Basic_INIT_VIEW1D           , 23.317571 ,  Not run ,  23.935843 , 25.320231 ,  Not run
Basic_INIT_VIEW1D_OFFSET    , 23.867123 ,  Not run ,  23.870350 , 23.951083 ,  Not run
Basic_MAT_MAT_SHARED        , 51.010730 ,  Not run ,  50.997175 , 50.464275 ,  Not run
Basic_MULADDSUB             , 20.267279 ,  Not run ,  20.896943 , 20.341267 ,  Not run
Basic_NESTED_INIT           , 19.397482 ,  Not run ,  19.393117 , 19.379649 ,  Not run
Basic_PI_ATOMIC             , 2.741767 ,  Not run ,   2.741956 , 3.042859 ,  Not run
Basic_PI_REDUCE             , 2.743310 ,  Not run ,   2.743469 , 2.742568 ,  Not run
Basic_REDUCE3_INT           , 0.723160 ,  Not run ,   0.719961 , 0.759754 ,  Not run
Basic_REDUCE_STRUCT         , 1.895896 ,  Not run ,   1.742242 , 1.546660 ,  Not run
Basic_TRAP_INT              , 6.153831 ,  Not run ,   5.576969 , 6.103644 ,  Not run
Lcals_DIFF_PREDICT          , 48.223525 ,  Not run ,  46.891743 , 46.184341 ,  Not run
Lcals_EOS                   , 18.339923 ,  Not run ,  18.130119 , 18.136605 ,  Not run
Lcals_FIRST_DIFF            , 21.259956 ,  Not run ,  21.834956 , 21.231714 ,  Not run
Lcals_FIRST_MIN             , 1.079055 ,  Not run ,   1.079268 , 1.079811 ,  Not run
Lcals_FIRST_SUM             , 21.222292 ,  Not run ,  21.230454 , 21.221149 ,  Not run
Lcals_GEN_LIN_RECUR         , 49.750833 ,  Not run ,  47.884836 , 47.348907 ,  Not run
Lcals_HYDRO_1D              , 20.523767 ,  Not run ,  19.911800 , 19.967728 ,  Not run
Lcals_HYDRO_2D              , 43.308601 ,  Not run ,  42.667723 , 43.583039 ,  Not run
Lcals_INT_PREDICT           , 48.556984 ,  Not run ,  50.934969 , 69.989621 ,  Not run
Lcals_PLANCKIAN             , 14.282972 ,  Not run ,   8.568712 , 8.569843 ,  Not run
Lcals_TRIDIAG_ELIM          , 18.802832 ,  Not run ,  18.194713 , 18.236255 ,  Not run
Polybench_2MM               , 887.872479 ,  Not run , 886.854731 , 893.432138 ,  Not run
Polybench_3MM               , 1357.023100 ,  Not run , 1339.533115 , 1339.501640 ,  Not run
Polybench_ADI               , 11.004249 ,  Not run ,  10.999765 , 10.740713 ,  Not run
Polybench_ATAX              , 20.916988 ,  Not run ,  20.963853 , 21.052505 ,  Not run
Polybench_FDTD_2D           , 24.023767 ,  Not run ,  25.220659 , 23.766591 ,  Not run
Polybench_FLOYD_WARSHALL    , 183.267894 ,  Not run , 192.482147 , 191.730114 ,  Not run
Polybench_GEMM              , 1000.260363 ,  Not run , 1004.289385 , 1000.492333 ,  Not run
Polybench_GEMVER            , 4.881020 ,  Not run ,   4.821430 , 4.899719 ,  Not run
Polybench_GESUMMV           , 1.696861 ,  Not run ,   1.694564 , 1.825221 ,  Not run
Polybench_HEAT_3D           , 34.789089 ,  Not run ,  35.223023 , 36.318626 ,  Not run
Polybench_JACOBI_1D         , 66.916657 ,  Not run ,  66.349260 , 81.074997 ,  Not run
Polybench_JACOBI_2D         , 130.810761 ,  Not run , 134.837161 , 131.402980 ,  Not run
Polybench_MVT               , 20.973111 ,  Not run ,  21.517221 , 21.028210 ,  Not run
Stream_ADD                  , 12.780512 ,  Not run ,  12.761075 , 12.740989 ,  Not run
Stream_COPY                 , 13.709590 ,  Not run ,  13.684357 , 13.677399 ,  Not run
Stream_DOT                  , 18.457686 ,  Not run ,  17.773828 , 17.205206 ,  Not run
Stream_MUL                  , 17.528765 ,  Not run ,  16.970648 , 17.537963 ,  Not run
Stream_TRIAD                , 12.878061 ,  Not run ,  12.883617 , 13.457311 ,  Not run
Apps_CONVECTION3DPA         , 6.052681 ,  Not run ,    Not run , 6.020841 ,  Not run
Apps_DEL_DOT_VEC_2D         , 24.727193 ,  Not run ,  24.673898 , 24.001643 ,  Not run
Apps_DIFFUSION3DPA          , 11.118017 ,  Not run ,    Not run , 11.452410 ,  Not run
Apps_ENERGY                 , 40.890944 ,  Not run ,  40.279236 , 40.698542 ,  Not run
Apps_FIR                    , 15.408282 ,  Not run ,  17.080867 , 18.410610 ,  Not run
Apps_HALOEXCHANGE           , 0.935015 ,  Not run ,   0.934467 , 0.941419 ,  Not run
Apps_HALOEXCHANGE_FUSED     , 0.903823 ,  Not run ,   0.892849 , 0.940742 ,  Not run
Apps_LTIMES                 , 11.469956 ,  Not run ,  10.862536 , 11.018350 ,  Not run
Apps_LTIMES_NOVIEW          , 11.484665 ,  Not run ,  10.891379 , 10.974233 ,  Not run
Apps_MASS3DPA               , 4.219526 ,  Not run ,    Not run , 4.412288 ,  Not run
Apps_NODAL_ACCUMULATION_3D  , 13.211698 ,  Not run ,  12.454580 , 13.311500 ,  Not run
Apps_PRESSURE               , 55.701322 ,  Not run ,  55.148276 , 55.745265 ,  Not run
Apps_VOL3D                  , 19.825400 ,  Not run ,  19.475097 , 19.476443 ,  Not run
Algorithm_SCAN              , 0.879000 ,  Not run ,   0.876178 , 0.844663 ,  Not run
Algorithm_SORT              , 8.291381 ,  Not run ,    Not run , 6.957475 ,  Not run
Algorithm_SORTPAIRS         , 19.210112 ,  Not run ,    Not run , 14.463506 ,  Not run
Algorithm_REDUCE_SUM        , 0.287417 ,  Not run ,   0.287852 , 0.288389 ,  Not run
Algorithm_MEMSET            , 0.319282 , 0.298957 ,   0.319037 , 0.320144 , 0.301023
Algorithm_MEMCPY            , 0.755837 , 0.744061 ,   0.756637 , 0.755230 , 0.744785
```

### ExCALIBUR benchmarks update

The ExCALIBUR project collects a series of [benchmarks](https://github.com/ukri-excalibur/excalibur-tests) for testing HPC systems. The following were built successfully and ran with the following results:
#### Sombrero

##### HiFive Unmatched 
Size: small (global volume 32x24x24x24)

Single MPI-task (one core)
```
SOMBRERO 1
[MAIN][0] Case 1: 43.95e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 1: inf flop per byte communicated
[MAIN][0] Case 1: 0.85 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 1 43.95 Gflops in 732.286438 seconds
[RESULT][0] Case 1 0.06 Gflops/seconds

SOMBRERO 2
[MAIN][0] Case 2: 93.25e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 2: inf flop per byte communicated
[MAIN][0] Case 2: 1.03 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 2 93.25 Gflops in 1088.603271 seconds
[RESULT][0] Case 2 0.09 Gflops/seconds

SOMBRERO 3
[MAIN][0] Case 3: 93.25e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 3: inf flop per byte communicated
[MAIN][0] Case 3: 1.03 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 3 93.25 Gflops in 1326.380493 seconds
[RESULT][0] Case 3 0.07 Gflops/seconds

SOMBRERO 4
[MAIN][0] Case 4: 160.77e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 4: inf flop per byte communicated
[MAIN][0] Case 4: 1.17 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 4 160.77 Gflops in 1938.877197 seconds
[RESULT][0] Case 4 0.08 Gflops/seconds

SOMBRERO 5
[MAIN][0] Case 5: 350.46e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 5: inf flop per byte communicated
[MAIN][0] Case 5: 1.35 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 5 350.46 Gflops in 4686.009277 seconds
[RESULT][0] Case 5 0.07 Gflops/seconds

SOMBRERO 6
[MAIN][0] Case 6: 948.47e9 floating point operations and 0.00e6 bytes communicated (both directions included)
[MAIN][0] Case 6: inf flop per byte communicated
[MAIN][0] Case 6: 1.57 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 6 948.47 Gflops in 11141.337891 seconds
[RESULT][0] Case 6 0.09 Gflops/seconds
```

4 MPI-tasks (4 cores)

```
SOMBRERO 1
[MAIN][0] Case 1: 43.95e9 floating point operations and 842.27e6 bytes communicated (both directions included)
[MAIN][0] Case 1: 52.18 flop per byte communicated
[MAIN][0] Case 1: 0.71 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 1 43.95 Gflops in 199.588638 seconds
[RESULT][0] Case 1 0.22 Gflops/seconds

SOMBRERO 2
[MAIN][0] Case 2: 93.25e9 floating point operations and 1263.40e6 bytes communicated (both directions included)
[MAIN][0] Case 2: 73.81 flop per byte communicated
[MAIN][0] Case 2: 0.88 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 2 93.25 Gflops in 297.452484 seconds
[RESULT][0] Case 2 0.31 Gflops/seconds

SOMBRERO 3
[MAIN][0] Case 3: 93.25e9 floating point operations and 1263.40e6 bytes communicated (both directions included)
[MAIN][0] Case 3: 73.81 flop per byte communicated
[MAIN][0] Case 3: 0.88 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 3 93.25 Gflops in 353.340668 seconds
[RESULT][0] Case 3 0.26 Gflops/seconds

SOMBRERO 4
[MAIN][0] Case 4: 160.77e9 floating point operations and 1684.54e6 bytes communicated (both directions included)
[MAIN][0] Case 4: 95.44 flop per byte communicated
[MAIN][0] Case 4: 1.01 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 4 160.77 Gflops in 515.570129 seconds
[RESULT][0] Case 4 0.31 Gflops/seconds

SOMBRERO 5
[MAIN][0] Case 5: 350.46e9 floating point operations and 2526.81e6 bytes communicated (both directions included)
[MAIN][0] Case 5: 138.70 flop per byte communicated
[MAIN][0] Case 5: 1.20 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 5 350.46 Gflops in 1218.988403 seconds
[RESULT][0] Case 5 0.29 Gflops/seconds

SOMBRERO 6
[MAIN][0] Case 6: 948.47e9 floating point operations and 4211.34e6 bytes communicated (both directions included)
[MAIN][0] Case 6: 225.22 flop per byte communicated
[MAIN][0] Case 6: 1.43 average arithmetic intensity estimate (DRAM or L3) 
[RESULT][0] Case 6 948.47 Gflops in 2872.089600 seconds
[RESULT][0] Case 6 0.33 Gflops/seconds

```

Notes:

- Medium size crashes for HiFive Unmatch (U740)
- Small size crashes for Lichee RV Dock (D1 C906)

#### HPGMG


#### HiFive Unmatched : 4 cores

GCC 12.1.0, with OpenMP
./hpgmg-fv 7 8
```
==== Performance Summary ======================================================
  h=3.906250000000000e-03  DOF=1.677721600000000e+07  time=110.205145  DOF/s=1.522e+05  MPI=1  OMP=4
  h=7.812500000000000e-03  DOF=2.097152000000000e+06  time=13.644428  DOF/s=1.537e+05  MPI=1  OMP=4
  h=1.562500000000000e-02  DOF=2.621440000000000e+05  time=1.716166  DOF/s=1.527e+05  MPI=1  OMP=4
```

#### Lichee RV Dock : 1 core

GCC 12.2.0
./hpgmg-fv 7 7



#### Other issues

Grid: takes too long to build
SWIFTSIM: Ticks not defined for RISC-V
CP2K: liblsan not supported for RISC-V
