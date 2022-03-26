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

export const registerUser = async(formData) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
    }
    console.log(formData)
    const { data } = await axios.post(
        baseUrl + '/users/signUp', 
        formData, 
        config
    )
    if(data.err){
        console.log(data.err)
    }else{
        console.log("User Register Sucessfully!!")
        localStorage.setItem('userInfo', JSON.stringify(data))
    }
}

export const addUserCard = async(formData) => {
    console.log('Bearer ' + JSON.parse(localStorage.getItem('token')))
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('userInfo')).token
        },
    }
    
    const { data } = await axios.put(
        baseUrl + '/users/cards/add', 
        {cards: [formData]}, 
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