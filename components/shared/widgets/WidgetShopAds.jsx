import React from 'react';
import Link from 'next/link';

const WidgetShopAds = () => {
    return (
        <aside className="widget widget_ads">
            <Link href="/alisveris">
                <a>
                    <img src="/static/img/ads/product-ads.png" alt="partisepeti" />
                </a>
            </Link>
        </aside>
    );
};

export default WidgetShopAds;
