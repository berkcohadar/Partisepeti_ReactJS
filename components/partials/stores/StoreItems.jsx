import React, { useEffect, useState } from 'react';
import { getStoresHelper } from '~/utilities/store-helpers';
import StoreDefault from '~/components/elements/stores/StoreDefault';

const StoreItems = () => {
    const [loading, setLoading] = useState(false);

    let storesItemsView;
    storesItemsView = (
        <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 "
            key={1}>
            <StoreDefault />
        </div>
    );

    return <div className="ps-stores-items row">{storesItemsView}</div>;
};

export default StoreItems;
