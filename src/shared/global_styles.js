import { injectGlobal } from 'react-emotion'
import ds from './design_system'

import LunchRegWoff2 from '../assets/fonts/lunchtype24-regular-expanded-webfont.woff2'
import LunchRegWoff from '../assets/fonts/lunchtype24-regular-expanded-webfont.woff'
import LunchRegTTF from '../assets/fonts/lunchtype24-regular-expanded-webfont.ttf'
import LunchMedWoff2 from '../assets/fonts/lunchtype24-medium-expanded-webfont.woff2'
import LunchMedWoff from '../assets/fonts/lunchtype24-medium-expanded-webfont.woff'
import LunchMedTTF from '../assets/fonts/lunchtype24-medium-expanded-webfont.ttf'
import DrukWoff2 from '../assets/fonts/DrukXXCond-Super-Web.woff2'
import DrukWoff from '../assets/fonts/DrukXXCond-Super-Web.woff'

const globalStyles = injectGlobal`
  @font-face {
    font-family: "Lunchtype 24";
    src:
      url("${LunchRegWoff2}") format("woff2"),
      url("${LunchRegWoff}") format("woff"),
      url("${LunchRegTTF}") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Lunchtype 24";
    src:
      url("${LunchMedWoff2}") format("woff2"),
      url("${LunchMedWoff}") format("woff"),
      url("${LunchMedTTF}") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Druk XX Condensed";
    src:
      url("${DrukWoff2}") format("woff2"),
      url("${DrukWoff}") format("woff");
    font-weight: 800;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    color: ${ds.colors.light};
    background-color: ${ds.colors.dark};
    font-size: ${ds.type.baseFontSize};
    font-family: ${ds.type.fonts.base};
  }
`

export default globalStyles
