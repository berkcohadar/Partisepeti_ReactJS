import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import MediaRepository from '~/repositories/MediaRepository';
import { getItemBySlug } from '~/utilities/product-helper';
import Promotion from '~/components/elements/media/Promotion';
import { getCollections } from '~/utilities/strapi-fetch-data-helpers';
import { useDispatch } from 'react-redux';

const HomeAdsColumns = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(null);
    
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
        <div className="ps-home-ads">
            <div className="ps-container">
                <div className="row">
                {loading?<p>yukleniyor...</p>:categories.map((item,index)=>(
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link={"/"+item.slug}
                            image={item ? item.img : null}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeAdsColumns;
