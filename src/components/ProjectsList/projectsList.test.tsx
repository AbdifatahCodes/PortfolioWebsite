import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsList from './projectsList';
import '@testing-library/jest-dom';

describe('ProjectsList', () => {
  it('renders correctly', () => {
    render(<ProjectsList />);
    
    // Check if project names are rendered
    expect(screen.getByText('Firepass')).toBeInTheDocument();
    
  });
});
