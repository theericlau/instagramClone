import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    let { posts, params, comments} = this.props;
    // for (let i =0 ; i < this.props.posts.length; i++ ) {
    //   if (posts[i].code === params.postId ){
    //     post = posts[i];
    //   }
    // }
    let index = posts.findIndex(post => post.code === params.postId);
    let post = posts[index];
    let postComment = comments[params.postId] || [];
    return (
        <div className="single-photo">
          <Photo index={index} post={post} {...this.props} />
          <Comments postComment={postComment} {...this.props} />
        </div>
    );
  }
}

Single.propTypes = {

};

export default Single;