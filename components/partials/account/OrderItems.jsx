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

        return (
                <div className="container">
                    <div className="ps-section__content" style={{background:"transparent"}}>
                        <div className="table-responsive" style={{maxHeight:"460px",overflowY:"scroll"}}>
                            <table className="table ps-table--shopping-cart" >
                                <tbody>
                                    {this.props.order.order_items.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <ProductCart
                                                    product={product}
                                                />
                                            </td>
                                            <td className="price">
                                            ₺   {product.price}
                                            </td>
                                            <td>
                                                <div className="form-group--number">
                                                    {product.quantity}
                                                </div>
                                            </td>
                                            <td>
                                            ₺ {product.total_price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return state.order;
};
export default connect(mapStateToProps)(OrderItems);
