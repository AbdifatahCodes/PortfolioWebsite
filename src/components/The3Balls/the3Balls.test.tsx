import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import The3Balls from './the3Balls';  // Adjust the import to your file structure

describe('The3Balls', () => {
  it('renders correctly', () => {
    render(<The3Balls />);
    const balls = screen.getAllByRole('motion.div');
    expect(balls.length).toBe(3);
  });
});
