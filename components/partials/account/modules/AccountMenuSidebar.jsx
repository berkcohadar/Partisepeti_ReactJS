import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {HeartOutlined,CarryOutOutlined,EnvironmentOutlined,LikeOutlined,ShoppingOutlined,BellOutlined,CommentOutlined,UserOutlined,FireOutlined,} from "@ant-design/icons";
import { useRouter } from 'next/router';

const AccountMenuSidebar = (bar, setBar) => {
    const router = useRouter();

    const profilemenu = [
        { icon: <ShoppingOutlined />, title: "Siparişlerim", url: '/uyelik/siparislerim', },
        { icon: <HeartOutlined />, title: "Koleksiyonlarım", url: '/uyelik/koleksiyonlarim', },
        { icon: <UserOutlined />, title: "Üyelik Bilgilerim", url: '/uyelik/uyelik-bilgilerim', },
        { icon: <EnvironmentOutlined />, title: "Adreslerim", url: '/uyelik/adreslerim',},
        { icon: <FireOutlined />, title: "Kampanyalarım", url: '/uyelik/kampanyalarim', },
        { icon: <CarryOutOutlined />, title: "Anımsatıcılarım", url: '/uyelik/animsaticilarim', },
        { icon: <LikeOutlined />, title: "Değerlendirmelerim", url: '/uyelik/degerlendirmelerim', },
        { icon: <BellOutlined />, title: "İzinler", url: '/uyelik/izinler', },
        { icon: <CommentOutlined />, title: "Yardım", url: '/uyelik/yardim', },
      ];

    return (
        <aside className="ps-widget--account-dashboard">
            <div className="account-menu">
                {profilemenu.map((elem, index) => (
                    <span
                        className={'account-menu-item'+ (elem.url==router.pathname ? ' active' :"")}
                        onClick={()=>router.push(elem.url)}
                        key={'sub' + index}>
                        <a className="account-menu-item-p">
                            <i>{elem.icon}</i>
                            {'\t'}
                            {elem.title}
                        </a>
                    </span>
                ))}
            </div>
        </aside>
    );
}

export default AccountMenuSidebar;
