import React, { Component } from 'react';
import Header from './Header';
import PlayerTurn from './PlayerTurn';
import Arena from './Arena';

class Wrapper extends Component {
  constructor() {
    super();

    this.state = { playerOneTurn: true };
  }

  render() {
    return (
      <div>
        <Header />
        <PlayerTurn />
        <Arena />
      </div>
    );
  }
}

export default Wrapper;
