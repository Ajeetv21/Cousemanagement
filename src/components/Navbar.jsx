import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    
  return (
    
       <nav>
            <NavLink to="/course-types">Course Types</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/course-offerings">Course Offerings</NavLink>
            <NavLink to="/">Register</NavLink>
        </nav>
  
  )
}

export default Navbar
