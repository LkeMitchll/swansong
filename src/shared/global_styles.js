import { injectGlobal } from 'react-emotion'
import ds from './design_system'

const aws_prefix = 'https://s3.eu-west-2.amazonaws.com/interrobang-fonts/'
const LunchRegWoff2 = `${aws_prefix + 'lunchtype24-regular-expanded-webfont.woff2'}`
const LunchRegWoff = `${aws_prefix + 'lunchtype24-regular-expanded-webfont.woff'}`
const LunchRegTTF = `${aws_prefix + 'lunchtype24-regular-expanded-webfont.ttf'}`
const LunchMedWoff2 =  `${aws_prefix + 'lunchtype24-medium-expanded-webfont.woff2'}`
const LunchMedWoff =  `${aws_prefix + 'lunchtype24-medium-expanded-webfont.woff'}`
const LunchMedTTF =  `${aws_prefix + 'lunchtype24-medium-expanded-webfont.ttf'}`
const DrukWoff2 =  `${aws_prefix + 'DrukXXCond-Super-Web.woff2'}`
const DrukWoff =  `${aws_prefix + 'DrukXXCond-Super-Web.woff'}`

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

  body,
  h1,
  h2 {
    font-size: ${ds.type.sizes.base};

    @media (min-width: 2000px) {
      font-size: 1.5rem;
    }
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
