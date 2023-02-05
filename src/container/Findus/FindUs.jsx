import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='~ Get In Touch ~' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Pop In @</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>42 Boba Central, Jersey City, NJ 07302</p>
        <p className='p__opensans'>Phone: (XXX) XXX-BOBA</p>
        <p className='p__opensans'>Phone: (XXX) XXX-8084</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Business Hours</p>
        <p className='p__opensans'>Mon - Fri: 11:00 AM - 7:00 PM</p>
        <p className='p__opensans'>Sat - Sun: 10:00 AM - 5:00 PM</p>
      </div>
      <button className='custom__button' style={{ marginTop: '2rem' }}>Come Visit</button>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.galaxyboba} alt="findus" />
    </div>
  </div>
);

export default FindUs;
