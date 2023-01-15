import React from 'react'
import './Team.css'
import SectionTitle from '../lib/SectionTitle/SectionTitle'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

import imageOne from '../../assets/team-1.png'
import imageTwo from '../../assets/team-2.png'
import imageThree from '../../assets/team-3.png'
import imageFour from '../../assets/team-4.png'

const Team = () => {

  const teams = [
    {
      id: 1,
      image: imageOne,
      name: 'Marty Gilmour',
      designation: 'Cardiologist',

      social: [
        'ri:facebook-fill',
         'ri:linkedin-fill',
         'mdi:twitter'
     ]

    },

    {
      id: 2,
      image: imageTwo,
      name: 'Anna Morgan',
      designation: 'Gynocologist',

      social: [
        'ri:facebook-fill',
         'ri:linkedin-fill',
         'mdi:twitter'
     ]
      
    },

    {
      id: 3,
      image: imageThree,
      name: 'Travis Scott',
      designation: 'Urologist',

      social: [
        'ri:facebook-fill',
         'ri:linkedin-fill',
         'mdi:twitter'
     ]
      
    },

    {
      id: 4,
      image: imageFour,
      name: 'Keith Richards',
      designation: 'Pulmonologist',

      social: [
         'ri:facebook-fill',
          'ri:linkedin-fill',
          'mdi:twitter'
      ]
      
    },
  ]

  return (
    <div className='team-wrapper'>
        <div className="container">
          <div className="row">    
              <div className="col-lg-6 offset-lg-3">
                  <div className="sec-title">
                      <SectionTitle subtitle='Our Doctors' title='Meet the professionals' bigText='The Team'/>
                  </div>
              </div>
          </div>

          <div className="row mt-65">
            {
              teams.map((team) =>
              <div className="col-lg-3">
                <div className="single-team" key={team.id}>
                  <div className="team-img">
                    <img src={team.image} alt="man" />
                  </div>
                  <div className="info">
                    <h6>
                      <Link to='/doctor-details'>
                        {team.name}
                      </Link>
                    </h6>
                    <p>{team.designation}</p>
                  </div>
                  <div className="social-links">
                    <ul>
                      {
                        team.social.map((social) =>
                          <li>
                            <Link to='#'>
                              <Icon icon={social} />
                            </Link>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default Team
