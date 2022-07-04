import React from 'react';
import Link from 'next/link';
import Rating from '../Rating';

import {
    StrapiProductBadge,
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';

import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const Product = ({ product }) => {
    // Views
    const priceView = StrapiProductPrice(product);
    const thumbnailImage = StrapiProductThumbnail(product);
    const badgeView = StrapiProductBadge(product);
    return (
        <div className="ps-product ps-carousel-item">
            <div className="ps-product__thumbnail">
                {thumbnailImage}
                {badgeView}
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <Link href="/alisveris">
                    <a className="ps-product__vendor">{product.brand}</a>
                </Link>
                <div className="ps-product__content">
                    <Link href="/urun-detayi/[pid]" as={`/urun-detayi/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating value={product.rating}  />
                        <span>{product.rating}</span>
                        {/* +" |    "+product.rate_counter+" Oy" */}
                    </div>
                    {priceView}
                </div>
                <div className="ps-product__content hover">

                </div>
            </div>
        </div>
    );
};

export default Product;
