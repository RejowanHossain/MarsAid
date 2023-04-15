import React from 'react'
import SectionTitle from '../lib/SectionTitle/SectionTitle'
import { Icon } from '@iconify/react';
import './Appointment.css'
import Button from '../lib/Buttons/Button'

const Appointment = () => {

  const lists = [
    {
      id: 1,
      icon: 'material-symbols:select-check-box',
      content: 'Treats minor illnesses'
    },
    {
      id: 2,
      icon: 'material-symbols:select-check-box',
      content: 'Answers health questions'
    },
    {
      id: 3,
      icon: 'material-symbols:select-check-box',
      content: 'Conducts health checkups'
    },
  ]

  const lists2 = [
    {
      id: 4,
      icon: 'material-symbols:select-check-box',
      content: 'Performs routine tests'
    },
    {
      id: 5,
      icon: 'material-symbols:select-check-box',
      content: 'Orthopaedic surgeon'
    },
    {
      id: 6,
      icon: 'material-symbols:select-check-box',
      content: 'Endocrinologist'
    },
  ]

  const timings = [
    {
      id: 1,
      day: 'Sat',
      time: '09:00 AM - 10:00 PM'
    },
    {
      id: 2,
      day: 'Sun',
      time: '09:00 AM - 10:00 PM'
    },
    {
      id: 3,
      day: 'Mon',
      time: '09:00 AM - 10:00 PM'
    },
    {
      id: 4,
      day: 'Tue',
      time: '09:00 AM - 10:00 PM'
    },
    {
      id: 5,
      day: 'Wed',
      time: '09:00 AM - 10:00 PM'
    },
    {
      id: 6,
      day: 'Thu',
      time: '09:00 AM - 10:00 PM'
    },
    {
      id: 7,
      day: 'Fri',
      time: '09:00 AM - 10:00 PM'
    },
  ]


  return (
    <div className='apoointment-wrapper'>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-w-50-l">
            <div className="heading">
              <SectionTitle subtitle='Who We Are' title='Welcome To The MarsAid' bigText='About'/>
            </div>

            <div className="content">
              <p>The mission of marsaid is to improve the health of the community and the world by setting the standard of excellence in medical education, research and clinical care. Diverse and inclusive, marsaid</p>

              <div className="lists">
                <ul>
                {
                  lists.map((list) =>
                    <li key={list.id}>
                      <Icon icon={list.icon}/>
                      <p>{list.content}</p>
                    </li>
                  )
                }
                </ul>
                
                <ul className='secondListWrapper'>
                  {
                    lists2.map((list2) =>
                      <li key={list2.id}>
                        <Icon icon={list2.icon}/>
                        <p>{list2.content}</p>
                      </li>
                    )
                    }
                </ul>
              </div>

              <Button text='Book Appointment' goTo='/contact'/>
            </div>
          </div>
          <div className="col-lg-3 appoint-flex-col mx-w-50-l">
            <div className="title">
              <h5>Timings</h5>
            </div>
            <div className="times">
              <ul>
              {
                timings.map((timing) =>
                  <li key={timing.id}>
                    <span>{timing.day}</span>
                    <p>{timing.time}</p>
                  </li>
                )
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="appoint-image">
              <img src={require(`../../assets/appointment-image.png`)} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
