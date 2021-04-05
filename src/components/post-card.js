import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated } from 'react-spring'



const PostCard = ({ data }) => {

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    setHeight(ref.current.clientWidth)
  })


  const [props, api] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 40 } }))
  const calc = (x, y) => [-(y - height / 2) / 100, (x - width / 2) / 100, 1]
  const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


  return (
    <animated.div 
      className="post-card"
      onMouseMove={({ clientX: x, clientY: y }) => {
        // console.log('Mouse moved') 
        api.set({ xys: calc(x, y) })
      }}
      onMouseLeave={() => {
        // console.log('Mouse left')
        api.set({ xys: [0, 0, 1] })
      }}
      style={{ transform: props.xys.to(trans) }}
      ref={ref}
    >
      {data.frontmatter.featuredImage ?
        (
          <Link to={data.frontmatter.slug}>
            <Img
              fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={data.frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          </Link>
        ) : ""
      }
      <div class="post-content">
        <h2 className="title"><Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link></h2>
        <p className="preview"><time>{data.frontmatter.preview}</time></p>
        <p className="meta"><time>{data.frontmatter.date}</time></p>
      </div>
    </animated.div>
  )
}

export default PostCard