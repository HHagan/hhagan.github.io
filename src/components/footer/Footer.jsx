import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { FiInstagram } from 'react-icons/fi';


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Heather</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__social'>
        <a href='https://facebook.com'><FaFacebook/></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
        <a href='https://instagram.com'><FiInstagram/></a>  
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Heather. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default Footer;