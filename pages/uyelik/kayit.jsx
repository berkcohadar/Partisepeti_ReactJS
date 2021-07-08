import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Register from '~/components/partials/account/Register';
import ContainerPage from '~/components/layouts/ContainerPage';

const RegisterPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Üye Ol',
        },
    ];

    return (
        <ContainerPage title="Register" boxed={true}>
            <div className="ps-page--my-account">
                {/* <BreadCrumb breacrumb={breadCrumb} /> */}
                <Register />
            </div>
        </ContainerPage>
    );
};

export default RegisterPage;
