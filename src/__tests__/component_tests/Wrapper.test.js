import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  const mockHandlePlayerMove = jest.fn();
  const props = { handlePlayerMove: mockHandlePlayerMove };
  let wrapper = shallow(<Wrapper {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Header component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('renders a PlayerTurn component', () => {
    expect(wrapper.find('PlayerTurn').exists()).toBe(true);
  });

  it('renders an Arena component', () => {
    expect(wrapper.find('Arena').exists()).toBe(true);
  });

  it('initializes `playerOneTurn` state as true', () => {
    expect(wrapper.state('playerOneTurn')).toEqual(true);
  });

  describe('passing props', () => {
    it('passes the handlePlayerMove prop down to Arena', () => {
      expect(wrapper.find('Arena').prop('handlePlayerMove')).toEqual(
        mockHandlePlayerMove
      );
    });
  });
});
