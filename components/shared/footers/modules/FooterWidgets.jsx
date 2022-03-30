import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
                <p>Bize Ulaşın!</p>
                <h3>0850 111 22 33 </h3>
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
            <h4 className="widget-title">Quick links</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>Hakkımızda</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/blank">
                        <a>Mağazalarımız</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Partisepeti'nde Sat</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Partisepeti Blog</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Company</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>Kargo ve Teslimat</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>İptal ve İade</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Yurt Dışı Gönderimi</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>Mesafeli Satış Sözleşmesi</a>
                    </Link>
                </li>
                <li>
                    <Link href="/uyelik/siparis-bilgilerim">
                        <a>Gizlilik ve Güvenlik</a>
                    </Link>
                </li>
                <li>
                    <Link href="/uyelik/user-information">
                        <a>Şikayet ve Bildirim</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
