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
    );
};

SearchPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default SearchPage;
