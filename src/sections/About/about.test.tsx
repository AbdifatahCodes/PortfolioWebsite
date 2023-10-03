import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from './about'; // Adjust the import to your file structure

describe('AboutSection', () => {
  it('renders the AboutSection component', () => {
    render(<AboutSection />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('contains the expected text', () => {
    render(<AboutSection />);
    expect(screen.getByText(/In 2019, during my high school years,/i)).toBeInTheDocument();
    expect(screen.getByText(/Motivated by a desire to tackle quadratic equations/i)).toBeInTheDocument();
    expect(screen.getByText(/This initial breakthrough ignited a passion within me/i)).toBeInTheDocument();
    expect(screen.getByText(/Today, I stand as a relentless learner,/i)).toBeInTheDocument();
  });
});
