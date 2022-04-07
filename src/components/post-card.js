import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated, config } from 'react-spring'



const PostCard = ({ data }) => {


  return (
    <Link to={data.frontmatter.slug} className='post-card'>
      {data.frontmatter.featuredImage ?
        (

          <Img
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
            className="featured-image"
          />

        ) : ""
      }
      <div class="post-content">
        {/* {console.log(`Test: ${data.frontmatter.slug}`)} */}
        <h2 className="title"><Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link></h2>
        <p className="preview"><time>{data.frontmatter.preview}</time></p>
        <p className="meta"><time>{data.frontmatter.date}</time></p>
      </div>
    </Link>
  )
}

export default PostCard