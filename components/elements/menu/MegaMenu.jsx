import React from 'react';
import Link from 'next/link';

const MegaMenu = ({ source }) => {
    let megaContentView;
    if (source) {
        megaContentView = (<div className="mega-menu__column" key={source.heading?null:source.heading}>
                {source.heading?<h4>{source.heading}</h4>:null}
                <ul className="mega-menu__list">
                { source.childs.map((subItem) => (
                    <li key={subItem.title}>
                        <Link href={'/alisveris?category='+subItem.category}>
                            <a>{subItem.title}</a>
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>);
    }
    return (
        <li className="menu-item-has-children has-mega-menu">
            <Link href={source.category !== '' ? '/alisveris?category='+source.category : '/'}>
                <a>
                    {source.icon && <i className={source.icon}></i>}
                    {source.title}
                </a>
            </Link>
            {source.childs && source.childs.length>0?<div className="mega-menu">{megaContentView}</div>:null}
        </li>
    );
};

export default MegaMenu;

// {item.megaItems.map((subItem) => (
//     <li key={subItem.title}>
//         <Link href={subItem.url} as={subItem.url}>
//             <a>{subItem.title}</a>
//         </Link>
//     </li>
// ))}