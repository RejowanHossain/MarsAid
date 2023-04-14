import React from 'react';
import './Navbar.css'

import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';


const Navbar = () => {

  const links = [
    {
        id: 1,
        to: '/',
        name: 'Home'
    },
    {
        id: 2,
        to: '/about',
        name: 'About'
    },
    {
        id: 3,
        to: '/departments',
        name: 'Departments'
    },
    {
        id: 4,
        to: '/doctor',
        name: 'Doctor'
    },
    {
        id: 5,
        to: '/pages',
        name: 'Pages'
    },
    {
        id: 6,
        to: '/blogs',
        name: 'Blogs'
    },
    {
        id: 7,
        to: '/contact',
        name: 'Contact'
    },

]
  return (
    <div className='navbar-wrapper'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="site-logo">
              <Link to='/'>
                <img src={require(`../../assets/logo.png`)} alt="MarsAid" />
              </Link>
            </div>
          </div>
          <div className="col-lg-10 d-flex justify-content-end">
            <nav>
              <ul>
                {
                  links.map((link) =>
                  <li key={link.id}>
                    <Link to={link.to}>{link.name}</Link>
                  </li>
                  )
                }

                <div className='navbar-cta-wrapper'>
                  <li>
                    <Icon icon="ic:baseline-search" />
                  </li>

                  <li>
                    <Link to="login">
                      <Icon icon="mingcute:user-2-line" />
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Navbar
