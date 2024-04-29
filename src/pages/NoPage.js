import React from 'react'
import { Link } from 'react-router-dom'

export const NoPage = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Go to the <Link index>Home Page</Link>.</p>
    </div>
  )
}
