import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.J} alt='g letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.ribbonstraight} alt='about_ribbon' className='ribbonstraight__img' />
        <p className='p__opensans'>Boba Master who has explored the world's finest and uniqueness to bring you an untasted experience</p>
        <button type='button' className='custom__button'>Reveal More</button>
      </div>

      <div className='app__aboutus-content_space flex__center'>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.ribbonstraight} alt='about_ribbon' className='ribbonstraight__img' />
        <p className='p__opensans'>Boba Master who has explored the world's finest and uniqueness to bring you an untasted experience</p>
        <button type='button' className='custom__button'>Reveal More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
