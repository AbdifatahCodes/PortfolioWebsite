import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyBackgroundSection from './myBackground'; // Adjust the import to your file structure

describe('MyBackgroundSection', () => {
  it('renders correctly', () => {
    render(<MyBackgroundSection />);
    expect(screen.getByText('My Foundational Texts')).toBeInTheDocument();
  });
});
