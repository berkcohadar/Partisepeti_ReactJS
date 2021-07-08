import React from 'react';
import OrderTracking from '~/components/partials/account/gereksizler/OrderTracking';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerPage from '~/components/layouts/ContainerPage';

const OrderTrackingPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Order Tracking',
        },
    ];
    return (
        <ContainerPage title="Order Tracking" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <OrderTracking />
            </div>
        </ContainerPage>
    );
};

export default OrderTrackingPage;
