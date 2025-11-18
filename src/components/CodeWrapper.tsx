import { useState, useEffect } from 'react';

interface CodeWrapperProps {
  children: string;
  delay?: number;
}

export function CodeWrapper({ children, delay = 100 }: CodeWrapperProps) {
  const [showOpening, setShowOpening] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showClosing, setShowClosing] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowOpening(true), delay);
    const timer2 = setTimeout(() => setShowContent(true), delay + 300);
    const timer3 = setTimeout(() => setShowClosing(true), delay + 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [delay]);

  return (
    <span className="inline-block">
      <span className="text-blue-400 opacity-0 animate-fade-out">
        {showOpening && '</>'}
      </span>
      <span className={showContent ? 'opacity-100' : 'opacity-0'}>
        {children}
      </span>
      <span className="text-blue-400 opacity-0 animate-fade-out">
        {showClosing && '<\\>'}
      </span>
    </span>
  );
}
