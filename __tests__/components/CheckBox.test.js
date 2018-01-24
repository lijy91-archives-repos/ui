
import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from '../../src/components/CheckBox';

it('renders correctly', () => {
  const tree = renderer.create(<CheckBox checked />).toJSON();
  expect(tree).toMatchSnapshot();
});
