import React from 'react';
import Link from 'next/link';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
import { removeItem } from '~/store/cart/action';
import { useDispatch } from 'react-redux';

const ProductOnCart = ({ product }) => {
    const dispatch = useDispatch();

    const handleRemoveCartItem = (e) => {
        e.preventDefault();
        dispatch(removeItem(product));
    };
    return (
        <div className="ps-product--cart-mobile">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <a
                    className="ps-product__remove"
                    onClick={(e) => handleRemoveCartItem(e)}>
                    <i className="icon-cross"></i>
                </a>
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.title}</a>
                </Link>
                <p>
                    <small>
                        ₺{product.products[0].cart_price} x {product.quantity}
                    </small>
                </p>
            </div>
        </div>
    );
};

export default ProductOnCart;
