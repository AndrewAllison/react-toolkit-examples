import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { Basic } from './ActionButton.stories';

it('should render the default button', () => {
  render(<Basic {...Basic.args} />);
  expect(screen.getByRole('button')).toHaveTextContent('Man')
});
