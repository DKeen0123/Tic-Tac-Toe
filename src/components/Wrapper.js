import React, { Component } from 'react';
import Header from './Header';
import PlayerTurn from './PlayerTurn';
import Arena from './Arena';
import Winner from './Winner';
import { winCheck } from '../logic/game';

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
    let { playerOneTurn } = this.state;
    let { boxes } = this.state;
    let clickedBox = this.state.boxes[event.target.id];
    let filteredBoxes = boxes.map(
      box => (box === clickedBox ? this.noughtOrCross(event.target.id) : box)
    );
    this.setState({ playerOneTurn: !playerOneTurn, boxes: filteredBoxes });
    this.gameOver(filteredBoxes);
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

  gameOver(boxes) {
    if (winCheck(boxes)) this.setState({ gameOver: true });
  }

  winnerView() {
    if (this.state.gameOver) {
      return <Winner />;
    }
  }

  currentPlayer() {
    return this.state.playerOneTurn ? 'Player 1' : 'Player 2';
  }

  render() {
    return (
      <div>
        <Header />
        <PlayerTurn player={this.currentPlayer()} />
        <Arena boxes={this.state.boxes} />
        {this.winnerView()}
      </div>
    );
  }
}

export default Wrapper;
