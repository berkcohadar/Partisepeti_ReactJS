import React, { useEffect } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Payment from '~/components/partials/account/Payment';
import { useDispatch, connect } from 'react-redux';
import { getCart } from '~/store/cart/action';
import ContainerPage from '~/components/layouts/ContainerPage';
import Router from 'next/router';

const PaymentPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Alışveriş Sepetim',
            url: '/uyelik/sepetim',
        },
        {
            text: 'Ödeme Bilgileri',
            url: '/uyelik/siparis-bilgilerim',
        },
        {
            text: 'Payment',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
        if(!(JSON.parse( JSON.parse( localStorage.getItem('persist:partisepeti') ).auth ).isLoggedIn)) Router.push('/uyelik/giris')

    }, [dispatch]);

    return (
        <ContainerPage title="Payment" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Payment />
            </div>
        </ContainerPage>
    );
};

export default connect()(PaymentPage);
