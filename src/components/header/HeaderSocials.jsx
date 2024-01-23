import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://www.linkedin.com/in/hagan-heather" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/HHagan" target="_blank"><FaGithub/></a>
    </div>
  )
}
export default HeaderSocials;