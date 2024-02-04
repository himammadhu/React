import { Checkbox, IconButton, TextField } from '@mui/material';
import './account.scss'
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Password, ToggleOffSharp, ToggleOnSharp } from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton';




const Account = () => {

    const [UserArray,setUserArray] = useState([]);
    const [passwordType,setPasswordType] = useState("password");
    const[Status,setStatus] = useState("inactive");

    const [First_Name,setFirst_Name] = useState("");
    const [Last_Name,setLast_Name] = useState("");
    const [Password,setPassword] = useState("");
    const [Email,setEmail] = useState("");

    const addObject = () =>{
        const newObj ={
            Firstname: First_Name,
            Lastname: Last_Name,
            Email:Email,
            Password:Password
        };
        setUserArray(prevArray => [...prevArray,newObj]);
    };

    const handleTogglestatus =() =>{
        setStatus(Status ==='active' ? 'inactive' : 'active')

    }

    return (
        <div className='container'>
            <div className="Image">


                <div className="Text">
                    Add account

                <div className="toggle">
                    <IconButton onClick={handleTogglestatus}>
                        {Status === 'active'? <ToggleOnSharp/>:<ToggleOffSharp/>}
                        <span>{Status === 'active' ? <p>Active</p>:<p>Inactive</p>}</span>
                    </IconButton>
                </div>
                </div>
                <div className="Text2">
                    Already have an account?
                    <a href='Login.jsx'>&nbsp;Login</a>
                </div>

                <div className="textfield">
                    <TextField  id="firstname" label="First Name" variant="outlined" onChange={(event)=>setFirst_Name(event.target.value)}/>

                    <TextField  id="lastname" label="Last Name" variant="outlined" onChange={(event)=>setLast_Name(event.target.value)}/>
                </div>
                <div className='textfield2'>
                    <TextField fullWidth id="email" label="email" variant="outlined" onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className='textfield2'>
                    <TextField fullWidth id="password" label="Password" variant="outlined" onChange={(event)=>setPassword(event.target.value)}/>
                </div>


                <div className="T">
                    <Checkbox />

                    <span> I agree to DopeSass <a href='Terms.jsx'>&nbsp; Terms and Services &nbsp;</a> and <a href='Privacy.jsx'>&nbsp; Privacy Policy &nbsp;</a></span>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={addObject}>Add your Details</button>
                </div>
                <div className='tables'>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
            
            <TableCell >First Name</TableCell>
            <TableCell >Last name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserArray.map((user,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.Firstname}
              </TableCell>
              <TableCell>{user.Lastname}</TableCell>
              <TableCell>{user.Email}</TableCell>
              <TableCell>{user.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
        
      </Table>
    </TableContainer>
    </div>

            </div>
        </div>



    )
}


export default Account
