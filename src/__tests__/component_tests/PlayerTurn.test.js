import React from 'react';
import { shallow } from 'enzyme';
import PlayerTurn from '../../components/PlayerTurn';

describe('PlayerTurn', () => {
  let props = { player: 'Player 1' };
  let playerTurn = shallow(<PlayerTurn {...props} />);

  it('renders correctly', () => {
    expect(playerTurn).toMatchSnapshot();
  });

  describe("player 1's turn", () => {
    it("states that it is player 1's turn", () => {
      expect(playerTurn.text()).toEqual("Player 1's turn!");
    });
  });

  describe("player 2's turn", () => {
    it("states that it is player 2's turn", () => {
      props = { player: 'Player 2' };
      playerTurn = shallow(<PlayerTurn {...props} />);
      expect(playerTurn.text()).toEqual("Player 2's turn!");
    });
  });
});
