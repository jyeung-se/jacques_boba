import { React, useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Gallery.css';


const galleryImages = [ images.goldboba, images.redboba, images.greenboba, images.pinkboba ]

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if(direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollRight += 300
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Photo gallery place holder text and description etc here.</p>
        <button type='button' className='custom__button'>Reveal More</button>
      </div>

      <div className='app_gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images flex__center' key={`gallery_image${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={( )=> scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={( )=> scroll('right')} />
        </div>
      </div>
    </div>
  )

}

export default Gallery;
