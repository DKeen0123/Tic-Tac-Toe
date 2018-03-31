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
      boxes.push(
        <Box key={number + 1} handlePlayerMove={this.handlePlayerMove} />
      )
    );

    this.setState({ boxes });
  }

  handlePlayerMove = event => {
    let { playerOneTurn } = this.state;
    this.setState({ playerOneTurn: !playerOneTurn });
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
