import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';
import { createOrder,orderInfo } from '~/store/order/action';
import { connect } from 'react-redux';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleLoginSubmit = (form) => {
        this.props.dispatch(orderInfo(form));
        Router.push('/uyelik/siparis-odeme');
    };

    render() {
        return (
            <Form
                className="ps-form__billing-info"
                onFinish={this.handleLoginSubmit.bind(this)}>
                <h3 className="ps-form__heading">İletişim Bilgileri</h3>
                <div className="form-group">
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Lütfen mailinizi girin.',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <div className="ps-checkbox">
                        <input
                            className="form-control"
                            type="checkbox"
                            id="keep-update"
                        />
                        <label htmlFor="keep-update">
                            Siparişini takip etmek için üye olmak ister misin?
                        </label>
                    </div>
                </div>
                <h3 className="ps-form__heading">Teslim Bilgileri</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lütfen isminizi giriniz.',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="İsim"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lütfen soyisminizi giriniz.',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Soyisim"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen adresinizi giriniz.',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Adres"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="apartment"
                        rules={[
                            {
                                required: false,
                                message: 'Enter an Apartment!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Adres Açıklaması"
                        />
                    </Form.Item>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lütfen şehrinizi seçin.',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="city"
                                    placeholder="Şehir"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="postalCode"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Lütfen posta kodunuzu giriniz.',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="postalCode"
                                    placeholder="Posta Kodu"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="ps-checkbox">
                        <input
                            className="form-control"
                            type="checkbox"
                            id="save-information"
                        />
                        <label htmlFor="save-information">
                            Bilgilerimi gelecek sefer için kaydet.
                        </label>
                    </div>
                </div>
                <div className="ps-form__submit">
                    <Link href="/uyelik/cart">
                        <a>
                            <i className="icon-arrow-left mr-2"></i>
                            Sepete geri dön
                        </a>
                    </Link>
                    <div className="ps-block__footer">
                        <button className="ps-btn">Alışverişi Tamamla</button>
                    </div>
                </div>
            </Form>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(FormCheckoutInformation);
