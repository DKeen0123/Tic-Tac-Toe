import React, { Component } from 'react';
import Header from './Header';
import PlayerTurn from './PlayerTurn';
import Arena from './Arena';

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

  topRow(boxes) {
    if (
      boxes[0].props.children === 'X' &&
      boxes[1].props.children === 'X' &&
      boxes[2].props.children === 'X'
    ) {
      return true;
    }
  }

  midRow(boxes) {
    if (
      boxes[3].props.children === 'X' &&
      boxes[4].props.children === 'X' &&
      boxes[5].props.children === 'X'
    ) {
      return true;
    }
  }

  bottomRow(boxes) {
    if (
      boxes[6].props.children === 'X' &&
      boxes[7].props.children === 'X' &&
      boxes[8].props.children === 'X'
    ) {
      return true;
    }
  }

  crossCheck(boxes) {
    if (this.topRow(boxes)) return true;
    if (this.midRow(boxes)) return true;
    if (this.bottomRow(boxes)) return true;
  }

  gameOver() {
    let { boxes } = this.state;
    console.log(this.crossCheck(boxes));
    if (this.crossCheck(boxes)) this.setState({ gameOver: true });
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
