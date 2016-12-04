/**
 * Created by shaokxu on 12/3/16.
 */
import React from 'react';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const comment = this.props.comment;

        return (
            <div className="comment">
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, this.props.i)}>&times;</button>
                </p>
            </div>
        )
    }
}

export default Comment;