import React from 'react';

const ModuleShopSortBy = () => {
    return (
        <div className='ps-select-sort'>
            <select
                className="ps-select form-control"
                data-placeholder="Sort Items"
                id="sorting">
                <option value="most recent">En Yeniler</option>
                <option value="best seller">En Çok Satılanlar</option>
                <option value="most liked">En Çok Beğenilenler</option>
                <option value="increasing price">Fiyata Göre: Artan</option>
                <option value="decreasing price">Fiyata Göre: Azalan</option>
            </select>
        </div>
    );
};

export default ModuleShopSortBy;
