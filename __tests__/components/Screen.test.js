
import React from 'react';
import renderer from 'react-test-renderer';
import Screen from '../../src/components/Screen';

it('renders correctly', () => {
  const tree = renderer.create(<Screen />).toJSON();
  expect(tree).toMatchSnapshot();
});
