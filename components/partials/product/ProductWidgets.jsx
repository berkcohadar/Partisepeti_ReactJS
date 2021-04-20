import React from 'react';
import WidgetProductFeatures from '~/components/shared/widgets/WidgetProductFeatures';
import WidgetSaleOnSite from '~/components/shared/widgets/WidgetSaleOnSite';
import WidgetProductSameBrands from '~/components/shared/widgets/WidgetProductSameBrands';
import WidgetShopAds from '~/components/shared/widgets/WidgetShopAds';

const ProductWidgets = () => {
    return (
        <section>
            <WidgetProductSameBrands collectionSlug="1" />
            <WidgetProductFeatures />
            <WidgetSaleOnSite />
            <WidgetShopAds />
        </section>
    );
};

export default ProductWidgets;
