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
  text-align: center;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 15;
`
const HeroTitle = styled.h1`
  margin: auto;
  color: whitesmoke;
`

const Hero = () => {
  const [isHeroOpen, setHeroOpen] = useState(true)
  const heroAnimation = useSpring({
    transform: isHeroOpen ? `translate3d(0,0%,0)` : `translate3d(0, -85%, 0)`,
  })

  return (
    <HeroWrapper style={heroAnimation} onClick={() => setHeroOpen(!isHeroOpen)}>
      <HeroTitle>I am a Hero Blind</HeroTitle>
      <div style={{ paddingBottom: '40px' }} />
    </HeroWrapper>
  )
}
export default Hero
