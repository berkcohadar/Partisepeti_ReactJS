import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    getPosts,
    getRecentPosts,
    getFeaturedPost,
    getPostCategories,
} from '../../../store/post/action';
import PostDetailSidebar from '../../elements/post/PostDetailSidebar';
import Sidebar from './modules/Sidebar';

class BlogDetailSidebar extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        filterResult: null,
    };

    componentDidMount() {
        this.props.dispatch(getPosts());
        this.props.dispatch(getRecentPosts());
        this.props.dispatch(getFeaturedPost());
        this.props.dispatch(getPostCategories());
    }
    render() {
        const { layout, categories, recentPost } = this.props;
        return (
            <div
                className={
                    layout === 'left'
                        ? 'ps-blog--sidebar reverse'
                        : 'ps-blog--sidebar'
                }>
                <div className="ps-blog__left">
                    <PostDetailSidebar />
                </div>
                <div className="ps-blog__right">
                    <Sidebar
                        categories={categories ? categories : []}
                        recentPosts={recentPost ? recentPost : []}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.post;
};
export default connect(mapStateToProps)(BlogDetailSidebar);
