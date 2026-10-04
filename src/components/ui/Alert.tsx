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
      bg: 'bg-[#FFE5F2]/80 border-[#FFC6E5] text-black',
      icon: <Info className="h-5 w-5 text-[#FF1BA3] shrink-0 mt-0.5" />,
    },
    success: {
      bg: 'bg-[#FFE5F2]/80 border-[#FFC6E5] text-black',
      icon: <CheckCircle2 className="h-5 w-5 text-[#FF1BA3] shrink-0 mt-0.5" />,
    },
    warning: {
      bg: 'bg-[#FFE5F2]/80 border-[#FFC6E5] text-black',
      icon: <AlertTriangle className="h-5 w-5 text-[#FF1BA3] shrink-0 mt-0.5" />,
    },
    error: {
      bg: 'bg-[#FFE5F2] border-[#FF1BA3] text-black',
      icon: <AlertCircle className="h-5 w-5 text-[#FF1BA3] shrink-0 mt-0.5" />,
    },
  };

  const config = configs[variant];

  return (
    <div
      role="alert"
      className={cn('flex items-start gap-3 rounded-xl border p-4 text-sm shadow-xs', config.bg, className)}
      {...props}
    >
      {config.icon}
      <div className="space-y-1">
        {title && <h5 className="font-bold text-black">{title}</h5>}
        <div className="text-black/80 font-medium leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
