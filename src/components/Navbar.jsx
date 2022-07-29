import React from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../images/menu.svg'
import logo from '../images/logo.svg'
import closeIcon from '../images/close-icon.svg'

const Navbar = () => {

  const handleMenuClick = (e) => {
      console.dir(e)
      e.preventDefault()

      e.target.nextSibling.classList.toggle('toggle')
  }

  const handleMenuClose = (e) => {
      console.dir(e)
      e.preventDefault()

      e.target.parentNode.classList.toggle('toggle')
  }

  return (
          <div className="nav-container">
              <nav className="nav">
                  <ul>
                    <li className="menu">
                        <img src={menuIcon} onClick={handleMenuClick} alt="Menu" className="menu-icon" />
                        <ul className="menu-content">
                            <img src={closeIcon} onClick={handleMenuClose} alt="close menu" className="close-menu-icon" />
                            <li className="link">
                                <Link to='/'>
                                Home
                                </Link>
                            </li>
                            <li className="link">
                                <Link to='/projects'>
                                Projects
                                </Link>
                            </li>
                            <li className="link">
                                <Link to='/contact'>
                                Contact
                                </Link>
                            </li>
                        </ul>
                      </li>
                      <li className="logo">
                          <Link to='/'>
                              <img src={logo} aria-hidden={true} className="logo-img" />
                          </Link>
                      </li>
                      <li className="link">
                          <Link to='/'>
                              Home
                          </Link>
                      </li>
                      <li className="link">
                          <Link to='/projects'>
                            Projects
                          </Link>
                      </li>
                      <li className="link">
                          <Link to='/contact'>
                            Contact
                          </Link>
                      </li>
                  </ul>
              </nav>
          </div>
  )
}

export default Navbar
