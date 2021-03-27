import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import UserInformation from '~/components/partials/account/UserInformation';
import ContainerPage from '~/components/layouts/ContainerPage';

const UserInformationPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'User Information',
        },
    ];

    return (
        <ContainerPage title="User Information" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <UserInformation />
            </div>
        </ContainerPage>
    );
};

export default UserInformationPage;
