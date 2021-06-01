import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';
import MediaRepository from '~/repositories/MediaRepository';
import { baseUrl } from '~/repositories/Repository';
import { getItemBySlug } from '~/utilities/product-helper';
import Promotion from '~/components/elements/media/Promotion';

const HomeDefaultBanner = () => {
    const [bannerItems, setBannerItems] = useState(0);
    const [promotion1, setPromotion1] = useState(null);
    const [promotion2, setPromotion2] = useState(null);
    const [interval, handleInterval] = useState(0);
    async function getBannerItems() {
        const responseData = await MediaRepository.getBannersBySlug(
            'banner-home-fullwidth'
        );
        if (responseData) {
            setBannerItems(responseData);
        }
        // clearInterval(intervalID);
    }

    async function getPromotions() {
        const responseData = await MediaRepository.getPromotionsBySlug(
            'home_fullwidth_promotions'
        );
        if (responseData) {
            setPromotion1(getItemBySlug(responseData, 'main_1'));
            setPromotion2(getItemBySlug(responseData, 'main_2'));
        }
    }
    const handleOnMouseOver = () => {clearInterval(interval);};
    const handleOnMouseOut= () => { handleInterval(setInterval(changeSlide, 4000)); };
    const changeSlide = () => {
        const lastIndex = data.length - 1;
        setBannerItems(bannerItems => {
          return bannerItems === lastIndex ? 0 : bannerItems + 1;
        });
      };

    useEffect(() => {
        getBannerItems();
        getPromotions();
        handleInterval(setInterval(changeSlide, 4000));
        return () => clearInterval(interval);
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

    // Views
    let mainCarouselView;
    // {
    //     id: 0,
    //     url:
    //         'https://images.pexels.com/photos/5422609/pexels-photo-5422609.jpeg',
    //     alt: 'Yilbasi Isik Agac Christmas',
    //     description:'Korkutmaya hazır mısın?'
    // },
    // {
    //     id: 1,
    //     url:
    //         'https://images.pexels.com/photos/5727889/pexels-photo-5727889.jpeg',
    //     alt: 'Sevgililer Gunu Valentines Day Hediye Sürpriz 14 Subat',
    //     description:'Yılbaşını sevdiklerinizle geçirin!'
    // },
    // {
    //     id: 2,
    //     url:
    //         'https://images.pexels.com/photos/6032713/pexels-photo-6032713.jpeg',
    //     alt: 'Yilbasi Isik Agac Christmas',
    //     description:'Ağacınızı süslediniz mi?'
    // },
    // {
    //     id: 3,
    //     url:
    //         'https://images.unsplash.com/photo-1530098403657-0d93d64d087d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZhbGVudGluZXMlMjBkYXl8ZW58MHx8MHw%3D',
    //     alt: 'Yilbasi Isik Agac Christmas',
    //     description:'Folyo balonlarımıza göz attınız mı?'
    // },
    const data = [
        {
            id: 0,
            url:
                'https://images.unsplash.com/photo-1576028133998-dfa6cf1ea901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
            alt: 'Yilbasi Isik Agac Christmas',
            description:'Korkutmaya hazır mısın?'
        },
        {
            id: 1,
            url:
                'https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMGluc3RhZ3JhbSUyMHN0b3J5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1',
            alt: 'Sevgililer Gunu Valentines Day Hediye Sürpriz 14 Subat',
            description:'Yılbaşını sevdiklerinizle geçirin!'
        },
        {
            id: 2,
            url:
                'https://images.pexels.com/photos/5634668/pexels-photo-5634668.jpeg',
            alt: 'Yilbasi Isik Agac Christmas',
            description:'Ağacınızı süslediniz mi?'
        },
        {
            id: 3,
            url:
                'https://images.pexels.com/photos/5635101/pexels-photo-5635101.jpeg',
            alt: 'Yilbasi Isik Agac Christmas',
            description:'Folyo balonlarımıza göz attınız mı?'
        },
        {
            id: 4,
            url:
                'https://images.unsplash.com/photo-1511895654441-f6a0e1db5cbd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fGNocmlzdG1hcyUyMGxpZ2h0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=f                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ',
            alt: 'Yilbasi Isik Agac Christmas',
            description:"Birbirinden güzel ağaç süsleri Partisepeti'nde!"
        },
        {
            id: 5,
            url:
                'https://images.pexels.com/photos/1303080/pexels-photo-1303080.jpeg',
            alt: 'Yilbasi Isik Agac Christmas',
            description:'Yaklaşan bir doğum günü mü var?'
        },
        {
            id: 6,
            url:
                'https://images.unsplash.com/photo-1611142287927-64cede3148da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1',
            alt: 'Yilbasi Isik Agac Christmas',
            description:"Birbirinden güzel balon buketleri Partisepeti'nde"
        },
    ];
    if (data) {
        const carouseItems = data.map((item) => (
            <div className="slide-item" key={item.id}>
                <Link href="/alisveris">
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            backgroundImage: `url(${item.url})`,
                        }}
                    />
                </Link>
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel">
                {carouseItems}
            </Slider>
        );
    }
    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container" style={{ display: 'block' }}>
                <div className="CampaignDiv">
                    {data.map((slide, index) => {
                        return (
                            <div
                              className="CampaignItem"
                                style={
                                  bannerItems == index
                                        ? {
                                              transform: 'scale(1.2)',
                                              boxShadow:
                                                  '0px 0px 15px 0px #1c1a18',
                                          }
                                        : null
                                }>
                                <img
                                    className="CampaignItemImage"
                                    id={index}
                                    onClick={() => setBannerItems(index)}
                                    src={slide.url}></img>{' '}
                            </div>
                        );
                    })}
                </div>
                <section className="home-new-slider">
                    {/* <LeftOutlined className="left-arrow" onClick={prevSlide} />
      <RightOutlined className="right-arrow" onClick={nextSlide} /> */}
                    {data.map((slide, index) => {
                        return (
                            <div
                                // onMouseEnter={() => handleOnMouseOver()}
                                // onMouseLeave={() => handleOnMouseOut()}
                                className={
                                    index === bannerItems ? 'home-new-slide active' : 'home-new-slide'
                                }
                                key={index}>
                                {index === bannerItems && (
                                    <img src={slide.url} alt={slide.alt} />
                                )}
                                <section><p>{slide.description}</p></section>
                            </div>
                        );
                    })}
                    
                </section>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
/*connect(state => state.media)();*/

/* <div className="ps-section__left">{mainCarouselView}</div>
                <div className="ps-section__right">
                    <Promotion
                        link="/alisveris"
                        image={promotion1 ? promotion1.image : null}
                    />
                    <Promotion
                        link="/alisveris"
                        image={promotion2 ? promotion2.image : null}
                    />
                </div> */
