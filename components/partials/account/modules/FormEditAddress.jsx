import React, { useEffect, useState } from 'react';
import { Form, Input, Checkbox } from 'antd';
import UserRepository from '~/repositories/UserRepository';

const FormEditAddress = ({ form, address_type, handleHideQuickView, addressDetails, update }) => {
    const [is_active, setIsActive] = useState(false)
    const [saveBoth, setSaveBoth] = useState(false)
    const [loading, setLoading] = useState(false);

    async function deleteAddress(e) {
        setLoading(true)
        const data = await UserRepository.deleteAdressesRequest(e);
        if (data) {
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    const handleAddressSubmit = (values) => {
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
            values.address_type = address_type == 'B' ? 'S' : 'B';
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

    const handleDeleteAddress = () => {
        deleteAddress(addressDetails);
    }

    useEffect(() => {
        form.setFieldsValue(addressDetails);
    }, [update, addressDetails])

    return (
        <div className="ps-form--edit-address">
            <div className="ps-form__header">
                {address_type == 'S' ? <h3>Teslimat Adresi</h3> : <h3>Fatura Adresi</h3>}
            </div>
            <div className="ps-form__content">
                <Form
                    className="ps-form--account"
                    onFinish={handleAddressSubmit}
                    form={form}
                >
                    <Checkbox onChange={(d) => saveBothAddresses(d)} >
                        Bu adresi {address_type == 'B' ? 'teslimat' : 'fatura'} adresi olarak da kaydet.
                    </Checkbox>
                    <Form.Item name="title" rules={[{ required: false, }]}>
                        <Input className="form-control"
                            type="text"
                            placeholder="Adres Ba??l??????"
                        >
                        </Input>
                    </Form.Item>
                    <div style={{ 'display': 'flex', justifyContent: 'space-between' }}>
                        <Form.Item name="first_name"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'L??tfen isminizi yaz??n!',
                                },
                            ]}>
                            <Input className="form-control"
                                type="text"
                                placeholder="??sim"
                            >
                            </Input>
                        </Form.Item>
                        <Form.Item name="last_name"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'L??tfen soyisminizi yaz??n!',
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
                                    'L??tfen soyisminizi yaz??n!',
                            },
                        ]}>
                        <Input className="form-control"
                            type="text"
                            placeholder="??rtibat Numaras??"
                        >
                        </Input>
                    </Form.Item>

                    <Form.Item name="address"
                        rules={[
                            {
                                required: true,
                                message:
                                    'L??tfen adresinizi yaz??n!',
                            },
                        ]}>
                        <Input className="form-control"
                            type="text"
                            placeholder="A????k Adres"
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item name="city"
                        rules={[
                            {
                                required: true,
                                message:
                                    'L??tfen ??ehrinizi yaz??n!',
                            },
                        ]}>
                        <Input className="form-control"
                            type="text"
                            placeholder="??ehir"
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item name="country"
                        rules={[
                            {
                                required: true,
                                message:
                                    'L??tfen ??lkenizi yaz??n!',
                            },
                        ]}>
                        <Input className="form-control"
                            type="text"
                            placeholder="??lke"
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item name="zip_code"
                        rules={[
                            {
                                required: false,
                                message:
                                    'L??tfen posta kodunuzu yaz??n!',
                            },
                        ]}>
                        <Input className="form-control"
                            type="text"
                            placeholder="Posta Kodu"
                        >
                        </Input>
                    </Form.Item>
                    {update ?
                        null : <Checkbox onChange={(d) => preferredChanged(d)} >
                            {'Ge??erli adresim olarak kaydet'}
                        </Checkbox>}
                    <div className='ps-profile__adresses__btn'>
                        <button
                            className="ps-btn"
                            type="submit"
                        >
                            + Ekle</button>
                        {update ?
                            <button
                                onClick={() => handleDeleteAddress()}
                                className="ps-btn ps-btn--danger"
                                type="Reset"
                            >
                                - Sil</button> :
                            <button
                                className="ps-btn ps-btn--danger"
                                type="Reset"
                            >
                                S??f??rla</button>
                        }
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default FormEditAddress;