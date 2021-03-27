import React from 'react';
import Link from 'next/link';
const Links = {
    consumerElectric: [
        {
            text: 'Air Conditioners',
            url: "/alisveris",
        },
        {
            text: 'Audios & Theaters',
            url: "/alisveris",
        },
        {
            text: 'Car Electronics',
            url: "/alisveris",
        },
        {
            text: 'Office Electronics',
            url: "/alisveris",
        },
        {
            text: 'TV Televisions',
            url: "/alisveris",
        },
        {
            text: 'Washing Machines',
            url: "/alisveris",
        },
    ],
    clothingAndApparel: [
        {
            text: 'Printers',
            url: "/alisveris",
        },
        {
            text: 'Projectors',
            url: "/alisveris",
        },
        {
            text: 'Scanners',
            url: "/alisveris",
        },
        {
            text: 'Store & Business',
            url: "/alisveris",
        },
        {
            text: '4K Ultra HD TVs',
            url: "/alisveris",
        },
        {
            text: 'LED TVs',
            url: "/alisveris",
        },
        {
            text: 'OLED TVs',
            url: "/alisveris",
        },
    ],
    gardenAndKitchen: [
        {
            text: 'Cookware',
            url: "/alisveris",
        },
        {
            text: 'Decoration',
            url: "/alisveris",
        },
        {
            text: 'Furniture',
            url: "/alisveris",
        },
        {
            text: 'Garden Tools',
            url: "/alisveris",
        },
        {
            text: 'Garden Equipments',
            url: "/alisveris",
        },
        {
            text: 'Powers And Hand Tools',
            url: "/alisveris",
        },
        {
            text: 'Utensil & Gadget',
            url: "/alisveris",
        },
    ],
    healthAndBeauty: [
        {
            text: 'Hair Care',
            url: "/alisveris",
        },
        {
            text: 'Decoration',
            url: "/alisveris",
        },
        {
            text: 'Makeup',
            url: "/alisveris",
        },
        {
            text: 'Body Shower',
            url: "/alisveris",
        },
        {
            text: 'Skin Care',
            url: "/alisveris",
        },
        {
            text: 'Cologine',
            url: "/alisveris",
        },
        {
            text: 'Perfume',
            url: "/alisveris",
        },
    ],
    jewelryAndWatch: [
        {
            text: 'Necklace',
            url: "/alisveris",
        },
        {
            text: 'Pendant',
            url: "/alisveris",
        },
        {
            text: 'Diamond Ring',
            url: "/alisveris",
        },
        {
            text: 'Sliver Earing',
            url: "/alisveris",
        },
        {
            text: 'Leather Watcher',
            url: "/alisveris",
        },
        {
            text: 'Gucci',
            url: "/alisveris",
        },
    ],
    computerAndTechnology: [
        {
            text: 'Desktop PC',
            url: "/alisveris",
        },
        {
            text: 'Laptop',
            url: "/alisveris",
        },
        {
            text: 'Smartphones',
            url: "/alisveris",
        },
        {
            text: 'Tablet',
            url: "/alisveris",
        },
        {
            text: 'Game Controller',
            url: "/alisveris",
        },
        {
            text: 'Audio & Video',
            url: "/alisveris",
        },
        {
            text: 'Wireless Speaker',
            url: "/alisveris",
        },
    ],
};

const FooterLinks = () => (
    <div className="ps-footer__links">
        <p>
            <strong>Consumer Electric:</strong>
            {Links.consumerElectric.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Clothing &amp; Apparel:</strong>
            {Links.clothingAndApparel.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Home, Garden &amp; Kitchen:</strong>
            {Links.gardenAndKitchen.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Health &amp; Beauty:</strong>
            {Links.healthAndBeauty.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Jewelry &amp; Watches:</strong>
            {Links.jewelryAndWatch.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Computer &amp; Technologies:</strong>
            {Links.computerAndTechnology.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
    </div>
);

export default FooterLinks;
