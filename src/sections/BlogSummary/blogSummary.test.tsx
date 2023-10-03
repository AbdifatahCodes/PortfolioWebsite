import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogSummary from './blogSummary'; // Adjust the import to your file structure

describe('BlogSummary', () => {
  it('renders correctly', () => {
    render(<BlogSummary />);
    expect(screen.getByText(/Exploring Full-Stack Development, Philosophy, Social Cultures, and Music: A Blog Journey/i)).toBeInTheDocument();
  });
});
