import React from 'react'

import './album.scss'

//import images

import PIC1 from '../../images/album-1-pic1.jpg'
import PIC2 from '../../images/album-1-pic2.jpg'
import PIC3 from '../../images/album-1-pic3.jpg'
import PIC4 from '../../images/album-1-pic4.jpg'
import PIC5 from '../../images/album-1-pic5.jpg'
import PIC6 from '../../images/album-1-pic6.jpg'
import PIC7 from '../../images/album-1-pic7.jpg'
import PIC8 from '../../images/album-1-pic8.jpg'
import PIC9 from '../../images/album-1-pic9.jpg'
import PIC10 from '../../images/album-1-pic10.jpg'
import PIC11 from '../../images/album-1-pic11.jpg'
import PIC12 from '../../images/album-1-pic12.jpg'
import PIC13 from '../../images/album-1-pic13.jpg'
import PIC14 from '../../images/album-1-pic14.jpg'
import PIC15 from '../../images/album-1-pic15.jpg'
import PIC16 from '../../images/album-1-pic16.jpg'



export default function AlbumC() {
  return (
    <div className='album'>
         <div className='container'>
             <div className='heading'>
                 <h2><i>Pinank & Isha</i></h2>
                 <h2>Royal Wedding</h2>
             </div>
             <div className='gallery'>
               <div className='item'>
                  <img src={PIC1}></img>
                  <img src={PIC2}></img>
                  <img src={PIC3}></img>
                  <img src={PIC4}></img>
                  <img src={PIC5}></img>
                  <img src={PIC6}></img>
               </div>
               <div className='item'>
                  <img src={PIC7}></img>
                  <img src={PIC8}></img>
                  <img src={PIC9}></img>
                  <img src={PIC10}></img>
                  <img src={PIC11}></img>
               </div>
               <div className='item'>
                  <img src={PIC12}></img>
                  <img src={PIC13}></img>
                  <img src={PIC14}></img>
                  <img src={PIC15}></img>
                  <img src={PIC16}></img>
               </div>
             </div>
         </div>
    </div>
  )
}
