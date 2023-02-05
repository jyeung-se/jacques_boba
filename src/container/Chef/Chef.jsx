import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chefjy} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Words from the Founder" />
      <h1 className='headtext__cormorant'>The Boba Way</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Always take the road less taken; You'd be surprised how much more there is to see!</p>
        </div>
        <br />
        <p className='p__opensans'>Nobody becomes a master in one day. It takes hard work, REAL hard work, to walk the path of creating your own works of art. I traveled the world to bring its secrets to your mouth.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Jack Yeung</p>
        <p className='p__opensans'>Boba Master & Founder</p>
        <img src={images.signjy} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
