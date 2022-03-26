import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useState} from 'react';
import {Redirect,Link} from 'react-router-dom';
import Button from '../components/common/Button';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CreditCardInput from 'react-credit-card-input';
import Card from "react-credit-cards";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginTop:'50px',
    marginBottom:'20px',
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
    paddingBottom:"30px"
  },
  inputs: {
    width: "100%",
    padding:"10px",
    marginBottom: "20px",
    height: "60px",
    borderRadius:"30px"
  },
 
}));
function Register() {
  const classes = useStyles();
//   const {isAuthenticated}=user;
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    number:""
  })

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=async ()=>{
    const {name,email,password}=formData;
  }
  function handleCardNumberChange(e) {
      setCardNumber(e.target.value);
  }
//   function handleCardExpiryChange(e) {
//       setExpiry(e.target.value);
//   }
  
  const [value,setValue]=useState();
  const [cardNumber,setCardNumber]=useState();
  const [expiry,setExpiry]=useState();
  const [cvc,setCvc]=useState();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h1 className={classes.heading}>Register</h1>
        <form className={classes.form} >
          <input
            type="text"
            name="name"
            placeholder="name"
            className={classes.inputs}
            onChange={(e)=>handleChange(e)}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="email"
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
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            className={classes.inputs}
            onChange={(e)=>handleChange(e)}
            required
          />   
          <Grid container>
            <Grid item xs={6}>
                <Card
                number="1234567894223343"
                name="Jigar Shah"
                expiry="27/22"
                cvc=""
                focused=""
              />
            </Grid>
            <Grid item xs={6} style={{marginTop:"50px"}}>
                <CreditCardInput
                cardNumberInputProps={{ value: cardNumber, onChange: handleCardNumberChange }}
                // cardExpiryInputProps={{ value: expiry, onChange: handleCardExpiryChange }}
                // cardCVCInputProps={{ value: cvc, onChange: handleCardCVCChange }}
                fieldClassName="input"
                className={classes.inputs}
                />
            </Grid>
          </Grid>
           <div style={{marginTop:'40px'}}></div>
        </form>
        <Button buttonText="Register" onClick={handleSubmit} />
      </div>
    </React.Fragment>
  );
}

export default Register;