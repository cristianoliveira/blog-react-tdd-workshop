import React from 'react';
import renderer from 'react-test-renderer';

import Post from './Post';

it('renders correctly', () => {
  const wrapper = renderer.create(<Post />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
