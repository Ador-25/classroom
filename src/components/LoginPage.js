import { TextField,Button,AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import { useState } from "react";
import HeaderZero from './AppBar/HeaderZero';
const LoginPage =()=> {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>  
            <HeaderZero/>
                 <div style={{margin:'auto',width:'180px',}}>

        <h2 style={{textAlign:'center'}}>Sign in</h2>

        <div  >
        <TextField
           value={name}
           id="standard-username-input"
           size="small"
           label="Username"
           onChange={(e) => {
               setName(e.target.value);
           }}
       />
        </div>
       
           <div>
           <TextField
             id="standard-password-input"
             size="small"
             label="Password"
             type="password"
             autoComplete="current-password"
           onChange={(e) => {
               setPassword(e.target.value);
           }}
       />
           </div>
           <Button variant="outlined" size="Small" color="black" href="#outlined-buttons" style={{marginTop:'10px',width:'180px',textAlign:'center'}}>
Sign in</Button>

<div style={{marginTop:'10px'}}> Don't have an account?  
<Button href="#text-buttons" color="primary" >
<div style={{alignContent:'center'}}>Sign up</div>
</Button>
</div>
           



           
         
      
   </div>

        </div>
 
    )
}

export default LoginPage
