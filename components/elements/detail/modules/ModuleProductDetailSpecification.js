import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = () => (
    <div className="ps-product__specification">
        <Link href="/page/blank">
            <a className="report">Report Abuse</a>
        </Link>
        <p>
            <strong>SKU:</strong> SF1133569600-1
        </p>
        <p className="categories">
            <strong> Categories:</strong>
            <Link href="/alisveris">
                <a>Consumer Electronics</a>
            </Link>
            <Link href="/alisveris">
                <a>Refrigerator</a>
            </Link>
            <Link href="/alisveris">
                <a>Babies & Moms</a>
            </Link>
        </p>
        <p className="tags">
            <strong> Tags</strong>
            <Link href="/alisveris">
                <a>sofa</a>
            </Link>
            <Link href="/alisveris">
                <a>technologies</a>
            </Link>
            <Link href="/alisveris">
                <a>wireless</a>
            </Link>
        </p>
    </div>
);

export default ModuleProductDetailSpecification;
