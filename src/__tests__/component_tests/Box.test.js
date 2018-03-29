import React from 'react';
import { shallow } from 'enzyme';
import Box from '../../components/Box';

describe('Box', () => {
  const box = shallow(<Box />);

  it('renders correctly', () => {
    expect(box).toMatchSnapshot();
  });
});
