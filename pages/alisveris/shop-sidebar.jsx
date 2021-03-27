import React from 'react';
import ContainerShop from '~/components/layouts/ContainerShop';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import ShopItems from '~/components/partials/shop/ShopItems';
import ProductGroupByCarousel from '~/components/partials/product/ProductGroupByCarousel';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopSidebarBanner from '~/components/partials/shop/ShopSidebarBanner';

const ShopSidebarPage = () => {


    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Shop Sidebar',
        },
    ];
    return (
        <ContainerShop title="Shop Sidebar" boxed={true}>
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--shop" id="shop-sidebar">
                <div className="container">
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopBrands />
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right">
                            <div className="ps-page__header">
                                <h1>Shop Sidebar</h1>
                                <ShopSidebarBanner />
                            </div>
                            <ProductGroupByCarousel
                                collectionSlug="shop-best-seller-items"
                                title="Best Sale Items"
                            />
                            <ShopItems columns={4} pageSize={12} />
                        </div>
                    </div>
                </div>
            </div>
        </ContainerShop>
    );
};

export default ShopSidebarPage;
