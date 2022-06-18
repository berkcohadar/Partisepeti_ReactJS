import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';
import MediaRepository from '~/repositories/MediaRepository';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const HomeDefaultBanner = () => {
    const [banner, setBanner] = useState(0);
    const [bannerItems, setBannerItems] = useState(null);
    const [interval, handleInterval] = useState(0);

    async function getBannerItems() {
        const myWindow = await window;
        const responseData = await MediaRepository.getCarousels(myWindow)
        if (responseData.length) {
            setBannerItems(responseData);
        }
    }

    const handleOnMouseOver = () => {clearInterval(interval);};
    const handleOnMouseOut= () => { handleInterval(setInterval(nextSlide, 4000)); };

    const prevSlide = () => {
        const lastIndex = bannerItems.length - 1;
        setBanner(banner => {
            return banner === 0 ? lastIndex : banner - 1;
        });
    }

    const nextSlide = () => {
        const lastIndex = bannerItems.length - 1;
        setBanner(banner => {
            return banner === lastIndex ? 0 : banner + 1;
        });
    }

    useEffect(() => {
        getBannerItems();
        // handleInterval(setInterval(nextSlide, 4000));
        // return () => clearInterval(interval);
    }, []);

    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    let mainCarouselView;

    if (bannerItems) {
        const carousels = bannerItems.map((item) => (
            <div className="slide-item" key={item.order}>
                <Link href="/alisveris">
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            backgroundImage: `url(${item.image_url})`,
                        }}
                    />
                </Link>
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel">
                {carousels}
            </Slider>
        );
    }
    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container" style={{ display: 'block' }}>
                <div className="CampaignDiv">
                    {bannerItems?bannerItems.map((slide, index) => {
                        return (
                                <div
                                className={banner == index ? "CampaignItem active":"CampaignItem"}
                                key={index}
                                    onClick={() => setBanner(index)}>
                                    <div className="CampaignItemImage"
                                    id={index}
                                    style={{
                                        backgroundImage:`url(${slide.image_url})`
                                    }}>
                                        <p>{slide.title}</p>
                                    </div>
                                </div>   
                        );
                    }):null}
                </div>
                <section className="home-new-slider">
                    {bannerItems?bannerItems.map((slide, index) => {
                        return (
                            <div
                                className={
                                    index === banner ? 'home-new-slide active' : 'home-new-slide'
                                }
                                key={index}>
                                {index === banner && (
                                    <img src={bannerItems[banner].image_url} alt={bannerItems[banner].description} />
                                )}
                                <section><p>{slide.button_text}</p> <p className='slider--title'>{slide.button_text}</p> </section>
                            </div>
                        );
                    }):null}
                </section>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;