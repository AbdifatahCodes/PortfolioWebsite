import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './navbar';  // Adjust the import to your file structure
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Navbar', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/',
      query: '',
      asPath: '',
    });
  });

  it('renders the ThemeToggle component', () => {
    render(<Navbar title="My Portfolio" />);
    expect(screen.getByRole('theme-toggle-button')).toBeInTheDocument();  // Assuming you have data-testid="theme-toggle" in ThemeToggle component
  });

  it('toggles navigation menu when button is clicked', () => {
    render(<Navbar title="My Portfolio" />);
    const toggleButton = screen.getByRole('hidden-menu-button');
    
    // Check initial state (assuming menu is closed initially)
    expect(screen.queryByRole('hidden-menu')).not.toBeInTheDocument();
    
    // Simulate click event
    fireEvent.click(toggleButton);
    
    // Check if menu is now open
    expect(screen.getByRole('hidden-menu')).toBeInTheDocument();
  });
});
