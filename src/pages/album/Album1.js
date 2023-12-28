import React from 'react'
import './album.scss'

import { album1 } from '../../data'


 

export default function Album1() {
  return (
    <div className='album'>
         <div className='container'>
             <div className='heading'>
                 <h2><i>{album1.head}</i></h2>
                 <h2>{album1.desc}</h2>
             </div>
             <div className='gallery'>
               <div className='item'>
                  {
                    album1.row1.map((img)=>(
                      <img src={img}></img>
                    ))
                  }
               </div>
               <div className='item'>
                  {
                    album1.row2.map((img)=>(
                      <img src={img}></img>
                    ))
                  }
               </div>
               <div className='item'>
                  {
                    album1.row3.map((img)=>(
                      <img src={img}></img>
                    ))
                  }
               </div>
             </div>
         </div>
    </div>
  )
}
