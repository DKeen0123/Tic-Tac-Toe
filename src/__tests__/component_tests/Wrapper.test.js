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
      expect(wrapper.state('playerOneTurn')).toBe(true);
    });

    it('initializes `boxes` state as an array of 9 Boxes', () => {
      expect(wrapper.state('boxes').length).toBe(9);
    });

    it('initializes `gameOver` state as false', () => {
      expect(wrapper.state('gameOver')).toBe(false);
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
        expect(wrapper.state('boxes')[1]).toEqual(
          <p key="1" className="grid-item">
            X
          </p>
        );
      });

      describe('changes `gameOver` state to true when', () => {
        describe('is X or 0 on horizontals', () => {
          it('top horizontal of Xs', () => {
            wrapper.setState({
              boxes: [
                { props: { children: 'X' } },
                { props: { children: 'X' } },
                { props: { children: 'X' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } }
              ]
            });
            const event = { target: { id: 7 } };
            wrapper.instance().handlePlayerMove(event);
            expect(wrapper.state('gameOver')).toEqual(true);
          });

          it('middle horizontal of Xs', () => {
            wrapper.setState({
              boxes: [
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'X' } },
                { props: { children: 'X' } },
                { props: { children: 'X' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } }
              ]
            });
            const event = { target: { id: 1 } };
            wrapper.instance().handlePlayerMove(event);
            expect(wrapper.state('gameOver')).toEqual(true);
          });
        });
      });
    });

    describe('when playerOneTurn is false', () => {
      beforeEach(() => {
        const eventOne = { target: { id: 4 } };
        const eventTwo = { target: { id: 2 } };
        wrapper.instance().handlePlayerMove(eventOne);
        wrapper.instance().handlePlayerMove(eventTwo);
      });

      it('changes `playerOneTurn` state to true if current state is false', () => {
        expect(wrapper.state('playerOneTurn')).toEqual(true);
      });

      it('replaces the corresponding clicked box with an `0`', () => {
        expect(wrapper.state('boxes')[2]).toEqual(
          <p key="2" className="grid-item">
            0
          </p>
        );
      });
    });
  });

  describe('noughtOrCross', () => {
    it('returns X if playerOneTurn is true', () => {
      wrapper.setState({ playerOneTurn: true });
      expect(wrapper.instance().noughtOrCross()).toEqual(
        <p className="grid-item">X</p>
      );
    });

    it('returns O if playerOneTurn is false', () => {
      wrapper.setState({ playerOneTurn: false });
      expect(wrapper.instance().noughtOrCross()).toEqual(
        <p className="grid-item">0</p>
      );
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
