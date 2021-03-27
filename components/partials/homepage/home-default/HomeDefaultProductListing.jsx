import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import { generateTempArray } from '~/utilities/common-helpers';
import { ProductGroupWithCarousel } from '~/components/partials/product/ProductGroupWithCarousel';

const HomeDefaultProductListing = ({ collectionSlug, title }) => {
    const [productItems, setProductItems] = useState(null);
    const [currentCollection, setCurrentCollection] = useState('new-arrivals');
    const [loading, setLoading] = useState(true);

    const sectionLinks = [
        {
            title: 'Yeni Ürünler',
            name: 'new-arrivals',
            slug: collectionSlug,
        },
        {
            title: 'Çok Satan',
            name: 'best-seller',
            slug: 'fullwidth-clothing-best-sellers',
        },
        {
            title: 'Popüler Ürünler',
            name: 'most-popular',
            slug: 'fullwidth-clothing-most-popular',
        },
    ];

    async function getProducts(slug) {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(slug);
        if (responseData) {
            setProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    function handleChangeTab(e, tab) {
        e.preventDefault();
        setCurrentCollection(tab.name);
        getProducts(tab.slug);
    }

    useEffect(() => {
        getProducts(collectionSlug);
    }, [collectionSlug]);

    const sectionLinksView = sectionLinks.map((link) => (
        <li
            className={currentCollection === link.name ? 'active' : ''}
            key={link.name}>
            <a href="#" onClick={(e) => handleChangeTab(e, link)}>
                {link.title}
            </a>
        </li>
    ));

    // views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = (
                <ProductGroupWithCarousel
                    products={productItems}
                    type="fullwidth"
                />
            );
        } else {
            productItemsView = <p>No product(s) found.</p>;
        }
    } else {
        const skeletons = generateTempArray(6).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    return (
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>{title}</h3>
                    <ul className="ps-section__links">
                        {sectionLinksView}
                        <li>
                            <Link href={`/alisveris`}>
                                <a>Hepsini Gör</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">{productItemsView}</div>
            </div>
        </div>
    );
};

export default HomeDefaultProductListing;
