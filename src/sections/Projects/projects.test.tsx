import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectsSection from './projects'; // Update the import path

describe('ProjectsSection', () => {
  it('renders the section correctly', () => {
    render(<ProjectsSection />);

    // Check if the section exists
    const sectionElement = screen.getByRole('projectsSection');
    expect(sectionElement).toBeInTheDocument();

    // Check if the title exists
    const titleElement = screen.getByRole('heading', { name: /my endeavors/i });
    expect(titleElement).toBeInTheDocument();

    // Check if the description exists
    const descriptionElement = screen.getByText(/in my work, i bring ideas to life/i);
    expect(descriptionElement).toBeInTheDocument();

    // Add more tests as needed
  });
});
