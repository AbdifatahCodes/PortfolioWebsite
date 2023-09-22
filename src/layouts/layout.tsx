import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <main className='space-y-2'>
        <Navbar title={title} />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
