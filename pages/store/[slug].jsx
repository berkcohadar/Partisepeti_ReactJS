import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreDetail from '~/components/partials/stores/StoreDetail';

const StoreDetailPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Store list',
            url: '/stores',
        },
        {
            text: 'Store Detail',
        },
    ];

    return (
        <ContainerPage title="Store" boxed={true}>
            <BreadCrumb breacrumb={breadCrumb} />
            <StoreDetail />
        </ContainerPage>
    );
};

export default StoreDetailPage;
