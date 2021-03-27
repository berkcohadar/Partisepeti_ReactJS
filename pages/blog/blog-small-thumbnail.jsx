import React from 'react';

import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import BlogItemsSmallThumbView from '~/components/partials/blog/BlogItemsSmallThumbView';
import ModulePostGridItems from '~/components/partials/blog/modules/ModulePostGridItems';
import WidgetBlogSearch from '~/components/shared/widgets/WidgetBlogSearch';
import WidgetBlogCategories from '~/components/shared/widgets/WidgetBlogCategories';
import WidgetBlogRecentPosts from '~/components/shared/widgets/WidgetBlogRecentPosts';
import WidgetBlogRecentComments from '~/components/shared/widgets/WidgetBlogRecentComments';
import ModulePostSmallThumbItems from '~/components/partials/blog/modules/ModulePostSmallThumbItems';

const BlogSmallThumbnailPage = () => {
    const breadCrumb = [
        {
            text: 'Anasayfa',
            url: '/',
        },
        {
            text: 'Blog Small Thumbnail',
        },
    ];
    return (
        <ContainerPage title="Blog">
            <div className="ps-page--blog">
                <div className="container">
                    <div className="ps-page__header">
                        <h1>Our Press</h1>
                        <BreadCrumb2 breacrumb={breadCrumb} />
                    </div>
                    <div className="ps-blog--sidebar">
                        <div className="ps-blog__left">
                            <ModulePostSmallThumbItems />
                        </div>
                        <div className="ps-blog__right">
                            <WidgetBlogSearch />
                            <WidgetBlogCategories />
                            <WidgetBlogRecentPosts />
                            <WidgetBlogRecentComments />
                        </div>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default BlogSmallThumbnailPage;
