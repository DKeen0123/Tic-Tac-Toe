import React from 'react';
import { shallow } from 'enzyme';
import Box from '../../components/Box';

describe('Box', () => {
  let box = shallow(<Box />);

  it('renders correctly', () => {
    expect(box).toMatchSnapshot();
  });

  describe('when a Box is clicked', () => {
    it('fires the `handlePlayerMove()` function', () => {
      const mockHandlePlayerMove = jest.fn();
      const props = { handlePlayerMove: mockHandlePlayerMove };
      box = shallow(<Box {...props} />);
      box.find('button').simulate('click');
      expect(mockHandlePlayerMove).toHaveBeenCalled();
    });
  });
});
