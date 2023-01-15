import React from 'react'
import SectionTitle from '../lib/SectionTitle/SectionTitle'
import './Departments.css'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";


const Departments = () => {

    const departments = [
        {
            id: 1,
            icon: 'healthicons:cardiology-outline',
            title: 'Cardiology',
            content: 'The mission of marsaid is to improve the health of the community and the world.'
        },
        {
            id: 2,
            icon: 'ri:lungs-line',
            title: 'Pulmonary',
            content: 'The mission of marsaid is to improve the health of the community and the world.'
        },
        {
            id: 3,
            icon: 'tabler:dental-broken',
            title: 'Dental Caring',
            content: 'The mission of marsaid is to improve the health of the community and the world.'
        },
        {
            id: 4,
            icon: 'mdi:eye-check-outline',
            title: 'Eye Caring',
            content: 'The mission of marsaid is to improve the health of the community and the world.'
        },
    ]

  return (
    <div className='department-wrapper'>
      <div className="container">
        <div className="row">    
            <div className="col-lg-6 offset-lg-3">
                <div className="sec-title">
                    <SectionTitle subtitle='our Departments' title='See through our departments' bigText='Departments'/>
                </div>
            </div>
        </div>
        <div className="row mt-65">
            {
                departments.map((department) =>
                    <div className="col-lg-3">
                        <div className="single-department">

                            <Icon icon={department.icon} className={department.id === 1 ? 'accent': department.id === 2 ? 'red' : department.id === 3 ? 'blue' : department.id === 4 ? 'generic' : ''}/>

                            <h5>
                                <Link to='/department-details'>
                                {department.title}
                                </Link>
                            </h5>
                            <p>{department.content}</p>
                        </div>
                    </div>
                )
            }
        </div>
      </div>
    </div>
  )
}

export default Departments
