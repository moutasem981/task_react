import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router'

export default function Mainlayout() {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer/>
    </>
  )
}
