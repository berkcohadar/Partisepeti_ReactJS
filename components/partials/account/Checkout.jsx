import React from 'react';
import FormCheckoutInformation from './modules/FormCheckoutInformation';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
const Checkout = () => {
    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Ödeme Bilgileri</h1>
                </div>
                <div className="ps-section__content">
                    <div className="ps-form--checkout">
                        <div className="ps-form__content">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                                    <FormCheckoutInformation />
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12  ps-block--checkout-order">
                                    <div className="ps-form__orders">
                                        <h3>Siparişiniz</h3>
                                        <ModulePaymentOrderSummary />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
