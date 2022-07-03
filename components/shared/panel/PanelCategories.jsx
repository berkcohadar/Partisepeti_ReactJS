import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

const { SubMenu } = Menu;

const PanelCategories = () => {
    const [openKeys,setOpenKeys] = useState(['sub1']);
    const [categories, setCategories] = useState([]);
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(
            key => openKeys.indexOf(key) === -1
        );
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(openKeys);
        } else {
            setOpenKeys(
                latestOpenKey ? [latestOpenKey] : [],
            );
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn) {
                setCategories(        
                    [{id:"1",slug:"/uyelik/siparislerim",name:"Siparişlerim"},
                {id:"2",slug:"/uyelik/koleksiyonlarim",name:"Koleksiyonlarım"},
                {id:"3",slug:"/uyelik/uyelik-bilgilerim",name:"Üyelik Bilgilerim"},
                {id:"4",slug:"uyelik/adreslerim",name:"Adreslerim"},
                {id:"5",slug:"uyelik/yardim",name:"Yardim"}])
            } else {
                setCategories(        
                    [{id:"1",slug:"/uyelik/giris",name:"Giriş"},
                {id:"2",slug:"/uyelik/kayit",name:"Kayıt Ol"}])
            }
        }
    }, [])

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={() => onOpenChange()}>
            {categories.map(category => (
                <Menu.Item key={category.id} >
                    <Link href={`${category.slug}`}>
                    <a>
                        {category.name}
                    </a>
                    </Link>

                </Menu.Item>
            ))}
        </Menu>
    );
}

export default PanelCategories;
