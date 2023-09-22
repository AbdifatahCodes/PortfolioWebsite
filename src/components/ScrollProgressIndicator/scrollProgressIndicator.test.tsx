import React from 'react';
import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useScroll } from 'framer-motion';
import ScrollProgressIndicator from './scrollProgressIndicator';  // Adjust the import to your file structure

// Mocking useScroll hook from Framer Motion
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useScroll: jest.fn(),
  motion: {
    div: ({ children, ...props }: { children?: React.ReactNode }) => <div {...props}>{children}</div>,
  },
}));

describe('ScrollProgressIndicator', () => {
  it('renders correctly', () => {
    (useScroll as jest.Mock).mockReturnValue({ scrollYProgress: 0.5 });

    render(<ScrollProgressIndicator />);
    const element = screen.getByRole('scroll-progress-indicator');
   
    expect(element).toHaveClass('fixed top-0 right-0 left-0 h-2 md:h-3 bg-rose-500 origin-left');
    // Directly check the style object
    if (element && element.style) {
      expect(element.style.scaleX).toBe('0.5px');
    } else {
      throw new Error('Element or style not found');
    }

  });
});
