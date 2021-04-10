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
            url: '/uyelik/siparislerim',
        },
        {
            text: 'Üyelik Bilgilerim',
            url: '/uyelik/user-information',
        },
        {
            text: 'Bildirimler',
            url: '/uyelik/notifications',
        },
        {
            text: 'Koleksiyonlarım',
            url: '/uyelik/recent-viewed-product',
        },
        {
            text: 'Adreslerim',
            url: '/uyelik/addresses',
        },
        {
            text: 'Kampanyalarım',
            url: '/uyelik/user-information',
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
                    <Link href="/uyelik/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="ps-block__right">
                    <Link href="/uyelik/login">
                        <a>Giriş</a>
                    </Link>
                    <Link href="/uyelik/register">
                        <a>Üye Ol</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default connect((state) => state)(AccountQuickLinks);
