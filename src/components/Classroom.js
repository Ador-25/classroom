import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ClassHeader from './AppBar/ClassHeader'
import './Classroom.css'
import Post from './Post'

function Classroom(props) {
    
    return (
        <div >
            <ClassHeader/>
            <div className="classroomBackground">
            <p >Class Info will come here</p>
            <Post postedBy="John" content="Today's class will take place on March 08,2021"/>
            <Post postedBy="Ador" content="asssdfsdf"/>
            </div>
          
            
        </div>
    )
}

Classroom.propTypes = {

}

export default Classroom

