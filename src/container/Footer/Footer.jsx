import React from 'react';
import { FiFacebook, Fiinstagram, FiTwitter } from 'react-icons/fi'
import { images } from '../../constants'

import { FooterOverlay, Newsletter } from '../../components'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links-contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>42 Boba Central, Jersey City, NJ 07302</p>
        <p className='p__opensans'>(XXX) XXX-BOBA</p>
        <p className='p__opensans'>(XXX) XXX-8084</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.jacqueslogo} alt="footer_logo" />
      </div>
      <div className='app__footer-links_work'>

      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Jacques. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
