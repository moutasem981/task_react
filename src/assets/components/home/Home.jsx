import React from 'react'
import { Link } from 'react-router'
import style from './home.module.css'

export default function Home() {
  return (
    <>
    <div className={style.recipes}>
    <Link to="/pizza">pizza</Link>
    <Link to="/mango">mango</Link>
    <Link to="/cake">cake</Link>
    </div>
    </>
  )
}
