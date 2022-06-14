import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <div className="widget_content">
                <h2><a href="/bize-ulasin">Bize Ulaşın!</a></h2>
                <h3>0530 127 45 98</h3>
                <p>
                    <a href="mailto:contact@partisepeti.co">destek@partisepeti.com</a>
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside className="widget widget_footer">
            <ul className="ps-list--link">
                <li>
                    <Link href="/bilgiler?page=hakkimizda">
                        Hakkımızda
                    </Link>
                </li>

                <li>
                    <Link href="/magazalarimiz">
                        Mağazalarımız
                    </Link>
                </li>
                <li>
                    <Link href="/vendor/become-a-vendor">
                        Partisepeti'nde Sat
                    </Link>
                </li>
                <li>
                    <a href="http://blog.partisepeti.com" target="_blank">
                        Partisepeti Blog
                    </a>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <ul className="ps-list--link">
                <li>
                    <Link href="/bilgiler?page=hakkimizda">
                        Kargo ve Teslimat
                    </Link>
                </li>
                <li>
                    <Link href="/bilgiler?page=iptal-ve-iade">
                        İptal ve İade
                    </Link>
                </li>
                <li>
                    <Link href="/bilgiler?page=yurt-disi-gonderimi">
                        Yurt Dışı Gönderimi
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <ul className="ps-list--link">
                <li>
                    <Link href="/bilgiler?page=mesafeli-satis-sozlesmesi">
                        Mesafeli Satış Sözleşmesi
                    </Link>
                </li>
                <li>
                    <Link href="/bilgiler?page=gizlilik-ve-guvenlik">
                        Gizlilik ve Güvenlik
                    </Link>
                </li>
                <li>
                    <Link href="/bilgiler?page=sikayet-ve-bildirim">
                        Şikayet ve Bildirim
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
