import React from "react"
import {Link} from "gatsby"
import { BiCoffee } from "react-icons/bi";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Site powered by <a href="https://www.gatsbyjs.com/">Gatsby</a>. Designer powered by <a href="https://www.threecheerscoffee.com/">coffee</a>. <span className="icon"><BiCoffee/></span></p>
    </div>
  </footer>
)

export default Footer