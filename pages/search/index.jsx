import React, { useEffect, useState } from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductRepository from '~/repositories/ProductRepository.js';
import Product from '~/components/elements/products/Product';
import ProductGroupGridItems from '~/components/partials/product/ProductGroupGridItems';

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

    async function getProductsByKeyword(keyword) {
        handleSetKeyword();
        const queries = {
            search: keyword,
        };
        setLoading(true);
        const SPProducts = await ProductRepository.getProducts(queries);
        if (SPProducts.items.results) {
            if (SPProducts.items.results.length > 0) {
                setProductItems(SPProducts.items.results);
            } else {
                setProductItems(null);
            }

            setTimeout(function () {
                setLoading(false);
            }, 500);

            return SPProducts.items.results;
        } else {
            setProductItems(null);
            return null;
        }
    }

    useEffect(() => {
        getProductsByKeyword(query.keyword);
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
                        <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6" key={item.id}>
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
                        ürün bulundu.
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
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetShopCategories productItems={productItems} />
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

SearchPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default SearchPage;

<ContainerPage title={`Search results for: "${keyword}" `} boxed={true}>
<div className="ps-page">
    <BreadCrumb breacrumb={breadcrumb} />
</div>
<div className="container">
    <div className="ps-shop ps-shop--search">
        <div className="container">
            <div className="ps-shop__header">
                <h1>
                Arama sonuçları gösteriliyor: "<strong>{keyword}</strong>"
                </h1>
            </div>
            <div className="ps-shop__content">
                {statusView}
                {shopItemsView}
            </div>
        </div>
    </div>
</div>
</ContainerPage>