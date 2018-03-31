import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Wrapper />);
  });
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

  describe('populateBoxes()', () => {
    beforeEach(() => {
      wrapper.instance().populateBoxes('box');
    });

    it('populates boxes array with 9 of whatever is passed in', () => {
      expect(wrapper.state('boxes')).toContain('box');
    });
  });

  describe('state', () => {
    it('initializes `playerOneTurn` state as true', () => {
      expect(wrapper.state('playerOneTurn')).toEqual(true);
    });

    it('initializes `boxes` state as an array of 9 Boxes', () => {
      expect(wrapper.state('boxes').length).toBe(9);
    });

    it('initializes `counter state as 1`', () => {
      expect(wrapper.state('counter')).toBe(1);
    });
  });

  describe('`handlePlayerMove()`', () => {
    it('changes `playerOneTurn` state to false', () => {
      wrapper.instance().handlePlayerMove();
      expect(wrapper.state('playerOneTurn')).toEqual(false);
    });
  });

  describe('passing props', () => {
    it('passes the boxes state down to Arena', () => {
      expect(wrapper.find('Arena').prop('boxes')).toEqual(
        wrapper.state('boxes')
      );
    });
  });

  describe('iterate()', () => {
    beforeEach(() => {
      wrapper.instance().iterate();
    });
    it('incriments counter', () => {
      expect(wrapper.state('counter')).toBe(2);
    });

    it('returns counter -1', () => {
      expect(wrapper.instance().iterate()).toEqual(2);
    });
  });
});
