import React from 'react'
import Navbar from '../universal/Navbar'
import Footer from '../universal/Footer'

export default function Resourcepage() {
  return (
    <div>
        <Navbar/>
        <section className='h-[100vh] flex justify-center items-center text-2xl text-blue-500'>Hello This is Resource Section Page</section>
        <Footer/>
    </div>
  )
}
