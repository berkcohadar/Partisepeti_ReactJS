import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import ShoppingCart from '~/components/partials/account/ShoppingCart';
import ContainerPage from '~/components/layouts/ContainerPage';

const ShoppingCartPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Shopping Cart',
        },
    ];
    return (
        <ContainerPage title="Shopping Cart" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <ShoppingCart />
            </div>
        </ContainerPage>
    );
};

export default ShoppingCartPage;
