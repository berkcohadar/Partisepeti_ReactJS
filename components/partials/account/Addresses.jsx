import React, { Component } from 'react';
import Link from 'next/link';
import {HeartFilled,CarryOutOutlined,EnvironmentOutlined,LikeOutlined,ShoppingOutlined,BellOutlined,CommentOutlined,UserOutlined,FireFilled,} from "@ant-design/icons";

class Addresses extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const profilemenu = [
            { icon: <ShoppingOutlined />, title: "Siparişlerim", url: '/account/orders', active: true,},
            { icon: <HeartFilled />, title: "Koleksiyonlarım", url: '/account/collections', },
            { icon: <UserOutlined />, title: "Üyelik Bilgilerim", url: '/account/user-information', },
            { icon: <EnvironmentOutlined />, title: "Adreslerim", url: '/account/addresses', },
            { icon: <FireFilled />, title: "Kampanyalarım", url: '/account/campaigns', },
            { icon: <CarryOutOutlined />, title: "Anımsatıcılarım", url: '/account/reminders', },
            { icon: <LikeOutlined />, title: "Değerlendirmelerim", url: '/account/reviews', },
            { icon: <BellOutlined />, title: "İzinler", url: '/account/notifications', },
            { icon: <CommentOutlined />, title: "Yardım", url: '/account/help', },
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
                                    {console.log("\n\n\nSESSION",)}
                                    <div className="account-menu">
                                        {profilemenu.map((elem, index) => (
                                            <Link href={elem.url}>
                                            <span className={elem.active ? 'account-menu-item-active' : 'account-menu-item'}
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
                            <div className="ps-section--account-setting">
                                <div className="ps-section__content">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Billing address
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    <p>
                                                        You Have Not Set Up This
                                                        Type Of Address Yet.
                                                    </p>
                                                    <Link href="/account/edit-address">
                                                        <a>Edit</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Shipping address
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    <p>
                                                        You Have Not Set Up This
                                                        Type Of Address Yet.
                                                    </p>
                                                    <Link href="/account/edit-address">
                                                        <a>Edit</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
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

export default Addresses;
