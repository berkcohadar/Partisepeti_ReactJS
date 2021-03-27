import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerPage from '~/components/layouts/ContainerPage';
import WidgetBlogSearch from '~/components/shared/widgets/WidgetBlogSearch';
import WidgetBlogCategories from '~/components/shared/widgets/WidgetBlogCategories';
import WidgetBlogRecentPosts from '~/components/shared/widgets/WidgetBlogRecentPosts';
import WidgetBlogRecentComments from '~/components/shared/widgets/WidgetBlogRecentComments';
import PostDetailSidebar from '~/components/elements/post/PostDetailSidebar';

const BlogLeftSidebarScreen = () => {
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
        <ContainerPage title="Post Detail 3" boxed={true}>
            <div className="ps-page--blog">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    {/* <div className="embed-responsive embed-responsive-16by9 mb-90">
                        <iframe
                            scrolling="no"
                            frameBorder="no"
                            src="https://w.soundcloud.com/player/?visual=true&amp;amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F323674116&amp;amp;show_artwork=true&amp;amp;maxwidth=840&amp;amp;maxheight=1000&amp;amp;dnt=1"
                            id="fitvid0"></iframe>
                    </div>*/}
                    <div className="ps-blog--sidebar">
                        <div className="ps-blog__left">
                            <PostDetailSidebar />
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

export default BlogLeftSidebarScreen;
