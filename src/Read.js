import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Read extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
          <h1>Reading {this.props.match.params.product} page!</h1>
          <Link to='/app'>Back to App</Link>
      </div>
    )
  }
}

export default Read;
