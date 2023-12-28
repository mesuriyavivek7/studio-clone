import React from 'react'

import './recentwork.scss'

import Work1 from '../../images/work1.jpg'
import Work2 from '../../images/work2.jpg'
import Work3 from '../../images/work3.jpg'

import { Link } from 'react-router-dom'
export default function RecentWork() {
  return (
    <div className='recentwork'>
        <div className='container'>
            <div className='head'>
                <h2>Recent Work</h2>
            </div>
            
            <div className='photobox-same'>
                <div className='left'>
                    <h2>Romantic Pre-Wedding</h2>
                    <span>@ ladakh</span>
                    <p>Every couple has a dream to visit romantic places with his/her loved ones and get click beautifully. </p>
                    <p>One Time Click is the best agency to take beautiful and romantic pre-wedding photographs.</p>
                    <Link to='/album-A'><button>See Album</button></Link>
                </div>
                <div className='right'>
                   <img src={Work1} alt='image1'></img>
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
                   <Link to="/album-B"><button>See Album</button></Link>
                </div>
            </div>

            <div className='photobox-same'>
                <div className='left'>
                    <h2>Intimate Wedding</h2>
                    <span>Prayag & Tithi</span>
                    <p>A wedding Event is the best intimate moment between families. </p>
                    <p>Team of Nakshi Photography are experts to click perfect events and make it more intimate and beautiful</p>
                    <Link to="/album-C"><button>See Album</button></Link>
                </div>
                <div className='right'>
                   <img src={Work2} alt='image3'></img>
                </div>
            </div> 
        </div>
    </div>
  )
}
