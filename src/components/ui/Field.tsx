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
        className="block text-xs font-bold uppercase tracking-wider text-black flex items-center justify-between"
      >
        <span>
          {label}
          {required && <span className="text-[#FF1BA3] ml-1" aria-hidden="true">*</span>}
        </span>
      </label>
      {children}
      {hint && !error && <p className="text-xs text-black/60 font-medium">{hint}</p>}
      {error && <p className="text-xs font-bold text-[#FF1BA3]" role="alert">{error}</p>}
    </div>
  );
}

export const inputStyles =
  'w-full rounded-xl border border-[#FFC6E5] bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 transition-all focus:border-[#FF1BA3] focus:outline-none focus:ring-2 focus:ring-[#FF1BA3]/20 disabled:bg-[#FFE5F2]/30 disabled:cursor-not-allowed shadow-sm';
