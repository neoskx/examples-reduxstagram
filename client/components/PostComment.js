/**
 * Created by shaokxu on 12/3/16.
 */

import React from 'react';

class PostComment extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            author: '',
            comment: ''
        }
    }

    handleSubmit(e){
        // when key is enter/return, then add this comment
        e.preventDefault();
        this.props.addComment(this.props.params.postId, this.refs.author.value, this.refs.comment.value);
        this.refs.author.value = '';
        this.refs.comment.value = '';
    }

    render(){
        return (
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" name="author" ref="author" placeholder="author"/>
                <input type="text" name="comment" ref="comment" placeholder="comment"/>
                <input type="submit" hidden />
            </form>
        )
    }
}

export default PostComment;