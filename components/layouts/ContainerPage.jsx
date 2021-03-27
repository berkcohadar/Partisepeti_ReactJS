import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import NavigationList from '~/components/shared/navigation/NavigationList';
import Newletters from '~/components/partials/commons/Newletters';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import FooterDefault from '~/components/shared/footers/FooterDefault';

const ContainerPage = ({ children, title, boxed = false }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }
    if (boxed) {
        return (
            <div className="partisepeti">
                <Head>
                    <title>{titleView}</title>
                </Head>
                <HeaderDefault />
                <HeaderMobile />
                <main>{children}</main>
                <Newletters layout="container" />
                <FooterDefault />
                <NavigationList />
            </div>
        );
    } else {
        return (
            <div className="partisepeti">
                <Head>
                    <title>{titleView}</title>
                </Head>
                <HeaderDefault />
                <HeaderMobile />
                <main>{children}</main>
                <Newletters />
                <FooterFullwidth />
                <NavigationList />
            </div>
        );
    }
};

export default ContainerPage;
