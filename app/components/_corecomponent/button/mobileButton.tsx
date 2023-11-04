import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string
}
export default function MobileButton({ onClick,children,className }: ButtonProps) {
  return (
    <button onClick={onClick} type="button" className={className}>
      {children}
    </button>
  );
}
