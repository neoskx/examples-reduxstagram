/**
 * Created by shaokxu on 11/27/16.
 */

import React from 'react';
import Photo from './Photo/Photo';

const PhotoGrid = React.createClass({
    render(){
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i)=>{
                    return <Photo  {... this.props} key={i} i={i} post={post}/>;
                })}
            </div>
        )
    }
});

export default PhotoGrid;