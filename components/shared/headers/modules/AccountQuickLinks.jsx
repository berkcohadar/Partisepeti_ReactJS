import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { logOut } from '~/store/auth/action';
import { deleteProfile } from '~/store/user/action';
import { clearCart } from '~/store/cart/action';
import { clearOrders } from '~/store/order/action';

import {HeartOutlined,CarryOutOutlined,EnvironmentOutlined,LikeOutlined,ShoppingOutlined,BellOutlined,CommentOutlined,UserOutlined,FireOutlined,} from "@ant-design/icons";

const AccountQuickLinks = (props) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(deleteProfile());
        dispatch(clearCart());
        dispatch(clearOrders());
        dispatch(logOut());
    };
    const accountLinks = [
        {
            text: 'Siparişlerim',
            url: '/uyelik/',
            icon: 'icon-cart-add'
        },
        {
            text: 'Koleksiyonlarım',
            url: '/uyelik/koleksiyonlarim',
            icon: 'icon-heart'
        },
        {
            text: 'Üyelik Bilgilerim',
            url: '/uyelik/uyelik-bilgilerim',
            icon: 'icon-user'
        },
        {
            text: 'Adreslerim',
            url: '/uyelik/adreslerim',
            icon: 'icon-map-marker'
        },
        {
            text: 'Kampanyalarim',
            url: '/uyelik/kampanyalarim',
            icon: 'icon-percent'
        },
    ];
    const { isLoggedIn, profile } = props;

    // View
    const linksView = accountLinks.map((item) => (
        <li className="" key={item.text}>
            <i className={item.icon}></i>
            <Link href={item.url}>
                <a>{item.text}</a>
            </Link>
        </li>
    ));

    if (isLoggedIn === true) {
        return (
                <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {linksView}
                        <li className="ps-block__footer">
                        <i className="icon-exit-right"></i>
                        <a href='#' onClick={() => handleLogout()} >
                            <a>Güvenli Çıkış</a>
                        </a>
                            {/* <a href="#" onClick={(e) => handleLogout(e)}>
                                
                                <i className="icon-exit-right"></i>Güvenli Çıkış
                            </a> */}
                        </li>
                    </ul>
                    </div>
                </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <Link href="/uyelik/giris">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="ps-block__right">
                    <Link href="/uyelik/giris">
                        <a>Giriş</a>
                    </Link>
                    <Link href="/uyelik/kayit">
                        <a>Üye Ol</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default connect((state) => state)(AccountQuickLinks);
