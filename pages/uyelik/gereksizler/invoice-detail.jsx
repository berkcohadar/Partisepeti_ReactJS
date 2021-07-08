import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import InvoiceDetail from '~/components/partials/account/gereksizler/InvoiceDetail';
import ContainerPage from '~/components/layouts/ContainerPage';

const InvoiceDetailPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Invoice Detail',
        },
    ];
    return (
        <ContainerPage title="Invoice detail" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <InvoiceDetail />
            </div>
        </ContainerPage>
    );
};

export default InvoiceDetailPage;
