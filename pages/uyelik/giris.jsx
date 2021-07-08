import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Login from '~/components/partials/account/Login';
import ContainerPage from '~/components/layouts/ContainerPage';

const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Giriş Yap',
        },
    ];
    return (
        <ContainerPage title="Login" boxed={true}>
            <div className="ps-page--my-account">
                {/* <BreadCrumb breacrumb={breadCrumb} /> */}
                <Login />
            </div>
        </ContainerPage>
    );
};

export default LoginPage;
