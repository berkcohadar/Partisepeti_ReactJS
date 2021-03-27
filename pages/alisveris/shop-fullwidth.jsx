import React from 'react';
import ContainerShop from '~/components/layouts/ContainerShop';
import ShopBanner from '~/components/partials/shop/ShopBanner';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import ShopCategories from '~/components/partials/shop/ShopCategories';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopItems from '~/components/partials/shop/ShopItems';
import ProductGroupByCarousel from '~/components/partials/product/ProductGroupByCarousel';

const ShopFullwidthPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Shop layout fullwidth',
        },
    ];
    return (
        <ContainerShop title="Shop layout fullwidth">
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <ShopBanner />
                    <ShopBrands />
                    <ShopCategories />
                    <ProductGroupByCarousel
                        layout="fullwidth"
                        collectionSlug="shop-best-seller-items"
                        title="Best Sale Items"
                    />
                    <ProductGroupByCarousel
                        layout="fullwidth"
                        collectionSlug="shop-recommend-items"
                        title="Recommended Items"
                    />
                    <ShopItems columns={6} pageSize={18} />
                </div>
            </div>
        </ContainerShop>
    );
};
export default ShopFullwidthPage;
