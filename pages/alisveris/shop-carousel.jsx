import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContainerShop from '~/components/layouts/ContainerShop';
import { getCollections } from '~/store/collection/action';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopCarouselBanner from '~/components/partials/shop/ShopCarouselBanner';
import ShopCarouselTopDeal from '~/components/partials/shop/ShopCarouselTopDeal';
import ProductGroupByCarousel from '~/components/partials/product/ProductGroupByCarousel';

const ShopCategoriesPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Shop Carousel',
        },
    ];
    return (
        <ContainerShop title="Shop Carousel" boxed={true}>
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--shop" id="shop-carousel">
                <div className="container">
                    <ShopCarouselBanner />
                    <ShopCarouselTopDeal collectionSlug="shop-top-deals-super-hot-today" />

                    <ProductGroupByCarousel
                        collectionSlug="best-seller-products"
                        title="Best Seller Products"
                    />
                    <ProductGroupByCarousel
                        collectionSlug="new-arrivals-products"
                        title="Best Seller Products"
                    />
                </div>
            </div>
        </ContainerShop>
    );
};

export default ShopCategoriesPage;
