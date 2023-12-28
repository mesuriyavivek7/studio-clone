import React from 'react'

import './review.scss'

export default function Review({item}) {
  return (
    <div className='Review'>
        <div className='left'>
          <img src={item.img}></img>
        </div>
        <div className="right">
           <h2 className='head'>{item.head}</h2>
           <p className='para'>{item.para}</p>
           <span className='name'>{item.name}</span>
        </div>
    </div>
  )
}
