import React, { useState, useRef, useEffect }  from 'react';
import Slider from 'react-slick';
import { carouselFullwidth, carouselStandard } from '~/utilities/carousel-helpers';
import Product from '~/components/elements/products/Product';

export const ProductGroupWithCarousel = ({ products, type = 'normal' }) => {
    const sliderRef = useRef(null);
    const [interval, handleInterval] = useState(0);
    const [mouse, handleMouse] = useState(1);

    const changeSlide = () => {
        try{
            sliderRef.current.slickNext();
        }
        catch(err){
            console.log(err)
        }
    };
    
    
    if (type === 'fullwidth') {
        return (
            <Slider
                ref={slider => sliderRef.current = slider}
                {...carouselFullwidth}
                infinite={products.length > 7 ? true : false}
                className='ps-carousel outside'
                autoplay={true}>
                {products.map((item) => (
                    <div key={item.id}>
                        <Product product={item} />
                    </div>
                ))}
            </Slider>
        );
    } else {
        return (
            <Slider
                ref={slider => sliderRef.current = slider}
                {...carouselStandard}
                infinite={products.length > 5 ? true : false}
                className='ps-carousel outside'
                autoplay={true}>
                {products.map((item) => (
                    <div  key={item.id}>
                        <Product product={item} />
                    </div>
                ))}
            </Slider>
        );
    }
};


