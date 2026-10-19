import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'dark'
  | 'outline-light'
  | 'light-outline'
  | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  children: React.ReactNode;
  fullWidthMobile?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  children,
  fullWidthMobile = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 font-bold tracking-tight whitespace-nowrap shrink-0 rounded-[10px] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49E619] focus-visible:ring-offset-2 cursor-pointer select-none';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-[#49E619] text-[#080808] hover:bg-[#B9FF2C] active:scale-[0.99] shadow-xs',
    secondary:
      'bg-white text-[#080808] border border-[#080808]/20 hover:border-[#080808] hover:bg-[#080808] hover:text-white active:scale-[0.99]',
    outline:
      'bg-transparent text-[#080808] border border-[#080808]/20 hover:border-[#080808] hover:bg-[#080808] hover:text-white active:scale-[0.99]',
    dark:
      'bg-[#080808] text-white hover:bg-[#49E619] hover:text-[#080808] active:scale-[0.99]',
    'outline-light':
      'bg-transparent text-white border border-white/25 hover:border-[#49E619] hover:bg-[#49E619] hover:text-[#080808] active:scale-[0.99]',
    'light-outline':
      'bg-transparent text-white border border-white/25 hover:border-[#49E619] hover:bg-[#49E619] hover:text-[#080808] active:scale-[0.99]',
    ghost:
      'bg-transparent text-[#080808] hover:text-[#49E619] px-0 py-1',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-4 py-2.5 min-h-[40px]',
    md: 'text-sm px-6 py-3.5 min-h-[44px]',
    lg: 'text-base px-8 py-4 min-h-[48px]',
  };

  const widthClass = fullWidthMobile ? 'w-full sm:w-auto' : '';
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
