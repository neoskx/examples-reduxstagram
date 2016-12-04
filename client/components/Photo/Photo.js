/**
 * Created by shaokxu on 11/28/16.
 */
import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {post, comments, i} = this.props;

        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo"/>
                    </Link>
                    <ReactCSSTransitionGroup
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        >
                        <span key={post.likes} className="likes-heart">
                            {post.likes}
                        </span>
                    </ReactCSSTransitionGroup>
                </div>

                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[post.code] ? comments[post.code].length: 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>

            </figure>
        )
    }
}

export default Photo;