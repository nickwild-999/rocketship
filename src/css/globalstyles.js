import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Langdon Regular';
    font-style: normal;
    font-weight: normal;
    src: local(Langdon Regular), 
    url('./fonts/langdon-webfont.ttf') format(truetype), 
    url('./fonts/langdon-webfont.xoff') format(woff),
    url('./fonts/langdon-webfont.off2') format(woff2);
  }

  @font-face {
    font-family: 'Amalina';
    font-style: normal;
    font-weight: normal;
    src: local(Amalina), 
    url('./fonts/Amalina.ttf') format(truetype)
  }

  body {
    font-size:200px;
  }
`
