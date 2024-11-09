"use client"

import { useEffect, useState } from 'react';
// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';





const CodeBlock = ({
  code,
  language = 'javascript',
}: {
  code: string;
  language?: string;
}) => {

  const [dark , setDark] = useState(false)

  useEffect(() => {
    
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setDark(isDark);
    };

    
    checkDarkMode();

    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

   
    return () => {
      observer.disconnect();
    };
  }, []);

  
  
  return (
    <div  style={{ maxHeight: '400px', overflowY: 'auto', borderRadius: '8px' }}>
      <SyntaxHighlighter language={language} style={dark ? oneDark : oneLight} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
