import { createGlobalStyle } from 'styled-components'

export const IconfontGlobalStyle = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1582525366981'); /* IE9 */
  src: url('./iconfont.eot?t=1582525366981#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1582525366981') format('woff'),
  url('./iconfont.ttf?t=1582525366981') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1582525366981#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconicon-test:before {
  content: "\e76b";
}

.iconshoushi_shouzhi_you:before {
  content: "\e9d9";
}

.iconshoushi_shouzhi_zuo:before {
  content: "\e9da";
}

.iconlogin:before {
  content: "\e63a";
}

.iconlog-out:before {
  content: "\e6e4";
}

.iconsecurehouse:before {
  content: "\ea66";
}





`