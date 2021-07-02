import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';
import ContainerPage from '~/components/layouts/ContainerPage';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Addresses',
        },
    ];
    return (
        <ContainerPage boxed={true} title="Address">
            <div className="ps-page--my-account">
                {/* <BreadCrumb breacrumb={breadCrumb} /> */}
                <Addresses />
            </div>
        </ContainerPage>
    );
};

export default MyAccountPage;
