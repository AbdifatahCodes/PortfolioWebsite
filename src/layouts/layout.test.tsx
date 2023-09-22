import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './layout';  // Adjust the import to your file structure
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Layout', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/',
      query: '',
      asPath: '',
    });
  });

  it('renders the Footer component', () => {
    render(<Layout title="Test Title"><div>Test Content</div></Layout>);
    expect(screen.getByRole('footer')).toBeInTheDocument();  // Assuming you have role="footer" in Footer component
  });

  it('renders the children content', () => {
    render(<Layout title="Test Title"><div>Test Content</div></Layout>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
