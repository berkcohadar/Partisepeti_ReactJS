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
    
    const handleOnMouseOver = () => {handleMouse(0);clearInterval(interval);};
    const handleOnMouseOut= () => { handleInterval(setInterval(changeSlide, 5000)); };
    
    useEffect(() => {
        console.log(mouse)
        if(mouse) {
            handleInterval(setInterval(changeSlide, 5000));
            return () => clearInterval(interval);
        }
    }, []);
    
    if (type === 'fullwidth') {
        return (
            <Slider
                ref={slider => sliderRef.current = slider}
                {...carouselFullwidth}
                infinite={products.length > 7 ? true : false}
                className='ps-carousel outside'>
                {products.map((item) => (
                    <div onMouseEnter={() => handleOnMouseOver()} onMouseLeave={() => handleOnMouseOut()}  key={item.id}>
                        <Product product={item} />
                    </div>
                ))}
            </Slider>
        );
    } else {
        return (
            <Slider
                onMouseEnter={() => handleOnMouseOver()}
                onMouseLeave={() => handleOnMouseOut()}
                ref={slider => sliderRef.current = slider}
                {...carouselStandard}
                infinite={products.length > 5 ? true : false}
                className='ps-carousel outside'>
                {products.map((item) => (
                    <div  key={item.id}>
                        <Product product={item} />
                    </div>
                ))}
            </Slider>
        );
    }
};


