import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import BlastOff from '../components/BlastOff'
import FPCarousel from '../components/Carousel'

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 6.45rem 1.0875rem;
`

const IndexPage = () => (
  <Layout>
    <Hero />
    <FPCarousel />
    <PageWrapper>
      <SEO title="Home" />
      <BlastOff />
      <AboutUs />
    </PageWrapper>
  </Layout>
)

export default IndexPage
