import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getCollections } from '~/utilities/strapi-fetch-data-helpers';
import { Radio, Input } from 'antd';


const WidgetShopCategories = ({productItems}) => {
    const Router = useRouter();
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);
    const { slug } = Router.query;

    async function categoryList() {
        let category_list = []
        let flag = true
        if (productItems && productItems.length > 0) {
            productItems.map((item,index)=>{
                item.categories.map((i,index1)=>{
                    category_list.map((j,index2)=>{
                        if (i.slug == j.slug) flag = false
                    })
                    if (flag) category_list.push(i)
                })
            })
        }
        setCategories(category_list)
    }

    useEffect(() => {
        categoryList();
    }, []);
    


    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.slug}
                    className={item.slug === slug ? 'active' : ''}>
                        
                    <Link href={`/alisveris?categories=${item.id}`}><i className="icon-chevron-right mr-2"> <span>{item.name}</span> </i></Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Kategoriler</h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetShopCategories;
