import React from 'react';

import ContainerPage from '~/components/layouts/ContainerPage';
import RelatedPosts from '~/components/partials/post/RelatedPosts';
import PostComments from '~/components/partials/post/PostComments';
import PostDetail from '~/components/elements/post/PostDetail';

const PostDetailScreen2 = () => {
    return (
        <ContainerPage title="Post Detail 2" boxed={true}>
            <PostDetail />
            <div className="container">
                <RelatedPosts />
                <PostComments />
            </div>
        </ContainerPage>
    );
};

export default PostDetailScreen2;
