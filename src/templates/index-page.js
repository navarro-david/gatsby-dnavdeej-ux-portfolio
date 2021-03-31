import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import DrawBlob, { generatePoints } from "blob-animated"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"
import { useEffect } from "react"



export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      
      frontmatter {
        title
        tagline
        introduction
        featuredImage {
          childImageSharp {
            fluid(quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""

  useEffect(() => {

    const Blob1 = new DrawBlob({
      canvas: document.getElementById('blob1'),
      speed: 800,
      scramble: 0.1,
      color: '#C0DDCA',
      vectors: generatePoints({ sides: 3 })
    })

    const Blob2 = new DrawBlob({
      canvas: document.getElementById('blob2'),
      speed: 1000,
      scramble: 0.1,
      color: '#94D0B6',
      vectors: generatePoints({ sides: 6 })
    })

    const Blob3 = new DrawBlob({
      canvas: document.getElementById('blob3'),
      speed: 1300,
      scramble: 0.1,
      color: '#94D0B6',
      vectors: generatePoints({ sides: 3 })
    })
  });


  return (
    <Layout>
      <SEO />
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 class="title">{frontmatter.title}</h1>
          <p class="tagline">{frontmatter.tagline}</p>
          <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
          <Link to={frontmatter.cta.ctaLink} className="button">{frontmatter.cta.ctaText}
          </Link>
        </div>
        <div className="featured-image-group">
          {Image ? (
            <Img
              fluid={Image}
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          ) : ""}
          <canvas id='blob1' />
          <canvas id='blob2' />
          <canvas id='blob3' />
        </div>
      </div>
      <BlogListHome />
    </Layout>
  )
}




export default HomePage
