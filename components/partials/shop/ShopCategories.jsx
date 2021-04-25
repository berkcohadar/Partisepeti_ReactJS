// import { categories } from '~/public/static/data/shopCategories';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getCollections } from '~/utilities/strapi-fetch-data-helpers';


const ShopCategories = () => {
    const Router = useRouter();
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);

    const { slug } = Router.query;

    async function getCategories() {
        setLoading(true);
        const responseData = await getCollections();
        if (responseData) {
            setCategories(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.slug}
                    className={item.slug === slug ? 'active' : ''}>
                    <Link href={`/alisveris?categories=${item.id}`}>{item.name}</Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return(
        <div className="ps-shop-categories">
            <div className="row align-content-lg-stretch">
                {categories &&
                    categories.map(category => (
                        <div
                            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 "
                            key={category.id}>
                            <div
                                className="ps-block--category-2"
                                data-mh="categories">
                                <div className="ps-block__thumbnail">
                                    <img src={category.thumbnail} alt="partisepeti" />
                                </div>
                                <div className="ps-block__content">
                                    <h4>{category.title}</h4>
                                    <ul>
                                        {category.links &&
                                            category.links.map(link => (
                                                <li key={link}>
                                                    <Link href="/alisveris" as={`/alisveris`}>
                                                        <a>{link}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default ShopCategories;
