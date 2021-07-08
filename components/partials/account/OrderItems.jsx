import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';
import { BackTop } from 'antd';

import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';

class OrderItems extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
                <div className="container">
                    <div className="ps-section__content" style={{background:"transparent"}}>
                        <div className="table-responsive" style={{maxHeight:"35vh",overflowY:"scroll"}}>
                            <table className="table ps-table--shopping-cart" >
                                <tbody>
                                    {currentCartItems.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <ProductCart
                                                    product={product}
                                                />
                                            </td>
                                            <td className="price">
                                            ₺   {product.products[0].cart_price}
                                            </td>
                                            <td>
                                                <div className="form-group--number">
                                                    1 Adet
                                                </div>
                                            </td>
                                            <td>
                                            ₺ {product.quantity *
                                                    product.products[0].cart_price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="ps-section__cart-actions">
                            <Link href="/alisveris">
                                <a>
                                    <i className="icon-arrow-left mr-2"></i>
                                    Alışverişe geri dön
                                </a>
                            </Link>
                        </div> */}
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(OrderItems);
