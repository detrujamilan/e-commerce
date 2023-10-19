import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Images } from '../../dummyData/DummyData';

const Carousel = () => {

    const items = Images.map((img) => <img src={img.image} alt='image' className='w-full h-[40rem]' />)

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    )
};

export default Carousel;