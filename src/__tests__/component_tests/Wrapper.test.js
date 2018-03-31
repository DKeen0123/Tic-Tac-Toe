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
    it('populates boxes array with 9 boxes', () => {
      expect(wrapper.state('boxes').length).toBe(9);
    });
  });

  describe('state', () => {
    it('initializes `playerOneTurn` state as true', () => {
      expect(wrapper.state('playerOneTurn')).toEqual(true);
    });

    it('initializes `boxes` state as an array of 9 Boxes', () => {
      expect(wrapper.state('boxes').length).toBe(9);
    });
  });

  describe('`handlePlayerMove()`', () => {
    describe('when `playerOneTurn` is true', () => {
      beforeEach(() => {
        const event = { target: { id: 1 } };
        wrapper.instance().handlePlayerMove(event);
      });

      it('changes `playerOneTurn` state to false', () => {
        expect(wrapper.state('playerOneTurn')).toEqual(false);
      });

      it('replaces the corresponding clicked box with an `X`', () => {
        expect(wrapper.state('boxes')[1]).toBe('X');
      });
    });

    describe('when playerOneTurn is false', () => {
      beforeEach(() => {
        const event = { target: { id: 1 } };
        wrapper.instance().handlePlayerMove(event);
        wrapper.instance().handlePlayerMove(event);
      });

      it('changes `playerOneTurn` state to true if current state is false', () => {
        expect(wrapper.state('playerOneTurn')).toEqual(true);
      });
    });
  });

  describe('noughtOrCross', () => {
    it('returns X if playerOneTurn is true', () => {
      wrapper.setState({ playerOneTurn: true });
      expect(wrapper.instance().noughtOrCross()).toEqual('X');
    });
  });

  describe('passing props', () => {
    it('passes the boxes state down to Arena', () => {
      expect(wrapper.find('Arena').prop('boxes')).toEqual(
        wrapper.state('boxes')
      );
    });
  });
});
