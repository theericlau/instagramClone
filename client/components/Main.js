import React from 'react';
import { Link } from 'react-router';
import monster from '../store';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Instagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

// console.log(store);
console.log('chicken', monster);
export default Main;
