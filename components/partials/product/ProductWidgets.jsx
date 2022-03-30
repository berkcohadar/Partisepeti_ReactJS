import React from 'react';
import WidgetProductFeatures from '~/components/shared/widgets/WidgetProductFeatures';
import WidgetSaleOnSite from '~/components/shared/widgets/WidgetSaleOnSite';
import WidgetProductSameBrands from '~/components/shared/widgets/WidgetProductSameBrands';
import WidgetShopAds from '~/components/shared/widgets/WidgetShopAds';

const ProductWidgets = ({ collectionSlug }) => {
    if(collectionSlug){
        console.log(collectionSlug)
    }
    return (
        <section>
            <WidgetProductSameBrands collectionSlug={collectionSlug}/>
        </section>
    );
};

export default ProductWidgets;
