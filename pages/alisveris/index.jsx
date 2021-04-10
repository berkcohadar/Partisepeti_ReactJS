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

import ProductRepository from '~/repositories/ProductRepository';
import { useRouter } from 'next/router';
const ShopDefaultPage = ({ pageSize = 10 }) => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Shop Default',
        },
    ];
    //...
    const Router = useRouter();
    const { page } = Router.query;
    const { query } = Router;

    const [loading, setLoading] = useState(false);
    const [productItems, setProductItems] = useState(null);
    const [total, setTotal] = useState(0);
    const [index1, setIndex] = useState(0);

    async function getProducts(params) {
        // console.log('PARAMS\n\n',params);
        setLoading(true);
        const responseData = await ProductRepository.getProducts(params);
        if (responseData) {
            setProductItems(responseData.items.results);
            setTotal(responseData.items.count);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }
    const handleItemFilter = (item) => {
        setIndex(item);
        Router.push(
            Router.query.category
                ? Router.asPath + '&properties__property=' + item
                : Router.asPath + '/?properties__property=' + item
        );
    };
    useEffect(() => {
        let params= {};
        if (query) {
            if (query.page) params["page"] = page;
            if (query.category) params['category'] = query.category;
            if (query.properties__property) params['properties__property'] = query.properties__property;
            else params = query;
        } 
        else params = { _limit: pageSize,};
        getProducts(params);
    }, [query]);
    
    let brandsView = {};
    if (productItems && productItems.length > 0) {
        productItems.map((item) =>
            item.properties.map((property) => {
                brandsView[property.code.code]!==undefined
                    ? brandsView[property.code.code].includes(property.property)
                        ? null
                        : brandsView[property.code.code].push(property.property)
                    : (brandsView[property.code.code] = [property.property]);
            })
        );
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
                            <WidgetShopCategories productItems={productItems} />
                            {/* <WidgetShopBrands productItems={productItems} /> */}
                            <aside className="widget widget_shop widget_shop--brand">
                                <figure>
                                    {brandsView
                                        ? Object.keys(brandsView).map((item, index) => {
                                              return (
                                                  <div>
                                                      <h5>{item} </h5>
                                                      {brandsView[item].map((subItem) => (
                                                          <div className="ps-checkbox">
                                                              <input
                                                                  className="form-control"
                                                                  type="checkbox"
                                                                  id={subItem}
                                                                  onChange={() =>
                                                                      handleItemFilter(
                                                                        subItem
                                                                      )
                                                                  }
                                                              />
                                                              <label
                                                                  htmlFor={
                                                                    subItem
                                                                  }>
                                                                  {subItem}
                                                              </label>
                                                          </div>
                                                      ))}
                                                  </div>
                                              );
                                          })
                                        : null}
                                </figure>
                            </aside>
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right">
                            <ShopItems
                                productItems={productItems}
                                columns={6}
                                pageSize={18}
                            />
                            <ProductGroupByCarousel
                                collectionSlug="3"
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
