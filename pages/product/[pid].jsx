import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ContainerProductDetail from '~/components/layouts/ContainerProductDetail';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';

import { Modal, Drawer } from 'antd';

const ProductDefaultPage = () => {
    const [product, setProduct] = useState(null);
    const [shareDrawer, setShareDrawer] = useState(null);
    const [isQuickView, setIsQuickView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
   
    const router = useRouter();
    const { pid } = router.query;
    
    const shareLinks = [];

    async function getWindow() {
        const myWindow = await window;
        if (myWindow) setWindowWidth(myWindow.innerWidth);
    }

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

    const handleShareLink = (e, key) => {
        e.preventDefault();

        if (key["desc"] === "copy") {
            console.log(key["link"]);
        } else {
            window.location.href = key["link"];
        }

    }

    const handleShowQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(true);
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(false);
    };

    useEffect(() => {
        getProduct(pid);
        getWindow();
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
    // whatsapp://send?text=Check%20this%20out%3A%20SKLZ%20
    // Accelerator%20Pro%2C%20Indoor%20Putting%20Mat%2C%20Golf%20Accessorie...%20
    // https%3A%2F%2Fwww.amazon.com%2Fdp%2FB013BYCKDQ%2Fref%3Dcm_sw_r_wa_awdb_imm_9QP1EVXCP5CGCMYZCXSE

    // sms:?body=Check%20this%20out%3A%20SKLZ%20
    // Accelerator%20Pro%2C%20Indoor%20Putting%20Mat%2C%20Golf%20Accessori...%20
    // https%3A%2F%2Fwww.amazon.com%2Fdp%2FB013BYCKDQ%2Fref%3Dcm_sw_r_sms_awdb_imm_9QP1EVXCP5CGCMYZCXSE"
    // const url = 'https://wwww.partisepeti.com' + router.asPath

    // Android => sms:?body
    // Apple => sms:&body=

    if (product) {
        const url = 'http://192.168.0.208:3000' + router.asPath
        const productTitle = product.title
        const shareText = "Partisepeti'nde bulduğum şu ürüne göz at!%0a%0a"

        const shareBody = shareText + productTitle + "%0a" + url

        let tempArr = [
            { comp: <i className="fa fa-whatsapp"></i>, desc: "whatsapp", link: "whatsapp://send?text=" + shareBody, text: "Whatsapp" },
            { comp: <i className="icon-paper-plane"></i>, desc: "sms", link: "sms:&body=" + shareBody, text: "Kısa Mesaj" },
            { comp: <i className="icon-copy"></i>, desc: "copy", link: url, text: "Linki Kopyala" },
            { comp: <i className="fa fa-instagram"></i>, desc: "instagram", link: "instagram:", text: "Instagram" },
            { comp: <i className="fa fa-twitter"></i>, desc: "twitter", link: "twitter:", text: "Twitter" },
            { comp: <i className="fa fa-facebook"></i>, desc: "facebook", link: "facebook:", text: "Facebook" },
            { comp: <i className="fa fa-pinterest"></i>, desc: "pinterest", link: "pinterest:", text: "Pinterest" },
        ];
        tempArr.map((item) => (shareLinks.push(item)))
    }

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
                            {shareLinks.map((key) => (
                                <div onClick={(e) => handleShareLink(e, key)} className="ps-panel-share-slide">
                                    {key["comp"]}
                                    <a > {key["text"]} </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Drawer>

            <Modal
                centered
                footer={null}
                width={400}
                onCancel={(e) => handleHideQuickView(e)}
                visible={isQuickView}
                closeIcon={<i className="icon icon-cross2"></i>}>
                <div style={{height:"400px"}} className="ps-panel--wrapper">
                    <h3>Paylaş</h3>
                    <div className="ps-panel--share_content">
                        <div className="ps-panel-share_slider">
                            {shareLinks.map((key) => (
                                <div onClick={(e) => handleShareLink(e, key)} className="ps-panel-share-slide">
                                    {key["comp"]}
                                    <a > {key["text"]} </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal>

            <div className="ps-page--product_share">
                <a onClick={(e) => windowWidth <= 1200? toggleShareDrawer():handleShowQuickView(e)}> <i className="icon-exit-up"></i>
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
