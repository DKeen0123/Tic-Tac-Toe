import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  const wrapper = shallow(<Wrapper />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Header component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('renders a PlayerTurn component', () => {
    expect(wrapper.find('PlayerTurn').exists()).toBe(true);
  });
});
