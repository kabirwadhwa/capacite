import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'forest' | 'clay' | 'sand' | 'outline' | 'neutral';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'forest',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    forest: 'bg-forest/10 text-forest border border-forest/20',
    clay: 'bg-clay/10 text-clay-dark border border-clay/20',
    sand: 'bg-sand text-ink-light border border-line',
    neutral: 'bg-paper-tint text-muted border border-line',
    outline: 'bg-transparent text-ink border border-line',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium rounded-full',
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
