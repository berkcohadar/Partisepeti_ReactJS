import React from 'react';
import Link from 'next/link';
import { removeItem } from '~/store/cart/action';
import { useDispatch } from 'react-redux';

import {
    StrapiProductBadge,
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';


const ProductOnPayment = ({ product }) => {
    const dispatch = useDispatch();

    const handleRemoveCartItem = (e) => {
        e.preventDefault();
        dispatch(removeItem(product));
    };
    // Views
    const priceView = StrapiProductPrice(product);
    const thumbnailImage = StrapiProductThumbnail(product);
    const badgeView = StrapiProductBadge(product);
    return (
        <div className="ps-product ps-carousel-item">
            <div className="ps-product__thumbnail">
                {thumbnailImage}
                {badgeView}
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveCartItem(e)}>
                        <i className="icon-cross"></i>
                    </a>
                    <Link href="/urun-detayi/[pid]" as={`/urun-detayi/${product.item.id}`}>
                        <a className="ps-product__title">{product.item.title}</a>
                    </Link>
                    {priceView}
                </div>
            </div>
        </div>
    );
};

export default ProductOnPayment;
