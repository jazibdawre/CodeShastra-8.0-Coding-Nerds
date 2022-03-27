import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Recommend from '../components/Dashboard/Recommend'
import Footer from '../components/common/footer'



function Dashboard() {
  return (
    <>
       <Navbar/>
       <h3 style={{color:"orange",margin:'20px'}}>Recommended</h3>
       <Recommend type="1"/>
       <h3 style={{color:"orange",margin:'20px'}}>Expiring Soon</h3>
       <Recommend type="2"/>
       <div style={{marginTop:"20px"}}></div>
       <h3 style={{color:"orange",margin:'20px'}}>Bank Offers</h3>
       <Recommend type="3"/>
       <Footer/>
    </>
  )
}

export default Dashboard