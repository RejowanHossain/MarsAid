import React from 'react'
import HeroOne from '../components/HeroOne/HeroOne'
import Appointment from '../components/Appointment/Appointment'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import Departments from '../components/Departments/Departments'
import Team from '../components/Team/Team'

const HomeOne = () => {
  return (
    <div>
      <HeroOne/>
      <Appointment/>
      <HowItWorks/>
      <ChooseUs/>
      <Departments/>
      <Team/>
    </div>
  )
}

export default HomeOne
