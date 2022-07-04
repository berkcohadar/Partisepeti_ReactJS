import React, { useState } from 'react';
import OrderItems from './OrderItems';
import OrderItems2 from './OrderItems2';

import {LikeOutlined,} from "@ant-design/icons";
import { Modal } from 'antd';
import ProductDetailQuickView from '~/components/elements/detail/ProductDetailQuickView';
import ProductRepository from '~/repositories/ProductRepository';
import router from 'next/router';

const OrderView = ({orders}) => {
    const [comp, setComponent] = useState(<p>Detayları görmek için tıklayınız</p>);
    const [orderNo, setOrder] = useState(null);
    const [productQuick, setProduct] = useState(null);
    const [isQuickView, setIsQuickView] = useState(false);
    const [loading, setLoading] = useState(false)


    const buttonHandle = (event, component, buttonNo) => {
        event.stopPropagation();
        router.push('/uyelik/yardim')
    };

    const orderStatusTranslate = {
        'P':[<LikeOutlined />,'Ödendi']
    }
    // href={"/urun-detayi/"+product.product.item.id}
    async function getProduct(id) {
        const data = await ProductRepository.getProductsById(id);
        if (data) {
            setProduct(data);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }
    const handleShowQuickView = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        setLoading(true)
        setIsQuickView(true);
        getProduct(id)
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(false);
    };

    return (
        <div className="ps-section__content">
            {orders.orders.map((order,index) => (
                console.log(order),
                <div
                    className="ps-order-item"
                    key={index}
                    onClick={() => {
                        if (orderNo === index) {
                            setOrder(null);
                            setComponent(<p>Detayları görmek için tıklayınız</p>);
                        } else {
                            setOrder(index);
                            setComponent(<OrderItems2 order={order}/>);
                        }

                    }}>
                    <div className="ps-order-item-area">
                        <div className="ps-order-item-main">
                            <div className="ps-order-item-main-status">
                                <i>{orderStatusTranslate[order.order_status][0]}</i>
                                <h4>{orderStatusTranslate[order.order_status][1]}</h4>
                            </div>
                            <div className="ps-order-item-main-buttons">
                                <button
                                    className="ps-btn"
                                    onClick={(e) => buttonHandle(e)}>
                                    Kargom Nerede?
                                </button>
                                <button
                                    className="ps-btn ps-btn--black"
                                    onClick={(e) => buttonHandle(e)}>
                                    Sorun Bildir
                                </button>
                            </div>
                        </div>
                        <div className="ps-order-item-info">
                            <div>

                                <div className="ps-order-item-info-flex">
                                    <p>{order.first_name} {order.last_name}</p> 
                                    <p className="ps-order-item-info-flex--text"> {order.address}</p>
                                </div>
                                <div className="ps-order-item-info-flex">
                                    <p>Ürünler - ₺<strong>{order.paid_amount}</strong></p> 
                                    <p className="ps-order-item-info-flex--text">Ödeme: *** 6048</p> 

                                </div>
                                <div className="ps-order-item-images">
                                    {order.order_items.map((product,index)=>(
                                        <a onClick={(e) => handleShowQuickView(e, product.product.item.id)} ><img key={index} className="ps-order-item-image" src={product.product.item.thumbnail}></img></a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`ps-order-item-drawer ${
                                orderNo === null || orderNo=== index
                                    ? 'active'
                                    : ''
                            }`}
                    > 
                        {comp}
                    </div>
                </div>
            ))}
            {loading?
                null:
                <Modal
                    centered
                    footer={null}
                    width={1024}
                    onCancel={(e) => handleHideQuickView(e)}
                    visible={isQuickView}
                    closeIcon={<i className="icon icon-cross2"></i>}>
                    <h3>Ürün Detayı</h3>
                    <ProductDetailQuickView product={productQuick} />
                </Modal>
            }

        </div>
    );
};
export default OrderView;
