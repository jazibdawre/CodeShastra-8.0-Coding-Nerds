import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/common/footer'

import Recommend from '../components/Dashboard/Recommend'
import Expiring from '../components/Dashboard/Expiring'
import BankOffer from '../components/Dashboard/BankOffer'


function Dashboard() {
  return (
    <>
       <Navbar/>
       <h3 style={{color:"orange",margin:'20px'}}>Recommended</h3>
       <Recommend type="1"/>
       <div style={{marginTop:"20px"}}></div>
       <br/>
       <h3 style={{color:"orange",margin:'20px'}}>Expiring Soon</h3>
       <Expiring type="2"/>
       <div style={{marginTop:"20px"}}></div>
       <br/>
       <h3 style={{color:"orange",margin:'20px'}}>Bank Offers</h3>
       <BankOffer type="3"/>
       <div style={{marginTop:"20px"}}></div>
       <br/>
       <Footer/>
    </>
  )
}

export default Dashboard