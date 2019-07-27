import React from 'react'
import styled from 'styled-components'
// import TwitterFeed from './TwitterFeed'
// import logo from '../images/logo.png';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #230d49;
  color: white;
  padding: 40px 30px 30px 40px;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`

const FooterText = styled.div`
  padding-bottom: 20px;
  p {
    margin-bottom: 0px;
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
  h4 {
    margin-bottom: 0px;
    font-size: 1rem;
  }
`

const Footer = () => (
  <FooterWrapper>
    <div className="">
      <div className="">
        <h3 className="">Contact Us!</h3>
      </div>
      {/* </div></div></div><img src={logo} alt="Nicci Topping Casting" /> */}
      <FooterText>
        <p>Twitter: @rocketshipproductions</p>
        <p>Email: blastoff@rocketshipproductions.com</p>
      </FooterText>
      <FooterText>
        <h4>Address</h4>
        <p>The Media Centre</p>
        <p>7 Northumberland Street</p>
        <p>Huddersfield</p>
        <p>West Yorkshire</p>
        <p>HD1 1RL</p>
      </FooterText>
    </div>
    <div className="">
      <h3 className="">Column Here</h3>
    </div>
    <div className="">
      <h3 className="">Recent Tweets</h3>
    </div>
  </FooterWrapper>
)

export default Footer
