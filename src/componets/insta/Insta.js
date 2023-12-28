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
            
              <div className='item'>
                <a href={insta[0].link} target='_blank'>
                <div className='box'>
                 <img src={insta[0].img}></img>
                 <div className='icon'>
                   <RemoveRedEyeIcon className='eye'></RemoveRedEyeIcon>
                 </div>
                </div>
                </a>
              
               <a href={insta[1].link} target='_blank'>
                <div className='box'>
                 <img src={insta[1].img}></img>
                 <div className='icon'>
                   <RemoveRedEyeIcon className='eye'></RemoveRedEyeIcon>
                 </div>
                </div>
              </a>

              <a href={insta[2].link} target='_blank'>
                <div className='box'>
                 <img src={insta[2].img}></img>
                 <div className='icon'>
                   <RemoveRedEyeIcon className='eye'></RemoveRedEyeIcon>
                 </div>
                </div>
              </a>
              </div>
              <div className='item'>
                 <a href={insta[3].link} target='_blank'>
                 <div className='box'>
                 <img src={insta[3].img}></img>
                 <div className='icon'>
                   <RemoveRedEyeIcon className='eye'></RemoveRedEyeIcon>
                 </div>
                 </div>
                </a>

                <a href={insta[4].link} target='_blank'>
                <div className='box'>
                 <img src={insta[4].img}></img>
                 <div className='icon'>
                   <RemoveRedEyeIcon className='eye'></RemoveRedEyeIcon>
                 </div>
                </div>
                </a>

                 <a href={insta[5].link} target='_blank'>
                  <div className='box'>
                  <img src={insta[5].img}></img>
                  <div className='icon'>
                    <RemoveRedEyeIcon className='eye'></RemoveRedEyeIcon>
                  </div>
                  </div>
                 </a>
              </div> 
           </div>
           <div className='button'>
              <a href='https://www.instagram.com/onetime_click/' target='_blank'>SEE ALL</a>
           </div>
        </div>
    </div>
  )
}
