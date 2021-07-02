import React, { Component } from 'react';
import Link from 'next/link';
import {HeartFilled,CarryOutOutlined,EnvironmentOutlined,LikeOutlined,ShoppingOutlined,BellOutlined,CommentOutlined,UserOutlined,FireFilled,} from "@ant-design/icons";

class RecentViewedProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const profilemenu = [
            { icon: <ShoppingOutlined />, title: "Siparişlerim", url: '/uyelik/siparislerim', },
            { icon: <HeartFilled />, title: "Koleksiyonlarım", url: '/uyelik/collections',  active: true,},
            { icon: <UserOutlined />, title: "Üyelik Bilgilerim", url: '/uyelik/user-information', },
            { icon: <EnvironmentOutlined />, title: "Adreslerim", url: '/uyelik/addresses', },
            { icon: <FireFilled />, title: "Kampanyalarım", url: '/uyelik/campaigns', },
            { icon: <CarryOutOutlined />, title: "Anımsatıcılarım", url: '/uyelik/reminders', },
            { icon: <LikeOutlined />, title: "Değerlendirmelerim", url: '/uyelik/reviews', },
            { icon: <BellOutlined />, title: "İzinler", url: '/uyelik/notifications',},
            { icon: <CommentOutlined />, title: "Yardım", url: '/uyelik/help', },
          ];
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src="/static/img/users/3.jpg" />
                                        <figure>
                                            <figcaption>Hello</figcaption>
                                            <p>username@gmail.com</p>
                                        </figure>
                                    </div>
                                    <div className="account-menu">
                                        {profilemenu.map((elem, index) => (
                                            <Link href={elem.url}>
                                            <span className={ 'account-menu-item'+ elem.active ? ' active' :""}
                                                key={'sub' + index}>
                                                
                                                <a className="account-menu-item-p">
                                                        <i>{elem.icon}</i>
                                                        {'\t'}
                                                        {elem.title}
                                                </a>
                                            </span>
                                            </Link>
                                        ))}
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <section className="ps-section--account-setting">
                                <div className="ps-section__content">
                                    <p>No product here.</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RecentViewedProducts;
