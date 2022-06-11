import React, { useEffect, useState } from 'react';
import { Form, Input, Checkbox } from 'antd';
import UserRepository from '~/repositories/UserRepository';

const FormEditAddress = ({ form, address_type, handleHideQuickView, addressDetails, update}) => {
    const [is_active, setIsActive] = useState(false)
    const [saveBoth, setSaveBoth] = useState(false)
    // const [form] = Form.useForm();

    const handleAddressSubmit = (values) =>{
        // if (is_active != "default") 
        values.is_active = is_active;
        values.address_type = address_type

        console.log(values);
        if (update) {
            values.id = addressDetails.id
            UserRepository.updateAdressesRequest(values)
        }
        else UserRepository.addAdressesRequest(values)

        if (saveBoth) {
            values.address_type = address_type=='B'?'S':'B';
            UserRepository.addAdressesRequest(values)
        }

        // form.resetFields();
        handleHideQuickView();
    }

    const preferredChanged = (d) => {
        setIsActive(d.target.checked)
    }

    const saveBothAddresses = (d) => {
        setSaveBoth(d.target.checked)
    }

    useEffect(() => {
        form.setFieldsValue(addressDetails);
    }, [update, addressDetails])

    return (
        <div className="ps-form--edit-address">
            <div className="ps-form__header">
                {address_type=='S'?<h3>Teslimat Adresi</h3>:<h3>Fatura Adresi</h3>}
            </div>
            <div className="ps-form__content">
                <Form
                    className="ps-form--account"
                    onFinish={handleAddressSubmit}
                    form={form}
                    >
                    <Checkbox onChange={(d) => saveBothAddresses(d)} >
                            Bu adresi {address_type=='B'?'teslimat':'fatura'} adresi olarak da kaydet.
                    </Checkbox>
                    <Form.Item name="title" rules={[{ required: false, }]}>
                        <Input className="form-control"
                                type="text"
                                placeholder="Adres Başlığı"
                                >
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
                                    placeholder="İsim"
                                    >
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
                                        placeholder="Soysim"
                                        >
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
                                    placeholder="İrtibat Numarası"
                                    >
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
                                    placeholder="Açık Adres"
                                    >
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
                                    placeholder="Şehir"
                                    >
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
                                    placeholder="Ülke"
                                    >
                        </Input>
                    </Form.Item>
                    <Form.Item name="zip_code"
                        rules={[
                            {
                                required: false,
                                message:
                                    'Lütfen posta kodunuzu yazın!',
                            },
                        ]}>
                        <Input className="form-control"
                                    type="text"
                                    placeholder="Posta Kodu"
                                    >
                        </Input>
                    </Form.Item>
                    {console.log(update)}
                    {update?
                        null:<Checkbox onChange={(d) => preferredChanged(d)} >
                            {'Geçerli adresim olarak kaydet'}
                        </Checkbox>}
                    <div className='ps-profile__adresses__btn'>
                            <button 
                                className="ps-btn"
                                type="submit" 
                                
                                >
                                + Ekle</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default FormEditAddress;