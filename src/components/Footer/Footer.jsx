import React from 'react'
import './Footer.css'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="widget-wrapper">
                    <div className="footer-logo">
                        <img src={require(`../../assets/logo.png`)} alt="logo" />
                    </div>
                    <p>Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.
                    </p>
                    <div className="social-icons">
                        <Link to='#'>
                            <Icon icon="ic:baseline-facebook" />
                        </Link>
                        <Link to='#'>
                            <Icon icon="mdi:twitter" />
                        </Link>
                        <Link to='#'>
                            <Icon icon="ph:dribbble-logo" />
                        </Link>
                        <Link to='#'>
                            <Icon icon="ph:behance-logo-bold" />
                        </Link>
                        <Link to='#'>
                            <Icon icon="mdi:linkedin" />
                        </Link>
                       
                    </div>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="widget-wrapper">
                    <div className="heading">
                        <h5>Need Help?</h5>
                    </div>
                    
                    <div className="footer-links">
                        <Link to="#">
                            <span>Support</span>
                        </Link>
                        <Link to="#">
                            <span>Get Started</span>
                        </Link>
                        <Link to="#">
                            <span>Terms</span>
                        </Link>
                        <Link to="#">
                            <span>Privacy Policy</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="widget-wrapper">
                    <div className="heading">
                        <h5>Services To Explore</h5>
                    </div>
                    
                    <div className="footer-links">
                        <Link to="#">
                            <span>Oncologist</span>
                        </Link>
                        <Link to="#">
                            <span>Neurologist</span>
                        </Link>
                        <Link to="#">
                            <span>ENT Specialist</span>
                        </Link>
                        <Link to="#">
                            <span>Cardiologist</span>
                        </Link>
                        <Link to="#">
                            <span>Pulmonologist</span>
                        </Link>
                        <Link to="#">
                            <span>Psychiatrists</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 d-flex-end">
                <div className="widget-wrapper">
                    <div className="heading">
                        <h5>Timings</h5>
                    </div>
                    
                    <div className="footer-links">
                        <div className="days">
                            <span>Sat</span> <p>09:00 AM - 10:00 PM</p>
                        </div>
                        <div className="days">
                            <span>Sun</span> <p>09:00 AM - 10:00 PM</p>
                        </div>
                        <div className="days">
                            <span>Mon</span> <p>09:00 AM - 10:00 PM</p>
                        </div>
                        <div className="days">
                            <span>Tue</span> <p>09:00 AM - 10:00 PM</p>
                        </div>
                        <div className="days">
                            <span>Wed</span> <p>09:00 AM - 10:00 PM</p>
                        </div>
                        <div className="days">
                            <span>Thu</span> <p>09:00 AM - 10:00 PM</p>
                        </div>
                        <div className="days">
                            <span>Fri</span> <p>09:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row footer-copyright">
            <div className="col-lg-6 d-flex-center">
                <p>© 2022 <span>MarsAid</span>. All rights reserved.</p>
            </div>
            <div className="col-lg-6 d-flex-end">
                <div className="payment-cards">
                    <Link to='#'>
                        <img src={require(`../../assets/visa.png`)} alt="blog" />
                    </Link>
                    <Link to='#'>
                        <img src={require(`../../assets/paypal.png`)} alt="blog" />
                    </Link>
                    <Link to='#'>
                        <img src={require(`../../assets/express.png`)} alt="blog" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
