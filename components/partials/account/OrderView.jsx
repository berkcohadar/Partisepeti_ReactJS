import React, { useState } from 'react';
import OrderItems from './OrderItems';
const OrderView = ({orders}) => {
    const [comp, setComponent] = useState('');
    const [height, setHeight] = useState('20vh');
    const deliveryComponent = <p>Kargo Takip</p>;
    const orderComponent = <p>Sipariş Detayı</p>;
    const helpComponent = <p>Sorun Bildir</p>;
    const [first_click, setClick] = useState(false);
    const [button, setButton] = useState(null);
    const [order, setOrder] = useState(null);

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
                        order === index
                            ? {
                                  height: height,
                                  boxShadow: '0px 0px 4px 0px #1c1a18',
                              }
                            : { height: '20vh' }
                    }
                    onClick={() => {
                        setHeight('60vh');
                        setOrder(index);
                        setComponent(<OrderItems />);
                    }}>
                    <div className="ps-order-item-area">
                        <div className="ps-order-item-main">
                            <div className="ps-order-item-main-status">
                                <h4>{order.status}</h4>
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
                                <p>Ürünler - ₺ {order.total_amount}.00</p>
                                    <div style={{display:"flex"}}>
                                        <img style={{height:"50px"}} src="https://images.pexels.com/photos/5635136/pexels-photo-5635136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                                        <img style={{height:"50px"}} src="https://images.pexels.com/photos/5635136/pexels-photo-5635136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                                        <img style={{height:"50px"}} src="https://images.pexels.com/photos/5635136/pexels-photo-5635136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                                        <img style={{height:"50px"}} src="https://images.pexels.com/photos/5635136/pexels-photo-5635136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ps-order-item-drawer"
                        style={
                            comp && order === index
                                ? { opacity: 1, display: 'block' }
                                : {}
                        }>
                        {comp}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default OrderView;
