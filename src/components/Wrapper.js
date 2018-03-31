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
      boxes: [],
      counter: 1
    };
  }
  componentWillMount() {
    this.populateBoxes();
  }

  populateBoxes(item = <Box handlePlayerMove={this.handlePlayerMove} />) {
    let { boxes } = this.state;
    for (var i = 0; i < 9; i++) {
      boxes.push(item);
    }

    this.setState({ boxes });
  }

  handlePlayerMove = event => {
    this.setState({ playerOneTurn: false });
  };

  iterate = () => {
    let { counter } = this.state;
    counter++;
    this.setState({ counter });

    return counter - 1;
  };

  render() {
    return (
      <div>
        <Header />
        <PlayerTurn />
        <Arena boxes={this.state.boxes} />
      </div>
    );
  }
}

export default Wrapper;
