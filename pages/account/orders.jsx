import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import EditAddress from '~/components/partials/account/EditAddress';
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
                <EditAddress />
            </div>
        </ContainerPage>
    );
};

export default CustomerOrdersPage;
