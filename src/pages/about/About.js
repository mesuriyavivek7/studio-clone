import React from 'react'
import './about.scss'

import './about.scss'
//import images
import MY from '../../images/my2.jpg'


export default function About() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='head'>
          <h2>About Studio</h2>
        </div>
        <div className='box'>
           <div className='left'>
              <h2><i>Hey i am</i><br/> Feral Darji</h2>
              <p>
               One Click Photography Offer great quality and unmatched shooting experience for photography.
               When it comes to capturing the precious moments of your life, you need the best photographers in Mahesana.
              </p>
              <p>
               At One Click Photography, we have a team of experienced and creative professionals who capture the best memories for you. 
              </p>
           </div>
           <div className='right'>
             <img src={MY}></img>
           </div>
        </div>
      </div>
    </div>
  )
}
