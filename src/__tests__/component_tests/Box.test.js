import React from 'react';
import { shallow } from 'enzyme';
import Box from '../../components/Box';

describe('Box', () => {
  let box = shallow(<Box />);

  it('renders correctly', () => {
    expect(box).toMatchSnapshot();
  });
});
