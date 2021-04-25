import React from 'react';

const ModuleShopSortBy = () => {
    return (
        <div className='ps-select-sort'>
            <select
                className="ps-select form-control"
                data-placeholder="Sort Items">
                <option>En Yeniler</option>
                <option>En Çok Satılanlar</option>
                <option>En Çok Beğenilenler</option>
                <option>Fiyata Göre: Artan</option>
                <option>Fiyata Göre: Azalan</option>
            </select>
        </div>
    );
};

export default ModuleShopSortBy;
