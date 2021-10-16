import React, { useEffect, useRef, useState, useCallback } from 'react';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import CollectionRepository from '~/repositories/CollectionRepository';


const HomepageDefaultPage = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(null);

    async function getCategories() {
        setLoading(true);
        const responseData = await CollectionRepository.getCollections();
        if (responseData) {
            setCategories(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    let listingView;
    if (!loading) {
        if (categories && categories.length > 0){
            listingView = categories.map((option)=>(
                <HomeDefaultProductListing
                collectionSlug = {option.id}
                title={option.name} />
            ))
        } else{
            listingView = <option value={0} key={"loading"}>Bekleniyor...</option>;
        }
    }

    return (
        <ContainerHomeDefault title="Eğlenceye Dair Her Şey">
            <HomeDefaultBanner />
            {listingView}
            {/* <SiteFeatures /> */}
            {/* <HomeDefaultDealOfDay collectionSlug="3" /> */}
            <HomeAdsColumns />
            <HomeDefaultTopCategories />
            {/* <HomeAds />
            <DownLoadApp />
            <NewArrivals collectionSlug="new-arrivals-products" />
            <Newletters /> */}
        </ContainerHomeDefault>
    );
};

export default HomepageDefaultPage;
