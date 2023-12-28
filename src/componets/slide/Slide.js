import React, { Children } from 'react'

import './slide.scss'

import Slider from 'infinite-react-carousel';



export default function Slide({children,slidesToShow,arrowScroll}) {
  return (
    <div className='slide'>
        
        <div className='container'>
            <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
               {children}
            </Slider>
        </div>
    </div>
  )
}
