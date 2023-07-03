import cn from 'classnames';
import React from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn('btn btn-sm btn-primary', className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
