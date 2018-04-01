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

      describe('changes `gameOver` state to true when ', () => {
        describe('horizontals', () => {
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
          it('bottom horizontal of Xs', () => {
            wrapper.setState({
              boxes: [
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'X' } },
                { props: { children: 'X' } },
                { props: { children: 'X' } }
              ]
            });
            const event = { target: { id: 1 } };
            wrapper.instance().handlePlayerMove(event);
            expect(wrapper.state('gameOver')).toEqual(true);
          });

          it('top horizontal of 0s', () => {
            wrapper.setState({
              boxes: [
                { props: { children: '0' } },
                { props: { children: '0' } },
                { props: { children: '0' } },
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

          it('middle horizontal of 0s', () => {
            wrapper.setState({
              boxes: [
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: '0' } },
                { props: { children: '0' } },
                { props: { children: '0' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } }
              ]
            });
            const event = { target: { id: 1 } };
            wrapper.instance().handlePlayerMove(event);
            expect(wrapper.state('gameOver')).toEqual(true);
          });
          it('bottom horizontal of 0s', () => {
            wrapper.setState({
              boxes: [
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: 'p' } },
                { props: { children: '0' } },
                { props: { children: '0' } },
                { props: { children: '0' } }
              ]
            });
            const event = { target: { id: 1 } };
            wrapper.instance().handlePlayerMove(event);
            expect(wrapper.state('gameOver')).toEqual(true);
          });
        });

        describe('verticals', () => {
          describe('first column', () => {
            it('is Xs', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } }
                ]
              });
              const event = { target: { id: 8 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });

            it('is 0s', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } }
                ]
              });
              const event = { target: { id: 8 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });
          });

          describe('second column', () => {
            it('is Xs', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } }
                ]
              });
              const event = { target: { id: 8 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });

            it('is 0s', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } }
                ]
              });
              const event = { target: { id: 8 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });
          });

          describe('end column', () => {
            it('is Xs', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } }
                ]
              });
              const event = { target: { id: 1 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });

            it('is 0s', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } }
                ]
              });
              const event = { target: { id: 1 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });
          });
        });

        describe('diagonals', () => {
          describe('left to right', () => {
            it('is Xs', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } }
                ]
              });
              const event = { target: { id: 1 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });

            it('is 0s', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } }
                ]
              });
              const event = { target: { id: 1 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });
          });

          describe('right to left', () => {
            it('is Xs', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'X' } },
                  { props: { children: 'p' } },
                  { props: { children: 'p' } }
                ]
              });
              const event = { target: { id: 1 } };
              wrapper.instance().handlePlayerMove(event);
              expect(wrapper.state('gameOver')).toEqual(true);
            });

            it('is 0s', () => {
              wrapper.setState({
                boxes: [
                  { props: { children: 'p' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
                  { props: { children: 'p' } },
                  { props: { children: '0' } },
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

  describe('currentPlayer()', () => {
    it('returns player one if player ones turn', () => {
      expect(wrapper.instance().currentPlayer()).toEqual('Player 1');
    });

    it('returns player two if player twos turn', () => {
      wrapper.setState({ playerOneTurn: false });
      expect(wrapper.instance().currentPlayer()).toEqual('Player 2');
    });
  });

  describe('winnerView()', () => {
    describe('when gameOver is false', () => {
      it('renders default view with no `Winner` component', () => {
        expect(wrapper.find('Winner').exists()).toBe(false);
      });
    });

    describe('when gameOver is true', () => {
      beforeEach(() => {
        wrapper.setState({ gameOver: true });
      });
      it('renders gameOver view with a `Winner` component', () => {
        expect(wrapper.find('Winner').exists()).toBe(true);
      });

      it('passes winningPlayer props down to Winner component (player 2 wins)', () => {
        wrapper.setState({ playerOneTurn: true });
        expect(wrapper.find('Winner').prop('winningPlayer')).toEqual(
          'Player 2'
        );
      });

      it('passes winningPlayer props down to Winner component (player 1 wins)', () => {
        wrapper.setState({ playerOneTurn: false });
        expect(wrapper.find('Winner').prop('winningPlayer')).toEqual(
          'Player 1'
        );
      });
    });
  });

  describe('passing props', () => {
    it('passes the boxes state down to Arena', () => {
      expect(wrapper.find('Arena').prop('boxes')).toEqual(
        wrapper.state('boxes')
      );
    });

    it('passes current player state down to the playerTurn component', () => {
      expect(wrapper.find('PlayerTurn').prop('player')).toEqual(
        wrapper.instance().currentPlayer()
      );
    });
  });
});
