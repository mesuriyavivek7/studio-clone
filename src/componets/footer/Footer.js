import React from 'react'
//import icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './footer.scss'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
         <div className='info'>
           <div className='user'>
             <h2>Feral Darji</h2>
             <p>Wedding Photographer</p>
           </div>
           
           <div className='social'>
              <a className='item' href="https://www.instagram.com/onetime_click/?igshid=NzZlODBkYWE4Ng%3D%3D" target='_blank'>
                <InstagramIcon className='icon' style={{color:"white"}}></InstagramIcon>
                  <span>@onetime_click</span>
              </a>
              
              <a className='item' href='https://www.facebook.com/people/One-Time-Click/100088670538799/?mibextid=ZbWKwL' target='_blank'>
                <FacebookIcon className='icon' style={{color:"white"}}></FacebookIcon>
                <span>FB Page</span>
              </a>
            
              <a className='item' href='https://www.youtube.com/@onetimeclick1/videos'>
                <YouTubeIcon className='icon' style={{color:"white"}}></YouTubeIcon>
                <span>@onetimeclick1</span>
              </a>

           </div>

         </div>
         <div className='desc'>
             <p>One Time Click is photography studio based in Mahesana, Gujarat who's style is candid and inspiring, with a touch of cinematic flair. Experienced in intimate weddings, destination weddings and elopements, Himanshu and His team are available for world travel wherever love may take her.</p>
             <span>@ 2023 by One Time Click , Created By M.V Designer</span>
         </div>
         <div className='locat'>
              <h2>Address</h2>
              <p>
              S-30 JAYANT PLAZA, NEAR BY RAMJUPADI, MODHERA CIRCLE, MEHSANA-384001
              </p>
         </div>
      </div>
    </div>
  )
}
