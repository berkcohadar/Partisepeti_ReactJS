import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Blank from '~/components/partials/account/Blank';
import Help from '~/components/partials/account/Help';

import ContainerPage from '~/components/layouts/ContainerPage';

const HelpPage = () => {
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
                <Help />
            </div>
        </ContainerPage>
    );
};

export default HelpPage;
