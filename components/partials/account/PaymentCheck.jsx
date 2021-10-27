import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { Radio, Select } from 'antd';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import { createOrder,orderInfo } from '~/store/order/action';
import Router from 'next/router';

const { Option } = Select;

class PaymentCheck extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        {this.props.loading?
                        <h1>Ödemeniz kontrol ediliyor lütfen bekleyiniz.</h1>:
                        this.props.status=="P"?<h1>Siparişiniz onaylanmıştır.</h1>:
                        <h1>Ödeme alınırken hata oluştu.</h1>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.order;
};
export default connect(mapStateToProps)(PaymentCheck);

