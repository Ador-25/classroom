import React from 'react'
import { TextField,Button,AppBar, IconButton, Toolbar, Typography, MenuItem } from '@material-ui/core';

export default function HeaderZero() {
    const mystyle = {
        color: "white",
        backgroundColor: "indigo",
        padding: "5px",
        fontFamily: "Arial",
        display: 'flex',

      };
    return (
        <div style={mystyle} >
            <div style={{width:'280px',margin:'auto',gap:'15px'}}>
            <Button href="#text-buttons" color="primary" style={{margin:'4px' ,color:'white',backgroundColor:'transparent'}}> Home</Button>
            <Button href="#text-buttons" color="primary" style={{margin:'4px' ,color:'white',backgroundColor:'transparent'}}> Sign in</Button>
            <Button href="#text-buttons" color="primary" style={{margin:'4px' ,color:'white',backgroundColor:'transparent'}}> Join Class</Button>
            </div>
                
           
        </div>
    )
}
