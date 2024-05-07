import React from 'react'
import './insta.scss'
import InstagramIcon from '@mui/icons-material/Instagram';

//import images
import LOGO from '../../images/logo.png'


import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

//import data fro insta
import { insta } from '../../data';
export default function Insta() {
  return (
    <div className='insta'>
       
        <div className='container'>
            <div className='myhead'>
              <h2>Follow Me <br/><i>On Instagram</i></h2>
            </div>
            
           <div className='top'>
             <div className='info'>
                <img src={LOGO}></img>
                <span>onetime_click</span>
             </div>

             <a href="https://www.instagram.com/onetime_click/" target='_blank'><InstagramIcon></InstagramIcon> <span>FOLLOW</span></a>
           </div>

           <div className='posts'>
            
              <div className='itemContainer'>


              {
                insta.map((item,i)=>(

                <a key={i} href={item.link} target='_blank'>
                 <div className='box'>
                  <img src={item.img} alt=''></img>
                  <div className='icon'>
                    <RemoveRedEyeIcon className='eye'></RemoveRedEyeIcon>
                  </div>
                 </div>
                </a>
                   
                ))
              }

              </div> 
           </div>
           <div className='button'>
              <a href='https://www.instagram.com/onetime_click/' target='_blank'>SEE ALL</a>
           </div>
        </div>
    </div>
  )
}
