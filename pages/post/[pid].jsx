import React from 'react';
import PostDetailBackground from '~/components/elements/post/PostDetailBackground';
import RelatedPosts from '~/components/partials/post/RelatedPosts';
import PostComments from '~/components/partials/post/PostComments';

import ContainerPage from '~/components/layouts/ContainerPage';

const PostDetailDynamic = () => {
    return (
        <ContainerPage title="Post Detail" boxed={true}>
            <PostDetailBackground />
            <div className="container">
                {/*  <RelatedPosts />*/}
                <PostComments />
            </div>
        </ContainerPage>
    );
};

export default PostDetailDynamic;
