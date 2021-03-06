import React, { useState } from 'react';
import { addItem } from '~/store/cart/action';
import { addItemToWishlist } from '~/store/wishlist/action';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const ModuleDetailShoppingActions = ({ product, extended = false, quantity, setQuantity }) => {
    const dispatch = useDispatch();
    // const [quantity, setQuantity] = useState(1);
    const Router = useRouter();

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        let tmp = product;
        tmp.quantity = quantity;
        dispatch(addItem(tmp));
    };

    const handleBuynow = (e) => {
        e.preventDefault();
        let tmp = product;
        tmp.quantity = quantity;
        dispatch(addItem(tmp));
        setTimeout(function () {
            Router.push('/uyelik/siparis-bilgilerim');
        }, 1000);
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        let tmp = product;
        dispatch(addItemToWishlist(tmp));
    };

    const handleIncreaseItemQty = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(1)
        }
    };
    const handleSetQuantity = (e) => {
        e.preventDefault();
        if (e){
            if (parseInt(e.target.value) > 0) setQuantity(parseInt(e.target.value));
            else setQuantity(1)
        } else{
            setQuantity(1)
        }
    };
    if (!extended) {
        return (
            <div className="ps-product__shopping">
                <figure>
                    <div className="form-group--number">
                        <button
                            className="up"
                            onClick={(e) => handleIncreaseItemQty(e)}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button
                            className="down"
                            onClick={(e) => handleDecreaseItemQty(e)}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(e) => handleSetQuantity(e)}
                            value={quantity?quantity:1}
                        />
                    </div>
                </figure>
                <a
                    className="ps-btn"
                    href="#"
                    onClick={(e) => handleAddItemToCart(e)}>
                    Sepete Ekle
                </a>
                <a className="ps-btn ps-btn--black" href="#" onClick={(e) => handleBuynow(e)}>
                    Hemen Al
                </a>
                <div className="ps-product__actions">
                    <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                        <i className="icon-heart"></i>
                    </a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-product__shopping extend">
                <div className="ps-product__btn-group">
                    <figure>
                        <figcaption>Adet</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={(e) => handleIncreaseItemQty(e)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={(e) => handleDecreaseItemQty(e)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="number"
                                placeholder={quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Sepete Ekle
                    </a>
                    <a
                        className="ps-btn" href="#" onClick={(e) => handleBuynow(e)}>
                        Hemen Al
                    </a>

                </div>
                <div className="ps-product__actions">
                        <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                            <i className="icon-heart"></i>
                        </a>
                    </div>
            </div>
        );
    }
};

export default ModuleDetailShoppingActions;
