import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'

const SLIDER_QUERY = graphql`
  query ImageListing {
    myImages: allSliderJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid {
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
      <Carousel autoplay wrapAround>
        {myImages.edges.map(edge => (
          <div>
            <Img fluid={edge.node.image.childImageSharp.fluid} />
          </div>
        ))}
      </Carousel>
    )}
  />
)

export default FPCarousel
