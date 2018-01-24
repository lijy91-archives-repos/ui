
import React from 'react';
import renderer from 'react-test-renderer';
import ActivityIndicator from '../../src/components/ActivityIndicator';

it('renders correctly', () => {
  const tree = renderer.create(<ActivityIndicator />).toJSON();
  expect(tree).toMatchSnapshot();
});
