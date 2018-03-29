import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  let wrapper = shallow(<Wrapper />);

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

  describe('state', () => {
    it('initializes `playerOneTurn` state as true', () => {
      expect(wrapper.state('playerOneTurn')).toEqual(true);
    });

    it('initializes `boxes` state as an array of 9 Boxes', () => {
      expect(wrapper.state('boxes').contains(<Box />));
    });
  });

  describe('`handlePlayerMove()`', () => {
    it('changes `playerOneTurn` state to false', () => {
      wrapper.instance().handlePlayerMove();
      expect(wrapper.state('playerOneTurn')).toEqual(false);
    });
  });

  describe('passing props', () => {
    it('passes the handlePlayerMove prop down to Arena', () => {
      expect(wrapper.find('Arena').prop('handlePlayerMove')).toEqual(
        wrapper.instance().handlePlayerMove
      );
    });
  });
});
