import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import OurTeam from '~/components/partials/page/about-us/OurTeam';
import AboutAwards from '~/components/partials/page/about-us/AboutAwards';
import ContainerPage from '~/components/layouts/ContainerPage';

const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'About Us',
        },
    ];
    return (
        <ContainerPage title="About Us" boxed={true}>
            <div className="ps-page--single">
                <img src="/static/img/bg/about-us.jpg" alt="" />
                <BreadCrumb breacrumb={breadCrumb} />
                <OurTeam />
                <AboutAwards />
            </div>
        </ContainerPage>
    );
};
export default AboutUsPage;
