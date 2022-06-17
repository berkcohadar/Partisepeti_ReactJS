import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import ContainerProductDetail from '~/components/layouts/ContainerProductDetail';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import ContainerPage from '~/components/layouts/ContainerPage';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';

import { Drawer } from 'antd';

const ProductDefaultPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [shareDrawer, setShareDrawer] = useState(null);

    const [loading, setLoading] = useState(false);

    async function getProduct(pid) {
        setLoading(true);
        const responseData = await ProductRepository.getProductsById(pid);
        if (responseData) {
            setProduct(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }
    const toggleShareDrawer = () => {
        setShareDrawer(shareDrawer ? false : true);
    }

    useEffect(() => {
        getProduct(pid);
    }, [pid]);

    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Shop',
            url: "/alisveris",
        },
        {
            text: product ? product.title : 'Loading...',
        },
    ];
    // Views
    let productView, headerView;
    if (!loading) {
        if (product) {
            productView = <ProductDetailFullwidth product={product} />;
            headerView = <HeaderProduct product={product} />;
        } else {
            headerView = <HeaderDefault />;
        }
    } else {
        productView = <SkeletonProductDetail />;
    }
    const arr = [
        {comp: <i className="fa fa-whatsapp"></i>, link:"", text:"Whatsapp"},
        {comp: <i className="icon-paper-plane"></i>, link:"", text:"Kısa Mesaj"},
        {comp: <i className="icon-copy"></i>, link:"", text:"Linki Kopyala"},
        {comp: <i className="fa fa-instagram"></i>, link:"", text:"Instagram"},
        {comp: <i className="fa fa-twitter"></i>, link:"", text:"Twitter"},

    ]
    return (
        <ContainerProductDetail title={product ? product.title : 'Loading...'}>
            {headerView}
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <Drawer
                className="ps-panel--mobile ps-panel--share"
                placement="bottom"
                closable={false}
                onClose={() => toggleShareDrawer()}
                visible={shareDrawer}
            >
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Paylaş</h3>
                        <span
                            className="ps-panel__close"
                            onClick={() => toggleShareDrawer()}>
                            <i className="icon-cross"></i>
                        </span>
                    </div>
                    <div className="ps-panel--share_content">
                        <div className="ps-panel-share_slider">
                            {arr.map((key) => (
                                <div className="ps-panel-share-slide">
                                    {key["comp"]}
                                    <a href={key["link"]}> {key["text"]} </a>
                                    {/* <img src="https://media.istockphoto.com/photos/abstract-red-gradient-color-background-christmas-valentine-wallpaper-picture-id1054309772?k=20&m=1054309772&s=612x612&w=0&h=E9khewnAJNrfDCcfTwIu34CZWluLLy4pYJxAqkKcgFs=">
                                    </img> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Drawer>
            <div className="ps-page--product_share">
                <a onClick={() => toggleShareDrawer()}> <i className="icon-exit-up"></i>
                </a>
            </div>
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">{productView}</div>
                        <div className="ps-page__right">
                            {product ? <ProductWidgets collectionSlug={product.categories[0].id} /> : null}
                        </div>
                    </div>

                    {product ? <CustomerBought
                        layout="fullwidth"
                        collectionSlug={product ? product.categories ? product.categories[0].id : '' : ''}
                    /> : null}
                    {product ? <RelatedProduct collectionSlug={product ? product.categories ? product.categories[0].id : '' : ''} /> : null}
                </div>
            </div>
        </ContainerProductDetail>
    );
};

export default ProductDefaultPage;
