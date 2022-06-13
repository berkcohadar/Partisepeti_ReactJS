import React from 'react';
import { StrapiProductPrice } from '~/utilities/product-helper';
import { useDispatch } from 'react-redux';
import { addItemToCompare } from '~/store/compare/action';
import { addItemToWishlist } from '~/store/wishlist/action';

const ModuleProductWideActions = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddItemToCompare = (e) => {
        e.preventDefault();
        dispatch(addItemToCompare(product));
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        dispatch(addItemToWishlist(product));
    };

    return (
        <div className="ps-product__shopping">
            {StrapiProductPrice(product)}

            <div className="ps-product__shopping-actions">
                <a className="ps-product__fav" href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                    <i className="icon-heart"></i>
                </a>
                <a className="ps-btn" href="#">
                    Sepete Ekle
                </a>

            </div>

        </div>
    );
};

export default ModuleProductWideActions;
