import router from 'next/router';
import React from 'react';

const ModuleShopSortBy = () => {
    const handleOrderingChange = (e) => { 
        if (router.query["ordering"]){
            let index = router.asPath.indexOf("&ordering=");
            let length = ("&ordering=").length
            let endIndex = router.asPath.slice(index+length).indexOf("&");
            let newPath;

            if (endIndex == -1) newPath = router.asPath.slice(0, index+length) + e.target.value;
            else newPath = router.asPath.slice(0, index+length) + e.target.value + router.asPath.slice(endIndex);

            router.push(newPath);

            index = null;
            endIndex = null;
            length = null;
            newPath = null;
        } else {
            router.push(router.asPath + "&ordering=" + e.target.value);
        }
    } 
    return (
        <div className='ps-select-sort'>
            <select
                className="ps-select form-control"
                data-placeholder="Sort Items"
                id="sorting"
                onChange={(e) => handleOrderingChange(e)}
                defaultValue={"-id"}>
                <option value="-id">En Yeniler</option>
                <option value="-total_order">En Çok Satılanlar</option>
                <option value="-rating">En Çok Beğenilenler</option>
                <option value="price">Fiyata Göre: Artan</option>
                <option value="-price">Fiyata Göre: Azalan</option>
            </select>
        </div>
    );
};

export default ModuleShopSortBy;
