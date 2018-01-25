import { injectGlobal } from 'react-emotion'
import { ds } from './design_system'

import RegularEOT from '../assets/fonts/TiemposTextWeb-Regular.eot'
import RegularWoff from '../assets/fonts/TiemposTextWeb-Regular.woff'
import RegularWoff2 from '../assets/fonts/TiemposTextWeb-Regular.woff2'
import SemiBoldEOT from '../assets/fonts/TiemposTextWeb-Semibold.eot'
import SemiBoldWoff from '../assets/fonts/TiemposTextWeb-Semibold.woff'
import SemiBoldWoff2 from '../assets/fonts/TiemposTextWeb-Semibold.woff2'
import MonoEOT from '../assets/fonts/CourierPrime-Medium.eot'
import MonoWoff from '../assets/fonts/CourierPrime-Medium.woff'
import MonoTTF from '../assets/fonts/CourierPrime-Medium.ttf'
import MonoSVG from '../assets/fonts/CourierPrime-Medium.svg'

const globalStyles = injectGlobal`
  @font-face {
    font-family: "Tiempos Text Regular";
    font-weight: 400;
    src: url("${RegularEOT}");
    src:
      url("${RegularEOT}?#iefix") format("embedded-opentype"),
      url("${RegularWoff2}") format("woff2"),
      url("${RegularWoff}") format("woff");
  }

  @font-face {
    font-family: "Tiempos Text Semibold";
    font-weight: 600;
    src: url("${SemiBoldEOT}");
    src:
      url("${SemiBoldEOT}?#iefix") format("embedded-opentype"),
      url("${SemiBoldWoff2}") format("woff2"),
      url("${SemiBoldWoff}") format("woff");
  }

  @font-face {
    font-family: "Courier Prime Medium";
    font-style: normal;
    font-weight: normal;
    src: url("${MonoEOT}");
    src:
      url("${MonoEOT}?#iefix") format("embedded-opentype"),
      url("${MonoWoff}") format("woff"),
      url("${MonoTTF}") format("truetype"),
      url("${MonoSVG}") format("svg");
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
`

export default globalStyles
