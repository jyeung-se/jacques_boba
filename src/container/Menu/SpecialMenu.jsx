import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Creations that fit your palatte' />
      <h1 className='headtext__cormorant'>Special Collection</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_seasonals flex__center'>
        <p className='app__specialMenu-menu_heading'>Seasonal Boba</p>
        <div className='app__specialMenu-menu-items'>
          {data.seasonals.map((seasonal, index) => (
            <MenuItem key={seasonal.title + index} title={seasonal.title} price={seasonal.price} tags={seasonal.tags} /> 
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.bobamenupic} alt="menu img" />
      </div>

      <div className='app__specialMenu-menu_originals flex__center'>
        <p className='app__specialMenu-menu_heading'>Jacques Original Boba</p>
        <div className='app__specialMenu-menu-items'>
          {data.originals.map((original, index) => (
            <MenuItem key={original.title + index} title={original.title} price={original.price} tags={original.tags} /> 
          ))}
        </div>
      </div>
    </div>
  
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>Reveal More</button>
    </div>
  </div>
);

export default SpecialMenu;
