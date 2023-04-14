import React from 'react'
import './Testimonials.css'
import { Icon } from '@iconify/react';
import image from '../../assets/testi-small.png';
import Carousel from 'react-bootstrap/Carousel';


const Testimonials = () => {

    const testimonials = [
        {
            name: 'Adam Richman',
            image: image,
            content: '"It was a pleasure meeting you this past weekend. I appreciate all you shared and cant wait to review the Ecology of Commerce. I will come see you again soon! Their website was easy to use, payment options very good.The estimated delivery window, on the day.”'
        },

        {
            name: 'Paul Gilbert',
            image: image,
            content: '"It was a pleasure meeting you this past weekend. I appreciate all you shared and cant wait to review the Ecology of Commerce. I will come see you again soon! Their website was easy to use, payment options very good.The estimated delivery window, on the day.”'
        },

        {
            name: 'Steve Vai',
            image: image,
            content: '"It was a pleasure meeting you this past weekend. I appreciate all you shared and cant wait to review the Ecology of Commerce. I will come see you again soon! Their website was easy to use, payment options very good.The estimated delivery window, on the day.”'
        },
    ]
  return (
    <div className='testimonial-wrapper'>
        <div className="container">
            <div className="row center-align">
                <div className="col-lg-6">
                    <div className="testimonial-image">
                        <img src={require('../../assets/testimonial-image.png')} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="testi-content-wrapper">
                    
                        <Carousel>

                            {
                                testimonials.map((testimonial) =>
                                    <Carousel.Item>
                                        <div className="quote">
                                            <img src={require('../../assets/quote.png')} alt="quote" />
                                        </div>
                                        <div className="name-img">
                                            <div className="meta">
                                                <img src={testimonial.image} alt="man" />
                                                <h5>{testimonial.name}</h5>
                                            </div>
                                            <div className="review">
                                                <Icon icon="material-symbols:star-rounded" />
                                                <Icon icon="material-symbols:star-rounded" />
                                                <Icon icon="material-symbols:star-rounded" />
                                                <Icon icon="material-symbols:star-rounded" />
                                                <Icon icon="material-symbols:star-rounded" />
                                            </div>
                                        </div>
                                        <p>{testimonial.content}</p>
                                    </Carousel.Item>

                                )
                            }

        
                        </Carousel>
                            
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
