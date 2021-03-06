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
        console.log("cart",cartItems)
        return (
            <div className="ps-cart--mobile">
                <div className="ps-cart__content">
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((product) => (
                            
                            <div
                                className="ps-product--cart-mobile"
                                key={product.item.id}>
                                <div className="ps-product__thumbnail">
                                    <Link
                                        href="/urun-detayi/[pid]"
                                        as={`/urun-detayi/${product.item.id}`}>
                                        <a>
                                            <img
                                                src={product.item.thumbnail}
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
                                        href="/urun-detayi/[pid]"
                                        as={`/urun-detayi/${product.item.id}`}>
                                        <a className="ps-product__title">
                                            {product.item.title}
                                        </a>
                                    </Link>
                                    <p>
                                        <strong>Sat??c??:</strong>{' '}
                                        {product.item.brand}
                                    </p>
                                    <small>
                                        {product.quantity} x ??? {product.product.price}
                                        {console.log(product)}
                                    </small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="ps-cart__items">
                            <span>Sepetiniz Bo??</span>
                        </div>
                    )}
                </div>
                {cartItems && cartItems.length > 0 ? (
                    <div className="ps-cart__footer">
                        <h3>
                            Toplam:<strong>???    {amount}</strong>
                        </h3>
                        <figure>
                            <Link href="/uyelik/sepetim">
                                <a className="ps-btn ps-btn--black">Sepeti Detay??</a>
                            </Link>
                            <Link href="/uyelik/siparis-bilgilerim">
                                <a className="ps-btn">Sepeti Onayla</a>
                            </Link>
                        </figure>
                    </div>
                ) : (
                    <div className="ps-cart__footer">
                        <Link href="/alisveris">
                            <a className="ps-btn ps-btn--fullwidth">Al????veri??e Ba??la</a>
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
