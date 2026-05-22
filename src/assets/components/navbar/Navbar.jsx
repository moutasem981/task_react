import React from 'react'
import { Link } from 'react-router';
import style from './nav.module.css';

export default function Navbar() {
  return (
    <>
    <div className={style.navbar}>
    <Link to="/">Home</Link>
    <Link to="/subscription">Subscription</Link>
    <Link to="/team">woh are we</Link>
    </div>
    </>
  )
}
