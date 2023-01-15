import React from 'react'
import { Icon } from '@iconify/react';
import './HowItWorks.css'

const HowItWorks = () => {

  const steps = [
    {
        id: 1,
        icon: 'material-symbols:hourglass-disabled-rounded',
        title: 'Search doctor',
        content: 'Since when has the concept of “marketing” existed? When it comes to fashion, people often.'
    },
    {
        id: 2,
        icon: 'uil:calender',
        title: 'Schedule Apppointment',
        content: 'Since when has the concept of “marketing” existed? When it comes to fashion, people often.'
    },
    {
        id: 3,
        icon: 'ion:bulb-outline',
        title: 'Get Solution',
        content: 'Since when has the concept of “marketing” existed? When it comes to fashion, people often.'
    },
  ] 

  return (
    <div className='steps-wrapper'>
      <div className="container">
        <div className="row">

            {
                steps.map((step) =>
                    <div className="col-lg-4">
                        <div className="single-step">
                            <div className="icon">
                                <Icon icon={step.icon} className={step.id === 1 ? 'accent': step.id === 2 ? 'red' : step.id === 3 ? 'blue' : 'generic'}/>
                            </div>
                            <h4>{step.title}</h4>
                            <p>{step.content}</p>
                        </div>
                    </div>
                )
            }
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
