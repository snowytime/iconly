import * as React from "react";
import { forwardRef } from "react";
const CyprusIcon = ({
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
  d: "M18.5234 19.7737C18.5181 19.7714 18.5134 19.7681 18.5095 19.7639L18.5045 19.7592C18.4822 19.7384 18.4611 19.7165 18.4412 19.6935C18.3879 19.633 18.3164 19.5444 18.2536 19.4661C18.129 19.3108 18.026 19.177 18.0066 19.1518L17.9749 19.1105L17.6642 19.0147L17.4374 18.9089L17.5586 18.7727L17.9749 18.9509L18.2856 19.0147L18.8601 19.4372C18.859 19.4382 18.7761 19.5071 18.6942 19.5816C18.6577 19.6148 18.6117 19.6576 18.5792 19.6929C18.5658 19.7073 18.5533 19.7225 18.542 19.7385C18.5351 19.7499 18.5289 19.7616 18.5234 19.7737ZM16.3898 19.1329C16.1095 19.1304 15.8349 19.0535 15.594 18.9102C15.6233 18.8614 15.6622 18.8188 15.7088 18.7859C15.7864 18.7289 15.9265 18.6608 16.1528 18.6599H16.1575C16.4255 18.6599 16.7535 18.751 17.1324 18.9308C16.9078 19.0642 16.651 19.1341 16.3898 19.1329ZM15.215 18.8725C15.167 18.8734 15.121 18.8541 15.0882 18.8192C15.0598 18.7862 15.0403 18.7466 15.0314 18.704C15.0186 18.6488 15.0138 18.592 15.0173 18.5354C15.0371 18.5268 15.0583 18.522 15.0798 18.5212H15.0843C15.1847 18.5212 15.2639 18.6083 15.2978 18.6947C15.3163 18.7329 15.3202 18.7765 15.3088 18.8174C15.2917 18.853 15.2544 18.8751 15.215 18.8725ZM17.2822 18.6329C16.5878 18.5338 16.2935 18.2827 16.1688 18.0896C16.0899 17.9724 16.0528 17.8321 16.0635 17.6912C16.0984 17.6832 16.1346 17.6787 16.1703 17.6789C16.355 17.6789 16.8274 17.7722 17.2822 18.6329ZM15.859 18.4953C15.5623 18.4953 15.3365 18.4441 15.1877 18.3433C15.1244 18.3028 15.0734 18.2457 15.0402 18.1783C15.0281 18.1528 15.0201 18.1254 15.0165 18.0974C15.1153 18.0573 15.2205 18.035 15.3271 18.0314C15.3424 18.0307 15.3578 18.0302 15.374 18.0302C15.6033 18.0302 15.952 18.105 16.3199 18.4614C16.167 18.4825 16.0132 18.494 15.859 18.4953ZM14.4226 18.4401C14.1098 18.4401 13.68 18.3446 13.412 18.0766C13.6158 18.0285 13.8243 18.0006 14.0335 17.9938C14.053 17.9934 14.0727 17.9931 14.0925 17.9931C14.3858 17.9931 14.6102 18.05 14.7598 18.1621C14.8015 18.1872 14.8326 18.2268 14.8469 18.2734C14.8502 18.3078 14.8338 18.341 14.8046 18.3594C14.7373 18.4102 14.617 18.4374 14.4468 18.4401L14.4226 18.4401ZM13.409 17.9201C13.3706 17.9202 13.3342 17.903 13.3098 17.8734C13.2872 17.8438 13.272 17.8092 13.2655 17.7726C13.2553 17.7243 13.2514 17.6749 13.2538 17.6256C13.2691 17.6186 13.2857 17.6141 13.3025 17.6139C13.3418 17.6153 13.3789 17.6319 13.4061 17.6602C13.4364 17.6899 13.4594 17.726 13.4736 17.766C13.4878 17.7993 13.4903 17.8364 13.4808 17.8714C13.4691 17.9009 13.4407 17.9204 13.409 17.9201ZM15.7502 17.8673C15.7022 17.8682 15.6562 17.8489 15.6234 17.814C15.595 17.781 15.5754 17.7414 15.5665 17.6989C15.5537 17.6436 15.5489 17.5868 15.5524 17.5302C15.5722 17.5216 15.5934 17.5168 15.6149 17.516H15.6194C15.7198 17.516 15.799 17.6032 15.8329 17.6895C15.8514 17.7277 15.8553 17.7713 15.8439 17.8122C15.8269 17.8479 15.7896 17.87 15.7502 17.8673ZM14.6098 17.8201C13.9803 17.798 13.6538 17.619 13.4904 17.4728C13.4206 17.4116 13.363 17.3376 13.3208 17.2549C13.3051 17.2239 13.2929 17.1912 13.2845 17.1574C13.3349 17.1421 13.3881 17.134 13.4407 17.1339H13.4554C13.6677 17.1339 14.1001 17.2232 14.6098 17.8201ZM15.2934 17.7565C14.7869 17.6794 14.5 17.462 14.3485 17.2931C14.255 17.1927 14.1839 17.0736 14.14 16.9436C14.1912 16.9319 14.2434 16.9256 14.296 16.9248C14.3027 16.9248 14.3098 16.9246 14.3169 16.9246C14.3241 16.9246 14.3315 16.9246 14.339 16.9248C14.5938 16.9304 15.0565 17.046 15.2934 17.7565ZM12.6934 17.5133C12.5322 17.5138 12.3715 17.4946 12.215 17.456C11.9498 17.3897 11.836 17.2885 11.7873 17.2152C11.7663 17.1848 11.7523 17.1502 11.7461 17.1138C11.7439 17.0996 11.7434 17.0852 11.7448 17.0709L11.7461 17.0705C11.883 17.0365 12.0235 17.0187 12.1646 17.0174C12.1742 17.0174 12.1838 17.0171 12.1936 17.0171C12.3086 17.0169 12.4234 17.028 12.5362 17.0503C12.7921 17.1038 13.0201 17.2478 13.1783 17.4559C13.0197 17.4947 12.8567 17.5144 12.6934 17.5133ZM13.869 17.0861C13.8212 17.0874 13.7752 17.0685 13.7421 17.0341C13.7136 17.0008 13.6941 16.9608 13.6853 16.9178C13.6724 16.863 13.6677 16.8066 13.6712 16.7504C13.691 16.7418 13.7122 16.737 13.7337 16.7362H13.7382C13.8384 16.7362 13.9177 16.8234 13.9518 16.9098C13.9699 16.9476 13.9733 16.9908 13.9615 17.0311C13.9452 17.067 13.9083 17.0888 13.869 17.0861ZM12.985 16.9649C12.8166 16.9173 12.6556 16.847 12.5063 16.7559C12.2845 16.6194 12.0132 16.3779 11.9802 16.0027C11.997 15.9991 12.0146 15.9971 12.0318 15.9966C12.0358 15.9966 12.0405 15.9963 12.0452 15.9963C12.1114 15.9963 12.247 16.015 12.4111 16.1397C12.6199 16.2989 12.8126 16.5757 12.985 16.9649ZM13.5622 16.9437C13.4248 16.8813 13.2972 16.7994 13.1834 16.7004C12.8892 16.4472 12.6599 16.1272 12.5148 15.7672C12.551 15.7502 12.5902 15.7404 12.6302 15.7384C12.6342 15.7382 12.6382 15.7381 12.6424 15.7381C12.6484 15.7381 12.6546 15.7381 12.661 15.7384C12.7574 15.7412 12.9043 15.7812 13.0671 15.957C13.2542 16.1588 13.4211 16.4906 13.5631 16.943L13.5635 16.9443L13.5622 16.9437ZM12.0666 16.9001C11.8737 16.9001 11.8077 16.7955 11.7883 16.7505C11.7689 16.7036 11.7613 16.6527 11.7661 16.6022C11.7975 16.5944 11.8298 16.5894 11.8621 16.5889H11.8687C11.9948 16.5858 12.1148 16.6428 12.1921 16.7425C12.2023 16.7577 12.2336 16.8103 12.2077 16.8514C12.1869 16.8838 12.1398 16.9001 12.0666 16.9001ZM11.6394 16.3613C11.49 16.3616 11.3409 16.3489 11.1937 16.3232C11.022 16.292 10.9246 16.1459 10.8732 16.029C10.8386 15.949 10.8144 15.8649 10.8012 15.7788C11.3325 15.7944 11.5839 15.9496 11.7008 16.0771C11.7732 16.1525 11.8184 16.25 11.829 16.354C11.8282 16.354 11.7534 16.3613 11.6394 16.3613ZM12.1926 15.8085C12.1918 15.8076 12.1312 15.7325 12.0712 15.6394C12.0083 15.5416 11.9501 15.4394 11.9501 15.356C11.9501 15.2754 11.9312 15.1054 11.9198 15.0112C11.9055 14.8918 11.891 14.7896 11.8898 14.781C11.9033 14.7859 12.2227 14.9055 12.2227 15.2046C12.2227 15.5037 12.1928 15.8055 12.1926 15.8085ZM11.7794 15.7801C11.776 15.7801 11.7727 15.7798 11.7694 15.7792C11.6751 15.7635 11.5094 15.6915 11.3264 15.5865C11.1232 15.47 10.9581 15.3451 10.8616 15.2349C10.7736 15.1344 10.7216 14.9766 10.7064 14.7658C10.6997 14.6704 10.7009 14.5746 10.7099 14.4793C10.7269 14.4738 10.7447 14.4711 10.7625 14.4713C10.8331 14.4725 10.9084 14.5042 11.0101 14.5743C11.1028 14.6402 11.1896 14.714 11.2697 14.7948C11.3714 14.8958 11.4675 15.0023 11.5577 15.1137L11.559 15.1153C11.5696 15.1343 11.6604 15.2981 11.7312 15.4576C11.7666 15.531 11.7938 15.6081 11.8122 15.6874C11.8192 15.7107 11.8192 15.7354 11.8122 15.7587C11.8092 15.7662 11.8038 15.7725 11.7968 15.7766C11.7912 15.779 11.7854 15.7801 11.7794 15.7801Z",
  fill: "#4E5B31"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.3501 19.8C17.3556 19.7977 17.3605 19.7944 17.3645 19.7902L17.3697 19.7855C17.3928 19.7647 17.4148 19.7428 17.4355 19.7198C17.4909 19.6593 17.5652 19.5707 17.6305 19.4925C17.76 19.3373 17.867 19.2035 17.8872 19.1783L17.9202 19.1371L18.2431 19.0413L18.4789 18.9356L18.3529 18.7994L17.9202 18.9776L17.5972 19.0413L17 19.4637C17.0012 19.4646 17.0873 19.5335 17.1724 19.608C17.2104 19.6412 17.2583 19.6839 17.2921 19.7192C17.306 19.7336 17.3189 19.7488 17.3307 19.7648C17.3378 19.7762 17.3443 19.7879 17.3501 19.8ZM19.5679 19.1595C19.8592 19.1569 20.1447 19.0801 20.3951 18.9369C20.3646 18.8881 20.3242 18.8455 20.2757 18.8126C20.195 18.7557 20.0495 18.6876 19.8142 18.6867H19.8093C19.5308 18.6867 19.1898 18.7778 18.7959 18.9574C19.0294 19.0908 19.2963 19.1607 19.5679 19.1595ZM20.7891 18.8992C20.8389 18.9001 20.8867 18.8808 20.9209 18.8459C20.9503 18.813 20.9706 18.7733 20.9799 18.7308C20.9932 18.6756 20.9982 18.6188 20.9945 18.5622C20.974 18.5536 20.9519 18.5488 20.9296 18.548H20.9249C20.8205 18.548 20.7382 18.6351 20.703 18.7215C20.6837 18.7596 20.6797 18.8032 20.6916 18.8441C20.7093 18.8797 20.748 18.9018 20.7891 18.8992ZM18.6403 18.6597C19.362 18.5606 19.668 18.3097 19.7975 18.1166C19.8796 17.9995 19.9181 17.8592 19.907 17.7184C19.8708 17.7104 19.8332 17.7059 19.796 17.7062C19.604 17.7062 19.113 17.7993 18.6403 18.6597ZM20.1196 18.5222C20.428 18.5222 20.6627 18.471 20.8174 18.3703C20.8832 18.3297 20.9362 18.2727 20.9707 18.2053C20.9833 18.1798 20.9916 18.1525 20.9954 18.1244C20.8926 18.0844 20.7833 18.0621 20.6725 18.0585C20.6566 18.0578 20.6405 18.0573 20.6237 18.0573C20.3854 18.0573 20.023 18.132 19.6405 18.4883C19.7994 18.5093 19.9593 18.5209 20.1196 18.5222ZM21.6127 18.467C21.9379 18.467 22.3846 18.3715 22.6632 18.1037C22.4514 18.0556 22.2346 18.0276 22.0172 18.0209C21.9969 18.0204 21.9764 18.0202 21.9559 18.0202C21.651 18.0202 21.4177 18.077 21.2622 18.1891C21.2188 18.2142 21.1866 18.2538 21.1717 18.3004C21.1682 18.3347 21.1852 18.368 21.2156 18.3863C21.2856 18.4371 21.4107 18.4642 21.5875 18.467L21.6127 18.467ZM22.6664 17.9472C22.7062 17.9473 22.7441 17.9302 22.7694 17.9006C22.7929 17.871 22.8087 17.8364 22.8155 17.7997C22.8261 17.7515 22.8302 17.7021 22.8276 17.6529C22.8117 17.6458 22.7945 17.6413 22.777 17.6411C22.7362 17.6426 22.6976 17.6592 22.6693 17.6874C22.6379 17.7171 22.6139 17.7533 22.5992 17.7932C22.5844 17.8265 22.5818 17.8636 22.5917 17.8985C22.6038 17.928 22.6334 17.9476 22.6664 17.9472ZM20.2327 17.8945C20.2825 17.8954 20.3304 17.876 20.3645 17.8412C20.394 17.8082 20.4144 17.7686 20.4237 17.7261C20.437 17.6709 20.4419 17.6141 20.4383 17.5575C20.4177 17.5489 20.3957 17.5441 20.3733 17.5433H20.3687C20.2643 17.5433 20.182 17.6304 20.1467 17.7167C20.1275 17.7549 20.1234 17.7985 20.1353 17.8394C20.153 17.8751 20.1917 17.8971 20.2327 17.8945ZM21.4182 17.8473C22.0725 17.8251 22.4119 17.6463 22.5817 17.5001C22.6543 17.439 22.7141 17.365 22.758 17.2823C22.7743 17.2513 22.787 17.2186 22.7957 17.1849C22.7434 17.1696 22.6881 17.1614 22.6333 17.1614H22.618C22.3974 17.1614 21.9479 17.2506 21.4182 17.8473ZM20.7076 17.7837C21.234 17.7066 21.5322 17.4893 21.6897 17.3205C21.787 17.2202 21.8608 17.1011 21.9065 16.9712C21.8533 16.9595 21.7989 16.9531 21.7443 16.9524C21.7373 16.9524 21.73 16.9521 21.7226 16.9521C21.7151 16.9521 21.7074 16.9521 21.6996 16.9524C21.4348 16.958 20.9538 17.0736 20.7076 17.7837ZM23.4102 17.5406C23.5778 17.5411 23.7448 17.5219 23.9075 17.4834C24.1831 17.4171 24.3014 17.3159 24.352 17.2426C24.3738 17.2123 24.3884 17.1777 24.3949 17.1413C24.3972 17.1271 24.3976 17.1127 24.3962 17.0984L24.3949 17.098C24.2525 17.064 24.1065 17.0462 23.9598 17.0449C23.9499 17.0449 23.9398 17.0447 23.9296 17.0447C23.8101 17.0445 23.6908 17.0556 23.5736 17.0778C23.3076 17.1313 23.0706 17.2753 22.9061 17.4833C23.071 17.522 23.2404 17.5417 23.4102 17.5406ZM22.1882 17.1136C22.2378 17.1149 22.2857 17.096 22.3201 17.0616C22.3496 17.0283 22.37 16.9883 22.3791 16.9454C22.3925 16.8906 22.3974 16.8342 22.3937 16.7781C22.3732 16.7695 22.3511 16.7647 22.3288 16.7639H22.3241C22.2199 16.7639 22.1375 16.851 22.1021 16.9373C22.0833 16.9752 22.0797 17.0184 22.092 17.0586C22.1089 17.0946 22.1473 17.1163 22.1882 17.1136ZM23.1071 16.9925C23.2821 16.9449 23.4494 16.8746 23.6047 16.7836C23.8352 16.6471 24.1172 16.4057 24.1516 16.0307C24.1341 16.0271 24.1157 16.0251 24.0978 16.0246C24.0937 16.0246 24.0888 16.0243 24.084 16.0243C24.0151 16.0243 23.8741 16.0429 23.7036 16.1676C23.4866 16.3267 23.2863 16.6035 23.1071 16.9925ZM22.5071 16.9713C22.6499 16.9089 22.7825 16.827 22.9008 16.728C23.2066 16.475 23.445 16.1551 23.5959 15.7953C23.5582 15.7783 23.5174 15.7686 23.4759 15.7666C23.4717 15.7663 23.4675 15.7662 23.4631 15.7662C23.4569 15.7662 23.4505 15.7662 23.4439 15.7666C23.3436 15.7693 23.191 15.8093 23.0217 15.985C22.8273 16.1868 22.6537 16.5183 22.5061 16.9706L22.5057 16.9718L22.5071 16.9713ZM24.0617 16.9277C24.2622 16.9277 24.3308 16.8232 24.351 16.7782C24.3711 16.7313 24.379 16.6804 24.374 16.63C24.3414 16.6221 24.3079 16.6171 24.2743 16.6166H24.2674C24.1363 16.6135 24.0116 16.6705 23.9313 16.7702C23.9207 16.7853 23.8882 16.8379 23.9151 16.879C23.9367 16.9114 23.9857 16.9277 24.0617 16.9277ZM24.5058 16.3891C24.6611 16.3895 24.8161 16.3767 24.969 16.351C25.1476 16.3198 25.2488 16.1738 25.3022 16.0569C25.3381 15.977 25.3633 15.893 25.3771 15.8069C24.8248 15.8225 24.5635 15.9777 24.4419 16.105C24.3666 16.1804 24.3197 16.2778 24.3086 16.3818C24.3095 16.3818 24.3873 16.3891 24.5058 16.3891ZM23.9308 15.8366C23.9315 15.8357 23.9946 15.7606 24.0569 15.6675C24.1223 15.5698 24.1828 15.4676 24.1828 15.3843C24.1828 15.3037 24.2025 15.1338 24.2143 15.0397C24.2291 14.9203 24.2442 14.8182 24.2454 14.8095C24.2314 14.8144 23.8995 14.934 23.8995 15.233C23.8995 15.5319 23.9305 15.8336 23.9308 15.8366ZM24.3603 15.8082C24.3638 15.8082 24.3672 15.8079 24.3707 15.8073C24.4686 15.7916 24.6409 15.7196 24.8311 15.6147C25.0424 15.4982 25.214 15.3734 25.3142 15.2632C25.4057 15.1628 25.4598 15.0051 25.4756 14.7944C25.4825 14.699 25.4813 14.6032 25.4719 14.508C25.4543 14.5025 25.4358 14.4998 25.4173 14.5C25.3439 14.5012 25.2656 14.5329 25.1599 14.6029C25.0636 14.6689 24.9733 14.7426 24.8901 14.8234C24.7844 14.9243 24.6845 15.0307 24.5907 15.1421L24.5894 15.1437C24.5784 15.1627 24.4839 15.3264 24.4103 15.4858C24.3735 15.5592 24.3453 15.6363 24.3261 15.7156C24.3189 15.7388 24.3189 15.7636 24.3261 15.7868C24.3292 15.7943 24.3349 15.8006 24.3422 15.8047C24.3479 15.8071 24.354 15.8082 24.3603 15.8082Z",
  fill: "#4E5B31"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29.085 3.66286L28.9539 3.7151L28.8398 3.70882L28.7328 3.76014L28.5432 3.8897L28.5349 3.8957L28.4642 3.91414L28.3986 3.88582L28.3613 3.90278L28.3484 3.97958L28.313 4.03474L28.2693 4.06542L28.118 4.0809L27.9904 4.1467L27.8244 4.10226L27.7472 4.13246L27.5832 4.28014L27.4994 4.31982L27.4702 4.31814L27.359 4.31242L27.3121 4.32778L27.242 4.3955L27.1094 4.40582L27.0681 4.43442L27.0034 4.56482L26.9333 4.63714L26.8933 4.64562L26.8498 4.62962L26.8171 4.63538L26.8023 4.71882L26.7706 4.75378L26.6818 4.78434L26.6109 4.84342L26.5487 4.87542L26.4653 4.87334H26.4462L26.3631 4.91918L26.2071 4.93286L26.1422 4.99482L26.1278 5.00806L26.0975 5.02638L26.0479 5.05598L26.0359 5.06334L25.9759 5.05266L25.9059 5.08038L25.8776 5.03682L25.8292 5.0659L25.7652 5.06866L25.6243 5.00598L25.5798 5.01242L25.5643 5.09002L25.5627 5.09826L25.5159 5.16054L25.4286 5.21346L25.3172 5.35726L25.1283 5.5559L24.9686 5.63702L24.803 5.68738L24.687 5.78258L24.383 5.93326L23.9032 6.17218L23.8051 6.20362L23.6643 6.2261L23.4132 6.31858L23.1916 6.38542L23.1793 6.38918L22.8229 6.49698L22.6775 6.48162L22.5914 6.5129L22.3672 6.48802L22.2112 6.4911L22.1125 6.51162L21.6139 6.75106L21.5105 6.8457L21.3494 6.9297L21.1608 6.98942L21.1612 6.91018L21.1601 6.90682L21.0474 6.94242L20.8944 6.96602H20.8093L20.7565 6.95066L20.7485 6.95342L20.4358 7.05618L20.087 7.08986L19.9125 7.14586L19.7821 7.14378L19.7006 7.16802L19.5406 7.18758L19.4834 7.17234L19.4706 7.16882L19.0006 7.18922L18.7857 7.16494L18.6831 7.18826L18.5111 7.13042L18.2604 7.10134L18.2018 7.08378L18.0698 7.04466L18.0101 7.07902L17.9655 7.08378L17.8588 7.0451L17.8204 7.04414L17.7324 7.07614L17.6817 7.06314L17.6346 7.02562L17.5242 7.00918L17.4569 6.95262L17.0809 7.00246L16.9789 6.97246L16.6367 6.87278L16.5823 6.87554L16.5143 6.92638L16.4124 6.96354L16.3239 6.98654L16.2034 6.99054L16.0634 6.95382L15.9192 6.8839L15.8658 6.87122L15.7469 6.88322L15.7105 6.8865L15.4918 6.76922L15.2102 6.59322L15.019 6.50122L14.9473 6.48958L14.9376 6.5237L14.9732 6.6357L14.9852 6.74666L14.9816 6.84918L14.9796 6.91266L14.9975 6.96966L15.0665 7.04614L15.0952 7.12294L15.1163 7.3343L15.116 7.54878L15.0825 7.89082L15.0712 7.94282L15.0312 8.12002L14.9946 8.28278L14.8528 8.7161L14.8138 8.76982L14.7182 8.83506L14.5014 8.98258L14.3418 9.07458L14.2913 9.0955L14.1617 9.1053L14.081 9.1013L13.9805 9.04686L13.8818 9.02146L13.7525 8.9285L13.6085 8.89874L13.4509 8.80762L13.4098 8.7583L13.324 8.7503L13.205 8.71458L13.1612 8.7013L13.131 8.6925L12.979 8.6885L12.8374 8.62314L12.7629 8.60514L12.661 8.59998L12.5003 8.6747L12.432 8.64758L12.3826 8.65066L12.3266 8.73526L12.3198 8.74818L12.2812 8.76858L12.2332 8.7679L12.1956 8.7669L12.155 8.78466L12.1003 8.80838L12.052 8.82946L12.0284 8.83966L12.0134 8.84218L11.9876 8.84666L11.9556 8.85278L11.8992 8.81982L11.8692 8.80214L11.819 8.7919L11.7919 8.81146L11.7866 8.90346L11.7618 8.95858L11.6834 9.02794L11.6037 9.09814L11.5481 9.18002L11.4011 9.51562L11.3091 9.65102L11.2805 9.68258L11.1838 9.78898L10.9014 10.0079L10.7151 10.0775L10.5546 10.1103L10.4765 10.1106L10.3285 10.0909L10.1956 10.0501L10.0496 9.95886L9.8896 9.83018L9.65784 9.60122L9.62504 9.5815L9.6182 9.57694L9.5452 9.53026L9.49104 9.53166L9.46984 9.56662L9.45824 9.61714L9.44843 9.66194L9.42188 9.91662L9.4378 10.0363L9.6138 10.2823L9.66812 10.4129L9.67704 10.4279L9.741 10.5354L9.74376 10.5401L9.80376 10.7196L9.76148 10.821L9.78284 10.889L9.72939 10.9305L9.71959 10.9891L9.87764 11.1872L9.91212 11.2746L9.8736 11.3957L9.81215 11.4626L9.795 11.4809L9.80364 11.5321L9.87636 11.5975L9.99992 11.7075L10.0658 11.8709L10.1159 11.9149L10.1742 11.9025L10.2066 11.9272L10.2557 11.9264L10.304 11.9747L10.3353 11.9899L10.3847 12.0145L10.4238 12.0654L10.4324 12.2218L10.5053 12.4162L10.5064 12.5216L10.5068 12.5366L10.5522 12.6145L10.5664 12.676L10.5424 12.8388L10.6002 12.891L10.6629 12.8782L10.7034 12.8846L10.7684 12.9388L10.8472 13.0588L10.9242 13.0475L10.9731 13.0711L11.2091 13.2844L11.2627 13.3115L11.2656 13.3131L11.3042 13.3325L11.3522 13.3808L11.4264 13.3315L11.4346 13.3307L11.5154 13.3235L11.6188 13.3935L11.7082 13.3923L11.9019 13.4517L11.9867 13.4735L12.1571 13.5794L12.2296 13.6242L12.2724 13.659L12.3294 13.7055L12.4432 13.7544L12.5408 13.7778L12.5937 13.7903L12.6337 13.8057L12.8456 13.8867L12.9601 13.9134L13.066 13.9524L13.1431 13.9804L13.1997 13.9813L13.2797 13.914L13.3572 13.9095L13.4215 13.9255L13.4843 13.915L13.5837 13.8538L13.6031 13.825L13.6736 13.7915L13.9114 13.7619L13.9808 13.7845L14.1592 13.7069L14.2788 13.7401L14.3846 13.7026L14.6157 13.754L14.6772 13.7972L14.7458 13.8758L14.7542 13.8762L14.8307 13.8777L14.7987 13.9309L14.8996 14.0368L14.9908 14.1746L14.997 14.1928L15.0632 14.3873L15.1125 14.4563L15.147 14.5525L15.1487 14.6152L15.0951 14.6561L15.0863 14.6794L15.0832 14.688L15.0941 14.7142L15.1144 14.7032L15.1529 14.6819L15.1998 14.6746L15.2824 14.6834L15.337 14.6891L15.4231 14.6463L15.4802 14.6179L15.5719 14.6574L15.6727 14.6563L15.715 14.6751L15.835 14.7295L15.8962 14.7352L15.9188 14.7204L15.9332 14.6861L15.9258 14.6461L15.8798 14.5934L15.7785 14.4759L15.7371 14.4155L15.7055 14.328L15.6958 14.2162L15.6888 14.1408L15.7014 14.0417L15.7286 14.0063L15.7486 13.9276L15.7541 13.907L15.8103 13.8324L15.9593 13.7367L16.1193 13.5934L16.2458 13.51L16.3762 13.4535L16.3796 13.4375L16.3942 13.4433L16.7258 13.3306L16.7313 13.3299L16.879 13.3042L17.8758 13.3744L17.9128 13.3633L17.946 13.2698L17.9638 13.2525L17.9758 13.2413L18.0854 13.193L18.1367 13.1857L18.3372 13.2352L18.4304 13.1829L18.4966 13.184L18.6333 13.1094L18.7177 13.1115L18.7497 13.0987L18.9142 12.9805L19.0726 12.9351L19.1138 12.9131L19.1284 12.9051L19.2908 12.8194L19.3939 12.7401L19.483 12.6928L19.5805 12.6677L19.8357 12.6497L19.887 12.5642L19.9968 12.5495L20.063 12.4747L20.139 12.4439L20.239 12.2999L20.3026 12.2631L20.5066 12.2503L20.7484 12.2803L20.7804 12.2609L20.835 12.0659L20.8922 12.0293L21.0463 11.8048L21.0468 11.723V11.6547L21.0721 11.5574L21.0549 11.3817L21.0753 11.2039L21.1711 10.9779L21.2554 10.8867L21.3914 10.7947L21.4606 10.7646L21.5586 10.7481L21.573 10.7457L21.5979 10.7415L21.9352 10.7368C21.9399 10.7333 22.0579 10.7351 22.0579 10.7351L22.1704 10.7336L22.455 10.7842L22.4753 10.7877L22.5713 10.8189L22.6822 10.9051L22.7998 11.0199L22.8218 11.0413L22.8978 11.0733L22.9208 11.0833L22.9836 11.0733L23.0731 11.0267L23.1406 10.9696L23.2326 10.9193L23.2349 10.9161L23.2867 10.8382L23.2882 10.8366L23.2894 10.8369L23.3089 10.8055L23.4868 10.7361L23.696 10.7241L23.7195 10.7114L23.7326 10.7044L23.7879 10.6395L23.8397 10.6391L23.9651 10.6845L24.0531 10.6669L24.1231 10.6949L24.1775 10.6885L24.2801 10.6765L24.3902 10.754L24.4544 10.762L24.6808 10.8944L24.6925 10.8963L24.6986 10.8974L24.7116 10.8996L24.7384 10.8916L24.7784 10.88L24.7837 10.8785L24.7887 10.8855L24.8144 10.9217L24.8497 10.9268L24.8915 10.8711L24.8749 10.8458L24.8686 10.8366L24.7878 10.8201L24.7152 10.6961L24.7843 10.6217L24.6578 10.4666L24.6517 10.4573L24.6142 10.4003L24.4244 10.1109L24.1771 9.91354L24.0905 9.84426L24.0596 9.81986L23.9276 9.68554L23.8333 9.56034L23.745 9.36778L23.6465 9.29178L23.5662 9.20414L23.5622 9.19898L23.3966 8.97394L23.3694 8.93622L23.3303 8.91362L23.2477 8.91306L23.2397 8.90506L23.235 8.90022L23.2378 8.89726L23.2775 8.85786L23.3217 8.84674L23.3407 8.80318L23.2564 8.55918L23.2558 8.55066L23.2496 8.47266L23.3183 8.11846L23.3271 8.0753L23.4442 7.83698L23.5168 7.77754L23.596 7.62186L23.664 7.52234L23.729 7.45906L23.7403 7.45234L23.8577 7.3813L24.0502 7.35418L24.2142 7.40474L24.3702 7.4017L24.4006 7.39846L24.4714 7.39046L24.5879 7.35378L24.6428 7.31986L24.6714 7.27614L24.7308 7.07666L24.75 7.01318L24.7866 6.94422L24.9989 6.6999L25.1593 6.5515L25.5201 6.28698L25.7868 6.12754L26.5919 5.7697L26.9101 5.44738L27.1029 5.31798L27.3286 5.22554L27.5227 5.07186L27.5651 5.0185L27.6186 4.8465L27.6631 4.83574L27.7031 4.74878L27.7145 4.72406L27.873 4.61238L27.8909 4.60346L28.5064 4.29506L28.5958 4.30734L28.6438 4.23562L28.8229 4.20558L28.8559 4.19998L28.8999 4.17794L28.9374 4.11394V4.1013L28.9426 3.93038L28.9808 3.88418L29.0017 3.77154L29.0213 3.74554L29.0418 3.7185L29.0926 3.68286L29.0838 3.66162L29.085 3.66286Z",
  fill: "#D57800"
}));
const ForwardRef = forwardRef(CyprusIcon);
export default ForwardRef;