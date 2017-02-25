/**
 * Component that shows the number of clicks.
 */
import React, { Component } from 'react';

export default class Counter extends Component {
  getNumberOfClicks(){
    return this.props.clicks;
  }
  render() {
    return (
      <div>There have been {this.getNumberOfClicks()} clicks</div>
    );
  }
}

