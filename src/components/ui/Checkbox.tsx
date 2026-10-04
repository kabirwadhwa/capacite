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
            className="h-4 w-4 rounded border-line text-forest focus:ring-forest cursor-pointer"
            {...props}
          />
        </div>
        <div className="text-sm">
          <label htmlFor={id} className="font-medium text-ink cursor-pointer select-none">
            {label}
          </label>
          {description && <p className="text-xs text-muted mt-0.5">{description}</p>}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
