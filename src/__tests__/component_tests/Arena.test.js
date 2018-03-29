import React from 'react';
import { shallow } from 'enzyme';
import Arena from '../../components/Arena';

describe('Arena', () => {
  let arena = shallow(<Arena />);

  it('renders correctly', () => {
    expect(arena).toMatchSnapshot();
  });

  it('renders a Box component', () => {
    expect(arena.find('Box').exists()).toBe(true);
  });

  describe('when a Box is clicked', () => {
    it('fires the `handlePlayerMove()` function', () => {
      const mockHandlePlayerMove = jest.fn();
      const props = { handlePlayerMove: mockHandlePlayerMove };
      arena = shallow(<Arena {...props} />);
      arena.find('Box').simulate('click');
      expect(mockHandlePlayerMove).toHaveBeenCalled();
    });
  });
});
