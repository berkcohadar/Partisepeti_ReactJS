import React, { useEffect, useRef, useState, useCallback  }  from 'react';
import Link from 'next/link';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import FormEditAddress from './modules/FormEditAddress';

import UserRepository from '~/repositories/UserRepository';
import { Form,Modal } from 'antd';

const Addresses = () => {
    const [ billingA, setBillingA] = useState(null);
    const [ shippingA, setShippingA] = useState(null);
    const [ loading, setLoading] = useState(false);
    const [isQuickView, setIsQuickView] = useState(false);
    const [editAddress, setEditAddress] = useState("");
    const [address, setAddress] = useState(null);
    const [form] = Form.useForm();

    const nullAddress = {
        address: "",
        address_type: "",
        city: "",
        country: "",
        first_name: "",
        id: "",
        is_active: false,
        last_name: "",
        phone: "",
        title: "",
        zip_code: "",
    }

    async function getAddresses() {
        setLoading(true)
        const data = await UserRepository.getAdressesRequest();
        let billingAddresses = []
        let shippingAddresses = []
        if (data) {
            data.map((key)=>(key["address_type"] == 'S'? shippingAddresses.push(key) : billingAddresses.push(key)))
            billingAddresses.length ? setBillingA(billingAddresses):null;
            shippingAddresses.length ? setShippingA(shippingAddresses):null;
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    async function changeActiveAdress(e) {
        setLoading(true)
        e.is_active = true;
        const data = await UserRepository.updateAdressesRequest(e);
        if (data){
            getAddresses()
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getAddresses();
    },[isQuickView])

    const handleShowQuickView = (e,address_type) => {
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
    }

    const handleEditAddress = (e,addressDetails) => {
        e.preventDefault();
        e.stopPropagation();
        setAddress(addressDetails);
        setTimeout(
            function () {
                handleShowQuickView(e,addressDetails.address_type);
            }.bind(this),
            500
        );
    }

    return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-page__left">
                                <AccountMenuSidebar data={null} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-section--account-setting">
                            <div className="ps-section__header">
                                        <h3>Adreslerim</h3>
                                    </div>
                                    {!loading ?
                                <div className="ps-section__content">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Fatura Adresi
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    {billingA?
                                                    <form className='ps-profile__adresses'>
                                                        {billingA.map((item,index)=>(
                                                        <div onClick={() => changeActiveAdress(item)} key={index}>
                                                            <input type="radio" id={item.title} name={"address"} checked={item.is_active} readOnly/>
                                                            <label htmlFor={"address"+index}><b>{item.title}</b><br></br>{item.address}<br></br>{item.city +"/"+item.country}<br></br>{item.phone}</label>
                                                            <i onClick={(e) => handleEditAddress(e,item)} className="icon-pencil4"></i>
                                                    </div>
                                                    ))}
                                                    </form> :
                                                    <p>
                                                        Hen??z herhangi bir fatura adresi eklemediniz.
                                                    </p>
                                                    }
                                                    <div className='ps-profile__adresses__btn'>
                                                            <a className="ps-btn"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Quick View"
                                                            onClick={(e)=>handleShowQuickView(e,'B')}>+ Ekle</a>
                                                    </div>
                                                </div>
                                                
                                            </figure>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                Teslimat Adresi
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    {shippingA?
                                                    <form className='ps-profile__adresses'>
                                                        {shippingA.map((item,index)=>(
                                                        <div onClick={() => changeActiveAdress(item)} key={index}>
                                                            <input type="radio" id={item.title} name={"address"} checked={item.is_active} />
                                                            <label for={"address"+index}><b>{item.title}</b><br></br>{item.address}<br></br>{item.city +"/"+item.country}<br></br>{item.phone}</label>
                                                            <i onClick={(e) => handleEditAddress(e,item)} className="icon-pencil4"></i>
                                                        </div>
                                                        ))}
                                                    </form> :
                                                    <p>
                                                        Hen??z herhangi bir teslimat adresi eklemediniz.
                                                    </p>
                                                    }
                                                    <div className='ps-profile__adresses__btn'>
                                                            <a className="ps-btn"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Quick View"
                                                            onClick={(e)=>handleShowQuickView(e,'S')}>+ Ekle</a>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>:null}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    centered
                    footer={null}
                    width={1024}
                    onCancel={(e) => handleHideQuickView(e)}
                    visible={isQuickView}
                    closeIcon={<i className="icon icon-cross2"></i>}>
                        <h3>Adres D??zenle</h3>
                        <FormEditAddress form={form} address_type={editAddress} handleHideQuickView={handleHideQuickViewBasic} addressDetails={address} update={address?true:false}/>
                </Modal>
            </section>
        );
}

export default Addresses;
