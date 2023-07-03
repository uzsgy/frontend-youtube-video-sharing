import React from 'react';
import Footer from './Footer';
import Header from './Header';

const DefaultLayout: React.FC<React.BaseHTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="relative min-h-screen grid grid-rows-[auto_1fr_auto] bg-white text-base font-medium">
      <Header />
      <div className="h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
