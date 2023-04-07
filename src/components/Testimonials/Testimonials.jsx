import React from 'react'
import './Testimonials.css'
import { Icon } from '@iconify/react';
import image from '../../assets/testi-small.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import SwiperCore , { Autoplay } from 'swiper';

// import 'swiper/css/autoplay'
const Testimonials = () => {

    SwiperCore.use([Autoplay])

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
                        <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        autoplay={true}
                        modules={[Autoplay]}
                        >
                            <SwiperSlide>
                            {
                                testimonials.map((testimonial) =>
                                    <>
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
                                    </>

                                )
                            }
                            </SwiperSlide>
                        </Swiper>
                        
                
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
