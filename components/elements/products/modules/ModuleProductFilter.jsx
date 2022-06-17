
import React, { useEffect, useState } from 'react';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';

const ModuleProductFilter = ({ productItems, brandsView, handleItemFilter, checked_filters}) => {
    return (
        <div>
            {productItems ? <WidgetShopCategories productItems={productItems} /> : null}
            <aside className="widget widget_shop widget_shop--brand">
                <h4 className="widget-title">Filtreler</h4>
                <figure>
                    {brandsView
                        ? Object.keys(brandsView).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <h5>{item} </h5>
                                        {brandsView[item].map(
                                            (subItem, subIndex) => (
                                                <div key={subIndex} className="ps-checkbox">
                                                    <input
                                                        className="form-control"
                                                        type="checkbox"
                                                        id={ item === 'Renk'
                                                                || item === 'Boyut' ?
                                                                subItem
                                                                : subItem[0]}
                                                        onChange={() => handleItemFilter(item,subItem)}
                                                        checked={checked_filters?
                                                                    checked_filters.includes('' + subItem[1]) || checked_filters.includes('' + subItem)
                                                                    : false}
                                                    />
                                                    <label
                                                        htmlFor={
                                                            item === 'Renk'
                                                                || item === 'Boyut' ?
                                                                subItem
                                                                : subItem[0]}>
                                                        {item === 'Renk'
                                                                || item === 'Boyut' ?
                                                                subItem
                                                                : subItem[0]}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                    </div>
                                );
                            }
                        )
                        : null}
                </figure>
            </aside>
            {/* <WidgetShopFilterByPriceRange /> */}            
        </div>
    );
}
export default ModuleProductFilter;