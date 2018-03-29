import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/PlayerTurn';

describe('PlayerTurn', () => {
  const playerTurn = shallow(<PlayerTurn />);

  it('renders correctly', () => {
    expect(playerTurn).toMatchSnapshot();
  });
});
