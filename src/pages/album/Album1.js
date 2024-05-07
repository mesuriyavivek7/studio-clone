import React from 'react'
import './album.scss'

import {  albums } from '../../data'
import { useLocation } from 'react-router-dom'
 

export default function Album1() {

  let fetchLocation=useLocation().pathname
  let location=fetchLocation.split("/")[2]
  let album=null
  if(location==="1"){
      album=albums.album1
  }else if(location==="2"){
      album=albums.album2
  }else if(location==="3"){
      album=albums.album3
  }else if(location==="A"){
      album=albums.albumA
  }else if(location==="B"){
      album=albums.albumB
  }else if(location==="C"){
      album=albums.albumC
  }


  return (
    <div className='album'>
         <div className='container'>
             <div className='heading'>
                 <h2><i>{album.head}</i></h2>
                 <h2>{album.desc}</h2>
             </div>
             <div className='gallery'>
               <div className='item'>
                  {
                    album.row1.map((img,i)=>(
                      <img key={i} src={img} alt=''></img>
                    ))
                  }
               </div>
               <div className='item'>
                  {
                    album.row2.map((img,i)=>(
                      <img key={i} src={img} alt=''></img>
                    ))
                  }
               </div>
               <div className='item'>
                  {
                    album.row3.map((img,i)=>(
                      <img key={i} src={img} alt=''></img>
                    ))
                  }
               </div>
             </div>
         </div>
    </div>
  )
}
