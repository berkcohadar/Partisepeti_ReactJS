import React from 'react';
import Link from 'next/link';

const ContactInfo = () => (
    <div className="ps-contact-info">
        <div className="container">
            <div className="ps-section__header">
                <h3>Bize Ulaşın</h3>
            </div>
            <div className="ps-section__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                        <div className="ps-block--contact-info">
                            <h4>Müşteri Hizmetleri</h4>
                            <p>
                                <a href="mailto:destek@partisepeti.com">
                                    destek@partisepeti.com
                                </a>
                                <a href="tel:05301274598">0530 127 45 98</a>
                                <a href="tel:05360265794">0536 026 57 94</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                        <div className="ps-block--contact-info">
                            <h4>Merkez Ofis</h4>
                            <p>
                                <span>
                                    101 Turgut Özal Bulvarı, İdealtepe Mahallesi, Maltepe / İstanbul
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                        <div className="ps-block--contact-info">
                            <h4>Bizimle Çalışmak İster Misin?</h4>
                            <p>
                                <span>CV'nizi bize gönderin:</span>
                                <a href="mailto:kariyer@partisepeti.com">kariyer@partisepeti.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                        <div className="ps-block--contact-info">
                            <h4>Kargo ve Sevkiyat Hizmetleri</h4>
                            <p>
                                <a href="mailto:kargo@partisepeti.com">kargo@partisepeti.com</a>
                                <a href="tel:05301274598">0530 127 45 98</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                        <div className="ps-block--contact-info">
                            <h4>Reklam ve İşbirlikleri Hakkında</h4>
                            <p>
                                <a href="mailto:kargo@partisepeti.com">medya@partisepeti.com</a>
                                <a href="tel:05327735466">0532 773 54 66</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                        <div className="ps-block--contact-info">
                            <h4>Partisepeti Satıcı Desteği</h4>
                            <p>
                                <a href="mailto:satici@partisepeti.com">satici@partisepeti.com</a>
                                <a href="tel:05327735466">0532 773 54 66</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ContactInfo;
