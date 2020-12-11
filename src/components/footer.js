import React from "react"
import {Link} from "gatsby"
import { BiCoffee } from "react-icons/bi";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Site, powered by Gatsby. Designer, powered by coffee. <span className="icon"><BiCoffee/></span></p>
    </div>
  </footer>
)

export default Footer