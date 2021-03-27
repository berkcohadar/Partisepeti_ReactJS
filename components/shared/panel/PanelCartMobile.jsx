import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, removeItem } from '../../../store/cart/action';
import Link from 'next/link';
import { baseUrl } from '../../../repositories/Repository';

class PanelCartMobile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartItems } = this.props;
        return (
            <div className="ps-cart--mobile">
                <div className="ps-cart__content">
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((product) => (
                            <div
                                className="ps-product--cart-mobile"
                                key={product.id}>
                                <div className="ps-product__thumbnail">
                                    <Link
                                        href="/product/[pid]"
                                        as={`/product/${product.id}`}>
                                        <a>
                                            <img
                                                src={product.thumbnail}
                                                alt="partisepeti"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="ps-product__content">
                                    <a
                                        className="ps-product__remove"
                                        onClick={this.handleRemoveCartItem.bind(
                                            this,
                                            product
                                        )}>
                                        <i className="icon-cross"></i>
                                    </a>
                                    <Link
                                        href="/product/[pid]"
                                        as={`/product/${product.id}`}>
                                        <a className="ps-product__title">
                                            {product.title}
                                        </a>
                                    </Link>
                                    <p>
                                        <strong>Satıcı:</strong>{' '}
                                        {product.brand}
                                    </p>
                                    <small>
                                        {product.quantity} x ₺  {product.products[0].cart_price}
                                    </small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="ps-cart__items">
                            <span>Sepetiniz Boş</span>
                        </div>
                    )}
                </div>
                {cartItems && cartItems.length > 0 ? (
                    <div className="ps-cart__footer">
                        <h3>
                            Toplam:<strong>₺    {amount}</strong>
                        </h3>
                        <figure>
                            <Link href="/account/shopping-cart">
                                <a className="ps-btn ps-btn--black">Sepeti Detayı</a>
                            </Link>
                            <Link href="/account/checkout">
                                <a className="ps-btn">Sepeti Onayla</a>
                            </Link>
                        </figure>
                    </div>
                ) : (
                    <div className="ps-cart__footer">
                        <Link href="/alisveris">
                            <a className="ps-btn ps-btn--fullwidth">Alışverişe Başla</a>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(PanelCartMobile);
