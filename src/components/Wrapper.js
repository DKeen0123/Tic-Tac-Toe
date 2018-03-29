import React, { Component } from 'react';
import Header from './Header';
import PlayerTurn from './PlayerTurn';

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <PlayerTurn />
      </div>
    );
  }
}

export default Wrapper;
