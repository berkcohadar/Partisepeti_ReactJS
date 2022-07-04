import React from 'react';
import Link from 'next/link';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
import { removeItem } from '~/store/cart/action';
import { useDispatch } from 'react-redux';

const ProductOnCart = ({product}) => {
    const dispatch = useDispatch();

    const handleRemoveCartItem = (e) => {
        e.preventDefault();
        dispatch(removeItem(product));
    };
    if (product.product){
        return (
            <div className="ps-product--cart-mobile" >
                <div className="ps-product__thumbnail">
                    {StrapiProductThumbnail(product)}
                </div>
                <div className="ps-product__content">
                    <a
                        className="ps-product__remove"
                        onClick={(e) => handleRemoveCartItem(e)}>
                        <i className="icon-cross"></i>
                    </a>
                    <Link href="/urun-detayi/[pid]" as={`/urun-detayi/${product.item.id}`}>
                        <a className="ps-product__title">{product.item.title}</a>
                    </Link>
                    <p>
                        <small>
                            ₺{product.product.price} x {product.quantity}
                        </small>
                    </p>
                </div>
            </div>
        );
    }
    else{
        return null
    }
};

export default ProductOnCart;
