import React, { Component } from 'react';
import Photo from './Photo';

class Single extends Component {
  render() {
    console.log(this.props.posts);
    let post;
    let { posts, params } = this.props;
    for (let i =0 ; i < this.props.posts.length; i++ ) {
      if (posts[i].code === params.postId ){
        post = posts[i];
      }
    }
    console.log(post);
    return (
        <div className="single-photo">

        </div>
    );
  }
}

Single.propTypes = {

};

export default Single;