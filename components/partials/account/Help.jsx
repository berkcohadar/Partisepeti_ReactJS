import React, { Component } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';

class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                                        <h3>Yardım</h3>
                                    </div>
                                        <div className="container">
                                            <form className="ps-form--contact-us" action="/" method="get">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="İsim *"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Email *"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Konu *"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                        <div className="form-group">
                                                            <textarea
                                                                className="form-control"
                                                                rows="5"
                                                                placeholder="Mesaj *"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group submit">
                                                    <button className="ps-btn">Mesaj Gönder</button>
                                                </div>
                                            </form>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Help;
