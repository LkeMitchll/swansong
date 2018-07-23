import { injectGlobal } from 'react-emotion'
import { ds } from './design_system'

const globalStyles = injectGlobal`
  @font-face {
    font-family: "Tiempos Text Regular";
    font-weight: 400;
    src: url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Regular.eot");
    src:
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Regular.eot?#iefix") format("embedded-opentype"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Regular.woff2") format("woff2"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Tiempos Text Semibold";
    font-weight: 600;
    src: url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Semibold.eot");
    src:
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Semibold.eot?#iefix") format("embedded-opentype"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Semibold.woff2") format("woff2"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Semibold.woff") format("woff");
  }

  @font-face {
    font-family: "Courier Prime Medium";
    font-style: normal;
    font-weight: normal;
    src: url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.eot");
    src:
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.eot?#iefix") format("embedded-opentype"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.woff") format("woff"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.ttf") format("truetype"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.svg") format("svg");
  }

  body {
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    color: ${ds.brand('primary')};
    font-size: ${ds.get('type.baseFontSize')};
    line-height: 1.6;
  }

  td {
    padding: 0;
  }
`

export default globalStyles
