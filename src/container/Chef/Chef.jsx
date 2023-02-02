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
      <SubHeading title="Sir Jacques's Word" />
      <h1 className='headtext__cormorant'>The Boba Way</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Placeholder for Sir Jacques's quote to clients and customers here</p>
        </div>
        <p className='p__opensans'>Additional Sir Jacques's description or paragraph bio here. Additional Sir Jacques's description or paragraph bio here. Additional Sir Jacques's description or paragraph bio here.</p>
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
