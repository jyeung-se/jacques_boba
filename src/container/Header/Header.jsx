import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='In search of the new unique flavor' />
      <h1 className='app__header-h1'>Experience the Secrets of an Out of World Boba Experience</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Taste the marvelous and world-class bobas of Jacques</p>
      <button type='button' className='custom__button'>Explore Secrets</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
