import React, { useEffect, useState } from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerShop from '~/components/layouts/ContainerShop';

import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductRepository from '~/repositories/ProductRepository.js';
import Product from '~/components/elements/products/Product';
import ProductGroupGridItems from '~/components/partials/product/ProductGroupGridItems';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import ShopItems from '~/components/partials/shop/ShopItems';

const SearchPage = ({ query }) => {
    const [pageSize] = useState(100);
    const [keyword, setKeyword] = useState('');


    const [loading, setLoading] = useState(true);
    const [productItems, setProductItems] = useState(null);

    function handleSetKeyword() {
        if (query && query.keyword !== '') {
            setKeyword(query.keyword);
        } else {
            setKeyword('');
        }
    }

    async function getProductsByKeyword(keyword,category) {
        handleSetKeyword();
        const queries = {
            search: keyword,
        };
        if (category){
            queries.categories = category;
        }

        setLoading(true);
        const SPProducts = await ProductRepository.getProducts(queries);
        if (SPProducts.items) {
            if (SPProducts.items.length > 0) {
                setProductItems(SPProducts.items);
            } else {
                setProductItems(null);
            }

            setTimeout(function () {
                setLoading(false);
            }, 500);

            return SPProducts.items;
        } else {
            setProductItems(null);
            return null;
        }
    }

    useEffect(() => {
        getProductsByKeyword(query.keyword,query.category);
    }, [query]);

    const breadcrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Arama Sonucu',
        },
    ];

    let shopItemsView, statusView;
    if (!loading) {
        if (productItems) {
            shopItemsView = (
                <ProductGroupGridItems columns={6} pageSize={pageSize} />
            );
            if (productItems.length > 0) {
                const items = productItems.map((item) => {
                    return (
                        <div
                            className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6"
                            key={item.id}>
                            <Product product={item} />
                        </div>
                    );
                });
                shopItemsView = (
                    <div className="ps-product-items row">{items}</div>
                );
                statusView = (
                    <p>
                        <strong style={{ color: '#000' }}>
                            {productItems.length}
                        </strong>{' '}
                        <small>ürün bulundu.</small>
                    </p>
                );
            } else {
                shopItemsView = <p>Ürün bulunamadı.</p>;
            }
        } else {
            shopItemsView = <p>Ürün bulunamadı.</p>;
        }
    } else {
        statusView = <p>Aranıyor...</p>;
    }

    return (
        <ContainerShop title="Shop">
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadcrumb} layout="fullwidth" />
                <div className="ps-container">
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            {productItems?<WidgetShopCategories productItems={productItems} />:null}
                            <aside className="widget widget_shop widget_shop--brand">
                                <figure>
                                    {/* {brandsView
                                        ? Object.keys(brandsView).map((item, index) => {
                                              return (
                                                  <div>
                                                      <h5>{item} </h5>
                                                      {brandsView[item].map((subItem) => (
                                                          <div className="ps-checkbox">
                                                              <input
                                                                  className="form-control"
                                                                  type="checkbox"
                                                                  id={subItem[0]}
                                                                  onChange={() => handleItemFilter(subItem[1])}
                                                                  checked={checked_filters?checked_filters.includes(""+subItem[1]):false}
                                                              />
                                                              <label
                                                                  htmlFor={
                                                                    subItem[0]
                                                                  }>
                                                                  {subItem[0]}
                                                              </label>
                                                          </div>
                                                      ))}
                                                  </div>
                                              );
                                          })
                                        : null} */}
                                </figure>
                            </aside>
                            {/* <WidgetShopFilterByPriceRange /> */}
                        </div>
                        <div className="ps-layout__right">
                            <div className="ps-shop__header">
                                <h5>
                                    Arama sonuçları gösteriliyor: "
                                    {query.categoryName?<strong>{query.categoryName}</strong>:null}
                                    {query.categoryName&&query.keyword?" / ":null}
                                    {query.keyword?<strong>{query.keyword}</strong>:null}"
                                </h5>
                            </div>
                            <ShopItems
                                productItems={productItems}
                                columns={6}
                                pageSize={18}
                            />
                            {/* <ProductGroupByCarousel
                                collectionSlug="3"
                                title="Best Sale Items"
                            />
                            <ProductGroupByCarousel
                                collectionSlug="1"
                                title="Recommended Items"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </ContainerShop>
    );
};

SearchPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default SearchPage;
