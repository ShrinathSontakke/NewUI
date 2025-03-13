import React from 'react'

export default function FishSvg(props) {
  return (
  
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="37" height="26" viewBox="0 0 37 26" {...props}>
  <defs>
    {/* <style>
      .cls-1 {
        fill: #000;
        filter: url(#gradient-overlay-1);
        fill-rule: evenodd;
      }
    </style> */}

    <filter id="gradient-overlay-1" filterUnits="userSpaceOnUse">
      <feImage x="0" y="0" width="37" height="26" preserveAspectRatio="none" xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzciIGhlaWdodD0iMjYiPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSIxMyIgeDI9IjM3IiB5Mj0iMTMiPgogIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y0YWEzNiIvPgogIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2YzNzMzNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PC9zdmc+"/>
      <feComposite operator="in" in2="SourceGraphic"/>
      <feBlend in2="SourceGraphic" result="gradientFill"/>
    </filter>
  </defs>
  <path d="M36.987,17.117 C36.497,19.571 32.943,21.388 30.835,22.263 C28.031,25.321 23.480,25.933 20.707,25.994 C20.534,25.998 20.370,26.000 20.216,26.000 C20.214,26.000 20.212,26.000 20.211,26.000 C20.210,26.000 20.210,26.000 20.210,26.000 L20.210,26.000 C19.501,26.000 19.031,25.964 18.911,25.954 C18.893,25.952 18.883,25.952 18.881,25.951 L18.738,25.938 L18.685,25.806 C16.733,20.969 21.190,18.324 21.594,18.097 C22.339,17.403 23.017,16.706 23.618,16.020 C22.504,13.517 24.686,11.540 24.709,11.520 L25.027,11.239 L25.098,11.654 C25.162,12.030 25.379,12.530 25.714,13.106 C27.857,9.214 26.120,7.249 25.816,6.949 C25.397,7.190 24.646,7.516 23.629,7.516 C22.226,7.516 20.792,6.902 19.368,5.691 L19.228,5.573 L19.311,5.410 C19.348,5.340 20.216,3.696 22.103,3.696 C22.449,3.696 22.808,3.753 23.176,3.866 C22.823,3.054 22.409,1.501 23.517,0.094 L23.588,0.005 L23.720,-0.000 C24.036,-0.000 25.746,0.904 26.576,2.406 C27.176,3.492 27.194,4.676 26.657,5.871 C32.153,7.333 33.037,13.070 33.173,15.136 C36.252,15.221 36.948,16.916 36.976,16.989 L37.000,17.052 L36.987,17.117 ZM18.970,21.698 C19.045,21.647 19.131,21.595 19.228,21.549 C19.564,21.386 19.940,21.295 20.317,21.295 C20.513,21.295 20.714,21.300 20.896,21.364 C21.122,21.444 21.003,21.813 20.794,21.774 C20.334,21.687 19.839,21.715 19.422,21.924 C19.154,22.059 18.925,22.266 18.745,22.506 C18.583,23.367 18.637,24.364 19.069,25.500 C19.270,25.514 19.672,25.535 20.210,25.535 L20.210,25.535 C20.346,25.535 20.492,25.534 20.643,25.530 C21.717,25.507 23.311,25.386 24.988,24.965 C25.166,24.447 25.790,22.309 24.692,20.573 L24.571,20.397 C24.497,20.290 24.422,20.189 24.346,20.094 C24.329,20.072 24.311,20.053 24.294,20.032 C24.233,19.958 24.172,19.886 24.109,19.819 C24.095,19.803 24.080,19.788 24.066,19.773 C23.998,19.702 23.930,19.633 23.863,19.570 C23.856,19.563 23.849,19.557 23.841,19.550 C22.931,18.711 22.022,18.551 21.786,18.523 C21.424,18.727 19.686,19.789 18.970,21.698 ZM24.743,12.156 C24.255,12.716 23.365,14.026 23.955,15.623 C24.013,15.554 24.071,15.485 24.126,15.417 C24.183,15.348 24.240,15.278 24.295,15.209 C24.404,15.071 24.508,14.935 24.610,14.798 C24.651,14.743 24.695,14.687 24.736,14.631 C24.874,14.441 25.006,14.253 25.131,14.066 C25.152,14.035 25.170,14.004 25.191,13.972 C25.279,13.838 25.362,13.705 25.442,13.573 C25.112,13.038 24.877,12.563 24.743,12.156 ZM26.759,11.974 C26.685,12.171 25.938,13.479 25.993,13.566 C25.995,13.568 25.922,13.690 25.922,13.690 C25.440,14.504 24.817,15.354 24.070,16.217 L23.836,16.486 C23.343,17.027 22.815,17.581 22.235,18.135 C22.354,18.022 23.249,18.538 23.362,18.605 C23.916,18.934 24.308,19.378 24.749,19.830 C24.749,19.830 25.363,18.922 25.563,18.577 C25.815,18.142 26.055,17.701 26.277,17.250 C26.729,16.333 27.110,15.379 27.369,14.390 C27.892,12.396 27.880,10.282 27.093,8.358 C27.279,9.072 27.278,9.822 27.156,10.546 C27.073,11.033 26.935,11.511 26.759,11.974 ZM26.315,2.938 C25.708,1.540 24.243,0.676 23.801,0.496 C22.574,2.207 23.809,4.093 23.863,4.174 L24.321,4.858 L23.568,4.514 C23.055,4.279 22.563,4.161 22.103,4.161 C20.820,4.161 20.075,5.089 19.826,5.465 C21.112,6.518 22.390,7.051 23.629,7.051 C24.895,7.051 25.716,6.473 25.865,6.360 C26.633,5.169 26.784,4.018 26.315,2.938 ZM32.715,15.371 C32.629,13.600 31.928,7.751 26.535,6.315 L26.474,6.399 C28.044,8.437 28.488,11.072 28.036,13.560 C27.811,14.803 27.385,16.002 26.846,17.145 C26.571,17.729 26.265,18.300 25.940,18.859 C25.858,19.001 25.009,20.204 25.051,20.268 C25.064,20.288 25.077,20.304 25.089,20.324 C26.158,22.009 25.779,23.960 25.530,24.816 C27.327,24.296 29.166,23.414 30.524,21.913 C31.949,20.338 32.690,18.265 32.725,15.751 C32.725,15.748 32.727,15.609 32.715,15.371 ZM33.194,15.597 C33.195,15.606 33.195,15.609 33.195,15.618 C33.196,15.657 33.196,15.688 33.196,15.710 C33.196,15.741 33.196,15.756 33.196,15.756 C33.179,16.963 33.004,18.168 32.593,19.308 C32.440,19.732 32.258,20.145 32.049,20.543 C31.939,20.751 31.709,21.366 31.481,21.471 C33.294,20.631 36.061,19.053 36.509,17.098 C36.370,16.824 35.641,15.672 33.194,15.597 ZM22.484,24.665 C22.101,24.665 21.790,24.358 21.790,23.980 C21.790,23.601 22.101,23.294 22.484,23.294 C22.868,23.294 23.179,23.601 23.179,23.980 C23.179,24.358 22.868,24.665 22.484,24.665 ZM15.405,7.903 C14.661,8.596 13.983,9.293 13.382,9.979 C14.495,12.482 12.314,14.459 12.291,14.479 L11.973,14.760 L11.901,14.345 C11.837,13.969 11.620,13.469 11.285,12.893 C9.142,16.785 10.879,18.751 11.183,19.051 C11.603,18.810 12.353,18.484 13.371,18.484 C14.773,18.484 16.207,19.097 17.632,20.308 L17.772,20.427 L17.688,20.589 C17.652,20.659 16.783,22.304 14.896,22.304 C14.551,22.304 14.192,22.247 13.824,22.134 C14.177,22.946 14.591,24.499 13.482,25.905 L13.412,25.994 L13.279,26.000 C12.963,26.000 11.254,25.096 10.423,23.593 C9.824,22.507 9.805,21.323 10.342,20.129 C4.846,18.666 3.963,12.930 3.826,10.863 C0.748,10.779 0.052,9.084 0.023,9.010 L-0.000,8.948 L0.013,8.882 C0.502,6.428 4.056,4.611 6.165,3.736 C9.142,0.488 14.094,-0.000 16.789,-0.000 C17.600,-0.000 18.098,0.046 18.119,0.048 L18.262,0.062 L18.315,0.193 C20.267,5.033 15.806,7.678 15.405,7.903 ZM12.257,13.843 C12.744,13.283 13.634,11.974 13.044,10.377 C12.987,10.445 12.929,10.514 12.873,10.582 C12.817,10.651 12.760,10.721 12.706,10.789 C12.595,10.929 12.489,11.068 12.386,11.206 C12.346,11.260 12.304,11.313 12.265,11.366 C12.126,11.557 11.992,11.747 11.867,11.935 C11.850,11.961 11.835,11.987 11.818,12.013 C11.726,12.152 11.640,12.290 11.557,12.427 C11.888,12.962 12.122,13.436 12.257,13.843 ZM11.006,12.433 C11.005,12.431 11.077,12.309 11.077,12.309 C11.560,11.495 12.183,10.645 12.930,9.783 L13.163,9.513 C13.657,8.972 14.185,8.418 14.764,7.864 C14.169,7.717 13.137,7.300 12.237,6.138 C12.269,6.179 11.531,7.259 11.465,7.373 C11.199,7.830 10.947,8.295 10.714,8.769 C10.261,9.695 9.880,10.658 9.623,11.655 C9.121,13.601 9.086,15.775 9.907,17.645 C9.607,16.488 9.660,14.760 11.006,12.433 ZM10.685,23.062 C11.292,24.459 12.756,25.323 13.198,25.503 C14.429,23.784 13.150,21.845 13.137,21.825 L12.674,21.140 L13.432,21.486 C13.944,21.720 14.437,21.839 14.896,21.839 C16.191,21.839 16.928,20.914 17.175,20.535 C15.888,19.482 14.609,18.949 13.371,18.949 C12.104,18.949 11.284,19.526 11.135,19.639 C10.367,20.830 10.215,21.982 10.685,23.062 ZM0.490,8.901 C0.629,9.175 1.358,10.327 3.805,10.403 C3.805,10.394 3.805,10.390 3.805,10.383 C3.804,10.343 3.803,10.312 3.803,10.289 C3.803,10.259 3.803,10.244 3.803,10.244 C3.819,9.140 3.970,8.047 4.310,6.994 C4.464,6.516 4.653,6.050 4.875,5.599 C4.992,5.362 5.274,4.641 5.519,4.528 C3.705,5.369 0.938,6.946 0.490,8.901 ZM6.475,4.086 C5.050,5.662 4.310,7.735 4.274,10.249 C4.274,10.251 4.273,10.390 4.285,10.627 C4.370,12.400 5.072,18.249 10.464,19.684 L10.526,19.601 C10.481,19.542 10.442,19.483 10.399,19.424 C10.340,19.344 10.281,19.264 10.226,19.184 C8.883,17.218 8.543,14.766 8.959,12.462 C9.367,10.201 10.414,8.024 11.686,6.115 C11.704,6.089 11.720,6.065 11.737,6.040 C11.781,5.975 11.826,5.908 11.868,5.846 C11.896,5.806 11.922,5.770 11.949,5.732 C11.936,5.712 11.923,5.696 11.910,5.676 C10.842,3.990 11.220,2.040 11.470,1.184 C9.672,1.703 7.833,2.585 6.475,4.086 ZM18.015,4.339 C18.020,4.327 18.025,4.314 18.030,4.302 C17.955,4.353 17.869,4.404 17.772,4.451 C17.435,4.613 17.060,4.704 16.682,4.704 C16.487,4.704 16.286,4.700 16.103,4.635 C15.878,4.556 15.997,4.186 16.206,4.226 C16.666,4.313 17.161,4.284 17.577,4.075 C18.275,3.724 18.346,3.210 18.333,2.492 C18.319,1.811 18.173,1.136 17.930,0.499 C17.729,0.486 17.328,0.464 16.789,0.464 C15.743,0.464 13.932,0.552 12.011,1.035 C11.172,3.481 11.987,6.325 14.579,7.323 C15.239,7.577 15.464,7.354 15.972,6.969 C16.272,6.741 16.553,6.491 16.811,6.218 C17.324,5.672 17.747,5.037 18.015,4.339 ZM14.515,2.705 C14.131,2.705 13.820,2.398 13.820,2.020 C13.820,1.641 14.131,1.334 14.515,1.334 C14.899,1.334 15.210,1.641 15.210,2.020 C15.210,2.398 14.899,2.705 14.515,2.705 Z" class="cls-1" fill={props?.fill || "black"}/>
</svg>

  )
}
