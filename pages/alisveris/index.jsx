import React, { useEffect, useState } from 'react';
import ContainerShop from '~/components/layouts/ContainerShop';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopItems from '~/components/partials/shop/ShopItems';
import ProductGroupByCarousel from '~/components/partials/product/ProductGroupByCarousel';
import ShopCategories from '~/components/partials/shop/ShopCategories';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import ShopBanner from '~/components/partials/shop/ShopBanner';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import ModuleProductFilter from '~/components/elements/products/modules/ModuleProductFilter';

import ProductRepository from '~/repositories/ProductRepository';
import { useRouter } from 'next/router';

const ShopDefaultPage = ({ pageSize = 24 }) => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Alışveriş',
        },
    ];
    
    const Router = useRouter();
    const { page } = Router.query;
    const { query } = Router;

    const [loading, setLoading] = useState(false);
    const [productItems, setProductItems] = useState(null);
    const [total, setTotal] = useState(0);
    const [checked_filters, setFilters] = useState([]);

    async function getProducts(params) {
        setLoading(true);
        const responseData = await ProductRepository.getProducts(params);
        if (responseData.items) {
            setProductItems(responseData.items);
            setTotal(responseData.totalItems);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    const handleItemFilter = (key,item) => {
        if (key === "Renk") key = "color";
        else if (key === "Boyut") key = "size";

        if (key === "color" || key === "size") {
            if (Router.query[key]) {
                let tmp = Router.query[key].split('+')
                if (tmp.includes(item+" ")) {
                    item = item.replace(" ","%20")
                    if (tmp.length == 1) {
                        delete Router.query[key];
                        Router.push(Router.asPath.replace('&'+key+'='+item+'+',''))
                    } else {
                        Router.push(Router.asPath.replace(''+item+'+',''))
                    }                    
                } else {
                    let index = Router.asPath.indexOf("&"+key+"=");
                    let length = ("&"+key+"=").length
                    let newPath = Router.asPath.slice(0, index+length) +
                        item+ "+" + Router.asPath.slice(index+length);

                    Router.push(newPath);

                    index = null;
                    length = null;
                    newPath = null;
                }
                tmp = null;

            } else {
                Router.push(Router.asPath + "&"+key+"=" + item + "+")
            }
        } else {
            key = "properties"
            item = item[1]
            if (Router.query[key]) {
                let tmp = Router.query[key].split(' ')
                if (tmp.includes(item.toString())) {
                    if (tmp.length == 2) {
                        delete Router.query[key];
                        Router.push(Router.asPath.replace('&'+key+'='+item+'+',''))
                    } else {
                        Router.push(Router.asPath.replace(''+item+'+',''))
                    }                    
                } else {
                    let index = Router.asPath.indexOf("&"+key+"=");
                    let length = ("&"+key+"=").length
                    let newPath = Router.asPath.slice(0, index+length) +
                        item+ "+" + Router.asPath.slice(index+length);

                    Router.push(newPath);

                    index = null;
                    length = null;
                    newPath = null;
                }
                tmp = null;

            } else {
                Router.push(Router.asPath + "&"+key+"=" + item + "+")
            }
        }
    }

    useEffect(() => {
        let params = {};
        if (Router.asPath == "/alisveris") {
            Router.push("/alisveris?")
        }
        if (query) {
            if (query.search) params['search'] = query.search;
            if (query.ordering) params['ordering'] = query.ordering;
            if (query.page) params['page'] = page;
            if (query.categories) params['categories'] = query.categories;
            var currentFilters = [];
            if (query.color) {
                params['color'] = query.color;
                currentFilters.push(query.color.slice(0, -1))
            }
            if (query.size) {
                params['size'] = query.size;
                currentFilters.push(query.size.slice(0, -1))
            }
            if (query.properties) {
                var temp = query.properties.split(' ');
                temp.pop();
                temp.map((elem)=>(currentFilters.push(elem)))
                
                params['properties'] = query.properties;
            } 
            else setFilters([]);
            setFilters(currentFilters);
            // else params = query;
        } else params = { _limit: pageSize };
        getProducts(params);
    }, [query]);

    let brandsView = {};
    if (productItems && productItems.length > 0) {
        productItems.map((item) => {
            item.properties.map((property) => {
                brandsView[property.code.code] !== undefined
                    ? brandsView[property.code.code].some((row) =>
                        row.includes(property.id)
                    )
                        ? null
                        : brandsView[property.code.code].push([
                            property.property,
                            property.id,
                        ])
                    : (brandsView[property.code.code] = [
                        [property.property, property.id],
                    ]);
            })    
        });
        productItems.map((item) => {
            if (item.color) {
                brandsView['Renk'] !== undefined
                    ? brandsView['Renk'].includes(item.color)
                        ? null
                        : brandsView['Renk'].push(item.color)
                    : (brandsView['Renk'] = [item.color]);
            }
            if (item.size) {
                brandsView['Boyut'] !== undefined
                    ? brandsView['Boyut'].includes(item.size)
                        ? null
                        : brandsView['Boyut'].push(item.size)
                    : (brandsView['Boyut'] = [item.size]);
            }
        });
    }
    //...

    return (
        <ContainerShop title="Shop">
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    
                    {/* <ShopBanner />
                    <ShopBrands /> 
                    <ShopCategories />*/}
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <ModuleProductFilter productItems={productItems} brandsView={brandsView} handleItemFilter={handleItemFilter} checked_filters={checked_filters}/>
                        </div>
                        <div className="ps-layout__right">
                            <ShopItems
                                productItems={productItems}
                                brandsView={brandsView}
                                handleItemFilter={handleItemFilter}
                                checked_filters={checked_filters}
                                columns={6}
                                pageSize={24}
                                total={total}
                                loading={loading}
                            />
                            <ProductGroupByCarousel
                                collectionSlug="2"
                                title="Best Sale Items"
                            />
                            <ProductGroupByCarousel
                                collectionSlug="1"
                                title="Recommended Items"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ContainerShop>
    );
};
export default ShopDefaultPage;
