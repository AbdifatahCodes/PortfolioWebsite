// src/components/mdx-components.tsx
import React from 'react';

type MDXComponentProps = {
  children: React.ReactNode;
};

const MDXComponents = {
  h1: ({ children }: MDXComponentProps) => (
    <h1 className='text-5xl mb-10 font-medium font-oswald'>{children}</h1>
  ),
  h2: ({ children }: MDXComponentProps) => (
    <h2 className='text-4xl text-gray-light my-4 font-bold font-dmsans'>{children}</h2>
  ),
  h3: ({ children }: MDXComponentProps) => (
    <h3 className='text-xl my-2'>{children}</h3>
  ),
  p: ({ children }: MDXComponentProps) => (
    <p className='text-2xl mb-2 font-roboto'>{children}</p>
  ),
  // ... other custom components
};

export default MDXComponents;
