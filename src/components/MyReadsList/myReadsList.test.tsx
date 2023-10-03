import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyReadsList from './myReadsList'; // Adjust the import to your file structure
import { myReads } from './myReadsObj'; // Adjust the import to your file structure

describe('MyReadsList', () => {
  it('renders correctly', () => {
    render(<MyReadsList />);
    expect(screen.getByText(myReads[0].name)).toBeInTheDocument();
  });

  it('displays the correct number of read items', () => {
    render(<MyReadsList />);
    const readItems = screen.getAllByRole('myReadsListItem');
    expect(readItems.length).toBe(myReads.length);
  });
});
