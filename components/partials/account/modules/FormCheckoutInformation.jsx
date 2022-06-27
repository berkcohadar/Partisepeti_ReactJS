import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch } from "react-redux";

import FormEditAddress from '~/components/partials/account/modules/FormEditAddress';
import Link from 'next/link';
import Router from 'next/router';

import { orderInfo } from '~/store/order/action';
import UserRepository from '~/repositories/UserRepository';
import { Form, Modal, Checkbox } from 'antd';


const FormCheckoutInformation = () => {
    const [billingA, setBillingA] = useState(null);
    const [shippingA, setShippingA] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isQuickView, setIsQuickView] = useState(false);
    const [editAddress, setEditAddress] = useState("");
    const [address, setAddress] = useState(null);
    const [checked, setChecked] = useState(true);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    async function getAddresses() {
        setLoading(true)
        const data = await UserRepository.getAdressesRequest();
        let billingAddresses = []
        let shippingAddresses = []
        if (data) {
            data.map((key) => (key["address_type"] == 'S' ? shippingAddresses.push(key) : billingAddresses.push(key)))
            billingAddresses.length ? setBillingA(billingAddresses) : null;
            shippingAddresses.length ? setShippingA(shippingAddresses) : null;
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    };

    async function changeActiveAdress(e) {
        setLoading(true)
        e.is_active = true;
        const data = await UserRepository.updateAdressesRequest(e);
        if (data) {
            getAddresses()
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    };

    useEffect(() => {
        getAddresses();
    }, [isQuickView])

    const handleShowQuickView = (e, address_type) => {
        setEditAddress(address_type);
        e.preventDefault();
        setIsQuickView(true);
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        form.resetFields()
        setIsQuickView(false);
        setAddress(null);
    };

    const handleHideQuickViewBasic = () => {
        form.resetFields()
        getAddresses();
        setIsQuickView(false);
        setAddress(null);
    };

    const handleEditAddress = (e, addressDetails) => {
        e.preventDefault();
        e.stopPropagation();
        setAddress(addressDetails);
        setTimeout(
            function () {
                handleShowQuickView(e, addressDetails.address_type);
            }.bind(this),
            500
        );
    };

    const onChange = (e) => {
        setChecked(e.target.checked);
    };

    const handleAddressSubmit = () => {
        // billing address and shipping address should be sent separetly
        if (typeof window !== 'undefined') {
            shippingA[0].email = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).email;
            dispatch(orderInfo(shippingA[0]));
            Router.push('/uyelik/siparis-odeme');
        }
    };

    return (
        <section className="ps-my-account ps-page--account">
            {!loading ?
                <div className="container">
                    <div className="col-md-12 col-12">
                        <figure className="ps-block--address">
                            <figcaption>
                                Teslimat Adresi
                            </figcaption>
                            <div className="ps-block__content">
                                {shippingA ?
                                    <form className='ps-profile__adresses'>
                                        {shippingA.map((item, index) => (
                                            <div onClick={() => changeActiveAdress(item)} key={index}>
                                                <input type="radio" id={item.title} name={"address"} checked={item.is_active} />
                                                <label for={"address" + index}><b>{item.title}</b><br></br>{item.address}<br></br>{item.city + "/" + item.country}<br></br>{item.phone}</label>
                                                <i onClick={(e) => handleEditAddress(e, item)} className="icon-pencil4"></i>
                                            </div>
                                        ))}
                                    </form> :
                                    <p>
                                        Henüz herhangi bir teslimat adresi eklemediniz.
                                    </p>
                                }
                                <div className='ps-profile__adresses__btn'>
                                    <a className="ps-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Quick View"
                                        onClick={(e) => handleShowQuickView(e, 'S')}>+ Yeni Adres</a>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="col-md-12 col-12">
                        <Checkbox checked={checked} className="ps-address--checkbox" onChange={(e) => onChange(e)} >
                            {'Fatura adresim teslimat adresimle aynı.'}
                        </Checkbox>
                    </div>

                    {!checked ? <div className="col-md-12 col-12">
                        <figure className="ps-block--address ps-address--bottom">
                            <figcaption>
                                Fatura Adresi
                            </figcaption>
                            <div className="ps-block__content">
                                {billingA ?
                                    <form className='ps-profile__adresses'>
                                        {billingA.map((item, index) => (
                                            <div onClick={() => changeActiveAdress(item)} key={index}>
                                                <input type="radio" id={item.title} name={"address"} checked={item.is_active} readOnly />
                                                <label htmlFor={"address" + index}><b>{item.title}</b><br></br>{item.address}<br></br>{item.city + "/" + item.country}<br></br>{item.phone}</label>
                                                <i onClick={(e) => handleEditAddress(e, item)} className="icon-pencil4"></i>
                                            </div>
                                        ))}
                                    </form> :
                                    <p>
                                        Henüz herhangi bir fatura adresi eklemediniz.
                                    </p>
                                }
                                <div className='ps-profile__adresses__btn'>
                                    <a className="ps-btn"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Quick View"
                                        onClick={(e) => handleShowQuickView(e, 'B')}>+ Yeni Adres</a>
                                </div>
                            </div>

                        </figure>
                    </div> : null}
                </div>

                : null}
            {typeof window !== 'undefined'? (JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn) ? null :
                <div>
                    <FormEditAddress form={form} address_type={"S"} handleHideQuickView={handleHideQuickViewBasic} addressDetails={address} update={address ? true : false} />
                    <div className="col-md-12 col-12">
                        <Checkbox checked={checked} className="ps-address--checkbox" onChange={(e) => onChange(e)} >
                            {'Fatura adresim teslimat adresimle aynı.'}
                        </Checkbox>
                    </div>
                </div> : null
            }
            <div className="ps-form__submit">
                <Link href="/uyelik/sepetim">
                    <a>
                        <i className="icon-arrow-left mr-2"></i>
                        Sepete geri dön
                    </a>
                </Link>
                <div className="ps-block__footer">
                    <button className="ps-btn ps-btn--black" onClick={() => handleAddressSubmit()}>Alışverişi Tamamla</button>
                </div>
            </div>
            <Modal
                centered
                footer={null}
                width={1024}
                onCancel={(e) => handleHideQuickView(e)}
                visible={isQuickView}
                closeIcon={<i className="icon icon-cross2"></i>}>
                <h3>Adres Düzenle</h3>
                <FormEditAddress form={form} address_type={editAddress} handleHideQuickView={handleHideQuickViewBasic} addressDetails={address} update={address ? true : false} />
            </Modal>
        </section>
    );
}

export default FormCheckoutInformation;

// class FormCheckoutInformation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     handleLoginSubmit = (form) => {
//         this.props.dispatch(orderInfo(form));
//         Router.push('/uyelik/siparis-odeme');
//     };

//     render() {
//         return (
//             <Form
//                 className="ps-form__billing-info"
//                 onFinish={this.handleLoginSubmit.bind(this)}>
//                 <h3 className="ps-form__heading">İletişim Bilgileri</h3>
//                 <div className="form-group">
//                     <Form.Item
//                         name="email"
//                         rules={[
//                             {
//                                 required: true,
//                                 message:
//                                     'Lütfen mailinizi girin.',
//                             },
//                         ]}>
//                         <Input
//                             className="form-control"
//                             type="text"
//                             placeholder="Email"
//                         />
//                     </Form.Item>
//                 </div>
//                 <div className="form-group">
//                     <div className="ps-checkbox">
//                         <input
//                             className="form-control"
//                             type="checkbox"
//                             id="keep-update"
//                         />
//                         <label htmlFor="keep-update">
//                             Siparişini takip etmek için üye olmak ister misin?
//                         </label>
//                     </div>
//                 </div>
//                 <h3 className="ps-form__heading">Teslim Bilgileri</h3>
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <div className="form-group">
//                             <Form.Item
//                                 name="firstName"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Lütfen isminizi giriniz.',
//                                     },
//                                 ]}>
//                                 <Input
//                                     className="form-control"
//                                     type="text"
//                                     placeholder="İsim"
//                                 />
//                             </Form.Item>
//                         </div>
//                     </div>
//                     <div className="col-sm-6">
//                         <div className="form-group">
//                             <Form.Item
//                                 name="lastName"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Lütfen soyisminizi giriniz.',
//                                     },
//                                 ]}>
//                                 <Input
//                                     className="form-control"
//                                     type="text"
//                                     placeholder="Soyisim"
//                                 />
//                             </Form.Item>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <Form.Item
//                         name="address"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Lütfen adresinizi giriniz.',
//                             },
//                         ]}>
//                         <Input
//                             className="form-control"
//                             type="text"
//                             placeholder="Adres"
//                         />
//                     </Form.Item>
//                 </div>
//                 <div className="form-group">
//                     <Form.Item
//                         name="apartment"
//                         rules={[
//                             {
//                                 required: false,
//                                 message: 'Enter an Apartment!',
//                             },
//                         ]}>
//                         <Input
//                             className="form-control"
//                             type="text"
//                             placeholder="Adres Açıklaması"
//                         />
//                     </Form.Item>
//                 </div>
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <div className="form-group">
//                             <Form.Item
//                                 name="city"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Lütfen şehrinizi seçin.',
//                                     },
//                                 ]}>
//                                 <Input
//                                     className="form-control"
//                                     type="city"
//                                     placeholder="Şehir"
//                                 />
//                             </Form.Item>
//                         </div>
//                     </div>
//                     <div className="col-sm-6">
//                         <div className="form-group">
//                             <Form.Item
//                                 name="postalCode"
//                                 rules={[
//                                     {
//                                         required: false,
//                                         message: 'Lütfen posta kodunuzu giriniz.',
//                                     },
//                                 ]}>
//                                 <Input
//                                     className="form-control"
//                                     type="postalCode"
//                                     placeholder="Posta Kodu"
//                                 />
//                             </Form.Item>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="ps-checkbox">
//                         <input
//                             className="form-control"
//                             type="checkbox"
//                             id="save-information"
//                         />
//                         <label htmlFor="save-information">
//                             Bilgilerimi gelecek sefer için kaydet.
//                         </label>
//                     </div>
//                 </div>
//                 <div className="ps-form__submit">
//                     <Link href="/uyelik/cart">
//                         <a>
//                             <i className="icon-arrow-left mr-2"></i>
//                             Sepete geri dön
//                         </a>
//                     </Link>
//                     <div className="ps-block__footer">
//                         <button className="ps-btn">Alışverişi Tamamla</button>
//                     </div>
//                 </div>
//             </Form>
//         );
//     }
// }
// const mapStateToProps = state => {
//     return state;
// };
// export default connect(mapStateToProps)(FormCheckoutInformation);
