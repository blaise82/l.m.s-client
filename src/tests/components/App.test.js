import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

test('renders clint main text', () => {
  const { getByText } = render(<App />);
  const testTest = getByText(/Welcome to L.M.S - Your Library Managment System/i);
  expect(testTest).toBeInTheDocument();
});
