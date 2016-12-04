/**
 * Created by shaokxu on 11/27/16.
 */

import React from 'react';
import Photo from './Photo/Photo';
import Comments from './Comments';

const Single = React.createClass({
    render(){
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        const comments = this.props.comments&&this.props.comments[postId]||[];

        return (
            <div className="single-photo">
                <Photo  {... this.props} key={i} i={i} post={post}/>
                <Comments { ... this.props } postComments={comments} />
            </div>
        )
    }
});

export default Single;