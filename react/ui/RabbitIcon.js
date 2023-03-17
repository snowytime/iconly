import * as React from "react";
import { forwardRef } from "react";
const RabbitIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  color: "rgb(var(--foreground, 0, 0, 0))",
  viewBox: "0 0 24 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M16.5295 16.6836C17.0616 16.6836 17.4827 16.603 17.7926 16.4418C18.1078 16.2855 18.3351 16.0789 18.4746 15.8219C18.6141 15.57 18.6838 15.2953 18.6838 14.998C18.6838 14.4588 18.5237 14.0027 18.2034 13.6298C17.8831 13.2569 17.4026 12.9747 16.762 12.7832C16.1213 12.5867 15.3205 12.4884 14.3596 12.4884C14.1426 12.4884 13.954 12.4935 13.7939 12.5036C13.6337 12.5086 13.4917 12.5162 13.3677 12.5262C13.2488 12.5363 13.1429 12.5489 13.0499 12.564L12.4842 11.2337C12.0916 10.3165 11.6318 9.59086 11.1048 9.05669C10.5778 8.51749 10.0098 8.13198 9.40016 7.90018C8.7957 7.66837 8.17574 7.55247 7.54028 7.55247C7.38529 7.55247 7.22255 7.55751 7.05206 7.56759C6.88157 7.57262 6.71624 7.59278 6.55609 7.62806C6.36493 7.66837 6.22803 7.7364 6.14536 7.83215C6.06787 7.92285 6.02912 8.0312 6.02912 8.15718C6.02912 8.30332 6.0782 8.41922 6.17636 8.50489C6.27452 8.58552 6.40368 8.62583 6.56384 8.62583C6.72916 8.62079 6.8764 8.61072 7.00556 8.5956C7.13472 8.58048 7.29488 8.57292 7.48603 8.57292C8.07499 8.57292 8.60971 8.6863 9.09018 8.91307C9.57582 9.1348 10.025 9.49511 10.4384 9.994C10.8517 10.4929 11.2443 11.1556 11.6163 11.982L12.3602 13.6676C12.6547 13.6072 12.9569 13.5568 13.2669 13.5165C13.5769 13.4761 13.9515 13.456 14.3906 13.456C14.9124 13.456 15.4135 13.5064 15.894 13.6072C16.3796 13.7029 16.7749 13.8566 17.0797 14.0683C17.3845 14.2799 17.5369 14.5596 17.5369 14.9073C17.5369 15.1089 17.4491 15.2701 17.2734 15.3911C17.0978 15.517 16.8498 15.58 16.5295 15.58C16.1523 15.58 15.8113 15.5473 15.5065 15.4818C15.2069 15.4213 14.8892 15.3911 14.5533 15.3911C14.2279 15.3911 13.9411 15.4037 13.6931 15.4289C13.4452 15.4541 13.2256 15.4792 13.0344 15.5044C12.8485 15.5296 12.6831 15.5422 12.5385 15.5422C12.3576 15.5422 12.1717 15.5196 11.9805 15.4742C11.7894 15.4339 11.5956 15.3356 11.3993 15.1794L7.9355 12.3297C6.69558 12.3851 5.62615 12.2491 4.7272 11.9215C3.82826 11.594 3.1153 11.0598 2.58834 10.319C2.1957 10.3644 1.87022 10.3165 1.6119 10.1754C1.35358 10.0293 1.22442 9.79747 1.22442 9.47999C1.22442 9.19275 1.34583 8.96095 1.58865 8.78457C1.83147 8.6082 2.16728 8.53009 2.59609 8.55024C2.9939 7.27531 3.61644 6.33296 4.46372 5.72321C5.311 5.11346 6.3391 4.80858 7.54803 4.80858C8.17832 4.80858 8.80861 4.91693 9.43891 5.13361C10.0744 5.34526 10.6941 5.61235 11.2985 5.93486C11.903 6.25737 12.4816 6.58997 13.0344 6.93264C13.5872 7.27531 14.1013 7.57766 14.5766 7.83971C14.8297 7.99088 15.0881 8.09671 15.3515 8.15718C15.615 8.21261 15.8449 8.24033 16.0413 8.24033C16.4649 8.24033 16.8472 8.10931 17.1882 7.84727C17.5343 7.58522 17.8598 7.18964 18.1646 6.66052L13.0034 3.56136C12.8175 3.4505 12.6211 3.32199 12.4145 3.17586C12.213 3.02972 12.0399 2.89114 11.8953 2.76012C11.7506 2.62406 11.6783 2.52075 11.6783 2.4502C11.6783 2.30406 11.7764 2.17304 11.9728 2.05714C12.1742 1.93619 12.4196 1.84297 12.709 1.77746C12.9983 1.70691 13.2721 1.67163 13.5304 1.67163C14.1452 1.67163 14.7135 1.83793 15.2353 2.17052C15.7571 2.50311 16.2531 2.94657 16.7232 3.50089L19.1023 6.27501C19.6499 6.24981 20.1562 6.3254 20.6212 6.50178C21.0862 6.67815 21.4917 6.93264 21.8379 7.26523C22.1892 7.59782 22.4604 7.98836 22.6516 8.43686C22.8479 8.88536 22.9461 9.37165 22.9461 9.89573C22.9461 10.3392 22.8686 10.6894 22.7136 10.9464C22.5638 11.1984 22.3209 11.3773 21.9851 11.4831C21.6545 11.5889 21.2179 11.6418 20.6755 11.6418C20.1692 11.6418 19.6448 11.5511 19.1023 11.3697C18.565 11.1883 18.0561 10.9464 17.5757 10.6441C17.0849 10.765 16.5915 10.9212 16.0955 11.1127C15.5995 11.3042 15.1165 11.5259 14.6463 11.7779C14.1814 12.0299 13.7448 12.307 13.3367 12.6094L14.2124 13.1083C14.8117 12.7706 15.3955 12.4809 15.9638 12.239C16.5321 11.9921 17.0022 11.8031 17.3742 11.6721C17.8391 11.9744 18.3739 12.2113 18.9783 12.3826C19.5879 12.5539 20.1407 12.6371 20.6367 12.6321C21.3342 12.627 21.9335 12.5414 22.4346 12.3751C22.9357 12.2088 23.3206 11.9291 23.5893 11.536C23.8631 11.1379 24 10.5886 24 9.88817C24 9.24315 23.8838 8.64851 23.6513 8.10427C23.4188 7.55499 23.1011 7.07626 22.6981 6.66807C22.2951 6.25989 21.8301 5.94242 21.3032 5.71565C20.7814 5.48384 20.226 5.36542 19.637 5.36038L17.9554 3.1305C17.3096 2.28894 16.6276 1.6414 15.9095 1.18786C15.1966 0.729287 14.3984 0.5 13.5149 0.5C13.1739 0.5 12.8149 0.545353 12.4377 0.63606C12.0606 0.721728 11.7067 0.84519 11.376 1.00645C11.0506 1.16266 10.7845 1.35164 10.5778 1.57337C10.3764 1.79005 10.2756 2.02942 10.2756 2.29146C10.2756 2.58374 10.3738 2.85082 10.5701 3.09271C10.7716 3.33459 11.0273 3.56388 11.3373 3.78057C11.6473 3.99222 11.9676 4.20135 12.2982 4.40796C12.5876 4.58433 12.9001 4.77079 13.2359 4.96732C13.5717 5.16385 13.9205 5.36542 14.2821 5.57203C14.6438 5.77864 15.008 5.98777 15.3748 6.19942C15.7468 6.41107 16.1162 6.6202 16.483 6.82681C16.3848 6.91248 16.2944 6.97547 16.2117 7.01578C16.1342 7.0561 16.0464 7.07626 15.9483 7.07626C15.8294 7.07626 15.6899 7.04854 15.5298 6.99311C15.3696 6.93264 15.1862 6.84445 14.9796 6.72855C14.1994 6.29517 13.4839 5.89203 12.833 5.51912C12.1872 5.14117 11.5749 4.80858 10.9963 4.52134C10.4229 4.2341 9.85738 4.00986 9.29942 3.8486C8.74145 3.68734 8.16282 3.60671 7.56352 3.60671C6.12212 3.60671 4.89511 3.9645 3.88251 4.68008C2.8699 5.39062 2.11562 6.43627 1.61965 7.81703C1.13918 7.91781 0.74912 8.11687 0.449472 8.41418C0.149824 8.7115 0 9.09701 0 9.5707C0 9.96376 0.0955773 10.2938 0.286732 10.5609C0.477887 10.823 0.723288 11.0245 1.02294 11.1656C1.32258 11.3017 1.64031 11.3798 1.97613 11.4C2.22411 11.788 2.60642 12.1483 3.12305 12.4809C3.63969 12.8084 4.26223 13.0604 4.99069 13.2368C5.72431 13.4131 6.53026 13.4661 7.40853 13.3955L10.7948 16.1243C11.017 16.3057 11.2598 16.4443 11.5233 16.54C11.7919 16.6358 12.12 16.6836 12.5075 16.6836C12.833 16.6836 13.1455 16.6484 13.4452 16.5778C13.75 16.5073 14.1323 16.472 14.5921 16.472C15.0106 16.472 15.3515 16.5073 15.615 16.5778C15.8837 16.6484 16.1885 16.6836 16.5295 16.6836ZM7.05981 17.5C7.60744 17.5 8.13182 17.4471 8.63296 17.3413C9.13926 17.2405 9.61715 17.0691 10.0666 16.8273C10.5161 16.5854 10.9343 16.2528 11.3218 15.8295L10.3609 15.1945C10.1284 15.4767 9.84447 15.7111 9.50865 15.8975C9.17801 16.089 8.80086 16.2326 8.37722 16.3284C7.95875 16.4241 7.5067 16.472 7.02106 16.472C6.47859 16.472 6.04462 16.3838 5.71914 16.2074C5.39883 16.0311 5.23867 15.7917 5.23867 15.4893C5.23867 15.3381 5.29033 15.2096 5.39366 15.1038C5.49699 15.003 5.66231 14.9526 5.88963 14.9526C6.11178 14.9526 6.34427 14.9728 6.58709 15.0131C6.8299 15.0534 7.08564 15.0736 7.35429 15.0736C7.80893 15.0736 8.19124 15.0308 8.50122 14.9451C8.81636 14.8645 9.12376 14.6755 9.42341 14.3782L8.58646 13.6601C8.38497 13.8516 8.20673 13.9775 8.05174 14.038C7.89675 14.0934 7.72885 14.1212 7.54803 14.1212C7.37754 14.1212 7.20705 14.1086 7.03656 14.0834C6.86607 14.0531 6.69041 14.0254 6.50959 14.0002C6.33394 13.97 6.14795 13.9549 5.95163 13.9549C5.41433 13.9549 4.97519 14.096 4.63421 14.3782C4.29323 14.6553 4.12274 15.0232 4.12274 15.4818C4.12274 16.1268 4.39139 16.6232 4.92869 16.9709C5.46599 17.3236 6.17636 17.5 7.05981 17.5ZM20.1562 9.41952C20.3474 9.41952 20.5127 9.35401 20.6522 9.22299C20.7917 9.08693 20.8614 8.92567 20.8614 8.73922C20.8614 8.55276 20.7917 8.39403 20.6522 8.26301C20.5127 8.12694 20.3474 8.05891 20.1562 8.05891C19.9651 8.05891 19.7998 8.12694 19.6603 8.26301C19.5259 8.39403 19.4588 8.55276 19.4588 8.73922C19.4588 8.92567 19.5259 9.08693 19.6603 9.22299C19.7998 9.35401 19.9651 9.41952 20.1562 9.41952Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(RabbitIcon);
export default ForwardRef;