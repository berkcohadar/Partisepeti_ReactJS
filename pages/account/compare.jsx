import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Compare from '~/components/partials/account/Compare';
import ContainerPage from '~/components/layouts/ContainerPage';

const ComparePage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Compare',
        },
    ];
    return (
        <ContainerPage title="Compare" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Compare />
            </div>
        </ContainerPage>
    );
};

export default ComparePage;
