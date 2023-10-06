import React, { HTMLAttributes } from 'react';

const MDXComponents = {
  h1: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className='text-5xl mb-10 font-medium font-oswald' {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className='text-4xl text-gray-light my-4 font-bold font-dmsans' {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className='text-xl my-2' {...props}>{children}</h3>
  ),
  p: ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className='text-2xl mb-2 font-roboto' {...props}>{children}</p>
  ),
  // ... other custom components
};

export default MDXComponents;
