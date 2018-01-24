
import React from 'react';
import renderer from 'react-test-renderer';
import HyperlinkButton from '../../src/components/HyperlinkButton';

it('renders correctly', () => {
  const tree = renderer.create(<HyperlinkButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
