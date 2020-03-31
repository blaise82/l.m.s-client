import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';
describe('App component tests', () => {
  it('renders welcome page text successfully', () => {
    const { getByText } = render(<App />);
    const testTest = getByText(/Welcome to L.M.S - Your Library Managment System/i);
    expect(testTest).toBeInTheDocument();
  });
})

