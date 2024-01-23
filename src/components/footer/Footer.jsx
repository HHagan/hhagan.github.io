import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>

  <div className="footer__links">
    <a href="#">Home</a>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#portfolio">Portfolio</a>

  </div>
  <div className="footer__social">
    <a href="https://github.com/HHagan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    <a href='http://www.linkedin.com/in/hagan-heather' target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
    {/* Add more social links as needed */}
  </div>


    </footer>
  )
}
export default Footer;