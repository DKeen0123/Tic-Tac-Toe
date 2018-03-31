import React from 'react';
import { shallow } from 'enzyme';
import Arena from '../../components/Arena';

describe('Arena', () => {
  const mockHandlePlayerMove = jest.fn();
  const mockBoxes = [<box key={1} />, <box key={2} />];
  const props = { handlePlayerMove: mockHandlePlayerMove, boxes: mockBoxes };
  let arena = shallow(<Arena {...props} />);

  it('renders correctly', () => {
    expect(arena).toMatchSnapshot();
  });

  it('loops through boxes props and renders them', () => {
    expect(arena.find('box').exists()).toBe(true);
  });
});
