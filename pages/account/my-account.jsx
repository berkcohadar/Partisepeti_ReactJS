import React from 'react';

import MyAccount from '~/components/partials/account/MyAccount';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerPage from '~/components/layouts/ContainerPage';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'My Account',
        },
    ];
    return (
        <ContainerPage title="My account" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <MyAccount />
            </div>
        </ContainerPage>
    );
};

export default MyAccountPage;
