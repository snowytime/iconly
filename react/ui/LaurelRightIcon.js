import * as React from "react";
import { forwardRef } from "react";
const LaurelRightIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 8 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.55495 16.2048C2.32286 16.2204 2.08303 16.2803 1.83547 16.3844C1.59306 16.4885 1.38675 16.6212 1.21655 16.7826C1.08761 16.9023 1.09277 17.0116 1.23203 17.1105C1.42286 17.2562 1.64721 17.3629 1.90509 17.4306C2.16298 17.4982 2.41054 17.5164 2.64779 17.4852C2.87473 17.4696 3.1094 17.4071 3.35181 17.2978C3.59937 17.1885 3.81083 17.0532 3.98619 16.8919C4.13576 16.7513 4.12029 16.629 3.93977 16.5249C3.74894 16.4104 3.52459 16.3219 3.26671 16.2595C3.01398 16.2022 2.77673 16.184 2.55495 16.2048ZM0.930305 13.566C0.821995 13.3994 0.70337 13.3942 0.57443 13.5504C0.419701 13.7273 0.290761 13.9407 0.187608 14.1906C0.084456 14.4352 0.0251434 14.672 0.00967053 14.901C-0.0161176 15.1404 0.00967053 15.3903 0.0870348 15.6505C0.164399 15.9108 0.277867 16.132 0.427438 16.3141C0.53059 16.4495 0.6389 16.4521 0.752367 16.3219C0.901938 16.1554 1.02572 15.9472 1.12372 15.6974C1.22687 15.4475 1.2836 15.2029 1.29392 14.9635C1.30423 14.7397 1.27587 14.5003 1.20882 14.2452C1.14177 13.985 1.04893 13.7586 0.930305 13.566ZM4.73663 14.0891C4.52001 14.1619 4.30597 14.2817 4.0945 14.4482C3.8882 14.6096 3.72316 14.7917 3.59937 14.9947C3.50654 15.1457 3.54006 15.2497 3.69995 15.307C3.92172 15.4007 4.16672 15.4475 4.43491 15.4475C4.70311 15.4475 4.94552 15.4033 5.16214 15.3148C5.3736 15.2367 5.58506 15.1144 5.79652 14.9479C6.00799 14.7813 6.17561 14.5965 6.29939 14.3936C6.40254 14.2218 6.36128 14.1073 6.17561 14.05C5.95899 13.9824 5.71658 13.9538 5.44839 13.9642C5.18535 13.9694 4.9481 14.011 4.73663 14.0891ZM2.50854 11.9655C2.35381 11.8198 2.23776 11.8406 2.1604 12.028C2.05724 12.2414 1.98762 12.4808 1.95151 12.7462C1.91541 13.0117 1.91799 13.2563 1.95925 13.4801C2.00051 13.7247 2.09077 13.9642 2.23002 14.1984C2.36928 14.4274 2.53175 14.6096 2.71742 14.7449C2.86183 14.849 2.96756 14.823 3.03461 14.6668C3.13777 14.4638 3.20481 14.2296 3.23576 13.9642C3.26671 13.6987 3.25897 13.4489 3.21255 13.2147C3.16613 12.9961 3.07845 12.7723 2.94951 12.5432C2.82057 12.309 2.67358 12.1165 2.50854 11.9655ZM7.99367 11.0677C8.02462 10.8751 7.94209 10.7892 7.7461 10.81C7.52433 10.8361 7.29481 10.9063 7.05756 11.0208C6.82031 11.1353 6.61916 11.2733 6.45412 11.4346C6.28908 11.5856 6.14209 11.7781 6.01314 12.0124C5.88936 12.2466 5.80942 12.4834 5.77332 12.7228C5.74753 12.8998 5.81973 12.9831 5.98994 12.9726C6.23234 12.9622 6.47475 12.905 6.71716 12.8009C6.96473 12.6916 7.16845 12.5511 7.32834 12.3793C7.49338 12.2179 7.63779 12.0176 7.76158 11.7781C7.88536 11.5335 7.96272 11.2967 7.99367 11.0677ZM3.55295 10.3963C3.36212 10.3234 3.26671 10.3911 3.26671 10.5993C3.25123 10.8283 3.2796 11.0729 3.35181 11.3331C3.42917 11.5882 3.53232 11.8146 3.66126 12.0124C3.78505 12.2153 3.95783 12.3949 4.17961 12.5511C4.40139 12.702 4.62832 12.8061 4.86042 12.8633C5.02546 12.8946 5.11314 12.8269 5.12346 12.6604C5.13377 12.4157 5.10025 12.1659 5.02288 11.9109C4.95068 11.6558 4.84494 11.4372 4.70569 11.2551C4.57159 11.0729 4.39881 10.9037 4.18735 10.7476C3.98104 10.5862 3.76957 10.4691 3.55295 10.3963ZM4.84494 8.56938C4.6799 8.42365 4.4736 8.30394 4.22603 8.21025C3.98362 8.11136 3.74636 8.0515 3.51427 8.03068C3.32344 8.02548 3.2435 8.11917 3.27444 8.31174C3.32602 8.54075 3.42143 8.77237 3.56069 9.00659C3.69995 9.2356 3.85725 9.42557 4.03261 9.57651C4.20281 9.73265 4.41428 9.85757 4.66701 9.95126C4.91973 10.0449 5.1673 10.0892 5.4097 10.084C5.57475 10.0788 5.6418 9.9929 5.61085 9.82634C5.56443 9.59733 5.47159 9.36832 5.33234 9.13931C5.19308 8.90509 5.03062 8.71512 4.84494 8.56938ZM7.98593 7.54664C7.9653 7.33845 7.86215 7.27599 7.67648 7.35926C7.47017 7.44254 7.26387 7.57006 7.05756 7.74182C6.85641 7.90837 6.69653 8.09054 6.5779 8.28832C6.45412 8.49131 6.36128 8.72292 6.29939 8.98316C6.2375 9.2434 6.21945 9.48543 6.24524 9.70923C6.26587 9.8862 6.35871 9.94865 6.52375 9.89661C6.74553 9.83415 6.95957 9.71964 7.16587 9.55309C7.37733 9.38133 7.54238 9.19136 7.661 8.98316C7.78479 8.78018 7.87504 8.54856 7.93178 8.28832C7.99367 8.02288 8.01172 7.77565 7.98593 7.54664ZM4.42718 5.94616C4.21571 5.86809 3.97846 5.82645 3.71542 5.82124C3.45238 5.81604 3.21255 5.84467 2.99593 5.90712C2.81026 5.96958 2.76642 6.07888 2.86441 6.23503C2.98304 6.43281 3.1455 6.61758 3.35181 6.78934C3.56327 6.9611 3.78247 7.09122 4.0094 7.1797C4.22602 7.26818 4.46844 7.31502 4.73663 7.32023C5.00483 7.32023 5.24982 7.27338 5.47159 7.1797C5.62632 7.10683 5.65985 7.00013 5.57217 6.8596C5.44839 6.65662 5.28076 6.47445 5.0693 6.3131C4.863 6.14654 4.64895 6.02423 4.42718 5.94616ZM7.01888 3.90067C6.9312 3.72371 6.81258 3.69769 6.663 3.8226C6.50312 3.97874 6.35613 4.17393 6.22203 4.40814C6.09309 4.63715 6.00541 4.86356 5.95899 5.08737C5.90741 5.31638 5.8971 5.56361 5.92804 5.82905C5.95899 6.0945 6.02604 6.32871 6.12919 6.5317C6.21171 6.68784 6.31744 6.71647 6.44638 6.61758C6.63722 6.47705 6.80226 6.29228 6.94152 6.06327C7.08077 5.83426 7.17103 5.60004 7.21229 5.36062C7.25871 5.13681 7.26387 4.89219 7.22776 4.62674C7.19166 4.35609 7.12203 4.11407 7.01888 3.90067ZM3.01914 3.69769C2.79736 3.65084 2.55495 3.64304 2.29192 3.67426C2.02888 3.70549 1.79678 3.76795 1.59564 3.86164C1.40996 3.94491 1.3816 4.06202 1.51054 4.21296C1.66011 4.38472 1.84836 4.54086 2.0753 4.68139C2.30739 4.81672 2.5369 4.9104 2.76384 4.96245C2.99593 5.02491 3.2435 5.03792 3.50654 5.00149C3.77473 4.96505 4.00941 4.88698 4.21056 4.76727C4.35497 4.67359 4.3756 4.56429 4.27245 4.43937C4.12804 4.2572 3.93977 4.09846 3.70768 3.96313C3.48075 3.82781 3.25123 3.73932 3.01914 3.69769ZM5.30913 1.29307C5.19566 1.13172 5.07446 1.12651 4.94552 1.27745C4.8011 1.45962 4.67732 1.67302 4.57417 1.91764C4.47617 2.16227 4.42202 2.39648 4.4117 2.62029C4.39107 2.8493 4.41428 3.09393 4.48133 3.35417C4.55354 3.61441 4.65411 3.84342 4.78305 4.0412C4.87589 4.18173 4.98678 4.19214 5.11572 4.07243C5.28592 3.90067 5.4226 3.68988 5.52575 3.44005C5.63406 3.19022 5.69079 2.94819 5.69595 2.71398C5.71142 2.49017 5.68306 2.24815 5.61085 1.98791C5.53864 1.72246 5.43807 1.49085 5.30913 1.29307ZM1.31713 0.504539C1.12114 0.478515 1.03346 0.564394 1.05409 0.762177C1.09019 0.996393 1.16498 1.23581 1.27844 1.48044C1.39707 1.71986 1.53375 1.92025 1.68847 2.08159C1.85352 2.26376 2.05467 2.4121 2.29192 2.5266C2.53432 2.64111 2.77415 2.70617 3.0114 2.72179C3.17645 2.72699 3.25123 2.64632 3.23576 2.47976C3.20997 2.25075 3.13777 2.01653 3.01914 1.77711C2.90052 1.53249 2.75868 1.3295 2.59364 1.16815C2.43375 1.0068 2.23776 0.866273 2.00567 0.746562C1.77358 0.621647 1.54406 0.540973 1.31713 0.504539Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(LaurelRightIcon);
export default ForwardRef;