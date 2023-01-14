import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import './HeroOne.css'
import FsLightbox from "fslightbox-react";
import Button from '../lib/Buttons/Button'


const HeroOne = () => {

  const [toggler, setToggler] = useState(false)
  
  return (
    <div className='hero-one-wrapper'>
      <div className="container">
        <div className="row align-items-center">
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
            <div className="col-lg-7 flex-col">
              <div className="hero-img-one">
                <img src={require(`../../assets/hero-img-one.png`)} alt="hero" />
              </div> 

              <div className="hero-image-small">
                <div className="hero-img-two">
                  <img src={require(`../../assets/hero-img-two.png`)} alt="hero" />
                </div>  

                <div className="play-btn" onClick={() => setToggler(!toggler)}>
                  <Icon icon="ic:round-play-arrow" />
                </div>

                <div className="hero-img-three">
                  <img src={require(`../../assets/hero-img-three.png`)} alt="hero" />
                </div>  
              </div>

            </div>
        </div>
      </div>

      <FsLightbox
				toggler={toggler}
				sources={[
          <iframe title='hero-pop' width="1920px" height="1080px" src="https://www.youtube.com/embed/eI4an8aSsgw" allowFullScreen allow="autoplay; fullscreen">
          </iframe>
				]}
			/>
    </div>
  )
}

export default HeroOne
