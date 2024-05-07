import React from 'react'

import './work.scss'

//import images

import Work1 from '../../images/work1.jpg'
import Work3 from '../../images/work3.jpg'
import Work4 from '../../images/work4.jpg'
import { Link } from 'react-router-dom'

export default function Work() {
  return (
    <div className='mywork'>
            
        <div className='container'>
            <div className='head'>
                <h2>My Work</h2>
            </div>

            <div className='photobox-same'>
                <div className='left'>
                    <h2>Romantic Wedding</h2>
                    <span>Twinkle & Maulik</span>
                    <p>Every couple has a dream to visit romantic places with his/her loved ones and get click beautifully. </p>
                    <p>One Time Click is the best agency to take beautiful and romantic pre-wedding photographs.</p>
                    <Link to='/album1/C'><button>See Album</button></Link>
                </div>
                <div className='right'>
                   <img src={Work4} alt='image1'></img>
                </div>
            </div>
            
            
            
            <div className='photobox-opposite'>
                <div className='left'>
                   <img src={Work3} alt='image2'></img>
                </div>
                <div className='right'>
                   <h2>Beautiful Wedding</h2>
                   <p>Wedding photography is all about capturing beautiful moments of the bride, groom and family.</p>
                   <p>One Time Click Photography is #1 agency that clicks all exclusive moments and makes memories forever.</p>
                   <Link to='/album1/2'><button>See Album</button></Link>
                </div>
            </div>

            <div className='photobox-same'>
                <div className='left'>
                    <h2>Romantic Pre-Wedding</h2>
                    <span>@ ladakh</span>
                    <p>Every couple has a dream to visit romantic places with his/her loved ones and get click beautifully. </p>
                    <p>One Time Click is the best agency to take beautiful and romantic pre-wedding photographs.</p>
                    <Link to='/album1/A'><button>See Album</button></Link>
                </div>
                <div className='right'>
                   <img src={Work1} alt='image1'></img>
                </div>
            </div>

        </div>
    </div>
  )
}
