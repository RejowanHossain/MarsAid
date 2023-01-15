import React from 'react'
import './ChooseUs.css'
import { Icon } from '@iconify/react';

import SectionTitle from '../lib/SectionTitle/SectionTitle'

const ChooseUs = () => {

    const badges = [
        {
            id: 1,
            icon: 'material-symbols:calendar-month-outline-rounded',
            content: 'We have more than 10 years of experience'
        },

        {
            id: 2,
            icon: 'clarity:users-line',
            content: 'We have experienced & Professionals'
        },
    ]

  return (
    <div className='choose-wrapper'>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6">
                        <img className='w-100' src={require('../../assets/choose-1.png')} alt="glass" />
                    </div>
                    <div className="col-lg-6 mt-62">
                        <img className='w-100' src={require('../../assets/choose-2.png')} alt="man" />
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="choose-content">
                    <SectionTitle subtitle='Why Choose Us' title='The reason people trust MarsAid' bigText='Choose Us'/>

                    <p>The mission of marsaid is to improve the health of the community and the world by setting the standard of excellence in medical education, research and clinical care. Diverse and inclusive, marsaid</p>

                    <div className="badges">
                        {
                            badges.map((badge) =>
                            <div className="single-badge" key={badge.id}>
                                <div className="b-icon">
                                    <Icon icon={badge.icon} />
                                </div>
                                <h5>{badge.content}</h5>
                            </div>
                            )
                        }
                    </div>

                    <p>The mission of marsaid is to improve the health of the community and the world by setting the standard of excellence in medical education.</p>
                    <div className="sign">
                        <img src={require('../../assets/signature.png')} alt="signature" />

                        <div className="meta">
                            <h5>Joseph Colman</h5>
                            <span>CEO & Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
