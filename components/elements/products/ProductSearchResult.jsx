import React from 'react';
import Link from 'next/link';

import {
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';
import Rating from '~/components/elements/Rating';

const ProductSearchResult = ({ product }) => {
    return (
        <div className="ps-product ps-product--wide ps-product--search-result">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <Link href="/urun-detayi/[pid]" as={`/urun-detayi/${product.id}`}>
                    <a className="ps-product__title">{product.title}</a>
                </Link>
                <div className="ps-product__rating">
                    <Rating value={product.rating}  />
                    <span>{product.rating }</span>
                </div>
                {StrapiProductPrice(product)}
            </div>
        </div>
    );
};
export default ProductSearchResult;
