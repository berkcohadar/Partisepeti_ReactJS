import React, { useEffect, useState } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import PaymentCheck from '~/components/partials/account/PaymentCheck';
import { getCart } from '~/store/cart/action';
import { connect, useDispatch } from 'react-redux';
import ContainerPage from '~/components/layouts/ContainerPage';
import { useRouter } from 'next/router';
import OrderRepository from '~/repositories/OrderRepository';

const PaymentCheckPage = () => {
    const Router = useRouter();
    const { query } = Router;

    // query = ?siparis=TOKEN
    // siparis/odeme-kontrol?siparis=1
    
    // address: "Turgut Özal Bulvarı İdealtepe Mahallesi No :101 - Partisepeti Mağazası"
    // city: "Maltepe"
    // country: "Turkiye"
    // created_at: "2021-10-26T19:46:58.286678+03:00"
    // email: "satici@partisepeti.com"
    // first_name: "Berk"
    // id: 6
    // items: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // last_name: "Cohadar"
    // order_status: "P"
    // phone: "5382721098"
    // zip_code: "34841"

    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(false);

    const dispatch = useDispatch();
    async function checkPayment() {
        setLoading(true);
        const responseData = await OrderRepository.checkPaymentHelper(query.siparis);
        console.log("\n\n",responseData)
        if (responseData) {
            setStatus(responseData.order_status);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
        else{
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        checkPayment();
        dispatch(getCart());
    }, [dispatch]);

    return (
        <ContainerPage title="Checkout" boxed={true}>
            <div className="ps-page--simple">
                {status?<PaymentCheck loading={loading} status={status} token={query.siparis}/>:null}
            </div>
        </ContainerPage>
    );
};

export default connect()(PaymentCheckPage);
