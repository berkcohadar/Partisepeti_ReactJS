import React from 'react';
import ContainerShop from '~/components/layouts/ContainerShop';
import BreadCrumb from '~/components/elements/BreadCrumb';
import CatalogTop from '~/components/partials/shop/CatalogTop';
import ConsummerElectronics from '~/components/partials/shop/categories-box/ConsummerElectronics';
import MoreCategories from '~/components/partials/shop/MoreCategories';
import GardenAndKitchen from '~/components/partials/shop/categories-box/GardenAndKitchen';
import ClothingAndApparel from '~/components/partials/shop/categories-box/ClothingAndApparel';
import {
    clothingCollection,
    electronicCollection,
    kitchenCollection,
    categories,
} from '~/public/static/data/shopCategories';

const ShopCategoriesPage = () => {

    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Shop Default',
        },
    ];
    return (
        <ContainerShop title="Shop Categories" boxed={true}>
            <div className="ps-page--shop" id="shop-categories">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <CatalogTop />
                    {/*  <CategoriesBestSeller
                        products={allProducts ? allProducts : []}
                    />
                    <CategoriesRecommendItems
                        products={allProducts ? allProducts : []}
                    />*/}
                    <ConsummerElectronics data={electronicCollection} />
                    <ClothingAndApparel data={clothingCollection} />
                    <GardenAndKitchen data={kitchenCollection} />
                    <MoreCategories data={categories} />
                </div>
            </div>
        </ContainerShop>
    );
};

export default ShopCategoriesPage;
