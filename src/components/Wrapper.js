import React, { Component } from 'react';
import Header from './Header';
import PlayerTurn from './PlayerTurn';
import Arena from './Arena';

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
      box => (box === clickedBox ? this.noughtOrCross() : box)
    );
    this.setState({ playerOneTurn: !playerOneTurn, boxes: filteredBoxes });
  };

  noughtOrCross = () => {
    return this.state.playerOneTurn === true ? (
      <p className="grid-item">X</p>
    ) : (
      <p className="grid-item">0</p>
    );
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
