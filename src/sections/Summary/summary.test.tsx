import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SummarySection from './summary'; // Adjust the import to your file structure

describe('SummarySection', () => {
  it('renders correctly', () => {
    render(<SummarySection />);
    expect(screen.getByText('Wrapping Up!')).toBeInTheDocument();
  });
});
