import React from 'react';
import '@testing-library/jest-dom/';
import { render, } from '@testing-library/react';
import NameJiggle from './nameJiggle'; // Adjust the import to your file structure
import { useTheme } from "next-themes";

// Mocking the useTheme hook from next-themes
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe('NameJiggle', () => {
  it('should render the correct prefix', () => {
    (useTheme as jest.Mock).mockReturnValue({
      systemTheme: 'dark',
      theme: 'dark',
    });

    const { getByText } = render(<NameJiggle prefix="Hi! " textValue="Welcome To My Blog." />);
    expect(getByText("Hi!")).toBeInTheDocument();
  });

  it('should render the correct textValue', () => {
    (useTheme as jest.Mock).mockReturnValue({
      systemTheme: 'dark',
      theme: 'dark',
    });

    const { getByText } = render(<NameJiggle prefix="Hi! " textValue="Welcome To My Blog." />);
    expect(getByText("W")).toBeInTheDocument();
    expect(getByText(".")).toBeInTheDocument();
    // Add more checks for each letter if needed
  });
});
