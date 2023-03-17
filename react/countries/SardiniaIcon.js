import * as React from "react";
import { forwardRef } from "react";
const SardiniaIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 36 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M36 24H0V0H36",
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 10.737H19.241V0H16.759V10.737H0V13.263H16.759V24H19.241V13.263H36V10.737Z",
  fill: "#FF4B55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.024 3.306C10.779 2.403 10.044 2.185 9.156 2.091C8.68958 2.06451 8.225 2.16845 7.81435 2.39118C7.40369 2.61391 7.06318 2.94661 6.831 3.352C6.70666 3.8037 6.7478 4.28496 6.947 4.709C6.83368 4.72688 6.71773 4.70269 6.621 4.641C6.57525 4.60085 6.53897 4.55105 6.51476 4.49521C6.49056 4.43936 6.47903 4.37884 6.481 4.318C6.50323 3.80061 6.59817 3.28893 6.763 2.798L6.786 2.728L5.822 2.382L5.878 2.842L5.135 2.681L5.18 2.808C5.246 2.991 5.822 4.599 5.9 4.741C5.95082 4.84539 6.02245 4.93827 6.1105 5.01394C6.19855 5.08961 6.30116 5.14646 6.412 5.181C6.48485 5.20176 6.56025 5.21219 6.636 5.212C6.646 5.212 6.653 5.21 6.662 5.209C6.57864 5.3432 6.45306 5.44591 6.305 5.501C6.14219 5.5497 5.99958 5.64993 5.8986 5.78661C5.79761 5.9233 5.74372 6.08906 5.745 6.259L5.737 6.263L5.745 6.275C5.73808 6.43329 5.74814 6.59186 5.775 6.748C5.8322 7.07019 5.91308 7.38771 6.017 7.698L6.032 7.743L6.078 7.748C6.17202 7.76345 6.25961 7.8056 6.33035 7.86942C6.40109 7.93325 6.452 8.01606 6.477 8.108C6.49947 8.19645 6.54888 8.27573 6.61839 8.33485C6.68791 8.39398 6.77409 8.43002 6.865 8.438H6.878C6.949 8.434 7.123 8.396 7.179 8.11L7.188 8.069L6.732 7.642L6.884 7.13L6.812 7.11C6.57186 7.01788 6.35893 6.86652 6.193 6.67C6.16048 6.57016 6.16473 6.46198 6.205 6.365C6.248 6.299 6.338 6.281 6.443 6.259C6.54333 6.24668 6.6393 6.21069 6.723 6.154C6.95879 5.93448 7.12675 5.652 7.207 5.34C7.247 5.433 7.287 5.523 7.32 5.61C7.58 6.263 6.861 7.01 6.861 7.01C7.321 7.197 7.366 7.306 8.009 8.116C8.652 8.926 9.233 8.583 9.233 8.583C9.21017 8.44014 9.23029 8.29372 9.29083 8.16232C9.35136 8.03092 9.44958 7.92048 9.573 7.845C9.995 7.627 10.004 7.345 10.004 7.345C11.058 7.597 11.122 7.158 11.076 7.005C11.0522 6.875 11.056 6.74146 11.087 6.613C11.1516 6.6157 11.2156 6.59936 11.271 6.566C11.395 6.481 11.311 6.279 11.311 6.279C11.3392 6.27002 11.3647 6.25407 11.3851 6.23264C11.4055 6.2112 11.4202 6.18496 11.4277 6.15635C11.4353 6.12774 11.4356 6.09768 11.4284 6.06895C11.4213 6.04023 11.4071 6.01376 11.387 5.992C11.3325 5.93512 11.3014 5.85978 11.3 5.781C11.3 5.781 11.542 5.798 11.611 5.658C11.715 5.446 11.139 4.758 11.17 4.603C11.2395 4.16542 11.189 3.71718 11.024 3.306ZM6.452 5.038C6.35966 5.0086 6.27431 4.9606 6.20122 4.89697C6.12813 4.83334 6.06884 4.75541 6.027 4.668C5.977 4.575 5.618 3.593 5.363 2.883L5.898 3L5.998 3.816L6.144 3.798L5.997 2.605L6.601 2.821C6.43953 3.30735 6.35025 3.81475 6.336 4.327C6.3341 4.40964 6.35083 4.49165 6.38493 4.56695C6.41903 4.64225 6.46964 4.70891 6.533 4.762C6.63249 4.8324 6.75217 4.86855 6.874 4.865C6.91658 4.86525 6.9591 4.86157 7.001 4.854L7.047 4.965C6.86402 5.06042 6.65278 5.08569 6.452 5.038ZM7.026 8.121C7.006 8.194 6.962 8.284 6.871 8.288H6.865C6.80639 8.27994 6.75152 8.25462 6.70735 8.21526C6.66319 8.1759 6.63173 8.12429 6.617 8.067L6.61 8.051L6.684 7.801L7.026 8.121ZM6.702 7.229L6.515 7.854C6.42364 7.7305 6.2915 7.64335 6.142 7.608C6.04747 7.31887 5.97329 7.02348 5.92 6.724C5.90894 6.65268 5.9006 6.58096 5.895 6.509C6.08963 6.82122 6.36969 7.0711 6.702 7.229ZM6.632 6.036C6.5659 6.07743 6.49146 6.10372 6.414 6.113C6.34995 6.117 6.28741 6.13417 6.23029 6.16341C6.17317 6.19266 6.12269 6.23337 6.082 6.283C6.05392 6.33128 6.03717 6.3853 6.033 6.441C5.98045 6.37248 5.93236 6.30067 5.889 6.226C5.921 5.846 6.125 5.749 6.367 5.636C6.716 5.471 6.797 5.296 6.831 5.192C6.92544 5.17365 7.01717 5.14341 7.104 5.102L7.112 5.12C7.04853 5.46692 6.88113 5.78637 6.632 6.036ZM7.453 5.365L7.153 4.708L10.678 3.044C10.8236 3.34928 10.9098 3.67949 10.932 4.017L7.453 5.365ZM24.422 2.808C24.487 2.991 25.063 4.599 25.141 4.741C25.1919 4.84549 25.2637 4.93844 25.3519 5.01411C25.4402 5.08978 25.543 5.14658 25.654 5.181C25.7265 5.20166 25.8016 5.2121 25.877 5.212C25.887 5.212 25.894 5.21 25.903 5.209C25.8199 5.34303 25.6947 5.44572 25.547 5.501C25.3842 5.5497 25.2416 5.64993 25.1406 5.78661C25.0396 5.9233 24.9857 6.08906 24.987 6.259L24.978 6.263L24.986 6.275C24.9791 6.43329 24.9891 6.59186 25.016 6.748C25.0732 7.07018 25.1541 7.3877 25.258 7.698L25.273 7.743L25.319 7.748C25.4132 7.76327 25.501 7.80534 25.5719 7.86918C25.6429 7.93302 25.6939 8.01592 25.719 8.108C25.7414 8.1963 25.7907 8.27547 25.86 8.33458C25.9293 8.39369 26.0153 8.42983 26.106 8.438H26.119C26.191 8.434 26.364 8.396 26.421 8.11L26.429 8.069L25.973 7.642L26.126 7.13L26.053 7.11C25.8132 7.01773 25.6006 6.86638 25.435 6.67C25.4022 6.57028 25.4061 6.4621 25.446 6.365C25.489 6.299 25.579 6.281 25.684 6.259C25.7843 6.24668 25.8803 6.21069 25.964 6.154C26.2002 5.93461 26.3685 5.65212 26.449 5.34C26.489 5.433 26.528 5.523 26.562 5.61C26.822 6.263 26.102 7.01 26.102 7.01C26.562 7.197 26.608 7.306 27.25 8.116C27.893 8.925 28.474 8.583 28.474 8.583C28.4514 8.4403 28.4716 8.29409 28.5321 8.16289C28.5927 8.03169 28.6908 7.92141 28.814 7.846C29.236 7.626 29.246 7.346 29.246 7.346C30.3 7.598 30.363 7.158 30.317 7.006C30.2934 6.87561 30.2975 6.74171 30.329 6.613C30.3936 6.6157 30.4576 6.59936 30.513 6.566C30.637 6.481 30.553 6.279 30.553 6.279C30.5811 6.2699 30.6065 6.25387 30.6268 6.23238C30.6471 6.21089 30.6616 6.18464 30.6691 6.15604C30.6766 6.12745 30.6767 6.09743 30.6695 6.06876C30.6624 6.04009 30.6481 6.01369 30.628 5.992C30.5738 5.93497 30.5431 5.85964 30.542 5.781C30.542 5.781 30.783 5.798 30.852 5.658C30.957 5.446 30.38 4.758 30.411 4.603C30.4805 4.16542 30.43 3.71718 30.265 3.306C30.02 2.403 29.285 2.185 28.398 2.091C27.9314 2.06432 27.4666 2.16817 27.0558 2.39091C26.6449 2.61365 26.3043 2.94646 26.072 3.352C25.9477 3.8037 25.9888 4.28496 26.188 4.709C26.0748 4.72718 25.9589 4.70335 25.862 4.642C25.8163 4.60164 25.7801 4.55165 25.7561 4.49562C25.7321 4.43959 25.7208 4.37893 25.723 4.318C25.7446 3.80071 25.8388 3.28903 26.003 2.798L26.027 2.728L25.063 2.382L25.12 2.842L24.376 2.681L24.422 2.808ZM26.267 8.121C26.247 8.194 26.203 8.284 26.112 8.288H26.106C26.0476 8.27975 25.9929 8.25435 25.9489 8.21501C25.905 8.17566 25.8737 8.12415 25.859 8.067L25.851 8.051L25.926 7.801L26.267 8.121ZM25.943 7.229L25.756 7.854C25.6646 7.7305 25.5325 7.64335 25.383 7.608C25.2885 7.31887 25.2143 7.02348 25.161 6.724C25.1499 6.65268 25.1416 6.58096 25.136 6.509C25.3307 6.82119 25.6107 7.07105 25.943 7.229ZM29.92 3.044C30.0653 3.34935 30.1511 3.67956 30.173 4.017L26.694 5.365L26.394 4.708L29.92 3.044ZM26.353 5.12C26.2895 5.4669 26.1221 5.78633 25.873 6.036C25.8069 6.07743 25.7325 6.10372 25.655 6.113C25.5911 6.11714 25.5288 6.13436 25.4718 6.16361C25.4149 6.19285 25.3646 6.23349 25.324 6.283C25.2956 6.33121 25.2785 6.38523 25.274 6.441C25.2215 6.37248 25.1734 6.30067 25.13 6.226C25.163 5.846 25.366 5.749 25.608 5.636C25.957 5.471 26.038 5.296 26.072 5.192C26.1664 5.17365 26.2582 5.14341 26.345 5.102L26.353 5.12ZM25.14 3L25.24 3.815L25.386 3.797L25.239 2.604L25.843 2.82C25.6815 3.30635 25.5922 3.81375 25.578 4.326C25.5761 4.40864 25.5928 4.49065 25.6269 4.56595C25.661 4.64125 25.7116 4.70791 25.775 4.761C25.8748 4.83161 25.9948 4.86777 26.117 4.864C26.1596 4.86425 26.2021 4.86057 26.244 4.853L26.289 4.964C26.106 5.05942 25.8948 5.08569 25.694 5.038C25.6018 5.00848 25.5167 4.96043 25.4438 4.8968C25.3709 4.83317 25.3117 4.75531 25.27 4.668C25.218 4.575 24.86 3.593 24.606 2.883L25.14 3ZM11.024 16.568C10.779 15.665 10.044 15.447 9.156 15.354C8.68968 15.3274 8.22517 15.4312 7.81453 15.6538C7.40388 15.8763 7.06332 16.2088 6.831 16.614C6.70666 17.0657 6.7478 17.547 6.947 17.971C6.8338 17.9892 6.71786 17.9653 6.621 17.904C6.57512 17.8637 6.53876 17.8138 6.51455 17.7578C6.49034 17.7017 6.47888 17.641 6.481 17.58C6.50291 17.0627 6.59751 16.551 6.762 16.06L6.785 15.99L5.822 15.644L5.878 16.104L5.135 15.944L5.18 16.07C5.246 16.253 5.822 17.861 5.9 18.003C5.95071 18.1076 6.02229 18.2007 6.11035 18.2765C6.19841 18.3523 6.30107 18.4093 6.412 18.444C6.4849 18.4644 6.5603 18.4745 6.636 18.474C6.646 18.474 6.653 18.472 6.662 18.471C6.57869 18.6052 6.4531 18.708 6.305 18.763C6.14219 18.8117 5.99958 18.9119 5.8986 19.0486C5.79761 19.1853 5.74372 19.3511 5.745 19.521L5.737 19.525L5.745 19.537C5.73808 19.6953 5.74814 19.8539 5.775 20.01C5.8322 20.3322 5.91308 20.6497 6.017 20.96L6.032 21.005L6.078 21.011C6.17202 21.0264 6.25961 21.0686 6.33035 21.1324C6.40109 21.1962 6.452 21.2791 6.477 21.371C6.49947 21.4595 6.54888 21.5387 6.61839 21.5979C6.68791 21.657 6.77409 21.693 6.865 21.701L6.878 21.7C6.949 21.697 7.123 21.659 7.179 21.373L7.188 21.331L6.732 20.904L6.884 20.392L6.812 20.372C6.57186 20.2799 6.35893 20.1285 6.193 19.932C6.16048 19.8322 6.16473 19.724 6.205 19.627C6.248 19.561 6.338 19.543 6.443 19.521C6.54333 19.5087 6.6393 19.4727 6.723 19.416C6.95879 19.1965 7.12675 18.914 7.207 18.602C7.247 18.695 7.287 18.785 7.32 18.872C7.58 19.525 6.861 20.272 6.861 20.272C7.321 20.459 7.366 20.568 8.009 21.378C8.652 22.188 9.233 21.845 9.233 21.845C9.21037 21.7023 9.23061 21.5561 9.29113 21.4249C9.35166 21.2937 9.44975 21.1834 9.573 21.108C9.995 20.888 10.004 20.608 10.004 20.608C11.058 20.86 11.122 20.42 11.076 20.268C11.0521 20.1377 11.0558 20.0038 11.087 19.875C11.1516 19.8777 11.2156 19.8614 11.271 19.828C11.395 19.743 11.311 19.541 11.311 19.541C11.3392 19.532 11.3647 19.5161 11.3851 19.4946C11.4055 19.4732 11.4202 19.447 11.4277 19.4184C11.4353 19.3897 11.4356 19.3597 11.4284 19.331C11.4213 19.3022 11.4071 19.2758 11.387 19.254C11.3327 19.1974 11.3017 19.1224 11.3 19.044C11.3 19.044 11.542 19.061 11.611 18.92C11.715 18.708 11.139 18.02 11.17 17.865C11.2395 17.4274 11.189 16.9792 11.024 16.568ZM6.452 18.3C6.35966 18.2706 6.27431 18.2226 6.20122 18.159C6.12813 18.0953 6.06884 18.0174 6.027 17.93C5.977 17.837 5.618 16.856 5.363 16.145L5.898 16.261L5.998 17.077L6.143 17.059L5.997 15.866L6.601 16.083C6.43963 16.569 6.35034 17.0761 6.336 17.588C6.33418 17.6706 6.35093 17.7526 6.38503 17.8279C6.41912 17.9032 6.46969 17.9699 6.533 18.023C6.63246 18.0935 6.75216 18.1296 6.874 18.126C6.91655 18.1266 6.95906 18.1232 7.001 18.116L7.047 18.226C6.86399 18.3213 6.65278 18.3476 6.452 18.3ZM7.026 21.383C7.006 21.457 6.962 21.547 6.871 21.55H6.865C6.80652 21.542 6.75174 21.5168 6.70758 21.4777C6.66343 21.4385 6.63191 21.3871 6.617 21.33L6.61 21.314L6.684 21.064L7.026 21.383ZM6.702 20.491L6.515 21.117C6.42364 20.9935 6.2915 20.9063 6.142 20.871C6.04742 20.5815 5.97324 20.2858 5.92 19.986C5.90894 19.9147 5.9006 19.843 5.895 19.771C6.08963 20.0832 6.36969 20.3331 6.702 20.491ZM6.632 19.299C6.56582 19.3401 6.49138 19.366 6.414 19.375C6.34995 19.379 6.28741 19.3962 6.23029 19.4254C6.17317 19.4547 6.12269 19.4954 6.082 19.545C6.05392 19.5933 6.03717 19.6473 6.033 19.703C5.98045 19.6345 5.93236 19.5627 5.889 19.488C5.921 19.108 6.125 19.012 6.367 18.898C6.716 18.734 6.797 18.558 6.831 18.454C6.92544 18.4357 7.01717 18.4054 7.104 18.364L7.112 18.382C7.04866 18.7293 6.88126 19.0491 6.632 19.299ZM7.453 18.627L7.153 17.971L10.678 16.306C10.8236 16.6113 10.9098 16.9415 10.932 17.279L7.453 18.627ZM30.265 16.567C30.02 15.665 29.285 15.447 28.398 15.354C27.9315 15.3272 27.4668 15.4309 27.056 15.6535C26.6451 15.876 26.3044 16.2086 26.072 16.614C25.9477 17.0657 25.9888 17.547 26.188 17.971C26.0748 17.9892 25.9589 17.9653 25.862 17.904C25.8163 17.8636 25.7801 17.8136 25.7561 17.7576C25.7321 17.7016 25.7208 17.6409 25.723 17.58C25.7446 17.0627 25.8388 16.551 26.003 16.06L26.027 15.99L25.063 15.644L25.12 16.104L24.376 15.944L24.422 16.07C24.487 16.253 25.063 17.861 25.141 18.003C25.1918 18.1077 25.2636 18.2008 25.3518 18.2767C25.44 18.3525 25.5429 18.4095 25.654 18.444C25.7266 18.4643 25.8016 18.4744 25.877 18.474C25.887 18.474 25.894 18.472 25.903 18.471C25.8199 18.6051 25.6947 18.7078 25.547 18.763C25.3842 18.8117 25.2416 18.9119 25.1406 19.0486C25.0396 19.1853 24.9857 19.3511 24.987 19.521L24.978 19.525L24.986 19.537C24.9791 19.6953 24.9891 19.8539 25.016 20.01C25.0732 20.3322 25.1541 20.6497 25.258 20.96L25.273 21.005L25.319 21.011C25.4132 21.0263 25.501 21.0683 25.5719 21.1322C25.6429 21.196 25.6939 21.2789 25.719 21.371C25.7414 21.4593 25.7907 21.5385 25.86 21.5976C25.9293 21.6567 26.0153 21.6928 26.106 21.701L26.119 21.7C26.191 21.697 26.364 21.659 26.421 21.373L26.429 21.331L25.973 20.904L26.126 20.392L26.053 20.372C25.8132 20.2797 25.6006 20.1284 25.435 19.932C25.4022 19.8323 25.4061 19.7241 25.446 19.627C25.489 19.561 25.579 19.543 25.684 19.521C25.7843 19.5087 25.8803 19.4727 25.964 19.416C26.2002 19.1966 26.3685 18.9141 26.449 18.602C26.489 18.695 26.528 18.785 26.562 18.872C26.822 19.525 26.102 20.272 26.102 20.272C26.562 20.459 26.608 20.568 27.25 21.378C27.893 22.188 28.474 21.845 28.474 21.845C28.4514 21.7023 28.4716 21.5561 28.5321 21.4249C28.5927 21.2937 28.6908 21.1834 28.814 21.108C29.236 20.888 29.246 20.608 29.246 20.608C30.3 20.86 30.363 20.42 30.317 20.268C30.2934 20.1376 30.2975 20.0037 30.329 19.875C30.3936 19.8777 30.4576 19.8614 30.513 19.828C30.637 19.743 30.553 19.541 30.553 19.541C30.5811 19.5319 30.6065 19.5159 30.6268 19.4944C30.6471 19.4729 30.6616 19.4466 30.6691 19.418C30.6766 19.3894 30.6767 19.3594 30.6695 19.3308C30.6624 19.3021 30.6481 19.2757 30.628 19.254C30.5741 19.1972 30.5434 19.1223 30.542 19.044C30.542 19.044 30.783 19.061 30.852 18.92C30.957 18.708 30.38 18.02 30.411 17.865C30.4805 17.4274 30.43 16.9792 30.265 16.568V16.567ZM25.693 18.3C25.6008 18.2705 25.5157 18.2224 25.4428 18.1588C25.3699 18.0952 25.3107 18.0173 25.269 17.93C25.217 17.837 24.859 16.856 24.605 16.145L25.139 16.261L25.239 17.077L25.385 17.059L25.238 15.866L25.842 16.083C25.6806 16.569 25.5913 17.0761 25.577 17.588C25.5752 17.6706 25.5919 17.7526 25.626 17.8279C25.6601 17.9032 25.7107 17.9699 25.774 18.023C25.8737 18.0937 25.9938 18.1298 26.116 18.126C26.1582 18.1262 26.2004 18.1225 26.242 18.115L26.288 18.226C26.105 18.3213 25.8938 18.3476 25.693 18.3ZM26.267 21.383C26.247 21.457 26.203 21.547 26.112 21.55H26.106C26.0477 21.5418 25.9931 21.5166 25.9492 21.4774C25.9052 21.4383 25.8738 21.387 25.859 21.33L25.851 21.314L25.926 21.064L26.267 21.383ZM25.943 20.491L25.756 21.116C25.6646 20.9925 25.5325 20.9053 25.383 20.87C25.2885 20.5809 25.2143 20.2855 25.161 19.986C25.1499 19.9147 25.1416 19.843 25.136 19.771C25.3306 20.0832 25.6107 20.3331 25.943 20.491ZM25.873 19.299C25.8068 19.3401 25.7324 19.366 25.655 19.375C25.5911 19.3791 25.5288 19.3964 25.4718 19.4256C25.4149 19.4549 25.3646 19.4955 25.324 19.545C25.2956 19.5932 25.2785 19.6472 25.274 19.703C25.2215 19.6345 25.1734 19.5627 25.13 19.488C25.163 19.108 25.366 19.012 25.608 18.898C25.957 18.734 26.038 18.558 26.072 18.454C26.1664 18.4357 26.2582 18.4054 26.345 18.364L26.353 18.382C26.2896 18.7292 26.1222 19.049 25.873 19.299ZM26.694 18.627L26.394 17.971L29.92 16.306C30.0653 16.6114 30.1511 16.9416 30.173 17.279L26.694 18.627Z",
  fill: "#464655"
}));
const ForwardRef = forwardRef(SardiniaIcon);
export default ForwardRef;