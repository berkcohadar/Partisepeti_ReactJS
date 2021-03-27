import React from 'react';
import Head from 'next/head';
/*import WPHeaderMobile from '~/wp-components/shared/mobile/WPHeaderMobile';*/
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newsletters from '~/components/partials/commons/Newletters';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import NavigationList from '~/components/shared/navigation/NavigationList';

const LayoutDefault = ({ children, title }) => {
    let titleView;
    if (title !== undefined) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="partisepeti">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderDefault />
            <NavigationList />
            {children}
            {/* <Newsletters layout="container" /> */}
            <FooterDefault />
        </div>
    );
};

export default LayoutDefault;
