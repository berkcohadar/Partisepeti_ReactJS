import React from 'react';

import ContainerPage from '~/components/layouts/ContainerPage';
import BlogItemsGridView from '~/components/partials/blog/BlogItemsGridView';
import BreadCrumb2 from '~/components/elements/BreadCrumb2';

const BlogGridPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Our Press',
        },
    ];
    return (
        <ContainerPage title="Blog" boxed={true}>
            <div className="ps-page--blog">
                <div className="container">
                    <div className="ps-page__header">
                        <h1>Our Press</h1>
                        <BreadCrumb2 breacrumb={breadCrumb} />
                    </div>
                    <BlogItemsGridView columns={4} />
                </div>
            </div>
        </ContainerPage>
    );
};

export default BlogGridPage;
