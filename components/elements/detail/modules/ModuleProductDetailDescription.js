import React from 'react';
import Link from 'next/link';

const ModuleProductDetailDescription = ({ product }) => (
    <div className="ps-product__desc">
        <p>
            Satıcı:
            <Link href="/alisveris">
                <a>
                    <strong> {product.vendor}</strong>
                </a>
            </Link>
        </p>
        <ul className="ps-list--dot">
            <li>Barkod:    {product.barcode}</li>
            <li>Model Kodu: {product.model_code}</li>
            <li>Renk:   {product.color}</li>
            <li>Boyut:  {product.size}</li>
            <li> 
                <Link href={"/alisveris?categories=" + product.categories[0].id}>
                    <a> Kategori:   {product.categories[0].name} </a>
                </Link>
            </li>
            {product.tags? product.tags.map((item) =>(
                <li>{item}</li>
            )):null}


        </ul>
    </div>
);

export default ModuleProductDetailDescription;
