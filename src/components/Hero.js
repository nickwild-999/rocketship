import React from 'react'
import styled from 'styled-components'

import rocketshipHero from '../images/rocketship-hero.svg'
import rocketshipHeroSmall from '../images/rocketship-hero-sm.svg'
import RocketShip from './RocketShip'

const HeroWrapper = styled.div`
  @media (max-width: 768px) {
    background-image: url(${rocketshipHeroSmall});
  }
  background-image: url(${rocketshipHero});
  background-position: right; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Strapline = styled.div`
  font-family: Dancing Script, cursive;
  color: whitesmoke;
  font-weight: 400;
  font-size: 1.75rem;
  text-align: center;
  background-color: #230d49c0;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding-left: 25px;
    padding-right: 25px;
  }
`
const Hero = () => (
  <HeroWrapper>
    <RocketShip />
    <Strapline>
      Purveyors of high quality comedy products to discerning ladies and
      gentlemen everywhere.
    </Strapline>
  </HeroWrapper>
)
export default Hero
