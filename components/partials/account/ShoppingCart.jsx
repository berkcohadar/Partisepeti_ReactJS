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

class ShoppingCart extends Component {
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

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Sepet Detayı</h1>
                    </div>
                    <div className="ps-cart-display-page">
                        <div className="ps-section__content">
                            <div className="table-responsive">
                                <table className="table ps-table--shopping-cart">
                                    <thead>
                                        <tr>
                                            <th>Ürün</th>
                                            <th>Fiyat</th>
                                            <th>Adet</th>
                                            <th>Toplam</th>
                                            <th>{'\t'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentCartItems.map((product) => (
                                            <tr key={product.id}>
                                                <td>
                                                    <ProductCart
                                                        product={product}
                                                    />
                                                </td>
                                                <td className="price">
                                                    ₺{' '}
                                                    {
                                                        product.product.price
                                                    }
                                                </td>
                                                <td>
                                                    <div className="form-group--number">
                                                        <button
                                                            className="up"
                                                            onClick={this.handleIncreaseItemQty.bind(
                                                                this,
                                                                product
                                                            )}>
                                                            +
                                                        </button>
                                                        <button
                                                            className="down"
                                                            onClick={this.handleDecreaseItemQty.bind(
                                                                this,
                                                                product
                                                            )}>
                                                            -
                                                        </button>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="1"
                                                            value={
                                                                product.quantity
                                                            }
                                                            readOnly={true}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    ₺
                                                    {product.quantity *
                                                        product.product.price}
                                                </td>
                                                <td>
                                                    <a
                                                        href="#"
                                                        onClick={this.handleRemoveCartItem.bind(
                                                            this,
                                                            product
                                                        )}>
                                                        <i className="icon-cross"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="ps-section__footer">
                            <div className="row justify-content-end">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="ps-block--shopping-total">
                                        <div className="ps-block__header">
                                            <p>
                                                Sepet Toplamı{' '}
                                                <span> ₺ {amount}</span>
                                            </p>
                                            <p>
                                                İndirim{' '}
                                                <span> ₺ 0</span>
                                            </p>
                                        </div>
                                        <div className="ps-block__content">
                                            <ul className="ps-block__product">
                                                {/* {cartItems.length > 0
                                                ? cartItems.map(
                                                      (product, index) => {
                                                          if (index < 3) {
                                                              return (
                                                                  <li
                                                                      key={
                                                                          product.id
                                                                      }>
                                                                      <span className="ps-block__estimate">
                                                                          <Link
                                                                              href="/product/[pid]"
                                                                              as={`/product/${product.id}`}>
                                                                              <a className="ps-product__title">
                                                                                  {
                                                                                      product.title
                                                                                  }
                                                                                  <br />{' '}
                                                                                  x{' '}
                                                                                  {
                                                                                      product.quantity
                                                                                  }
                                                                              </a>
                                                                          </Link>
                                                                      </span>
                                                                  </li>
                                                              );
                                                          }
                                                      }
                                                  )
                                                : ''} */}
                                            </ul>
                                            <h3>
                                                Toplam <span>₺{amount}</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <Link href="/uyelik/siparis-bilgilerim">
                                        <a className="ps-btn ps-btn--fullwidth">
                                            Sepeti Onayla
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section__cart-actions">
                                <Link href="/alisveris">
                                    <a>
                                        <i className="icon-arrow-left mr-2"></i>
                                        Alışverişe geri dön
                                    </a>
                                </Link>
                            </div>
                </div>
                <BackTop>
                    <button className="ps-btn--backtop">
                        <i className="icon-arrow-up"></i>
                    </button>
                </BackTop>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(ShoppingCart);
