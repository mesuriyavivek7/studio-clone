import React from 'react'

import Work from '../../componets/work/Work'
import ReachMe from '../../componets/reachme/ReachMe'
//import video
import Home_BG from '../../images/home-bg.mov'
import Review from '../../componets/review/Review'
import Slide from '../../componets/slide/Slide'
import Insta from '../../componets/insta/Insta'
import { reviews } from '../../data'
import { Link } from 'react-router-dom'
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
       <div className='features'>
            <video src={Home_BG} autoPlay loop muted></video>
            <div className='quotes'>
              <h2>Capture Your Memorable Moments</h2>
              <Link><button>Book Now</button></Link>
            </div>
            <div className='overlap'></div>
       </div>
       <Work></Work>
       <div className='review-slider'>
         <div className='myhead'>
             <h2>Loving <span>Words</span> </h2>
         </div>
         <Slide slidesToShow={1} arrowsScroll={1}>
          {
            reviews.map((review)=>(
              <Review item={review} key={review.id}></Review>
            ))
          }
         </Slide>
       </div>
       <ReachMe></ReachMe>
       <Insta></Insta>

    </div>
    
  )
}
