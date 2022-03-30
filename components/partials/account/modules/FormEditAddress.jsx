import React, { Component } from 'react';
import { Form, Input, notification } from 'antd';
import UserRepository from '~/repositories/UserRepository';

const FormEditAddress = () => {
    const handleAddressSubmit = (values) =>{
        console.log(values)
        // UserRepository.addAdressesRequest()
    }

    return (
        <form className="ps-form--edit-address" action={handleAddressSubmit()}>
            <div className="ps-form__header">
                <h3>Billing address</h3>
            </div>
            <div className="ps-form__content">
                <Form
                    className="ps-form--account"
                    onFinish={handleAddressSubmit}>
                    <Form.Item name="address_name" rules={[{ required: false, }]}>
                        <Input className="form-control"
                                type="text"
                                placeholder="Adres Başlığı">
                        </Input>
                    </Form.Item>
                    <div style={{'display':'flex', justifyContent:'space-between'}}>
                        <Form.Item name="first_name"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Lütfen isminizi yazın!',
                                },
                            ]}>
                            <Input className="form-control"
                                    type="text"
                                    placeholder="İsim">
                            </Input>
                        </Form.Item>
                        <Form.Item name="last_name"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Lütfen soyisminizi yazın!',
                                },
                            ]}>
                            <Input className="form-control"
                                        type="text"
                                        placeholder="Soysim">
                            </Input>
                        </Form.Item>
                    </div>
                    <Form.Item name="phone"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Lütfen soyisminizi yazın!',
                            },
                        ]}>
                        <Input className="form-control"
                                    type="text"
                                    placeholder="İrtibat Numarası">
                        </Input>
                    </Form.Item>
                    
                    <Form.Item name="address"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Lütfen adresinizi yazın!',
                            },
                        ]}>
                        <Input className="form-control"
                                    type="text"
                                    placeholder="Açık Adres">
                        </Input>
                    </Form.Item>
                    <Form.Item name="city"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Lütfen şehrinizi yazın!',
                            },
                        ]}>
                        <Input className="form-control"
                                    type="text"
                                    placeholder="Şehir">
                        </Input>
                    </Form.Item>
                    <Form.Item name="country"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Lütfen ülkenizi yazın!',
                            },
                        ]}>
                        <Input className="form-control"
                                    type="text"
                                    placeholder="Ülke">
                        </Input>
                    </Form.Item>
                    <Form.Item name="zip_code"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Lütfen posta kodunuzu yazın!',
                            },
                        ]}>
                        <Input className="form-control"
                                    type="text"
                                    placeholder="Posta Kodu">
                        </Input>
                    </Form.Item>
                </Form>
            </div>
        </form>
    );
}

export default FormEditAddress;


{/* 
    <div className="form-group" style={{display:"flex",justifyContent:"space-between"}}>
        <input type="text" style={{maxWidth:"48%"}} placeholder="İsim" className="form-control"/>
        <input type="text" style={{maxWidth:"48%"}} placeholder="Soyisim" className="form-control"/>
    </div>
    <div className="form-group">
        <label>
            Email address <sup>*</sup>
        </label>
        <input type="text" placeholder="" className="form-control"/>
    </div>
    <div className="form-group">
        </div>
    <div className="form-group">
        <label>
            Country <sup>*</sup>
        </label>
        <input type="text" placeholder="" className="form-control"/>
    </div>
    <div className="form-group">
        <label>
            State <sup>*</sup>
        </label>
        <input type="text" placeholder="" className="form-control"/>
    </div>
    <div className="form-group">
        <label>
            Postcode <sup>*</sup>
        </label>
        <input type="text" placeholder="" className="form-control"/>
    </div>
    <div className="form-group">
        <label>
            Street Address <sup>*</sup>
        </label>
        <input type="text" placeholder="" className="form-control"/>
    </div>
    <div className="form-group submit">
        <button type="submit" className="ps-btn">Save Address</button>
    </div> 
*/}