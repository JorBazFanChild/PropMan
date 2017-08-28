import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const SplashNavBar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/' className="link">Login</Link></li>
        <li><Link to='/signup' className="link">Signup</Link></li>
        <li><Link to='/proprietor' className="link">Landlord Dashboard</Link></li>
        <li><Link to='/tenant' className="link">Tenant Dashboard</Link></li>

      </ul>
    </nav>
  </header>
)

<<<<<<< cfc4116b086b6b85ea9e44b35c60837093a8e8c9
export default SplashNavBar
=======
export default Nav
>>>>>>> Add paths for Landlord+Tenant Dashboards for development
