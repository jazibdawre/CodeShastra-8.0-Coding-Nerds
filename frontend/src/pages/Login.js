import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useState} from 'react';
import {Redirect,Link,useHistory} from 'react-router-dom';
import Button from '../components/common/Button';
import {loginEmail} from '../apis/user'

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
  const history = useHistory()
  const [formData,setFormData]=useState({
    email:'',
    password:'',
  })

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=async ()=>{
    const {username,password}=formData;
    console.log(formData)
    loginEmail(formData)
    setFormData({
      email:'',
      password:'',
    })
    history.push('/dashboard')
  }

  return (
    <React.Fragment>
      {localStorage.getItem('userInfo') ? <Redirect to='/dashboard' /> : <React.Fragment>
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
            <Button buttonText="Login" onClick={handleSubmit} />
          </div>
        </React.Fragment>}
    </React.Fragment>
  );
}

export default Login;