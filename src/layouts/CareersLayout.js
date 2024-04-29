import React from 'react'
import { Outlet } from 'react-router-dom'

export const CareersLayout = () => {
  return (
    <div className='careers-layout'>
        <h2>Careers</h2>
        <p>This is a great opportunity for a recent graduate who is passionate and eager to learn and grow in a supportive environment.</p>
        <Outlet />
    </div>
  )
}
