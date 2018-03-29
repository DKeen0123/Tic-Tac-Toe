import React from 'react';
import { shallow } from 'enzyme';
import PlayerTurn from '../../components/PlayerTurn';

describe('PlayerTurn', () => {
  const playerTurn = shallow(<PlayerTurn />);

  it('renders correctly', () => {
    expect(playerTurn).toMatchSnapshot();
  });
});
