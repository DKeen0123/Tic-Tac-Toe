import React, { Component } from 'react';
import Header from './Header';
import PlayerTurn from './PlayerTurn';
import Arena from './Arena';
import Box from './Box';

class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      playerOneTurn: true,
      boxes: []
    };
  }
  componentWillMount() {
    this.populateBoxes();
  }

  populateBoxes() {
    let { boxes } = this.state;
    let numbers = Array.apply(null, { length: 9 }).map(Number.call, Number);

    numbers.map(number =>
      boxes.push(<Box key={number} handlePlayerMove={this.handlePlayerMove} />)
    );

    this.setState({ boxes });
  }

  handlePlayerMove = event => {
    this.setState({ playerOneTurn: false });
  };

  render() {
    return (
      <div>
        <Header />
        <PlayerTurn />
        <Arena boxes={this.state.boxes} iterate={this.iterate} />
      </div>
    );
  }
}

export default Wrapper;
