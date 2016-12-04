/**
 * Created by shaokxu on 12/3/16.
 */
import React from 'react';
import Comment from './Comment';
import PostComment from './PostComment';

class Comments extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className="comments">
              {
                this.props.postComments.map(
                  (comment, index) => <Comment {... this.props} comment={comment} key={index} i={index} />
                  )
              }
              <PostComment {... this.props}/>
          </div>
        );
    }
}

export default Comments;