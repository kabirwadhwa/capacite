import React from 'react';
import { cn } from '@/lib/utils';
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
}

export function Alert({
  variant = 'info',
  title,
  children,
  className,
  ...props
}: AlertProps) {
  const configs = {
    info: {
      bg: 'bg-forest/5 border-forest/20 text-ink',
      icon: <Info className="h-5 w-5 text-forest shrink-0 mt-0.5" />,
    },
    success: {
      bg: 'bg-emerald-50 border-emerald-200 text-emerald-950',
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />,
    },
    warning: {
      bg: 'bg-amber-50 border-amber-200 text-amber-950',
      icon: <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />,
    },
    error: {
      bg: 'bg-clay/10 border-clay/30 text-ink',
      icon: <AlertCircle className="h-5 w-5 text-clay shrink-0 mt-0.5" />,
    },
  };

  const config = configs[variant];

  return (
    <div
      role="alert"
      className={cn('flex items-start gap-3 rounded-lg border p-4 text-sm', config.bg, className)}
      {...props}
    >
      {config.icon}
      <div className="space-y-1">
        {title && <h5 className="font-medium text-ink">{title}</h5>}
        <div className="text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
