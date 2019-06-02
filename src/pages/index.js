import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/seo'
import Hero from '../components/Hero'

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 10.45rem 1.0875rem;
`

const IndexPage = () => (
  <Layout>
    <Hero />
    <PageWrapper>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </PageWrapper>
  </Layout>
)

export default IndexPage
