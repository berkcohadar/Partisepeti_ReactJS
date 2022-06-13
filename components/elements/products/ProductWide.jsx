import React from 'react';
import Link from 'next/link';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
import ModuleProductWideActions from '~/components/elements/products/modules/ModuleProductWideActions';

const ProductWide = ({ product }) => {
    return (
        <div className="ps-product ps-product--wide">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
            </div>
            {console.log(product)}
            <div className="ps-product__container">
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <p className="ps-product__vendor">
                        Satıcı:
                        <Link href="/alisveris">
                            <a>{"\t"+product.products[0].store}</a>
                        </Link>
                    </p>
                    <ul className="ps-product__desc">
                        <li>{product.description}</li>
                    </ul>
                </div>
                <ModuleProductWideActions product={product} />
            </div>
        </div>
    );
};

export default ProductWide;
