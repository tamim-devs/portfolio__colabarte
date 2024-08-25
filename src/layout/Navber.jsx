import React from 'react'
import '../layout/navbar.css'
import navLogo from '../../src/componant/images/nav.png'

const Navber = () => {
  return (
    <>
      <div id="navbar">
        <div className="container">
          <div className="nav__wrapper">
            <div className="nav__logo">
              <img src={navLogo} alt="" />
            </div>
            <div className="nav__list">
              <ul>
                <li >Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Portfolio</li>
              </ul>
              <button className='nav__btn'>
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navber