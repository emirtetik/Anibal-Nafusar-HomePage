import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  const btnClass = classNames({
    'px-4 py-2 rounded-md text-white': true,
    'bg-blue-500 hover:bg-blue-600': variant === 'primary',
    'bg-gray-500 hover:bg-gray-600': variant === 'secondary',
  });

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
