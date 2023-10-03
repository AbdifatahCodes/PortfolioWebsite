import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsSection from './skills'; // Adjust the import to your file structure

describe('SkillsSection', () => {
  it('renders correctly', () => {
    render(<SkillsSection />);
    expect(screen.getByText('My Skills')).toBeInTheDocument();
  });

  it('contains the skills description', () => {
    render(<SkillsSection />);
    expect(screen.getByText(/In my pursuit of mastery/i)).toBeInTheDocument();
  });
});
