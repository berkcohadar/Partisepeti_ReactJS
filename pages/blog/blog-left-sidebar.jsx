import React from 'react';

import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import ContainerPage from '~/components/layouts/ContainerPage';
import ModulePostGridItems from '~/components/partials/blog/modules/ModulePostGridItems';
import WidgetBlogSearch from '~/components/shared/widgets/WidgetBlogSearch';
import WidgetBlogCategories from '~/components/shared/widgets/WidgetBlogCategories';
import WidgetBlogRecentPosts from '~/components/shared/widgets/WidgetBlogRecentPosts';
import WidgetBlogRecentComments from '~/components/shared/widgets/WidgetBlogRecentComments';

const BlogLeftSidebarPage = () => {
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
        <ContainerPage title="Blog Left Sidebar" boxed={true}>
            <div className="ps-page--blog">
                <div className="container">
                    <div className="ps-page__header">
                        <h1>Our Press</h1>
                        <BreadCrumb2 breacrumb={breadCrumb} />
                    </div>
                </div>
                <div className="container">
                    <div className="ps-blog--sidebar reverse">
                        <div className="ps-blog__left">
                            <ModulePostGridItems columns={3} />
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

export default BlogLeftSidebarPage;
