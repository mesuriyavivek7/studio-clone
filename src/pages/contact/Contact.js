import React from 'react'

import './contact.scss'

//import images
import About from '../../images/about1.jpg'


export default function Contact() {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='box'>
          <div className='left'>
             <div className='head'>
               <h2>Reach Out</h2>
             </div>
             <form action="https://formspree.io/f/xpzgelpp" method="POST">
                <div className='item'>
                   <input type='text' name='name' placeholder='Name *'></input>
                   <input type='email' name='email' placeholder='Email *'></input>
                </div>
                <div className='item'>
                   <select name='photographytype'>
                     <option value=''>Project Type *</option>
                     <option value='wedding'>Wedding</option>
                     <option value='pre-wedding'>Pre-Wedding</option>
                     <option value='baby-shower'>Baby Shower</option>
                     <option value='Engagement'>Engagement Ceremony</option>
                     <option value='other'>Other</option>
                   </select>
                   <input type='text' name='mobileno' placeholder='Phone Number *'></input>
                </div>
                <div className='item'>
                  <textarea type='text' rows='5' name='description' placeholder='Tell us about your photography plan'></textarea>
                </div>
                <div className='item'>
                    <button type='submit'>SUBMIT</button>
                </div>
             </form>
          </div>
          <div className='right'>
              <img src={About}></img>
          </div>
          </div>
       </div>
    </div>
  )
}
