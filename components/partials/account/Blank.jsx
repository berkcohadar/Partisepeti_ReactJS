import React, { Component } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';

class Blank extends Component {
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
                                        <h3>Çok Yakında Sizlerle!</h3>
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

export default Blank;
