import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '~/components/elements/products/Product';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import ProductHorizontal from '~/components/elements/products/ProductHorizontal';

const ShopCarouselTopDeal = ({ collectionSlug }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            collectionSlug,
        );
        if (responseData) {
            setProductItems(responseData.items);
            setTimeout(
                function() {
                    setLoading(false);
                }.bind(this),
                250,
            );
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    // Views
    let productItemView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemView = productItems.map((item) => (
                <div
                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 "
                    key={item.id}>
                    <Product product={item} />
                </div>
            ));
        } else {
            productItemView = <p>No product found.</p>;
        }
    } else {
        productItemView = <p>Loading...</p>;
    }
    return (
        <div className="ps-block--container-hightlight">
            <div className="ps-section__header">
                <h3>Top Deals Super Hot Today</h3>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    {productItemView}
                </div>
            </div>
        </div>
    );
};

export default ShopCarouselTopDeal;
