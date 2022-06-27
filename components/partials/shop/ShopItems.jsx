import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import Product from '~/components/elements/products/Product';
import ProductWide from '~/components/elements/products/ProductWide';
import ProductRepository from '~/repositories/ProductRepository';
import ModuleShopSortBy from '~/components/partials/shop/modules/ModuleShopSortBy';
import { useRouter } from 'next/router';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { Drawer } from 'antd';
import ModuleProductFilter from '~/components/elements/products/modules/ModuleProductFilter';



const ShopItems = ({ productItems, brandsView, handleItemFilter, checked_filters, columns = 4, pageSize = 24, total = 0, loading = false }) => {
    const Router = useRouter();
    const { page } = Router.query;
    const { query } = Router;
    const [listView, setListView] = useState(true);
    const [mobileFilters, setMobileFilters] = useState(false)
    const [classes, setClasses] = useState(
        'col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6'
    );

    const handleShowFilterDrawer = () => {
        setMobileFilters(mobileFilters ? false : true);
    };

    const handleCloseFilterDrawer = () => {
        setMobileFilters(mobileFilters ? false : true);
    };

    function handleChangeViewMode(e) {
        e.preventDefault();
        setListView(!listView);
    }

    function handlePagination(page, pageSize) {
        Router.push(`/alisveris?page=${page}`);
    }

    // 'tn': 320px,
    // 'xs': 480px,
    // 'sm': 768px,
    // 'md': 992px,
    // 'lg': 1200px,

    function handleSetColumns() {
        switch (columns) {
            case 2:
                setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
                return 3;
                break;
            case 4:
                setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
                return 4;
                break;
            case 6:
                setClasses('col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6');
                return 6;
                break;

            default:
                setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
        }
    }

    useEffect(() => {
        let params;
        if (query) {
            if (query.categories && query.page) {
                params = {
                    categories: query.categories,
                    page: page,
                    _limit: pageSize,
                };
            }
            else if (query.page) {
                params = {
                    page: page,
                    _limit: pageSize,
                };
            }
            else if (query.categories) {
                params = {
                    categories: query.categories,
                    _limit: pageSize,
                };
            }
            else {
                params = query;
                params._limit = pageSize;
            }
        }
        else {
            params = {
                _limit: pageSize,
            };
        }
        // getTotalRecords();
        // getProducts(params);
        handleSetColumns();
    }, [query]);

    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            // 0 - 9 *1
            // 10 - 19 *2
            // 20 - 29 *3
            if (listView) {
                const items = productItems.map((item) => (
                    <div className={classes} key={item.id}>
                        <Product product={item} />
                    </div>
                ));
                productItemsView = (
                    <div className="ps-shop-items">
                        <div className="row">{items}</div>
                    </div>
                );
            } else {
                productItemsView = productItems.map((item) => (
                    <ProductWide product={item} />
                ));
            }
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        const skeletonItems = generateTempArray(12).map((item) => (
            <div className={classes} key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletonItems}</div>;
    }

    return (
        <div className="ps-shopping">
            <Drawer
                className="ps-panel--mobile ps-panel--shopping"
                placement="right"
                closable={false}
                onClose={() => handleCloseFilterDrawer()}
                visible={mobileFilters}
            >
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Ürün Filtreleme</h3>
                        <span
                            className="ps-panel__close"
                            onClick={() => handleCloseFilterDrawer()}>
                            <i className="icon-cross"></i>
                        </span>
                    </div>
                    <div className="ps-panel__content">
                        <ModuleProductFilter productItems={productItems} brandsView={brandsView} handleItemFilter={handleItemFilter} checked_filters={checked_filters} />
                    </div>
                </div>
            </Drawer>
            <div className="ps-shopping__header">
                <p>
                    <strong className="mr-2">{productItems ? productItems.length : "-"}</strong>
                    Ürün bulundu
                </p>
                <div className="ps-shopping__actions">
                    <div className="ps-shopping__view ps-filter">
                        <ul className="ps-tab-list">
                            <li className={'active'}>
                                <a
                                    href="#"
                                    onClick={() => handleShowFilterDrawer()}>
                                    <i className="icon-equalizer"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ModuleShopSortBy />
                    <div className="ps-shopping__view">
                        <ul className="ps-tab-list">
                            <li className={listView === true ? 'active' : ''}>
                                <a
                                    href="#"
                                    onClick={(e) => handleChangeViewMode(e)}>
                                    <i className="icon-icons2"></i>
                                </a>
                            </li>
                            <li className={listView !== true ? 'active' : ''}>
                                <a
                                    href="#"
                                    onClick={(e) => handleChangeViewMode(e)}>
                                    <i className="icon-list4"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ps-shopping__content">{productItemsView}</div>
            <div className="ps-shopping__footer text-center">
                <div className="ps-pagination">
                    <Pagination
                        total={total}
                        pageSize={pageSize}
                        responsive={true}
                        showSizeChanger={false}
                        current={page !== undefined ? parseInt(page) : 1}
                        onChange={(e) => handlePagination(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ShopItems;
