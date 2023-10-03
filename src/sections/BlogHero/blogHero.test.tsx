import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogHeroSection from './blogHero'; // Adjust the import to your file structure

describe('BlogHeroSection', () => {
  it('renders correctly', () => {
    render(<BlogHeroSection />);

    // Check if the component renders without crashing
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toBeInTheDocument();

    // Check if NameJiggle component is rendered
    const nameJiggle = screen.getByRole('nameJiggle');
    expect(nameJiggle).toBeInTheDocument();

    // Check if The3Balls component is rendered
    // Assuming The3Balls has a role attribute
    const the3Balls = screen.getByRole('the3Balls');
    expect(the3Balls).toBeInTheDocument();

    // Check if the "Continue" button is rendered
    const continueButton = screen.getByText(/Continue/i);
    expect(continueButton).toBeInTheDocument();
  });
});
