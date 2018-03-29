import React from 'react';
import { shallow } from 'enzyme';
import Arena from '../../components/Arena';

describe('Arena', () => {
  const arena = shallow(<Arena />);

  it('renders correctly', () => {
    expect(arena).toMatchSnapshot();
  });

  it('renders a Box component', () => {
    expect(arena.find('Box').exists()).toBe(true);
  });
});
