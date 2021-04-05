import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const PostCard = ({ data }) => {
  const [props, spring] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <article className="post-card"
      // Leaving this code here hoping that a upcoming fix will fix these problems
      // onMouseMove={({ clientX: x, clientY: y }) => spring.update({ xys: calc(x, y) })}
      // onMouseLeave={() => spring.update({ xys: [0, 0, 1] })}
      // style={{ transform: props.xys.to(trans) }}
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
    </article>
  )
}

export default PostCard