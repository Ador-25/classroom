import { TextField,Button,AppBar, IconButton, Toolbar, Typography, MenuItem } from '@material-ui/core';
import React from 'react'
import { useState } from "react";
import App from '../App';
import HeaderZero from './AppBar/HeaderZero';
const accountType = [
    {
      value: '0',
      label:'Student',

    },
    {
      value: '1',
      label:'Teacher',

    }, ];
  
const SignupPage =()=> {
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername]= useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail]= useState("");
    const [id, setId]= useState("");
    const[accounttype,setAccounttype]= useState('0');
    const handleChange = (event) => {
        setAccounttype(event.target.value);
      };

    return (<div>
      <HeaderZero/>
           <div style={{width:'600px',margin:'auto'}}> 
         <div style={{width:'180px',display:'flex',gap:'100px'}}> 
       
       <div style={{width:'300px',padding: '10px',}}>
       <div style={{marginTop:'15px'}}>
            <TextField
               value={firstname}
               id="standard-username-input"
               style={{width:'220px',}}
               label="First Name"
               onChange={(e) => {
                   setFirstname(e.target.value);
               }}
           />
            </div>
            <div style={{marginTop:'15px'}} >
            <TextField
               value={lastname}
               id="standard-username-input"
               style={{width:'220px'}}
               label="Last Name"
               onChange={(e) => {
                   setLastname(e.target.value);
               }}
           />
            </div>
            <div style={{marginTop:'15px'}}>
            <TextField
               value={email}
               id="standard-username-input"
               style={{width:'220px'}}
               label="Email"
               onChange={(e) => {
                   setEmail(e.target.value);
               }}
           />
            </div>
            <div style={{marginTop:'15px'}}>
            <TextField
               value={id}
               id="standard-username-input"
               style={{width:'220px'}}
               label="ID"
               onChange={(e) => {
                   setId(e.target.value);
               }}
           />
            </div>
            <div style={{marginTop:'15px'}}>
            <TextField

         select
         label="Select"
         value={accounttype}
         onChange={handleChange}
         helperText="Account Type:"
       >
         {accountType.map((option) => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
            </div>
       </div>

       <div style={{width:'300px',padding: '10px',}}>
       <div style={{marginTop:'15px'}}>
            <TextField
               value={username}
               id="standard-username-input"
               style={{width:'220px'}}
               label="Username"
               onChange={(e) => {
                   setUsername(e.target.value);
               }}
           />
            </div>


            <div style={{marginTop:'15px'}}>
               <TextField
                 id="standard-password-input"
                 style={{width:'220px'}}
                 label="Password"
                 type="password"
                 autoComplete="current-password"
              
           />
               </div>
               <div style={{marginTop:'15px'}}>
               <TextField
                 id="standard-password-input"
                 style={{width:'220px'}}
                 label="Re-Enter Password"
                 type="password"
                 autoComplete="current-password"
                 onChange={(e) => {
                   setPassword(e.target.value);
               }}
             
           />
               </div>
               <Button variant="outlined" size="Small" color="black" href="#outlined-buttons" style={{marginTop:'25px',width:'220px',color:'whitesmoke',backgroundColor:'black',textAlign:'center'}}>
Sign up</Button>
       </div>

           
           
           </div>


      </div>
       
    </div>
     
            
            
              
           

    )
}

export default SignupPage
