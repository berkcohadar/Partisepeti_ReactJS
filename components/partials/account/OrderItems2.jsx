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

class OrderItems2 extends Component {
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
                        {this.props.order.order_items.map(product => (
                            <div className="ps-order__items--area" style= {{display:"flex"}}>
                                <div className="ps-order__items--thumbnail">
                                    <img src={product.product.item.thumbnail.replace('image/upload/','')} alt={"trial"}/>
                                </div>
                                <div className="ps-order__items--details">
                                    <p className="ps-order__items--details__title">{product.product.item.title}</p>
                                    <p className="ps-order__items--details__quantity">Adet: {product.quantity}</p>
                                    <p className="ps-order__items--details__price">Birim: ₺{product.price}</p>

                                </div>
                                <div className="ps-order__items--price">
                                <p className="ps-order__items--price__total">₺   {product.total_price}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return state.order;
};
export default connect(mapStateToProps)(OrderItems2);
