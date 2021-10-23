import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views.
    let priceView;
    if (product.products[0].market_price>product.products[0].price) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">₺{product.products[0].market_price}</del>
                ₺{product.products[0].price}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">₺{product.products[0].price}</h4>;
    }
    return (
        <header>
            <h1>{product.title}</h1>
            <div className="ps-product__meta">
                <p>
                    Satıcı:
                    <Link href="/alisveris">
                        <a className="ml-2 text-capitalize">{product.brand}</a>
                    </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating value={product.rating}  />
                    <span>({product.rate_counter})</span>
                </div>
            </div>
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
