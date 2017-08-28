import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/proprietor/properties' className="link">Properties</Link></li>
        <li><Link to='/proprietor/tenants' className="link">Tenants</Link></li>
      </ul>
    </nav>
  </header>
)

export default Nav
