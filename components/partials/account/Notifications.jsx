import React, { Component } from 'react';
import Link from 'next/link';
import { Form, Input, Radio, DatePicker } from 'antd';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableNotifications from './modules/TableNotifications';
import {HeartFilled,CarryOutOutlined,EnvironmentOutlined,LikeOutlined,ShoppingOutlined,BellOutlined,CommentOutlined,UserOutlined,FireFilled,} from "@ant-design/icons";

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const profilemenu = [
            { icon: <ShoppingOutlined />, title: "Siparişlerim", url: '/account/orders', },
            { icon: <HeartFilled />, title: "Koleksiyonlarım", url: '/account/collections', },
            { icon: <UserOutlined />, title: "Üyelik Bilgilerim", url: '/account/user-information', },
            { icon: <EnvironmentOutlined />, title: "Adreslerim", url: '/account/addresses', },
            { icon: <FireFilled />, title: "Kampanyalarım", url: '/account/campaigns', },
            { icon: <CarryOutOutlined />, title: "Anımsatıcılarım", url: '/account/reminders', },
            { icon: <LikeOutlined />, title: "Değerlendirmelerim", url: '/account/reviews', },
            { icon: <BellOutlined />, title: "İzinler", url: '/account/notifications', active: true,},
            { icon: <CommentOutlined />, title: "Yardım", url: '/account/help', },
          ];
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-page__left">
                                <AccountMenuSidebar data={profilemenu} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__header">
                                        <h3>Notifications</h3>
                                    </div>
                                    <div className="ps-section__content">
                                        <TableNotifications />
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
export default Notifications;
