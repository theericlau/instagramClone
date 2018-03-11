import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <figure className="grid-figure">
        I'm a photo
        {console.log(this.props)}
      </figure>
    );
  }
}

export default Photo;;