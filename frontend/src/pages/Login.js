import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useState} from 'react';
import {Redirect,Link} from 'react-router-dom';
import Button from '../components/common/Button';
import OtpInput from 'react-otp-input';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginTop:'100px',
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
  },
  inputs: {
    width: "100%",
    padding:"10px",
    marginBottom: "20px",
    height: "60px",
    borderRadius:"30px"
  },
 
}));
function Login() {
  const classes = useStyles();
//   const {isAuthenticated}=user;
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
  })
  const [otp,setOtp]=useState();

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=async ()=>{
    const {name,email,password}=formData;
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h1 className={classes.heading}>Login</h1>
        <p style={{ fontSize: "25px" }}>
          <span style={{ marginRight: "10px" }}>
            <i className="fas fa-user"></i>
          </span>
          Access Your Account
        </p>
        <form className={classes.form} >
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={classes.inputs}
            onChange={(e)=>handleChange(e)}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={classes.inputs}
            onChange={(e)=>handleChange(e)}
            required
          />        
        </form>
        {/* <OtpInput
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
          numInputs={4}
          separator={<span>-</span>}
          inputStyle={{
            margin: "0px",
            textAlign: "center",
            lineHeight: "30px",
            fontSize: "30px",
            border: "solid 1px #10293C",
            boxShadow: "0 0 5px #10293C inset",
            outline: "none",
            width: "60%",
            transition: "all .2s ease-in-out",
            borderRadius: "3px",
            backgroundColor:"transparent",
            padding:"2%",
            color:"orange"
        }}
        /> */}
        <Button buttonText="Login" onClick={handleSubmit} />
      </div>
    </React.Fragment>
  );
}

export default Login;