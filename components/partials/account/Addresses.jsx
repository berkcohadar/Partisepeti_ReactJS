import React, { useEffect, useRef, useState, useCallback  }  from 'react';
import Link from 'next/link';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import UserRepository from '~/repositories/UserRepository';

const Addresses = () => {

    // get the adresses
    // if adresses then option values with 'Düzenle' button
    // else message

    const [ billingA, setBillingA] = useState(null);
    const [ shippingA, setShippingA] = useState(null);

    async function getAddresses() {
        const data = UserRepository.getAdressesRequest();
        let billingAddresses = []
        let shippingAddresses = []
        data.then((result) => {
            result.map((key)=>(key["address_type"] == 'S'? shippingAddresses.push(key) : billingAddresses.push(key)))
            billingAddresses.length ? setBillingA(billingAddresses):null;
            shippingAddresses.length ? setShippingA(shippingAddresses):null;
        });
    }
    async function changeActiveAdress(e) {
        const data = UserRepository.updateAdressesRequest(e);
        // "customer": e.email,
        // "first_name": e.first_name,
        // "last_name": e.last_name,
        // "phone": e.phone,
        // "city": e.city,
        // "address": e.address,
        // "zip": e.zip,
        // "country": e.country,
        // "active": true,
        // "address_type": e.address_type
        data.then((result) => {
        });
    }

    useEffect(() => {
        if (billingA == null && shippingA == null ) getAddresses();
    })

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
                                                        <div onClick={() => console.log("tiklandi")} key={index}>
                                                            <input type="radio" id={item.title} name={"address"} checked={true}/>
                                                            <label for={"address"+index}><b>{item.title}</b><br></br>{item.address}<br></br>{item.city +"/"+item.country}<br></br>{item.phone}</label>
                                                    </div>
                                                    ))}
                                                    </form> :
                                                    <p>
                                                        Henüz herhangi bir fatura adresi eklemediniz.
                                                    </p>
                                                    }
                                                    <div className='ps-profile__adresses__btn'>
                                                        <Link href="/uyelik/adres-duzenle">
                                                            <a class="ps-btn">+ Ekle</a>
                                                        </Link>
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
                                                        <div onClick={() => console.log("tiklandi")} key={index}>
                                                            <input type="radio" id={item.title} name={"address"} checked={true} />
                                                            <label for={"address"+index}><b>{item.title}</b><br></br>{item.address}<br></br>{item.city +"/"+item.country}<br></br>{item.phone}</label>
                                                        </div>
                                                        ))}
                                                    </form> :
                                                    <p>
                                                        Henüz herhangi bir teslimat adresi eklemediniz.
                                                    </p>
                                                    }
                                                    <div className='ps-profile__adresses__btn'>
                                                        <Link href="/uyelik/adres-duzenle">
                                                            <a class="ps-btn">+ Ekle</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Addresses;
