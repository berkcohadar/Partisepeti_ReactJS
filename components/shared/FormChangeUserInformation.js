import React, { useState, useEffect } from 'react';
import { DatePicker, Form, input, Radio, ConfigProvider, Select } from 'antd';
import moment from 'moment';
import trTR from 'antd/lib/locale/tr_TR';
import UserRepository from '~/repositories/UserRepository';

const FormChangeUserInformation = ({ userInfo }) => {
    const [birthday,setBirthday] = useState("");
    const [gender,setGender] = useState("");
    const [loading,setLoading] = useState(false);
    const [init, setInit] = useState("");

    const genderEquality = {
        'O': 'Belirtmek İstemiyorum',
        'F': 'Kadın',
        'M': 'Erkek',
    };

    const dateFormat = 'YYYY/MM/DD';
    const { Option } = Select;

    async function onFinish(e) {
        setLoading(false)
        if (birthday) {
            e.date_of_birth = birthday
            setBirthday("")
        } else {
            console.log(init.birth_date)
            e.date_of_birth = init.birth_date
        }
        if (gender) {
            e.gender = gender
            setGender("")
        } else {
            e.gender = Object.keys(genderEquality).find(key => genderEquality[key] === init.gender) 
        }
        console.log("dogru", e)
        const profileUpdated = await UserRepository.profileUpdateRequest(e)
        if (profileUpdated) {
            const responseData = await UserRepository.profileRequest()
            if (responseData) {
                responseData.gender = genderEquality[responseData.gender]
                setInit(responseData)
                setTimeout(
                    function () {
                        setLoading(true);
                    }.bind(this),
                    250
                );
            }
        }
    }

    const changeBirthday = (date) => {
        console.log(date)
        setBirthday(date.format("YYYY-MM-DD"))
    }

    const changeGender = (g) => {
        console.log(g)
        let key = Object.keys(genderEquality).find(key => genderEquality[key] === g)
        setGender(key)
    }

    async function getProfile() {
        const responseData = await UserRepository.profileRequest()
        if (responseData) {
            responseData.gender = genderEquality[responseData.gender]
            setInit(responseData)
            setTimeout(
                function () {
                    setLoading(true);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        if (init == "") getProfile()
    })

    return (
        <ConfigProvider locale={trTR}>
            {init.email && loading ? <Form
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
                                    format={dateFormat}
                                    defaultValue={moment(
                                        init.birth_date,
                                        dateFormat
                                    )}  
                                    onChange={changeBirthday}
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item name="gender" className="form-group">
                                <Select
                                    className="form-control"
                                    placeholder={'Cinsiyet'}
                                    bordered={false}
                                    onChange={changeGender}
                                    >
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
