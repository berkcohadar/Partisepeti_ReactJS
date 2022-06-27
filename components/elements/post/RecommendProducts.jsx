import React, { Component } from 'react';
import Slider from 'react-slick';
import Product from '../products/Product';
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';

class RecommendProducts extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };
        return (
            <Slider {...carouselSetting} className="ps-carousel outside">
            </Slider>
        );
    }
}

export default RecommendProducts;
