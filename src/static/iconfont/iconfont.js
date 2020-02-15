import { createGlobalStyle } from 'styled-components'

export const IconfontGlobalStyle = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1581734634470'); /* IE9 */
  src: url('./iconfont.eot?t=1581734634470#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1581734634470') format('woff'),
  url('./iconfont.ttf?t=1581734634470') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1581734634470#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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