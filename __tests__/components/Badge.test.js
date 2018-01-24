
import React from 'react';
import renderer from 'react-test-renderer';
import Badge from '../../src/components/Badge';

it('renders correctly', () => {
  const tree = renderer.create(<Badge />).toJSON();
  expect(tree).toMatchSnapshot();
});
