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

  it('initializes `playerOneTurn` state as true', () => {
    expect(wrapper.state('playerOneTurn')).toEqual(true);
  });

  describe('`handlePlayerMove()`', () => {
    it('changes `playerOneTurn` state to false', () => {
      const event = { target: 'button' };
      wrapper.instance().handlePlayerMove(event);
      expect(wrapper.state('playerOneTurn')).toEqual(false);
    });

    it('removes the event target, replacing it with an x', () => {
      const event = { target: 'button' };
      wrapper.instance().handlePlayerMove(event);
      expect(event.target).toEqual('x');
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
