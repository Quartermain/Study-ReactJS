import React, { Component } from 'react';

export class RespTabList extends Component {
  render() {
    return (
      <ul className="resp-tabs-list">
        <li>Recent</li>
        <li>Popularity</li>
        <li>Top Rating </li>
      </ul>
    );
  }
}

export default RespTabList;
