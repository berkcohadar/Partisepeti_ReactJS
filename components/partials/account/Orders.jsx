import React, { Component,useState } from 'react';
import Link from 'next/link';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import OrderView from './OrderView';
import { connect } from 'react-redux';
import { getOrders } from '~/store/order/action';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.dispatch(getOrders());

    }

    render() {
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-page__left">
                                <AccountMenuSidebar data={null} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__header">
                                        <h3>Siparişlerim</h3>
                                    </div>
                                    {this.props.orders?<OrderView orders={this.props.orders} ></OrderView>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {orders:state.order};
};

export default connect(mapStateToProps)(Orders);
