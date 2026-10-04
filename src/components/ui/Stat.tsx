import React from 'react';
import { cn } from '@/lib/utils';

interface StatProps {
  value: string;
  label: string;
  subtext?: string;
  className?: string;
}

export function Stat({ value, label, subtext, className }: StatProps) {
  return (
    <div className={cn('p-5 rounded-xl border border-line bg-white/70', className)}>
      <div className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight">
        {value}
      </div>
      <div className="text-sm font-medium text-ink mt-1.5">{label}</div>
      {subtext && <div className="text-xs text-muted mt-1">{subtext}</div>}
    </div>
  );
}
