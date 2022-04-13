import React, { Children } from "react"
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

const IndexCard = (props) => {
  return (
    <div className='index-card'>
      <h1 className='title'>{props.header}</h1>
      <p className="preview">{props.subheader}</p>
      {props.children}
    </div>)
}

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""

  useEffect(() => {

    const Blob1 = new DrawBlob({
      canvas: document.getElementById('pp-blob1'),
      speed: 400,
      scramble: 0.1,
      color: '#C0DDCA',
      vectors: generatePoints({ sides: 3 })
    })

    const Blob2 = new DrawBlob({
      canvas: document.getElementById('pp-blob2'),
      speed: 500,
      scramble: 0.1,
      color: '#50b288',
      vectors: generatePoints({ sides: 6 })
    })

    const Blob3 = new DrawBlob({
      canvas: document.getElementById('pp-blob3'),
      speed: 650,
      scramble: 0.1,
      color: '#94D0B6',
      vectors: generatePoints({ sides: 3 })
    })

    // const Blob4 = new DrawBlob({
    //   canvas: document.getElementById('pp-blob4'),
    //   speed: 650,
    //   scramble: 0.1,
    //   color: '#94D0B6',
    //   vectors: generatePoints({ sides: 3 })
    // })

    // const Blob5 = new DrawBlob({
    //   canvas: document.getElementById('pp-blob5'),
    //   speed: 600,
    //   scramble: 0.1,
    //   color: '#50b288',
    //   vectors: generatePoints({ sides: 3 })
    // })

  });


  return (
    <Layout>
      <SEO />
      <div className="home-banner grids col-1 md-2">
        <div className="featured-text-group">
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
          <canvas id='pp-blob1' />
          <canvas id='pp-blob2' />
          <canvas id='pp-blob3' />
        </div>
      </div>
      <h1 className='title'>Projects and Case Studies</h1>

      <BlogListHome />

      <h1 className='title'>Work History and Education</h1>
      <Link to={'https://www.figma.com/proto/CDR9fePXJCS0CpUmNwgWgE/Resume-%26-Portfolio?node-id=1026%3A2954&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1026%3A2954'} className="button -outline" style={{marginBottom: '32px'}}>View Resume</Link>

      {/* Teletrac Navman */}
      <IndexCard
        header="Interaction Designer"
        subheader="Teletrac Navman | Bay Area, CA">
        <strong>January 2019 - Present</strong>
        <ul>
          <li>Innovating new <strong>complex enterprise</strong>, industry-standard, SAAS web and mobile applications</li>
          <li>Specialized in designing<strong> B2B location-centric insights and vehicle management</strong></li>
          <li>Developing intuitive, <strong>high-fidelity</strong> prototypes using Figma and React</li>
          <li>Collaborating and leading global teams to align with <strong>design systems</strong> and user experiences</li>
          <li>Conducting qualitative and quantitative UX research for project stakeholders</li>
          <li>Bridging the gap between mockups and development by coding stylized React components</li>
        </ul>
      </IndexCard>

      {/* Cru */}
      <IndexCard
        header="Web Designer"
        subheader="Cru | Bay Area, CA">
        <strong>January 2018 - June 2018</strong>
        <ul>
          <li>Overhaul design work for <a href='https://www.cru.org/epicmovement/'>Epic Movement</a> national website</li>
          <li>Developing numerous sites and landing pages using WordPress, PHP, and JavaScript</li>
          <li><strong>Increased website traffic by 30%</strong> as a result of improving website discoverability and usability</li>
        </ul>
      </IndexCard>

      

      {/* Turing Eye */}
      <IndexCard
        header="Software Intern"
        subheader="Turing Eye | Bay Area, CA">
        <strong>May 2016 - October 2016</strong>
        <ul>
          <li>Front-end development for <strong>AI-Big data analytics</strong> start-up</li>
          <li>Designed various graphs using D3.js to visualize trends in abstract data points</li>
        </ul>
        
      </IndexCard>
      
      {/* Gloo */}
      <IndexCard
        header="Programming Intern"
        subheader="Gloo | Boulder, CO">
        <strong>June 2015 - July 2015</strong>
        <ul>
          <li>Collaborated with programmers to create a task manager that increased development efficiently in a fastpaced agile environment</li>
          <li>Developed the task manager by pulling Pivotal Tracker API using Ruby on Rails and rendering the front-end UI with HTML, Bootstrap, and JavaScript</li>
        </ul>
      </IndexCard>
      
      {/* College */}
      <IndexCard
        header="Education and Certifications"
        subheader="San Jose State University | Bachelor's Degree in Computer Science, 2013 - 2018">
        <strong>Certifications</strong>
        <ul>
          <li><strong>UX Research & Strategy</strong> | DesignLab, Issued November 2020</li>
          <li><strong>Learning React.js</strong> | Lynda.com, Issued January 2019</li>
          <li><strong>Web Development Foundations: Full Stack vs. Front End</strong> | LinkedIn, Issued January 2018</li>
        </ul>
      </IndexCard>

      {/* <canvas id='pp-blob4' />
      <canvas id='pp-blob5' /> */}
    </Layout>
  )
}




export default HomePage
