import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import UserPerms from '~/components/partials/account/UserPermissions';
import ContainerPage from '~/components/layouts/ContainerPage';

const PermissionsPage = () => {
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
                <UserPerms />
            </div>
        </ContainerPage>
    );
};

export default PermissionsPage;
