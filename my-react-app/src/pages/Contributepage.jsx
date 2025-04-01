import React from 'react'
import Contribute from '../components/Contribute'
import Footer from '../universal/Footer'

export default function Contributepage() {
  return (
    <div>
        <Navbar/>
        <div className="container-fluid" style={{
            margin:'2rem 0'
        }}><Contribute/>
        </div>
        <Footer/>
    </div>
  )
}
