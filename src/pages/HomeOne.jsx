import React from 'react'
import HeroOne from '../components/HeroOne/HeroOne'
import Appointment from '../components/Appointment/Appointment'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import Departments from '../components/Departments/Departments'
import Team from '../components/Team/Team'
import Testimonials from '../components/Testimonials/Testimonials'
import Cta from '../components/Cta/Cta'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Footer/Footer'



const HomeOne = () => {
  return (
    <div>
      <HeroOne/>
      <Appointment/>
      <HowItWorks/>
      <ChooseUs/>
      <Departments/>
      <Team/>
      <Testimonials/>
      <Cta/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default HomeOne
