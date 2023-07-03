import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black-light/20 py-5">
      <div className="container">
        <p className="text-center text-sm">
          {' '}
          Copyright ©2023 All rights reserved by{' '}
          <span className="font-bold text-primary hover:underline">
            SBThemes
          </span>
          .{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
