import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';

const BannerItem = ({ source }) => {
    if (source) {
        return (
            <Link href="/alisveris">
                <a>
                    <img src={`${baseUrl}${source.image.url}`} alt="partisepeti" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href="/alisveris">
                <a>
                    <a className="ps-collection">
                        <img src="/static/img/not-found.jpg" alt="partisepeti" />
                    </a>
                </a>
            </Link>
        );
    }
};

export default BannerItem;
