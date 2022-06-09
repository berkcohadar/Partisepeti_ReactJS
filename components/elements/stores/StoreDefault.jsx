import React from 'react';
import Rating from '~/components/elements/Rating';
import Link from 'next/link';

const StoreDefault = () => {
    const source = {
        slug : "",
        name : "Partisepeti Maltepe", 
        phone: "5327735466",
    }
    return (
        <article className="ps-block--store-2">
            <div
                className="ps-block__content bg--cover"
                style={{
                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                }}>
                <figure>
                    <h4>
                        <Link href="/store/[slug]" as={`/store/${source.slug}`}>
                            <a>{source.name}</a>
                        </Link>
                    </h4>

                    <div className="ps-block__rating">
                        <Rating value={5}  />
                    </div>
                    <p>{source.address}</p>
                    {source.phone && (
                        <p>
                            <i className="icon-telephone"></i> {source.phone}
                        </p>
                    )}
                </figure>
            </div>
            <div className="ps-block__author">
                <a className="ps-block__user" href="#">
                    <img
                        src="https://lh5.googleusercontent.com/p/AF1QipOdBZNy7bvzVa2Znsc-3qsNs1g_8tnHrJcLssiS=s508-k-no"
                        alt="partisepeti"
                    />
                </a>
                <Link href="https://goo.gl/maps/Hw81RENwsD6Czv3b9" >
                    <a target="_blank" className="ps-btn">Visit Store</a>
                </Link>
            </div>
        </article>
    );
};

export default StoreDefault;
