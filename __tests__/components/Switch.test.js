
import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '../../src/components/Switch';

it('renders correctly', () => {
  const tree = renderer.create(<Switch />).toJSON();
  expect(tree).toMatchSnapshot();
});
