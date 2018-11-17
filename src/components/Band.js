import React, { Component } from 'react';

class Band extends Component {

  render() {

    const { band } = this.props

    return(
      <div>
        <li>{band.name}</li>
        <button onClick={() => this.props.deleteBand(band.id)}>Delete</button>
      </div>
    );
  }
};

export default Band;
