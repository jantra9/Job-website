import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const HelpLayout = () => {
  return (
    <div className='help-layout'>
        <h2>
            Website Help
        </h2>
        <p>Understanding the Difference Between `npm run dev` and `npm run build` in Next.js</p>
        <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
