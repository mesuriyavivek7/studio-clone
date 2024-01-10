import React, { useEffect, useState } from 'react'

import './navbar.scss'
//import images
import LOGO from '../../images/logo.png'
//import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'

//import mui icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavSet() {
  const [mobileMode,setmobileMode]=useState(false);
  const [bars,setBars]=useState(false);
  
  useEffect(()=>{
    setmobileMode(window.innerWidth<768?true:false)
  })

  return (
    <div className='navbar'>
        
             <div className='logo'>
               <Link to='/'><img src={LOGO}></img></Link>
             </div>
             
 
            {
              (mobileMode===true)&&
                (
                 <div className='bars'>
                 {
                  (bars===true)?
                  (<CloseIcon className='icons' onClick={()=>setBars(!bars)}></CloseIcon>):
                  (<MenuIcon className='icons' onClick={()=>setBars(!bars)}></MenuIcon>)
                 }
                </div>
               )
            }

            {
              (bars===true || mobileMode===false) && (
                <div className='menu'>
                  <Link className='link' to='/about'>About</Link>
                  <Link className='link' to='/recentwork'>Recent Work</Link>
                  <Link className='link' to='/youtube'>YT Channel</Link>
                  <Link className='link' to='/contact'>Contact</Link>
                </div>
              )
               
            }
            

             

       
    </div>
  )
}
