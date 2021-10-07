import React, {  useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { Menu } from 'antd';
import { menuPrimary } from '../../../public/static/data/menu';
import Link from 'next/link';
import MediaRepository from '~/repositories/MediaRepository';

const { SubMenu } = Menu;

const PanelMenu = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(null);
    const [state, setState] = useState({
        openKeys: [],
    });

    useEffect(() => {
        setLoading(true);
        const data = MediaRepository.getSliderMenu();
        data.then((result) => {
            setCategories(result);
            setLoading(false);
        });
    }, []);
    let menudata;
    if (!loading) {
        if (categories && categories.length > 0){
            menudata = categories;
        } 

    }
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    const onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(
            (key) => state.openKeys.indexOf(key) === -1
        );
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setState({ openKeys });
        } else {
            setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    return (
        <Menu
            mode="inline"
            openKeys={state.openKeys}
            onOpenChange={onOpenChange}
            className="menu--mobile-2">
            {menudata?menudata.map((item) => {
                if (item.childs){
                    return (
                            <SubMenu
                                key={item.title}
                                title={
                                    <Link href={item.category}>
                                        <a className="ps-panel__content-text">{item.title}</a>
                                    </Link>
                                }>
                                {item.childs.map((subItem) => (
                                    <Menu.Item key={subItem.title}>
                                        <Link href={subItem.category}>
                                            <a>{subItem.title}</a>
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                    );
                }
                else{
                    return (
                        <Menu.Item key={item.title}>
                            {item.type === 'dynamic' ? (
                                <Link
                                    href={`${item.url}/[pid]`}
                                    as={`${item.url}/${item.endPoint}`}>
                                    l<a>{item.text}</a>
                                </Link>
                            ) : (
                                <Link href={item.category} as={item.category}>
                                    <a>{item.title}</a>
                                </Link>
                            )}
                        </Menu.Item>
                    );
                }
                // if (item.subMenu) {
                //     return (
                //         <SubMenu
                //             key={item.text}
                //             title={
                //                 <Link href={item.url}>
                //                     <a className="ps-panel__content-text">{item.text}</a>
                //                 </Link>
                //             }>
                //             {item.subMenu.map((subItem) => (
                //                 <Menu.Item key={subItem.text}>
                //                     <Link href={subItem.url}>
                //                         <a>{subItem.text}</a>
                //                     </Link>
                //                 </Menu.Item>
                //             ))}
                //         </SubMenu>
                //     );
                // } else if (item.childs) {
                //     return (
                //         <SubMenu
                //             key={item.text}
                //             title={
                //                 <Link href={item.url}>
                //                     <a className="ps-panel__content-text">{item.text}</a>
                //                 </Link>
                //             }>
                //             {item.childs.map((megaItem) => (
                //                 <SubMenu
                //                     key={megaItem.heading}
                //                     title={<span className="ps-panel__content-text">{megaItem.heading}</span>}>
                //                     {megaItem.megaItems.map(
                //                         (megaSubItem) => (
                //                             <Menu.Item
                //                                 key={megaSubItem.text}>
                //                                 <Link href={item.url}>
                //                                     <a>
                //                                         {megaSubItem.text}
                //                                     </a>
                //                                 </Link>
                //                             </Menu.Item>
                //                         )
                //                     )}
                //                 </SubMenu>
                //             ))}
                //         </SubMenu>
                //     );
                // } else {
                //     return (
                //         <Menu.Item key={item.text}>
                //             {item.type === 'dynamic' ? (
                //                 <Link
                //                     href={`${item.url}/[pid]`}
                //                     as={`${item.url}/${item.endPoint}`}>
                //                     l<a>{item.text}</a>
                //                 </Link>
                //             ) : (
                //                 <Link href={item.url} as={item.alias}>
                //                     <a>{item.text}</a>
                //                 </Link>
                //             )}
                //         </Menu.Item>
                //     );
                // }
            }):null}
        </Menu>
    );
}

// const mapStateToProps = (state) => {
//     return state.setting;
// };

// export default connect(mapStateToProps)(PanelMenu);
export default PanelMenu;
