import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Orders from '~/components/partials/account/Orders';
import ContainerPage from '~/components/layouts/ContainerPage';

const CustomerOrdersPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Orders',
        },
    ];
    return (
        <ContainerPage title="Edit Address" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Orders />
            </div>
        </ContainerPage>
    );
};

export default CustomerOrdersPage;
