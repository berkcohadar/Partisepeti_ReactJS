import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Radio, Select } from 'antd';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import { createOrder, orderInfo } from '~/store/order/action';
import Router from 'next/router';
import OrderRepository from "~/repositories/OrderRepository"

const { Option } = Select;

const Payment = () => {
    const [ loading, setLoading ] = useState(false);
    const [ method, setMethod ] = useState(1)
    const [ paymentScript, setPaymentScript ] = useState(null);
    const [ orderInfo, setOrderInfo] = useState(null)
    const dispatch = useDispatch();


    const handleChangePaymentMethod = (e) => {
        setMethod(e.target.value);
    };

    async function makePayment() {
        // setOrderInfo(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).order).orderInfo);
        // wait ?
        console.log(orderInfo);

        // dispatch(createOrder(orderInfo));

        orderInfo["cartItems"] = [];
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:partisepeti')).cart
        );
        
        localCart.cartItems.map((item) => {
            orderInfo.cartItems.push({
                price:item.product.price,
                product:item.product.id,
                quantity:item.quantity,
            })
        });
        console.log(orderInfo);
        const data = await OrderRepository.createOrderRequest(orderInfo);
        if (data) {
            console.log(data);
            setPaymentScript(data.checkoutFormContent);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
        // Router.push(data.paymentPageUrl);
    };

    const handleMakePayment = () => {
        setLoading(true);
        makePayment();
    }

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            setOrderInfo(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).order).orderInfo);
        }
    },[])

    // let month = [],
    //     year = [];
    // for (let i = 1; i <= 12; i++) {
    //     month.push(i);
    // }
    // for (let i = 2019; i <= 2050; i++) {
    //     year.push(i);
    // }
    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Ödeme</h1>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <div className="ps-block--shipping">
                                <div className="ps-block__panel">
                                    <figure>
                                        <strong>İletişim</strong>
                                        <p>{orderInfo?orderInfo.email:"Bilgi yok."}</p>
                                        <Link href="/uyelik/siparis-bilgilerim">
                                            <a>Değiştir</a>
                                        </Link>
                                    </figure>
                                    <figure>
                                        <strong>Adres</strong>
                                        <p>
                                        {orderInfo?orderInfo.address:"Bilgi yok."}
                                        </p>
                                        <Link href="/uyelik/siparis-bilgilerim">
                                            <a>Değiştir</a>
                                        </Link>
                                    </figure>
                                </div>
                                <div className="form-group">
                                    <button className="ps-btn ps-btn--fullwidth" onClick={()=>handleMakePayment()}>
                                        Siparişi Tamamla
                                    </button>
                                </div>
                                {paymentScript&&!loading?<div>
                                    <p>{paymentScript}</p>
                                </div>:null}
                                {/* <h4>Kart Bilgileri</h4>
                                <div className="ps-block--payment-method">
                                    <div className="ps-block__header">
                                        <Radio.Group
                                            onChange={e =>
                                                this.handleChangePaymentMethod(
                                                    e
                                                )
                                            }
                                            value={this.state.method}>
                                            <Radio value={1}>
                                                Kredi / Banka Kartı
                                            </Radio>
                                            <Radio value={2}>Papara</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className="ps-block__content">
                                        {this.state.method === 1 ? (
                                            <div className="ps-block__tab">
                                                <div className="form-group">
                                                    <label>
                                                    Kart Numarası
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>
                                                        Kart Sahibi
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="form-group">
                                                            <label>
                                                            Son Kullanma Tarihi
                                                            </label>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <Select
                                                                        defaultValue={
                                                                            1
                                                                        }>
                                                                        {month.map(
                                                                            item => (
                                                                                <Option
                                                                                    value={
                                                                                        item
                                                                                    }
                                                                                    key={
                                                                                        item
                                                                                    }>
                                                                                    {
                                                                                        item
                                                                                    }
                                                                                </Option>
                                                                            )
                                                                        )}
                                                                    </Select>
                                                                </div>
                                                                <div className="col-6">
                                                                    <Select
                                                                        defaultValue={
                                                                            2020
                                                                        }>
                                                                        {year.map(
                                                                            item => (
                                                                                <Option
                                                                                    value={
                                                                                        item
                                                                                    }
                                                                                    key={
                                                                                        item
                                                                                    }>
                                                                                    {
                                                                                        item
                                                                                    }
                                                                                </Option>
                                                                            )
                                                                        )}
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-group">
                                                            <label>
                                                                CVV
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button className="ps-btn ps-btn--fullwidth">
                                                        Siparişi Tamamla
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="ps-block__tab">
                                                <a className="ps-btn">
                                                    Process with Paypal
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div> */}
                                <div className="ps-block__footer">
                                    <Link href="/uyelik/siparis-bilgilerim">
                                        <a>
                                            <i className="icon-arrow-left mr-2"></i>
                                            Teslimat Bilgilerini Değiştir
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 ">
                            <div className="ps-form__orders">
                                <ModulePaymentOrderSummary />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;

