import React, { Component } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import MyAccount2 from '~/components/partials/account/MyAccount2';
import ContainerPage from '~/components/layouts/ContainerPage';

class MyAccountPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadCrumb: [
                {
                    text: 'Anasayfa',
                    url: '/',
                },
                {
                    text: 'My Account',
                },
            ],
        };
    }

    render() {
        return (
            <ContainerPage title="My account 2">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={this.state.breadCrumb} />
                    <MyAccount2 />
                </div>
            </ContainerPage>
        );
    }
}

export default MyAccountPage2;
