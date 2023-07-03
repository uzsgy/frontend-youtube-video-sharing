import cn from 'classnames';
import React, { useCallback } from 'react';

const INPUT_LEVELS = ['sm', 'md', 'lg', 'xl'] as const;
export type TInputLevel = (typeof INPUT_LEVELS)[number];

interface Props {
  onEnter?: () => void;
}

export const Input = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>(({ className, onEnter, ...props }, ref) => {
  const handleOnEnter: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        onEnter && event.key === 'Enter' && onEnter();
      },
      [onEnter]
    );

  return (
    <input
      ref={ref}
      onKeyDown={handleOnEnter}
      className={cn('inp inp-sm', className)}
      {...props}
    />
  );
});

Input.displayName = 'Input';
