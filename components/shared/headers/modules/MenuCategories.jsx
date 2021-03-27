import React, { useEffect, useRef, useState } from 'react';
import menuData from '~/public/static/data/menu.json';
import Menu from '~/components/elements/menu/Menu';
import MediaRepository from '~/repositories/MediaRepository';


const MenuCategories = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        setLoading(true);
        const data = MediaRepository.getSliderMenu();
        data.then((result) => {
            setCategories(result);
            setLoading(false);
        });
    }, []);
    let menudata;
    if (!loading) {
        if (categories && categories.length > 0){
            menudata = (<Menu source={categories} className="menu--dropdown" />);
        }
    }
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span>Kategoriye Göre Alışveriş</span>
            </div>
            <div className="menu__content">
                {menudata}
            </div>
        </div>
    );
}

export default MenuCategories;
