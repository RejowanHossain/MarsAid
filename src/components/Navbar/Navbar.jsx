import React from 'react';
import './Navbar.css'

import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Navbar = () => {
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
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="about">About</Link>
                </li>

                <li>
                  <Link to="#">Departments +</Link>
                </li>

                <li>
                  <Link to="doctor">Doctor +</Link>
                </li>

                <li>
                  <Link to="#">Pages +</Link>
                </li>

                <li>
                  <Link to="blogs">Blogs +</Link>
                </li>

                <li>
                  <Link to="contact">Contact</Link>
                </li>

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
