import React, { useEffect } from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import {
    getCart,
} from '~/store/cart/action';
import { useDispatch } from 'react-redux';

const HomepageDefaultPage = () => {
    // componentDidMount
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getCart());
    // }, [dispatch]);

    return (
        <ContainerHomeDefault title="Eğlenceye Dair Her Şey">
            <HomeDefaultBanner />
            {/* <SiteFeatures /> */}
            {/* <HomeDefaultDealOfDay collectionSlug="3" /> */}
            <HomeDefaultProductListing
                collectionSlug="1"
                title="Popüler Ürünler"
            />
            <HomeDefaultProductListing
                collectionSlug="2"
                title="Kek & Kurabiye"
            />
            <HomeAdsColumns />
            <HomeDefaultTopCategories />
            <HomeDefaultProductListing
                collectionSlug="3"
                title="Hediye & Sürpriz"
            />

            <HomeDefaultProductListing
                collectionSlug="1"
                title="Parti Malzemeleri"
            />
            {/* <HomeAds />
            <DownLoadApp />
            <NewArrivals collectionSlug="new-arrivals-products" />
            <Newletters /> */}
        </ContainerHomeDefault>
    );
};

export default HomepageDefaultPage;
