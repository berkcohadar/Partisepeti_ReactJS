import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { notification } from 'antd';

import menuData from '../../../public/static/data/menu';
import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';

import MediaRepository from '~/repositories/MediaRepository';
import Menu from '~/components/elements/menu/Menu';

const NavigationDefault = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        setLoading(true);
        const data = MediaRepository.getNavigationMenu();
        data.then((result) => {
            setCategories(result);
            setLoading(false);
        });
    }, []);

    let menudata;

    if (!loading) {
        if (categories && categories.length > 0){
            menudata = (<Menu
                source={categories}
                className="menu"
            />);
        }
    }

    return (
        <nav className="navigation">
            <div className="ps-container">
                <div className="navigation__left">
                    <MenuCategoriesDropdown />
                </div>
                <div className="navigation__right">
                    {menudata}
                    <ul className="navigation__extra">
                        <li>
                            <Link href="/vendor/become-a-vendor">
                                <a>Partisepeti'nde Sat!</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/uyelik/order-tracking">
                                <a>Siparişim Nerede?</a>
                            </Link>
                        </li>
                        {/* <li>
                            <CurrencyDropdown />
                        </li>
                        <li>
                            <LanguageSwicher />
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationDefault;
