import React from 'react';
import { DatePicker, Form, input, Radio, ConfigProvider, Select } from 'antd';
import moment from 'moment';
import trTR from 'antd/lib/locale/tr_TR';

const FormChangeUserInformation = ({ userInfo }) => {
    const genderEquality = {
        B: 'Berlirtmek İstemiyorum',
        K: 'Kadın',
        E: 'Erkek',
    };
    const dateFormat = 'YYYY/MM/DD';
    const { Option } = Select;

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const init = {
        first_name: userInfo.profile.user
            ? userInfo.profile.user.first_name
            : null,
        last_name: userInfo.profile.user
            ? userInfo.profile.user.last_name
            : null,
        phone: userInfo.profile.phone
            ? userInfo.profile.phone
            : null,
        email: userInfo.profile.user
            ? userInfo.profile.user.username
            : null,
    }
    console.log(init)
    return (
        <ConfigProvider locale={trTR}>
            <Form
                onFinish={onFinish}
                className="ps-form--account-setting"
                initialValues={init}>
                <div className="ps-form__content">
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Item name="first_name" className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item name="last_name" className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={'Soyisim'}
                                />
                            </Form.Item>
                        </div>

                        <div className="col-sm-6">
                            <Form.Item name="phone" className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Telefon"
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item name="email" className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={'Email'}
                                    disabled
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item name="birthday" className="form-group">
                                <DatePicker
                                    className="form-control"
                                    defaultValue={moment(
                                        '2015/01/01',
                                        dateFormat
                                    )}  
                                    format={dateFormat}
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item name="gender" className="form-group">
                                <Select
                                    className="form-control"
                                    placeholder={'Cinsiyet'}
                                    defaultValue={
                                        userInfo.profile.gender
                                            ? genderEquality[userInfo.profile.gender]
                                            : null
                                    }
                                    bordered={false}
                                    onChange={null}>
                                    {Object.keys(genderEquality).map(
                                        (key, index) => (
                                            <Option value={genderEquality[key]}>
                                                {genderEquality[key]}
                                            </Option>
                                        )
                                    )}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>

                    <div className="form-group submit">
                        <button className="ps-btn">Profili Güncelle</button>
                    </div>
                </div>
            </Form>
        </ConfigProvider>
    );
};

export default FormChangeUserInformation;
