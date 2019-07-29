import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 1.15rem;
  }
  
  h1 {
    font-family: Righteous, sans-serif;
    font-size: 5rem;
  }

  h2 {
    font-family: Dancing Script, cursive;
    font-size: 2.2rem;
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
