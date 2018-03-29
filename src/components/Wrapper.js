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

  populateBoxes(item = <Box />) {
    let { boxes } = this.state;
    for (var i = 0; i < 9; i++) {
      boxes.push(item);
    }

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
        <Arena
          handlePlayerMove={this.handlePlayerMove}
          boxes={this.state.boxes}
        />
      </div>
    );
  }
}

export default Wrapper;
