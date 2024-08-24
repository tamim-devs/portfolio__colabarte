import React from 'react'
import Navber from './Navber'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout