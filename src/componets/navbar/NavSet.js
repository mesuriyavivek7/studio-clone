import React from 'react'

import './navbar.scss'
//import images
import LOGO from '../../images/logo.png'
//import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function NavSet() {
  return (
    <div className='navbar'>
         <div className='container'>
             <div className='logo'>
               <Link tp='/'><img src={LOGO}></img></Link>
             </div>
             <div className='menu'>
               <Link className='link' to='/about'>About</Link>
               <Link className='link' to='/recentwork'>Recent Work</Link>
               <Link className='link' to='/youtube'>YT Channel</Link>
               <Link className='link' to='/contact'>Contact</Link>
             </div>
         </div>
    </div>
  )
}
