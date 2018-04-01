import React from 'react';
import { shallow } from 'enzyme';
import Winner from '../../components/Winner';

describe('Winner', () => {
  const winner = shallow(<Winner />);
  it('renders correctly', () => {
    expect(winner).toMatchSnapshot();
  });
});
