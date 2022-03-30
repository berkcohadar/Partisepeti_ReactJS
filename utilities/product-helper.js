/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */

import React from 'react';
import LazyLoad from 'react-lazyload';
import { baseUrl } from '~/repositories/Repository';
import Link from 'next/link';

export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getColletionBySlug(collections, slug) {
    if (collections.length > 0) {
        const result = collections.find(
            (item) => item.slug === slug.toString()
        );
        if (result !== undefined) {
            return result.products;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function getItemBySlug(banners, slug) {
    if (banners.length > 0) {
        const banner = banners.find((item) => item.slug === slug.toString());
        if (banner !== undefined) {
            return banner;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export function convertSlugsQueryString(payload) {
    let query = '';
    if (payload.length > 0) {
        payload.forEach((item) => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
    }
    return query;
}

export function StrapiProductBadge(product) {
    let view;
    if (product.badge && product.badge !== null) {
        view = product.badge.map((badge) => {
            if (badge.type === 'sale') {
                return <div className="ps-product__badge">{badge.value}</div>;
            } else if (badge.type === 'outStock') {
                return (
                    <div className="ps-product__badge out-stock">
                        {badge.value}
                    </div>
                );
            } else {
                return (
                    <div className="ps-product__badge hot">{badge.value}</div>
                );
            }
        });
    }
    return view;
}

export function StrapiProductPrice(product) {
    let view;
    if (product.cartItemId){
        try {
            if (product.product.market_price > product.product.price) {
                view = (
                    <p className="ps-product__price sale">
                        ₺{formatCurrency(product.product.price)}
                        <del className="ml-2">
                            ₺{formatCurrency(product.product.market_price)}
                        </del>
                    </p>
                );
            } else {
                view = (
                    <p className="ps-product__price">
                        ₺{formatCurrency(product.product.price)}
                    </p>
                );
            }
            return view;
        } catch (err) {
            view = <p className="ps-product__price">ERROR</p>;
            return view;
        }
    } else{
        try {
            if (product.products[0].market_price > product.products[0].price) {
                view = (
                    <p className="ps-product__price sale">
                        ₺{formatCurrency(product.products[0].price)}
                        <del className="ml-2">
                            ₺{formatCurrency(product.products[0].market_price)}
                        </del>
                    </p>
                );
            } else {
                view = (
                    <p className="ps-product__price">
                        ₺{formatCurrency(product.products[0].price)}
                    </p>
                );
            }
            return view;
        } catch (err) {
            view = <p className="ps-product__price">₺{0}</p>;
            return view;
        }
    }
}

export function StrapiProductPriceExpanded(product) {
    let view;
    try {
        if (product.products[0].market_price > product.products[0].price) {
            view = (
                <p className="ps-product__price sale">
                    ₺{formatCurrency(product.products[0].price)}
                    <del className="ml-2">
                        ₺{formatCurrency(product.products[0].market_price)}
                    </del>
                    <small>
                        %
                        {100 -
                            Math.round(
                                (product.products[0].price /
                                    product.products[0].market_price) *
                                    100
                            )}{' '}
                        İndirim
                    </small>
                </p>
            );
        } else {
            view = (
                <p className="ps-product__price">
                    ${formatCurrency(product.products[0].price)}
                </p>
            );
        }
        return view;
    } catch (err) {
        view = <p className="ps-product__price">${0}</p>;
        return view;
    }
}

export function StrapiProductThumbnail(product) {
    let view;

    if (product.thumbnail) {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img src={`${product.thumbnail.replace('image/upload/','')}`} alt={product.title} />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else if (product.item) { //product.item.thumbnail?? error in orders page
        view = (
            <Link href="/product/[pid]" as={`/product/${product.item.id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${product.item.thumbnail.replace('image/upload/','')}`}
                            alt={product.item.title}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else if (product.product_item_thumbnail) {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.product_id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${product.product_item_thumbnail.replace('image/upload/','')}`}
                            alt={product.product_item_title}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    }  else if (product.order_status) {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.product.item.id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${product.product.item.thumbnail.replace('image/upload/','')}`}
                            alt={product.product.item.title}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src="/static/img/not-found.jpg"
                            alt="partisepeti"
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    }

    return view;
}
