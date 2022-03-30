import React from 'react';
import Link from 'next/link';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
const ProductCart = ({ product }) => {
    console.log(product)
    if (product.order_status){ // when products are pulled from order_list
        return (
            <div className="ps-product--cart">
                <div className="ps-product__thumbnail">
                    {StrapiProductThumbnail(product)} 
                </div>
                {}
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.product.item.id}`}>
                        <a className="ps-product__title">{product.product.item.title}</a>
                    </Link>
                </div>
            </div>
        );
        
    }

    else {
        return (
            <div className="ps-product--cart">
                <div className="ps-product__thumbnail">
                    {StrapiProductThumbnail(product)}
                </div>
                {}
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.item.id}`}>
                        <a className="ps-product__title">{product.item.title}</a>
                    </Link>
                </div>
            </div>
        );
    }

};

export default ProductCart;
