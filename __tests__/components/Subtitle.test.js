
import React from 'react';
import renderer from 'react-test-renderer';
import Subtitle from '../../src/components/Subtitle';

it('renders correctly', () => {
  const tree = renderer.create(<Subtitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
