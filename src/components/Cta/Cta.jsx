import React from 'react'
import './Cta.css'
import Button from '../lib/Buttons/Button'

const Cta = () => {
  return (
        <div className='cta-wrapper'>
            <div className="container cta-bg">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="cta-text">
                            <h2>Need a doctor for checkup? Our service are available for you.</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 end-content">
                        <Button text='Book Appointment' goTo='/contact'/>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Cta
