import React, { HTMLAttributes, useState } from 'react';
const { Prism: SyntaxHighlighter } = require('react-syntax-highlighter');
const { dracula } = require('react-syntax-highlighter/dist/cjs/styles/prism');
import { LuClipboard, LuClipboardCheck } from "react-icons/lu";

const MDXComponents = {
  h1: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className='text-5xl mb-10 font-medium font-oswald' {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className='text-4xl text-gray-light my-8 font-bold font-dmsans' {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className='text-3xl my-4' {...props}>{children}</h3>
  ),
  p: ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className='text-2xl mb-4 font-roboto' {...props}>{children}</p>
  ),
  ul: ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className='space-y-1' {...props}>{children}</ul>
  ),
  code: ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (children: any) => {
      if ('clipboard' in navigator) {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      }
    };

    // Check if it is a block code (has a className)
    if (props.className && props.className.startsWith('language-')) {
      const language = props.className.replace(/language-/, '');
      return (
        <div className='flex flex-col w-auto relative space-y-5'>
          <div className='copy-code bg-black-bg flex flex-row justify-between absolute w-full py-2 rounded-t text-xs px-4'>
              <p>{language}</p>
              <button
                className='flex flex-row gap-1'
                onClick={() => copyToClipboard(children)}
              >
                {!copied ? (
                  <>
                    <LuClipboard size={14} />
                    <p>Copy</p>
                  </>
                ) : (
                  <>
                    <LuClipboardCheck size={14} />
                    <p>Copied!</p>
                  </>
                )}
              </button>
          </div>
          <div></div>
          <SyntaxHighlighter className='code flex-grow' style={dracula} language={language}>
            {children}
          </SyntaxHighlighter>
        </div>
      );
    }

    // Fallback for inline code (no className)
    return <code className='bg-code-dark-bg p-1 rounded'>{children}</code>;
  },
  // ... other custom components
};

export default MDXComponents;
