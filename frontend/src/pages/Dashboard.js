import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Recommend from '../components/Dashboard/Recommend'
import Footer from '../components/common/footer'



function Dashboard() {
  return (
    <>
       <Navbar/>
       <h3 style={{color:"orange",margin:'20px'}}>Recommended</h3>
       <Recommend/>
       <h3 style={{color:"orange",margin:'20px'}}>Expiring Soon ...</h3>
       <Recommend/>
       <div style={{marginTop:"20px"}}></div>
       <Footer/>
    </>
  )
}

export default Dashboard