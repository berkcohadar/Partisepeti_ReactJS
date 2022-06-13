import React, { useEffect } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Checkout from '~/components/partials/account/Checkout';
import { getCart } from '~/store/cart/action';
import { connect, useDispatch } from 'react-redux';
import ContainerPage from '~/components/layouts/ContainerPage';
import Router from 'next/router';

const CheckoutPage = () => {
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
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
        if(!(JSON.parse( JSON.parse( localStorage.getItem('persist:partisepeti') ).auth ).isLoggedIn)) Router.push('/uyelik/giris')

    }, [dispatch]);

    return (
        <ContainerPage title="Checkout" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Checkout />
            </div>
        </ContainerPage>
    );
};

export default connect()(CheckoutPage);
