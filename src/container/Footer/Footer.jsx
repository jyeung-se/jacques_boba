import React from 'react';
import { FiFacebook, FiInstagram, Fiinstagram, FiTwitter } from 'react-icons/fi'
import { images } from '../../constants'

import { FooterOverlay, Newsletter } from '../../components'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>42 Boba Central, Jersey City, NJ 07302</p>
        <p className='p__opensans'>(XXX) XXX-BOBA</p>
        <p className='p__opensans'>(XXX) XXX-8084</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.jacqueslogo} alt="footer_logo" />
        <p className='p__opensans'>"You never know what's out there without diving into the unknown."</p>
        <img src={images.goldribbon} alt="goldribbon__img" style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Business Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>11:00 AM - 7:00 PM</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10:00 AM - 5:00 PM</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Jacques. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
