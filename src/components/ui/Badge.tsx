import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'forest' | 'clay' | 'sand' | 'outline' | 'neutral' | 'pink';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'pink',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    forest: 'bg-[#FFE5F2] text-black border border-[#FFC6E5]',
    clay: 'bg-[#FF1BA3] text-white border border-[#FF1BA3]',
    sand: 'bg-[#FFE5F2] text-black border border-[#FFC6E5]',
    neutral: 'bg-white text-black/70 border border-[#FFC6E5]',
    outline: 'bg-transparent text-black border border-[#FFC6E5]',
    pink: 'bg-[#FFE5F2] text-black border border-[#FFC6E5]',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 font-bold',
    md: 'text-xs px-3 py-1 font-bold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full tracking-wide shadow-xs',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
