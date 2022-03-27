import axios from 'axios';  
import { baseUrl } from '../config';

export const fetchAllCoupons = async() => {
    if(!localStorage.getItem('userInfo')) return ;
    console.log(JSON.parse(localStorage.getItem('userInfo')).token)
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('userInfo')).token
        },
    }
    const { data } = await axios.get(
        baseUrl + '/users/getAllCoupon/',
        config
    )
    if(data.err){
        console.log(data.err)
    }else{
        console.log(data)
        return data
    }
}