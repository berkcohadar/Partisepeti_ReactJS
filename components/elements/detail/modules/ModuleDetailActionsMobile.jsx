import React, { useState } from 'react';
import { addItem } from '~/store/cart/action';
import { useDispatch } from 'react-redux';

const ModuleDetailActionsMobile = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddItemToCart = (e) => {
        e.preventDefault();
        let tmp = product;
        tmp.quantity = 1;
        dispatch(addItem(tmp));
    };
    return (
        <div className="ps-product__actions-mobile">
            <a
                className="ps-btn ps-btn--black"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Sepete Ekle
            </a>
            <a
                className="ps-btn"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Hemen Al
            </a>
        </div>
    );
};

export default ModuleDetailActionsMobile;
