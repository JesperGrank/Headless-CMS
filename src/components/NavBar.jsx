import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
        <ul className='nav_links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-me">About me</Link></li>
        </ul>
    </nav>
  )
}
