import React from 'react'
import { Icon } from '@iconify/react';
import './HeroOne.css'
import Button from '../Buttons/Button'


const HeroOne = () => {
  return (
    <div className='hero-one-wrapper'>
      <div className="container">
        <div className="row">
            <div className="col-lg-5">
                <div className="hero-text">
                    <div className="subheading">
                        <Icon icon="mdi:cards-heart" />
                        <p>Health Comes First</p>
                    </div>
                    <h1>
                    Healthy body is the greatest <span>treasure</span>
                    </h1>
                    <img src={require(`../../assets/heartbeat.png`)}alt="heartbeat" />
                    <p>Over A Long Period Of Work We Have Provided 1000’S Of Clients A Better Life And Helped To Overcome Mental Illness. It is a long established fact.</p>

                    <Button text='Know More' goTo='/about'/>
                </div>
            </div>
            <div className="col-lg-7">dsds</div>
        </div>
      </div>
    </div>
  )
}

export default HeroOne
