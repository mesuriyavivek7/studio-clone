import React from 'react'

import './youtube.scss'
//import images
import Logo from '../../images/logo.png'


export default function YouTube() {
  return (
    <div className='youtube'>
         <div className='container'>
             <div className='head'>
               <h2>Youtube Channel</h2>
             </div>
             <div className='box'>
               <div className='top'>
                 <div className='info'>
                    <img src={Logo} alt=''></img>

                  <div className='main-text'>
                    <div className='title'>
                       <h2>One Time Click</h2>
                    </div> 
                    <div className='subs'>
                      <span className='ythandle'>@onetimeclick1</span>
                      <span className='subscriber'>2.88k subscribers</span>
                      <span className='no-video'>11 videos</span>
                      <span className='views'>12k views</span>
                    </div>
                  </div>

                 </div>
                 <div className='button'>
                  <a href='https://www.youtube.com/@onetimeclick1'>SUBSCRIBE</a>
                 </div>
               </div>
               <div className='content'>
                  
                    <div className='first-item'>
                    <iframe width="420" height="300" src="https://www.youtube.com/embed/VI9u8Ha9NaY?si=RHDFK3J8Hrl3VkWG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='second-item'>
                    <iframe width="420" height="300" src="https://www.youtube.com/embed/hifKztA6AcU?si=bSzmDj4R1aqwWb-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='third-item'>
                    <iframe width="420" height="300" src="https://www.youtube.com/embed/vKJMhIMvPrY?si=S9MgfHu9kPoaP7MH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  
                  
                    {/* <div className='first-item'>
                       <iframe width="420" height="300" src="https://www.youtube.com/embed/VI9u8Ha9NaY?si=KnVqOaG7nZuGzUvy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='second-item'>
                       <iframe width="420" height="300" src="https://www.youtube.com/embed/VI9u8Ha9NaY?si=KnVqOaG7nZuGzUvy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='third-item'>
                      <iframe width="420" height="300" src="https://www.youtube.com/embed/VI9u8Ha9NaY?si=KnVqOaG7nZuGzUvy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div> */}
                  

               </div>
                  <div className='button'>
                    <a href='https://youtube.com/@onetimeclick1?si=mvlIJpe8kJmwyq4N' target='_blank'>View Channel</a>
                  </div>

             </div>
         </div>
    </div>
  )
}
