import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Blank from '~/components/partials/account/Blank';
import ContainerPage from '~/components/layouts/ContainerPage';
import UserComments from '~/components/partials/account/UserComments';
const RatingPage = () => {
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
                <UserComments />
            </div>
        </ContainerPage>
    );
};

export default RatingPage;
