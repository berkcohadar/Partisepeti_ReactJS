import React from 'react';
import Link from 'next/link';

const AccountMenuSidebar = ({ data }) => (
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
                    <span
                        className={
                            elem.active
                                ? 'account-menu-item-active'
                                : 'account-menu-item'
                        }
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
);

export default AccountMenuSidebar;
