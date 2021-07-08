import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Wishlist from '~/components/partials/account/Wishlist';
import ContainerPage from '~/components/layouts/ContainerPage';

const WishlistPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Wishlist',
        },
    ];
    return (
        <ContainerPage title="wishlist" boxed={true}>
            <div className="ps-page--simple">
                {/* <BreadCrumb breacrumb={breadCrumb} /> */}
                <Wishlist />
            </div>
        </ContainerPage>
    );
};

export default WishlistPage;
