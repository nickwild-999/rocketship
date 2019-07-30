import React from 'react'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import BlastOff from '../components/BlastOff'
import FPCarousel from '../components/Carousel'
import Footer from '../components/Footer'

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2.45rem 1.0875rem;
  @media (max-width: 768px) {
    padding: 2.45rem;
  }
`

const IndexPage = () => (
  <Layout>
    <Parallax pages={3}>
      <ParallaxLayer offset={1} speed={0.095}>
        <PageWrapper>
          <SEO title="Home" />
          <BlastOff />
          <AboutUs />
        </PageWrapper>
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={0.44}>
        <FPCarousel />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1}>
        <Hero />
      </ParallaxLayer>

      <Footer />
    </Parallax>
  </Layout>
)

export default IndexPage
