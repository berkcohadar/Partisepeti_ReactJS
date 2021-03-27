import React from 'react';
import Link from 'next/link';
import {
    StrapiProductBadge,
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';

import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import Rating from '~/components/elements/Rating';

const ProductSimple = ({ product }) => {
    return (
        <div className="ps-product ps-product--simple">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
                {StrapiProductBadge(product)}
                <ModuleProductActions />
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    <Link href="/product/[pid]">
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating value={product.rating}  />
                        <span>{product.rating }</span>
                    </div>
                    {StrapiProductPrice(product)}
                </div>
            </div>
        </div>
    );
};

export default ProductSimple;
