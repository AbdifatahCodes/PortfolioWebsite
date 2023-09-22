import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeToggle from './themeToggle'; // Adjust the import to your file structure
import { useTheme } from "next-themes";

// Mocking the useTheme hook from next-themes
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle', () => {
  let setThemeMock: jest.Mock;

  beforeEach(() => {
    setThemeMock = jest.fn();
  });

  it('should toggle from dark to light theme when clicked', () => {
    (useTheme as jest.Mock).mockReturnValue({
      systemTheme: 'dark',
      theme: 'dark',
      setTheme: setThemeMock,
    });

    const { getByRole } = render(<ThemeToggle />);
    const button = getByRole('theme-toggle-button');

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });

  it('should toggle from light to dark theme when clicked', () => {
    (useTheme as jest.Mock).mockReturnValue({
      systemTheme: 'light',
      theme: 'light',
      setTheme: setThemeMock,
    });

    const { getByRole } = render(<ThemeToggle />);
    const button = getByRole('theme-toggle-button');

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  // Add more test cases as needed
});
