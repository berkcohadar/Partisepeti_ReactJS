import React from 'react';

const ModuleShopSortBy = () => {
    return (
        <select
            className="ps-select form-control"
            data-placeholder="Sort Items">
            <option>En Yeniler</option>
            <option>En Çok Satılanlar</option>
            <option>En Çok Beğenilenler</option>
            <option>Fiyata Göre: Artan</option>
            <option>Fiyata Göre: Azalan</option>
        </select>
    );
};

export default ModuleShopSortBy;
