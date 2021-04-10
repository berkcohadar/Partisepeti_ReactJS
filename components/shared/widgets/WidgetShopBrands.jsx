import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { Checkbox } from 'antd';
import { Radio, Input } from 'antd';
import { useRouter } from 'next/router';

const WidgetShopBrands = ({ productItems }) => {
    const Router = useRouter();
    let brandsView;

    if (productItems && productItems.length > 0) {
        brandsView = productItems.map((item) => item.title);
    }

    return (
        <aside className="widget widget_shop widget_shop--brand">
            <h4 className="widget-title">By Brands</h4>
            <figure>
                {brandsView?brandsView.map((item, index) => {
                    return (
                        <div className="ps-checkbox">
                            <input
                                className="form-control"
                                type="checkbox"
                                id={index}
                                onChange={()=>changeHandle(index)}
                            />
                            <label htmlFor={index}>{item}</label>
                        </div>
                    );
                }):null}
            </figure>
        </aside>
    );
};

export default WidgetShopBrands;
