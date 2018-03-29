import React from 'react';
import { shallow } from 'enzyme';
import Arena from '../../components/Arena';

describe('Arena', () => {
  const props = { handlePlayerMove: jest.fn() };
  let arena = shallow(<Arena {...props} />);

  it('renders correctly', () => {
    expect(arena).toMatchSnapshot();
  });

  it('renders a Box component', () => {
    expect(arena.find('Box').exists()).toBe(true);
  });

  it('passes `handlePlayerMove()` down to Box as props', () => {
    expect(arena.find('Box').prop('handlePlayerMove')).toEqual(jest.fn());
  });
});
