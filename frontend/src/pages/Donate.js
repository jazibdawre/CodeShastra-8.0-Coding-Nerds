import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import {useState,useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '../components/common/Button'
import axios from 'axios';
import {useHistory} from 'react-router-dom';


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

export default function Donate() {
    const classes=useStyles();
    const history=useHistory();

    const handleSubmit=async()=>{
        const {Data} = await axios.post('/otp/generateOTP',{
            coupon:text,
            amount:"100",
            phoneNo: "8450978050"
        })
        const {data}=await axios.post(`/sendmail`,{
            email,
            name:"Jigar Shah",
            coupon:text,
            amount:100
        })
        history.push('/dashboard')
        
    }
    const [num,setNum]=useState();
    const [email,setEmail]=useState();
    const [text,setText]=useState();
  return (
    <div style={{color:"white"}}>
        <Navbar/>
        <h4 style={{color:"orange",textAlign:'center',marginBottom:"20px"}}> Donate coupon to your near and dear one</h4>
        <center>
            <form className={classes.form} >
            <input
                type="text"
                name="name"
                placeholder="Phone"
                className={classes.inputs}
                onChange={(e)=>setNum(e.target.val)}
                required
            />
            <input
                type="text"
                name="email"
                placeholder="email"
                className={classes.inputs}
                onChange={(e)=>setEmail(e.target.val)}
                required
            />
            <label for="cars">Choose a coupon:</label>
                    <select name="cars" id="cars" form="carform" className={classes.inputs} onChange={(e)=>setText(e.target.value)}>
                        <option value="flipkart x-20">flipkart x-20</option>
                        <option value="Amazon S-20">Amazon S-20</option>
                        <option value="Snap Deal 1819">Snap Deal 1819</option>
                        <option value="Walmart">Walmart</option>
                    </select>
            
            <div style={{marginTop:'40px'}}></div>
            <center>
                <Button buttonText="Send" onClick={handleSubmit}/>
 
            </center>
            </form>
             
        </center>
    </div>
  )
}
