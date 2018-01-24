
import React from 'react';
import renderer from 'react-test-renderer';
import ThemeProvider from '../src/ThemeProvider';
import Screen from '../src/components/Screen';

it('renders correctly', () => {
  const nextElement = (
    <ThemeProvider>
      <Screen />
    </ThemeProvider>
  );
  const tree = renderer.create(nextElement).toJSON();
  expect(tree).toMatchSnapshot();
});
