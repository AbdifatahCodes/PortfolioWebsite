import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './footer';  // Adjust the import to your file structure

describe('Footer', () => {
  it('renders the email address', () => {
    render(<Footer />);
    expect(screen.getByText(/sample@gmail.com/i)).toBeInTheDocument();
  });

  it('renders the social media icons', () => {
    render(<Footer />);
    const githubIcon = screen.getByRole('FaGithub-icon');
    const twitterIcon = screen.getByRole('FaXTwitter-icon');
    const linkedinIcon = screen.getByRole('FaLinkedinIn-icon');

    expect(githubIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  it('renders the copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = 'Made by'
    const nameOfAuthor = `Abdifatah Osman`;
    expect(screen.getByText(copyrightText)).toBeInTheDocument();
    expect(screen.getByText(nameOfAuthor)).toBeInTheDocument();
    expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();
  });
});
