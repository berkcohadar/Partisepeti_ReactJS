import React from 'react';

import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Rating from '~/components/elements/Rating';
import Link from 'next/link';

const PSStores = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Magazalarimiz',
        },
    ];
    const source = [
        {
            slug: "",
            name: "Partisepeti Kozyatağı",
            address: "54 Atatürk Caddesi, Sahrayicedit Mahallesi, Kadıköy/İstanbul",
            phone: "0536 026 57 91",
            img: "https://lh5.googleusercontent.com/p/AF1QipNR6q-MG4ev6mTRtrhxz_yCZp9YJ917CxwS1a6j=s517-k-no",
            map: "https://g.page/partisepetikozyatagi?share"
        },
        {
            slug: "",
            name: "Partisepeti Etiler",
            address: "46 Nispetiye Caddesi, Nispetiye Mahallesi, Beşiktaş/İstanbul",
            phone: "0212 351 42 72",
            img: "https://lh5.googleusercontent.com/p/AF1QipN_I9UHLbe8hT3cechi5_5mFQy0b2u-KvzVljWp=w529-h298-k-no",
            map: "https://goo.gl/maps/TzmikSKx7xXwyjxv9"
        },
        {
            slug: "",
            name: "Partisepeti Maltepe",
            address: "101 Turgut Özal Bulvarı, İdealtepe Mahallesi, Maltepe/İstanbul",
            phone: "0536 026 57 94  ",
            img: "https://lh5.googleusercontent.com/p/AF1QipOdBZNy7bvzVa2Znsc-3qsNs1g_8tnHrJcLssiS=s508-k-no",
            map: "https://goo.gl/maps/Hw81RENwsD6Czv3b9"
        },
        {
            slug: "",
            name: "Partisepeti Kartal",
            address: "12/A Akdeniz Caddesi, Kordonboyu Mahallesi, Kartal/İstanbul",
            phone: "0216 353 61 91",
            img: "https://lh5.googleusercontent.com/p/AF1QipMbjdTCtsCIdzem0ICjYXLJXSHAHdYmf03mkc1m=w530-h298-k-no",
            map: "https://g.page/PartiSepetiKARTAL?share"
        },
    ]

    return (
        <ContainerPage title="Magazalarimiz" boxed={true}>
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
            </div>
            <section className="ps-store-list">
                <div className="container">

                    <div className="contact-us">
                        <i onClick={(e) => {
                            window.location.href = "mailto:destek@partisepeti.com";
                            e.preventDefault();
                            }} className="icon-envelope"> <p>destek@partisepeti.com</p></i>
                        <i onClick={(e) => {
                            window.location.href = "tel:05301274598";
                            e.preventDefault();
                            }} className="icon-telephone"> <p>0530 127 45 98</p></i>
                    </div>

                    <div className="ps-section__header">
                        <h3>Mağazalarımız</h3>
                    </div>

                    <div className="ps-section__content">
                        <div className="ps-stores-items row">
                            {source.map((item, index) => (
                                <div
                                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ps-store-list "
                                    key={1}>

                                    <article className="ps-block--store-2">
                                        <div
                                            className="ps-block__content bg--cover"
                                            style={{
                                                background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                            }}>
                                            <figure>
                                                <h4>
                                                    <Link href="/store/[slug]" as={`/store/${item.slug}`}>
                                                        <a>{item.name}</a>
                                                    </Link>
                                                </h4>

                                                <div className="ps-block__rating">
                                                    <Rating value={5} />
                                                </div>
                                                <p>{item.address}</p>
                                                {item.phone && (
                                                    <p>
                                                        <i className="icon-telephone"></i> <a href={"tel:" + item.phone}>{item.phone}</a>
                                                    </p>
                                                )}
                                            </figure>
                                        </div>
                                        <div className="ps-block__author">
                                            <a className="ps-block__user" href="#">
                                                <img
                                                    src={item.img}
                                                    alt="partisepeti"
                                                />
                                            </a>
                                            <Link href="https://goo.gl/maps/Hw81RENwsD6Czv3b9" >
                                                <a target="_blank" className="ps-btn">Mağaza'ya Git</a>
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </ContainerPage>
    );
};

export default PSStores;