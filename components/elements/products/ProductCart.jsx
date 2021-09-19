import React from 'react';
import Link from 'next/link';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
const ProductCart = ({ product }) => {
    if (product.product){
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            {}
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${product.product.id}`}>
                    <a className="ps-product__title">{product.item.title}</a>
                </Link>
            </div>
        </div>
    );}
    // [{\"cart_item_id\":2,\"product_id\":2,\"product_item_title\":\"Yılbaşı Perde Led Işık\",\"product_item_brand\":\"Partisepeti\",\"product_item_thumbnail\":\"https://www.partisepeti.com/product_images/2784/yilbasi-led-akan-perde-isik_s1_20171110092050486.jpg\",\"product_item_color\":null,\"product_item_size\":null,\"product_item_slug\":\"yilbasi-perde-led-isik\",\"product_store\":\"Partisepeti\",\"quantity\":2,\"unit_paid_price\":350,\"total_paid_price\":700},{\"cart_item_id\":3,\"product_id\":33,\"product_item_title\":\"Çikolatalı Renkli Gül Kek Buketi\",\"product_item_brand\":\"Partisepeti\",\"product_item_thumbnail\":\"https://cdn03.ciceksepeti.com/cicek/kc3396403-1/M/kisiye-ozel-pembe-ruyam-kek-aranjmani-kc3396403-1-34c73097b87a4b8383be326c95dcdace.jpg\",\"product_item_color\":null,\"product_item_size\":null,\"product_item_slug\":\"cikolatali-renkli-gul-kek-buketi\",\"product_store\":\"Partisepeti\",\"quantity\":3,\"unit_paid_price\":80,\"total_paid_price\":240}]
    // "total_amount\":940,\"amount\":940,\"paid_amount\":0}
//(product_item_thumbnail)
    else {
        return (
            <div className="ps-product--cart">
                <div className="ps-product__thumbnail">
                    {StrapiProductThumbnail(product)} 
                </div>
                {}
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.product_id}`}>
                        <a className="ps-product__title">{product.product_item_title}</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default ProductCart;
