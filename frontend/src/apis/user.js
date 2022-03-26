import axios from 'axios';  
import { baseUrl } from '../config';

export const loginEmail = async(formData) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
    }
    const obj = { username: formData.email, password: formData.password }
    console.log(obj)
    const { data } = await axios.post(
        baseUrl + '/users/login/email', 
        obj, 
        config
    )
    if(data.err){
        console.log(data.err)
    }else{
        console.log("User Logged In Sucessfully!!")
        localStorage.setItem('userInfo', JSON.stringify(data))
    }
}

export const registerEmail = async(formData) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
    }
    const obj = { 
        phoneNo: formData.phoneNo,
        fname: formData.fname,
        lname: formData.lname,
        username: formData.username,
        password: formData.username
    }
    console.log(obj)
    const { data } = await axios.post(
        baseUrl + '/users/signUp', 
        obj, 
        config
    )
    if(data.err){
        console.log(data.err)
    }else{
        console.log("User Logged In Sucessfully!!")
    }
}

export const addUserCard = async(formData) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
    }
    const obj = { 
        bankName: "ICICI",
        cardNumber: "",
        type: "Debit"
    }
    console.log(obj)
    const { data } = await axios.put(
        baseUrl + '/users/cards/add', 
        obj, 
        config
    )
    if(data.err){
        console.log(data.err)
    }else{
        console.log("Card Added Sucessfully!!")
    }
}

// fetch(baseUrl + "users/login" , {
//     method: "POST",
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         username: credentials.username,
//         password: credentials.password
//     })
// })
// .then(resp => resp.json())
// .then(resp => {
//     if(resp.err){
//         handleErr(resp)
//     }else{
//         handleSuccess(resp)
//     }
// })