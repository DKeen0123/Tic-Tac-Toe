import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  const wrapper = shallow(<Wrapper />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a header component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });
});
