import React, { useState } from 'react';
import { DatePicker, Form, input, Radio, ConfigProvider, Select } from 'antd';
import moment from 'moment';
import trTR from 'antd/lib/locale/tr_TR';
import UserRepository from '~/repositories/UserRepository';

const FormChangeUserInformation = ({ userInfo }) => {
    const [birthday,setBirthday] = useState("");
    const [gender,setGender] = useState("");

    const genderEquality = {
        O: 'Berlirtmek İstemiyorum',
        F: 'Kadın',
        M: 'Erkek',
    };
    const dateFormat = 'YYYY/MM/DD';
    const { Option } = Select;

    const onFinish = (e) => {
        setLoading(false)
        if (birthday) {
            e.date_of_birth = birthday
        } else {
            e.date_of_birth = moment(
                userInfo.birth_date,
                dateFormat
            )
        }
        if (gender) {
            e.gender = gender
        } else {
            e.gender = userInfo.gender
        }
        console.log('Result:', e);
        UserRepository.profileUpdateRequest(e)
        UserRepository.profileRequest()
    };

    const changeBirthday = (date) => {
        console.log(date)
        setBirthday(date.format("MM/DD/YYYY"))
    }

    const changeGender = (gender) => {
        console.log(gender)
        let key = Object.keys(genderEquality).find(key => genderEquality[key] === gender)
        setGender(key)
    }

    const init = {
        first_name: userInfo.first_name
            ? userInfo.first_name
            : null,
        last_name: userInfo.last_name
            ? userInfo.last_name
            : null,
        phone: userInfo.phone
            ? userInfo.phone
            : null,
        email: userInfo.email
            ? userInfo.email
            : null,
    }

    return (
        <ConfigProvider locale={trTR}>
            {init.email?<Form
                onSubmitCapture={e => e.preventDefault()}
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
                            <Form.Item name="date_of_birth" className="form-group">
                                <DatePicker
                                    className="form-control"
                                    defaultValue={moment(
                                        userInfo.birth_date,
                                        dateFormat
                                    )}  
                                    format={dateFormat}
                                    onChange={changeBirthday}
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item name="gender" className="form-group">
                                <Select
                                    className="form-control"
                                    placeholder={'Cinsiyet'}
                                    defaultValue={
                                        userInfo.gender
                                            ? genderEquality[userInfo.gender]
                                            : null
                                    }
                                    bordered={false}
                                    onChange={changeGender}>
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
                        <button type="submit" className="ps-btn">Profili Güncelle</button>
                    </div>
                </div>
            </Form>:null}
        </ConfigProvider>
    );
};

export default FormChangeUserInformation;
