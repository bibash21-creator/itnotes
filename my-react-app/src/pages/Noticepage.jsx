import React from 'react'
import Navbar from '../universal/Navbar'
import Notice from '../components/Notice'
import Footer from '../universal/Footer'
export default function Noticepage() {
  return (
    <> <Navbar/>
    <div className="container-fluid" style={{
        margin: '2rem 0'
    }}>
          <Notice/>
    </div>
  

    <Footer/>
    </>
   
  )
}
