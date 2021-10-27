import React, { useState } from 'react';
import OrderItems from './OrderItems';
const OrderView = ({orders}) => {
    const [comp, setComponent] = useState(<p>Detayları görmek için tıklayınız</p>);
    const [height, setHeight] = useState('20vh');
    const deliveryComponent = <p>Kargo Takip</p>;
    const orderComponent = <p>Sipariş Detayı</p>;
    const helpComponent = <p>Sorun Bildir</p>;
    const [first_click, setClick] = useState(false);
    const [button, setButton] = useState(null);
    const [orderNo, setOrder] = useState(null);

    const buttonHandle = (event, component, buttonNo) => {
        event.stopPropagation();
        if (first_click == false) {
            setButton(buttonNo);
            setClick(true);
            setHeight('75vh');
            setComponent(component);
        } else if (buttonNo == button) {
            setClick(false);
            setHeight('20vh');
            setComponent(null);
        } else {
            setClick(false);
            setComponent(component);
        }
    };
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
                                <h4>{order.order_status}</h4>
                            </div>
                            <div className="ps-order-item-main-buttons">
                                {/* <button className="ps-btn" onClick={() => buttonHandle()}>Sipariş Detayı</button> */}
                                <button
                                    className="ps-btn"
                                    onClick={() => buttonHandle()}>
                                    Kargom Nerede?
                                </button>
                                <button
                                    className="ps-btn ps-btn--black"
                                    onClick={() => buttonHandle()}>
                                    Sorun Bildir
                                </button>
                            </div>
                        </div>
                        <div className="ps-order-item-info">
                            <div>
                                <p>Ürünler - ₺<strong>{order.paid_amount}.00</strong></p>
                                    <div className="ps-order-item-images">
                                        {order.order_items.map((product,index)=>(
                                        <a href={"/product/"+product.product.id}><img key={index} className="ps-order-item-image" src={product.product.item.thumbnail.replace('image/upload/','')}></img></a>
                                        ))}
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-order-item-drawer" >
                        {comp}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default OrderView;
