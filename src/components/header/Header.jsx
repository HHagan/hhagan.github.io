import React from 'react'
import './header.css'
import CTA from './CTA'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Heather Hagan</h1>
        <h5 className="text-light">Developer</h5>
        <CTA/>
      </div>
    </header>
  )
};
export default Header;