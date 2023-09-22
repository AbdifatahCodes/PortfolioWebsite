import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTop from './scrollToTop';  // Adjust the import to your file structure

describe('ScrollToTop', () => {
  it('should not be visible initially', () => {
    render(<ScrollToTop />);
    expect(screen.queryByRole('scroll-to-top')).not.toBeInTheDocument();
  });

  it('should become visible after scrolling', () => {
    render(<ScrollToTop />);
    
    // Simulate a scroll event
    fireEvent.scroll(window, { target: { scrollY: 600 } });
    
    expect(screen.getByRole('scroll-to-top')).toBeInTheDocument();
  });

  it('should become hidden after scrolling back up', () => {
    render(<ScrollToTop />);
    
    // Simulate a scroll event to make it visible
    fireEvent.scroll(window, { target: { scrollY: 600 } });
    
    // Simulate a scroll event to hide it
    fireEvent.scroll(window, { target: { scrollY: 400 } });
    
    expect(screen.queryByRole('scroll-to-top')).not.toBeInTheDocument();
  });
});
