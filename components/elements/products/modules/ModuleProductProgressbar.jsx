import React from 'react';

const ModuleProductProgressbar = ({ product }) => {
    return (
        <div
            className="ps-product__progress-bar ps-progress"
            data-value={100}>
            <div className="ps-progress__value">
                {(product.products[0].total_order / product.products[0].stock) * 100 < 100 ? (
                    <span
                        style={{
                            width:
                                (product.products[0].total_order / product.products[0].stock) * 100 + '%',
                        }}></span>
                ) : (
                    <span style={{ width: '100%' }}></span>
                )}
            </div>
            {product.products[0].stock - product.products[0].total_order >= 0 ? (
                <p>Sold: {product.products[0].total_order}</p>
            ) : (
                <p>Sold: {product.products[0].stock}</p>
            )}
        </div>
    );
};

export default ModuleProductProgressbar;
