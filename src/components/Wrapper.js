import React, { Component } from 'react';
import Header from './Header';
import PlayerTurn from './PlayerTurn';
import Arena from './Arena';
import { crossCheck } from '../logic/game';

class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      playerOneTurn: true,
      boxes: [],
      gameOver: false
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
        <button
          className="grid-item"
          id={number}
          key={number}
          onClick={this.handlePlayerMove}
        />
      )
    );

    this.setState({ boxes });
  }

  handlePlayerMove = event => {
    this.gameOver();
    let { playerOneTurn } = this.state;
    let { boxes } = this.state;
    let clickedBox = this.state.boxes[event.target.id];
    let filteredBoxes = boxes.map(
      box => (box === clickedBox ? this.noughtOrCross(event.target.id) : box)
    );
    this.setState({ playerOneTurn: !playerOneTurn, boxes: filteredBoxes });
  };

  noughtOrCross = id => {
    return this.state.playerOneTurn === true ? (
      <p key={id} className="grid-item">
        X
      </p>
    ) : (
      <p key={id} className="grid-item">
        0
      </p>
    );
  };

  gameOver() {
    let { boxes } = this.state;
    if (crossCheck(boxes)) this.setState({ gameOver: true });
  }

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
