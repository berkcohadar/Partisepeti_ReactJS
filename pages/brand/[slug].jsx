import React, { useEffect, useState } from 'react';
import ContainerShop from '~/components/layouts/ContainerShop';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import ProductRepository from '~/repositories/ProductRepository';
import { useRouter } from 'next/router';
import ProductItems from '~/components/partials/product/ProductItems';

const ProductByBrandScreen = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const [brand, setCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getCategry() {
        setLoading(true);
        if (slug) {
            const responseData = await ProductRepository.getProductsByBrand(
                slug
            );
            if (responseData) {
                setCategory(responseData);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        } else {
            await Router.push("/alisveris");
        }
    }

    useEffect(() => {
        getCategry();
    }, [slug]);

    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/',
        },
        {
            text: brand ? brand.name : 'Product brand',
        },
    ];

    //Views
    let productItemsViews;
    if (!loading) {
        if (brand && brand.products.length > 0) {
            productItemsViews = (
                <ProductItems columns={4} products={brand.products} />
            );
        } else {
            productItemsViews = <p>No Product found</p>;
        }
    } else {
        productItemsViews = <p>Loading...</p>;
    }

    return (
        <ContainerShop title={brand ? brand.name : 'Brand'} boxed={true}>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <div className="ps-layout--shop ps-shop--category">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopBrands />
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right">
                            <h3 className="ps-shop__heading">
                                Brand: {brand && brand.name}
                            </h3>
                            {productItemsViews}
                        </div>
                    </div>
                </div>
            </div>
        </ContainerShop>
    );
};
export default ProductByBrandScreen;
