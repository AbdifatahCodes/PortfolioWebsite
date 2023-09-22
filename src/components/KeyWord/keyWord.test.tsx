import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import KeyWord from './keyWord';  // Adjust the import to your file structure

describe('KeyWord', () => {
  it('renders simple text when simple prop is true', () => {
    render(<KeyWord simple={true}>Simple Text</KeyWord>);
    expect(screen.getByText('Simple Text')).toBeInTheDocument();
  });

  it('renders a link when link prop is true', () => {
    render(<KeyWord link={true} url="https://example.com">Link Text</KeyWord>);
    const linkElement = screen.getByText('Link Text');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', 'https://example.com');
  });

  it('renders text without background when no_bg prop is true', () => {
    render(<KeyWord link={true} no_bg={true} url="https://example.com">No BG Text</KeyWord>);
    const linkElement = screen.getByText('No BG Text');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', 'https://example.com');
    // Add additional checks for styles if necessary
  });

  it('renders plain text when no props are provided', () => {
    render(<KeyWord>Plain Text</KeyWord>);
    expect(screen.getByText('Plain Text')).toBeInTheDocument();
  });
});
