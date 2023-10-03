import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsList from './skillsList';
import { skills } from './skillsObj';

describe('SkillsList', () => {
  it('renders correctly', () => {
    render(<SkillsList />);
    
    // Check if the list is rendered
    const listElement = screen.getByRole('skillsList');
    expect(listElement).toBeInTheDocument();
    
    // Check if the correct number of skills are displayed
    const items = screen.getAllByRole('skillsListItem');
    expect(items.length).toBe(skills.length);
    
    // Check if the first skill is correctly displayed
    expect(items[0]).toHaveTextContent(skills[0].name);
  });
});
