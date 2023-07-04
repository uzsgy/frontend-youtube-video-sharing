import React from 'react';
import Footer from './Footer';
import Header from './Header';

const DefaultLayout: React.FC<React.BaseHTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="relative text-gray-900 min-h-screen grid grid-rows-[auto_1fr_auto] bg-white text-base font-medium">
      <Header />
      <div className="h-full container mx-auto ">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
