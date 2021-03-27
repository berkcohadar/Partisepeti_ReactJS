import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { logOut } from '~/store/auth/action';
import { getProfile } from '~/store/user/action';

const AccountQuickLinks = (props) => {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        // dispatch(logOut());     
        dispatch(getProfile());     

    };
    const accountLinks = [
        {
            text: 'Siparişlerim',
            url: '/account/orders',
        },
        {
            text: 'Üyelik Bilgilerim',
            url: '/account/user-information',
        },
        {
            text: 'Bildirimler',
            url: '/account/notifications',
        },
        {
            text: 'Koleksiyonlarım',
            url: '/account/recent-viewed-product',
        },
        {
            text: 'Adreslerim',
            url: '/account/addresses',
        },
        {
            text: 'Kampanyalarım',
            url: '/account/user-information',
        },
    ];
    const { isLoggedIn, profile } = props;

    // View
    const linksView = accountLinks.map((item) => (
        <li key={item.text}>
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
                            <a href="#" onClick={(e) => handleLogout(e)}>
                                Logout
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <Link href="/account/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="ps-block__right">
                    <Link href="/account/login">
                        <a>Giriş</a>
                    </Link>
                    <Link href="/account/register">
                        <a>Üye Ol</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default connect((state) => state)(AccountQuickLinks);
