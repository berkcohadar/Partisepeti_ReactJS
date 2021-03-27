import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import PostDetailBackground from '~/components/elements/post/PostDetailBackground';
import RelatedPosts from '~/components/partials/post/RelatedPosts';
import PostComments from '~/components/partials/post/PostComments';

const PostDetailScreen = () => {
    return (
        <ContainerPage title="Post Detail">
            <PostDetailBackground />
            <div className="container">
                <RelatedPosts />
                <PostComments />
            </div>
        </ContainerPage>
    );
};

export default PostDetailScreen;
