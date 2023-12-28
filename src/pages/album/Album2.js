import React from 'react'

import './album.scss'



import { album2 } from '../../data'

export default function Album2() {
  return (
    <div className='album'>
         <div className='container'>
             <div className='heading'>
                 <h2><i>{album2.head}</i></h2>
                 <h2>{album2.desc}</h2>
             </div>
             <div className='gallery'>
               <div className='item'>
                 {
                  album2.row1.map((img)=>(
                   <img src={img}></img>
                  ))
                 }
               </div>
               <div className='item'>
                 {
                  album2.row2.map((img)=>(
                    <img src={img}></img>
                  ))
                 }
               </div>
               <div className='item'>
                  {
                    album2.row2.map((img)=>(
                      <img src={img}></img>
                    ))
                  }
               </div>
             </div>
         </div>
    </div>
  )
}
