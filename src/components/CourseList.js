import React from 'react'
import ClassTab from './ClassTab'

export default function CourseList(props) {
    return (
        <div style={{display:'flex',marginLeft:'20px' }}>
            
        <ClassTab name="CSE311"  description="This is a course for learning... "/>
        <ClassTab name="CSE215"  description="This is a course for learning... "/>
        <ClassTab name="CSE115"  description="This is a course for learning... "/>
        <ClassTab name="CSE225"  description="This is a course for learning... "/>
        <ClassTab name="EEE154"  description="This is a course for learning... "/>
      
           
         </div>
    )
}
