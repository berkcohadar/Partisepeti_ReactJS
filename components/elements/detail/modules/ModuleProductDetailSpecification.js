import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({ product }) => (
    <div className="ps-product__specification">
        <p className="tags">
            {"product.item.description"}
        </p>
    </div>
);

export default ModuleProductDetailSpecification;
