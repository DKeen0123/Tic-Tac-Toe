import React from 'react';
import { shallow } from 'enzyme';
import Arena from '../../components/Arena';

describe('Arena', () => {
  const mockHandlePlayerMove = jest.fn();
  const mockBoxes = ['box', 'box'];
  const props = { handlePlayerMove: mockHandlePlayerMove, boxes: mockBoxes };
  let arena = shallow(<Arena {...props} />);

  it('renders correctly', () => {
    expect(arena).toMatchSnapshot();
  });

  it('renders a Box component', () => {
    expect(arena.find('Box').exists()).toBe(true);
  });

  it('passes `handlePlayerMove()` down to Box as props', () => {
    expect(arena.find('Box').prop('handlePlayerMove')).toEqual(
      mockHandlePlayerMove
    );
  });

  it('passes the boxes state down to Box', () => {
    expect(arena.find('Box').prop('boxes')).toEqual(mockBoxes);
  });
});
