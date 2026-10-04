import React from 'react';
import { cn } from '@/lib/utils';

interface FieldProps {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export function Field({
  label,
  id,
  error,
  hint,
  required,
  children,
}: FieldProps) {
  return (
    <div className="space-y-1.5 text-left">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink flex items-center justify-between"
      >
        <span>
          {label}
          {required && <span className="text-clay ml-1" aria-hidden="true">*</span>}
        </span>
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
      {error && <p className="text-xs font-medium text-clay" role="alert">{error}</p>}
    </div>
  );
}

export const inputStyles =
  'w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest disabled:bg-sand/30 disabled:cursor-not-allowed';
