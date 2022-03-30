import React, { useState } from 'react';
import OrderItems from './OrderItems';
import {LikeOutlined,} from "@ant-design/icons";


const OrderView = ({orders}) => {
    const [comp, setComponent] = useState(<p>Detayları görmek için tıklayınız</p>);
    const [height, setHeight] = useState('20vh');
    const deliveryComponent = <p>Kargo Takip</p>;
    const orderComponent = <p>Sipariş Detayı</p>;
    const helpComponent = <p>Sorun Bildir</p>;
    const [orderNo, setOrder] = useState(null);

    const buttonHandle = (event, component, buttonNo) => {
        event.stopPropagation();

    };

    const orderStatusTranslate = {
        'P':[<LikeOutlined />,'Ödendi']
    }

    const data = [0, 1];
    return (
        <div className="ps-section__content">
            {orders.orders.map((order,index) => (
                <div
                    className="ps-order-item"
                    key={index}
                    style={
                        orderNo === index
                            ? {
                                  height: height,
                                  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 6px -1px, rgba(0, 0, 0, 0.3) 0px -1px 3px -1px',
                              }
                            : { height: '20vh' }
                    }
                    onClick={() => {
                        if (orderNo === index) {
                            setHeight('20vh');
                            setOrder(null);
                            setComponent(<p>Detayları görmek için tıklayınız</p>);
                        } else {
                            setHeight('60vh');
                            setOrder(index);
                            setComponent(<OrderItems order={order}/>);
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
                                <p>Ürünler - ₺<strong>{order.paid_amount}</strong></p>
                                    <div className="ps-order-item-images">
                                        {console.log(order)}
                                        {order.order_items.map((product,index)=>(
                                        <a href={"/product/"+product.product.item.id}><img key={index} className="ps-order-item-image" src={product.product.item.thumbnail.replace('image/upload/','')}></img></a>
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
        </div>
    );
};
export default OrderView;
