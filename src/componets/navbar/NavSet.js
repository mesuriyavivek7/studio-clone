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
  //code for mobile view
  let mobileview=(window.innerWidth<=768)?true:false
  const [mobile,setMobile]=useState(mobileview)
  const [menuOpen,setMenuOpen]=useState(false)


  const handleMobile=()=>{
    if(window.innerWidth<=768){
      setMobile(true)
    }else{
      setMobile(false)
    }
 }
  
  useEffect(()=>{
    window.addEventListener("resize",handleMobile)
    return ()=>{
      window.removeEventListener("resize",handleMobile)
    }
  },[])

  return (
    <div className='navbar'>
        
             <div className='logo'>
               <Link to='/'><img src={LOGO}></img></Link>
             </div>
             
 
            {
              (mobile===true)&&
                (
                 <div className='bars'>
                 {
                  (menuOpen===true)?
                  (<CloseIcon className='icons' onClick={()=>setMenuOpen(!menuOpen)}></CloseIcon>):
                  (<MenuIcon className='icons' onClick={()=>setMenuOpen(!menuOpen)}></MenuIcon>)
                 }
                </div>
               )
            }

            {
              (mobile===false)?(
                <div className='menu'>
                  <Link className='link' to='/about'>About</Link>
                  <Link className='link' to='/recentwork'>Recent Work</Link>
                  <Link className='link' to='/youtube'>YT Channel</Link>
                  <Link className='link' to='/contact'>Contact</Link>
                </div>
              ):((menuOpen===true)&&(
                <div className='menu'>
                  <Link className='link' to='/about'>About</Link>
                  <Link className='link' to='/recentwork'>Recent Work</Link>
                  <Link className='link' to='/youtube'>YT Channel</Link>
                  <Link className='link' to='/contact'>Contact</Link>
                </div>
              ))
               
            }
            

             

       
    </div>
  )
}
