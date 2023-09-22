import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from './hero';  // Adjust the import to your file structure

describe('HeroSection', () => {
  it('renders the animated name', () => {
    render(<HeroSection />);
    expect(screen.getByRole("nameJiggle")).toBeInTheDocument();
  });

  it('renders the 3 balls component', () => {
    render(<HeroSection />);
    expect(screen.getByRole('the3Balls')).toBeInTheDocument();
  });

  it('renders the Full-Stack Web Developer keyword with link', () => {
    render(<HeroSection />);
    const keyword = screen.getByText(/Full-Stack Web Developer/i).closest('a');
    expect(keyword).toHaveAttribute('href');
  });

  it('renders the Continue button', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Continue/i)).toBeInTheDocument();
  });
});
