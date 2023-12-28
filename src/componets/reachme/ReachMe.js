import React from 'react'
import './reachme.scss'
import { Link } from 'react-router-dom'

//import  images
//import Reach from '../../images/reachme.jpg'

export default function ReachMe() {
  return (
    <div className='reachme'>
        <div className='container'>
            <div className='left'>
            </div>
            <div className='right'>
                <h2>Let's make your moments as most memorable moment for your life</h2>
                <p>Thinking to book Photographer for your Wedding or Pre-wedding? Let's discuss your requirement and plan together the best day of your life.</p>
                <Link className='link' to='/contact'><button>reach out</button></Link>
            </div>
        </div>
    </div>
  )
}
