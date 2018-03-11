import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => <Photo key={index} {...this.props} index={index} post={post} />)}
      </div>
    );
  }
}

PhotoGrid.propTypes = {

};

export default PhotoGrid;