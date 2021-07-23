import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Blank from '~/components/partials/account/Blank';
import ContainerPage from '~/components/layouts/ContainerPage';

const CollectionPage = () => {
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
                <Blank />
            </div>
        </ContainerPage>
    );
};

export default CollectionPage;
