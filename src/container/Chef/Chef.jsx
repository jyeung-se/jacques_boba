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
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>Our Beliefs - <br/> How We Serve </h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Placeholder for chef's quote to clients and customers here</p>
        </div>
        <p className='p__opensans'>Additional chef's description or paragraph bio here. Additional chef's description or paragraph bio here. Additional chef's description or paragraph bio here.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Jack Yeung</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.signjy} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
