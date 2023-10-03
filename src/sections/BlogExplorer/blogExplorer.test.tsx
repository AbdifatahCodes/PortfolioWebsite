import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogExplorer from './blogExplorer'; // Adjust the import to your file structure

describe('BlogExplorer', () => {
  it('renders correctly', () => {
    render(<BlogExplorer />);
    expect(screen.getByText(/Latest Posts/i)).toBeInTheDocument();
  });
});
