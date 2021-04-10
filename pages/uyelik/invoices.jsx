import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Invoices from '~/components/partials/account/Invoices';
import ContainerPage from '~/components/layouts/ContainerPage';

const InvoicePage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Invoices',
        },
    ];
    return (
        <ContainerPage title="Invoice" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Invoices />
            </div>
        </ContainerPage>
    );
};

export default InvoicePage;
