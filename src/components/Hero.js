import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import rocketshipHero from '../images/rocketship-hero.svg'

const HeroWrapper = styled(animated.div)`
  background-image: url(${rocketshipHero});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 15;
`
const RocketShipTitle = styled.h1`
  color: #cc9056;
  padding-top: 50px;
  padding-left: 50px;
  font-family: Righteous, sans-serif;
  font-size: 5rem;
  font-weight: 100;
`

const Strapline = styled.div`
  font-family: Dancing Script, cursive;
  color: whitesmoke;
  font-weight: 400;
  font-size: 1.75rem;
`
const Hero = () => {
  const [isHeroOpen, setHeroOpen] = useState(true)
  const heroAnimation = useSpring({
    transform: isHeroOpen ? `translate3d(0,0%,0)` : `translate3d(0, -85%, 0)`,
  })

  return (
    <HeroWrapper style={heroAnimation} onClick={() => setHeroOpen(!isHeroOpen)}>
      <RocketShipTitle>ROCKETSHIP</RocketShipTitle>
      <div style={{ paddingBottom: '40px' }} />
      <Strapline>
        Purveyors of high quality comedy products to discerning ladies and
        gentlemen everywhere.
      </Strapline>
    </HeroWrapper>
  )
}
export default Hero
