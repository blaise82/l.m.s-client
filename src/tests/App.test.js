import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders clint main text', () => {
  const { getByText } = render(<App />);
  const testTest = getByText(/lms-client main file/i);
  expect(testTest).toBeInTheDocument();
});
