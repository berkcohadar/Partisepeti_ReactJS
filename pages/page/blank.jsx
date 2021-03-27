import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import BlankContent from '~/components/partials/page/Blank';
import ContainerPage from '~/components/layouts/ContainerPage';

const BlankPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Blank Page',
        },
    ];

    return (
        <ContainerPage title="Blank page" boxed={true}>
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <BlankContent />
            </div>
        </ContainerPage>
    );
};

export default BlankPage;
