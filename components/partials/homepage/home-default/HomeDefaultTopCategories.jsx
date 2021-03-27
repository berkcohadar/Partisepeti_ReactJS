import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { getCollections } from '~/utilities/strapi-fetch-data-helpers';
import { generateTempArray } from '~/utilities/common-helpers';
import { ProductGroupWithCarousel } from '~/components/partials/product/ProductGroupWithCarousel';
import { useDispatch } from 'react-redux';
const HomeDefaultTopCategories = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(null);
    const dispatch = useDispatch();
    
    async function getCategories() {
        setLoading(true);
        const responseData = await getCollections();
        if (responseData) {
            setCategories(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }
    
    useEffect(() => {
        getCategories();
    }, []);

    return (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h3>Top categories of the month</h3>
            <div className="row">
            {/* {loading?<p>yukleniyor...</p>:
            categories.map((item,index)=>(
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href={"/"+item.slug}>
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src={item.img} alt="partisepeti" />
                        <p>{item.name}</p>
                    </div>
                </div>
            ))} */}
            </div>
        </div>
    </div>
    )
};

export default HomeDefaultTopCategories;
