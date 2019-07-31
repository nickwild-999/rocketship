import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'nuka-carousel'

// change on screen size
const SLIDER_QUERY = graphql`
  query ImageListing {
    myImages: allSliderJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          text
        }
      }
    }
  }
`

const FPCarousel = () => (
  <StaticQuery
    query={SLIDER_QUERY}
    render={({ myImages }) => (
      <Slider>
        {myImages.edges.map(edge => (
          <div>
            <Img fluid={edge.node.image.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
    )}
  />
)

export default FPCarousel
