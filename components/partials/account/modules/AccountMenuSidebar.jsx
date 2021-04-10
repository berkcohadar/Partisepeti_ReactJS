import React from 'react';
import Link from 'next/link';
import {HeartFilled,CarryOutOutlined,EnvironmentOutlined,LikeOutlined,ShoppingOutlined,BellOutlined,CommentOutlined,UserOutlined,FireFilled,} from "@ant-design/icons";

/* 



inactive 



*/
const profilemenu = [
    { icon: <ShoppingOutlined />, title: "Siparişlerim", url: '/uyelik/siparislerim', active: true,},
    { icon: <HeartFilled />, title: "Koleksiyonlarım", url: '/uyelik/collections', },
    { icon: <UserOutlined />, title: "Üyelik Bilgilerim", url: '/uyelik/user-information', },
    { icon: <EnvironmentOutlined />, title: "Adreslerim", url: '/uyelik/addresses', },
    { icon: <FireFilled />, title: "Kampanyalarım", url: '/uyelik/campaigns', },
    { icon: <CarryOutOutlined />, title: "Anımsatıcılarım", url: '/uyelik/reminders', },
    { icon: <LikeOutlined />, title: "Değerlendirmelerim", url: '/uyelik/reviews', },
    { icon: <BellOutlined />, title: "İzinler", url: '/uyelik/notifications', },
    { icon: <CommentOutlined />, title: "Yardım", url: '/uyelik/help', },
  ];

const AccountMenuSidebar = ({ data }) => (
    <aside className="ps-widget--account-dashboard">
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
