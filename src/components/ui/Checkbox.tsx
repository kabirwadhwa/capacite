import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, description, className, checked, ...props }, ref) => {
    return (
      <div className={cn('flex items-start gap-3', className)}>
        <div className="flex h-5 items-center">
          <input
            id={id}
            ref={ref}
            type="checkbox"
            checked={checked}
            className="h-4 w-4 rounded border-[#FFC6E5] text-[#FF1BA3] focus:ring-[#FF1BA3] accent-[#FF1BA3] cursor-pointer"
            {...props}
          />
        </div>
        <div className="text-sm">
          <label htmlFor={id} className="font-bold text-foreground cursor-pointer select-none">
            {label}
          </label>
          {description && <p className="text-xs text-foreground/60 mt-0.5 font-medium">{description}</p>}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
