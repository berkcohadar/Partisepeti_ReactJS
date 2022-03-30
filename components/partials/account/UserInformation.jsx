import React, { Component } from 'react';
import Link from 'next/link';
import FormChangeUserInformation from '~/components/shared/FormChangeUserInformation';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { connect } from 'react-redux';
import { getProfile } from '~/store/user/action';

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.dispatch(getProfile());
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
                                        <h3>Üyelik Bilgilerim</h3>
                                    </div>
                                    <FormChangeUserInformation userInfo={this.props.userInfo.profile}/>
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
    return {userInfo:state.user};
};

export default connect(mapStateToProps)(UserInformation);