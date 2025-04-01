import React from 'react'
import Navbar from '../universal/Navbar'
import Footer from '../universal/Footer'

export default function TestPage() {
  return (
    <div>
        <Navbar/>
        <section className="container-fluid h-[100vh] flex justify-center items-center">
            Hello This is the Questions Test Page
        </section>
        <Footer/>
    </div>
  )
}
