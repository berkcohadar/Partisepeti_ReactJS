import React from 'react';
import Link from 'next/link';

// URL will search with a keyword and specified category
const searchURL = "/search?keyword=";

const Links = {
    partiMalzemeleri: [
        {
            text: 'Kullan At',
        },
        {
            text: 'Led Işıklar',
        },
        {
            text: 'Süsleme',
        },
    ],
    balonSüsleme: [
        {
            text: 'Oda Süslemesi',
        },
        {
            text: 'Uçan Balonlar',
        },
    ],
    sevgililerGünü: [
        {
            text: 'Hediyeler',
        },
        {
            text: 'Ufak Sürprizler',
        }
    ],
    cadılarBayramı: [
        {
            text: 'Kostümler',
        },
        {
            text: 'Maskeler',
        },
    ],
    yılbaşıUrünleri: [
        {
            text: 'Yılbaşı Ağacı',
        },
        {
            text: 'Ev süslemeleri',
        },
        {
            text: 'Ev süslemeleri',
        },
    ],
};

const normalizeTitle = (title) => {
    title = title.charAt(0).toUpperCase() + title.slice(1);
    title = title.replace(/([A-Z])/g, ' $1').trim()
    return title
}

const createLinks = () => {
    let linksView = Object.keys(Links).map(function(key,index) {
        return (
            <p key={index}>
                <strong>{normalizeTitle(key)}</strong>
                {Links[key].map((item, itemIndex) => (
                    <Link href={searchURL+item.text} key={itemIndex}>
                        <a>{item.text}</a>
                    </Link>
                ))}
            </p>
        );
    });
    return linksView
}

const FooterLinks = () => (
    <div className="ps-footer__links">
    {createLinks()}
    </div>
);

export default FooterLinks;
