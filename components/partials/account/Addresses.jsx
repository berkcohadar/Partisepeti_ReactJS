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

    useEffect(() => {
        const data = UserRepository.getAdressesRequest();
        data.then((result) => {
            console.log(result);
            // setBillingA(result);
            // setShippingA(result);
        });
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
                                                        {billingA.map((item,index)=>{
                                                        <div key={index}>
                                                            <input type="radio" id={item.address_title} name={"address"+index} value={"address"+index}/>
                                                            <label for={"address"+index}>{item.address_title}</label>
                                                        </div>
                                                        })}
                                                    </form> :
                                                    <p>
                                                        Henüz herhangi bir fatura adresi eklemediniz.
                                                    </p>
                                                    }
                                                    <Link href="/uyelik/adres-duzenle">
                                                        <a>Ekle</a>
                                                    </Link>
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
                                                        {shippingA.map((item,index)=>{
                                                        <div key={index}>
                                                            <input type="radio" id={item.address_title} name={"address"+index} value={"address"+index}/>
                                                            <label for={"address"+index}>{item.address_title}</label>
                                                        </div>
                                                        })}
                                                    </form> :
                                                    <p>
                                                        Henüz herhangi bir teslimat adresi eklemediniz.
                                                    </p>
                                                    }
                                                    <Link href="/uyelik/adres-duzenle">
                                                        <a>Ekle</a>
                                                    </Link>
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
