import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem } from '~/store/cart/action';
import ProductOnCart from '~/components/elements/products/ProductOnCart';

class MiniCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        // views
        let cartItemsView;
        if (cartItems && cartItems.length > 0) {
            const productItems = cartItems.map((item) => {
                return <ProductOnCart product={item} key={item.id} />;
            });
            cartItemsView = (
                <div className="ps-cart__content">
                    <div className="ps-cart__items">{productItems}</div>
                    <div className="ps-cart__footer">
                        <h3>
                            Toplam:
                            <strong>₺ {amount ? amount : 0}</strong>
                        </h3>
                        <figure>
                            <Link href="/uyelik/sepetim">
                                <a className="ps-btn ps-btn--black">Detay</a>
                            </Link>
                            <Link href="/uyelik/siparis-bilgilerim">
                                <a className="ps-btn ">Satın Al</a>
                            </Link>
                        </figure>
                    </div>
                </div>
            );
        } else {
            cartItemsView = (
                <div className="ps-cart__content">
                    <div className="ps-cart__items">
                        <span>Sepetiniz Boş</span>
                    </div>
                </div>
            );
        }

        return (
            <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                    {cartTotal ? (
                        <i className="icon-cart-full"></i>
                    ) : (
                        <i className="icon-cart"></i>
                    )}
                    <span>
                        <i>{cartTotal ? cartTotal : 0}</i>
                    </span>
                </a>
                {cartItemsView}
            </div>
        );
    }
}

export default connect((state) => state.cart)(MiniCart);
