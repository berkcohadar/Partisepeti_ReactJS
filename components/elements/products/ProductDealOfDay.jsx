import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Rating from '../Rating';
import {
    StrapiProductBadge,
    StrapiProductPriceExpanded,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import ModuleProductProgressbar from '~/components/elements/products/modules/ModuleProductProgressbar';

const ProductDealOfDay = ({ product }) => {
    return (
        <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail">
                {StrapiProductThumbnail(product)}
                {StrapiProductBadge(product)}
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <Link href="/alisveris">
                    <a className="ps-product__vendor">{product.brand}</a>
                </Link>
                <div className="ps-product__content">
                    {StrapiProductPriceExpanded(product)}

                    <Link href="/urun-detayi/[pid]" as={`/urun-detayi/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating value={product.rating} />
                        <span>{product.rating }</span>
                    </div>
                    {/* <ModuleProductProgressbar product={product} /> */}
                </div>
            </div>
        </div>
    );
};

export default connect()(ProductDealOfDay);
