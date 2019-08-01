import { createGlobalStyle } from 'styled-components'
// import * as font from './fonts'

import LangdonTTF from './fonts/langdon.ttf'
import LangdonWoff from './fonts/langdon.woff'
import LangdonWoff2 from './fonts/langdon.woff2'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 1.15rem;
  }
  
  h1 {
    font-family: Langdon, sans-serif;
    font-size: 5rem;
    src:url('${LangdonTTF}') format("truetype"),('${LangdonWoff}') format("woff");
    font-weight:100;
  }

  h2 {
    font-family: Dancing Script, cursive;
    font-size: 1.5rem;
    font-weight: 700;
    transform: rotate(-05deg);
    margin-bottom:5px;
  }

  p {
    font-size:1.15rem;
    font-weight: 300;
    @media (max-width: 768px) {
    font-size:1rem;
  }
  }

  p.dropcap:first-letter {
    font-size: 3rem;
    float: left;
    margin-top: 0.15em;
    padding-right:0.2rem;
    font-family: Dancing Script, cursive;
}
`
export default GlobalStyle
