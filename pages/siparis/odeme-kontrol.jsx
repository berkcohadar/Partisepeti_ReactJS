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

    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(false);

    const dispatch = useDispatch();

    async function checkPayment() {
        setLoading(true);
        const responseData = await OrderRepository.checkPaymentHelper(query.order);
        if (responseData) {
            setStatus(responseData.status);
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
                <PaymentCheck loading={loading} status={status} token={query.siparis}/>
            </div>
        </ContainerPage>
    );
};

export default connect()(PaymentCheckPage);
