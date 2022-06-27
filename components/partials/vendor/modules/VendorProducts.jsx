import React, { Component } from 'react';

import ProductWide from '../../../elements/products/ProductWide';
import Product from '../../../elements/products/Product';
import ProductOffline from '../../../elements/products/ProductOffline';

class VendorProducts extends Component {
    state = {
        listView: true,
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    render() {
        const viewMode = this.state.listView;
        return (
            <div className="ps-shopping vendor-shop">
                <div className="ps-shopping__header">
                    <p>
                        <strong>
                            {' '}
                        </strong>{' '}
                        Ürün bulundu
                    </p>
                    <div className="ps-shopping__actions">
                        <select
                            className="ps-select"
                            data-placeholder="Sort Items">
                            <option>Sort by latest</option>
                            <option>Sort by popularity</option>
                            <option>Sort by average rating</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                        <div className="ps-shopping__view">
                            <p>Görünüm</p>
                            <ul className="ps-tab-list">
                                <li
                                    className={
                                        viewMode === true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-grid"></i>
                                    </a>
                                </li>
                                <li
                                    className={
                                        viewMode !== true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-list4"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ps-shopping__content">
                    {viewMode === true ? (
                        <div className="ps-shopping-product">
                            <div className="row">
                            </div>
                        </div>
                    ) : (
                        <div className="ps-shopping-product">
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default VendorProducts;
