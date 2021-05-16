import React, { useState } from 'react'
import MainHeader from './AppBar/MainHeader'
import CourseList from './CourseList'
import Profile from './Profile'
import ClassHeader from './AppBar/ClassHeader'
function Home() {
    
    return (
        <div>
             <MainHeader/>
  <Profile name="Abtahee Farhan Ador" 
  username="Ador25" 
  email="abtahee.ador@northsouth.edu"
  id="1921868642"
  />
  <h3 style={{marginLeft:'35px',marginTop:"20px"}}>
      My courses:
  </h3>
  <CourseList/>
        </div>
    )
}

export default Home
