import React, { Component } from 'react';
import Photo from './Photo';

class Single extends Component {
  render() {
    console.log(this.props.posts);
    let { posts, params } = this.props;
    // for (let i =0 ; i < this.props.posts.length; i++ ) {
    //   if (posts[i].code === params.postId ){
    //     post = posts[i];
    //   }
    // }
    let index = posts.findIndex(post => post.code === params.postId);
    let post = posts[index];
    console.log(post);
    return (
        <div className="single-photo">
          <Photo index={index} post={post} {...this.props} />
        </div>
    );
  }
}

Single.propTypes = {

};

export default Single;