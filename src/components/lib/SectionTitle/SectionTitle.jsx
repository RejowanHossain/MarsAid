import React from 'react'
import { Icon } from '@iconify/react';
import './SectionTitle.css'
const SectionTitle = ({subtitle, title, bigText}) => {
  return (
    <>
        <div className='section-title'>
            <div className="subheader">
                <Icon icon="tabler:activity-heartbeat" />
                <p>{subtitle}</p>
            </div>
            <h2>{title}</h2>
        </div>

        <div className="lg-text">
            <h2>{bigText}</h2>
        </div>
    </>
  )
}

export default SectionTitle
