import React from 'react'
import {Link} from 'react-router-dom'
import './navigationBar.css'

const NavigationBar = () => (
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/testimonies'>Testimonies</Link></li>
      <li><Link to='/portfolio'>Portfolio</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </nav>
)

export default NavigationBar
