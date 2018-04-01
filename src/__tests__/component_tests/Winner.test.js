import React from 'react';
import { shallow } from 'enzyme';
import Winner from '../../components/Winner';

describe('Winner', () => {
  let props = { winningPlayer: 'Player 1' };
  let winner = shallow(<Winner {...props} />);

  it('renders correctly', () => {
    expect(winner).toMatchSnapshot();
  });

  describe('when player 1 wins', () => {
    it('displays that player 1 wins', () => {
      expect(winner.text()).toEqual('Player 1 wins!');
    });
  });

  describe('when player 2 wins', () => {
    it('displays that player 2 wins', () => {
      props = { winningPlayer: 'Player 2' };
      winner = shallow(<Winner {...props} />);
      expect(winner.text()).toEqual('Player 2 wins!');
    });
  });
});
