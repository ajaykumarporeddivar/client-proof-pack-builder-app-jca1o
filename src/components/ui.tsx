import * as React from 'react'
import { cn } from '@/lib/utils'
import { Check, ChevronDown, Plus, X } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

export function Button({
  className,
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button
      className={cn(
        'inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/20 disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' && 'bg-zinc-900 text-white hover:bg-zinc-700', // Changed bg-zinc-950 to bg-zinc-900
        variant === 'secondary' && 'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50',
        variant === 'ghost' && 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950',
        variant === 'danger' && 'bg-red-600 text-white hover:bg-red-700',
        className,
      )}
      {...props}
    />
  )
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-xl border border-zinc-200 bg-white p-5 shadow-sm', className)} {...props} /> // Changed rounded-lg to rounded-xl
}

export function Badge({ className, tone = 'neutral', ...props }: React.HTMLAttributes<HTMLSpanElement> & { tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold',
        tone === 'neutral' && 'bg-zinc-100 text-zinc-700',
        tone === 'success' && 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
        tone === 'warning' && 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
        tone === 'danger' && 'bg-red-50 text-red-700 ring-1 ring-red-200',
        tone === 'info' && 'bg-sky-50 text-sky-700 ring-1 ring-sky-200',
        className,
      )}
      {...props}
    />
  )
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-900/10 placeholder:text-zinc-400', className)} {...props} /> // Changed rounded-lg to rounded-md
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn('min-h-24 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-900/10 placeholder:text-zinc-400', className)} {...props} /> // Changed rounded-lg to rounded-md
}

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn('text-sm font-medium text-zinc-700', className)} {...props} />
}

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        className={cn(
          'appearance-none w-full rounded-md border border-zinc-200 bg-white pr-8 pl-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-900/10 disabled:opacity-50 disabled:pointer-events-none',
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
    </div>
  )
}

export function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return <div className="w-full overflow-auto"><table className={cn('w-full caption-bottom text-sm', className)} {...props} /></div>
}

export function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn('[&_tr]:border-b', className)} {...props} />
}

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
}

export function TableFooter({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tfoot className={cn('border-t bg-zinc-100/50 font-medium [&_tr]:last:pb-0', className)} {...props} />
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn('border-b transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100', className)} {...props} />
}

export function TableHead({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  )
}

export function TableCaption({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption
      className={cn('mt-4 text-sm text-zinc-500', className)}
      {...props}
    />
  )
}

export function Modal({ children, open, onOpenChange }: { children: React.ReactNode; open: boolean; onOpenChange: (open: boolean) => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/50 p-4" onClick={() => onOpenChange(false)}>
      <div
        className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-lg transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        {children}
        <button
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600"
          onClick={() => onOpenChange(false)}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export function ModalHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
}

export function ModalTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-lg font-semibold leading-none tracking-tight text-zinc-900', className)} {...props} />
}

export function ModalDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-zinc-500', className)} {...props} />
}

export function ModalContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('pt-4', className)} {...props} />
}

export function ModalFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-6 border-t border-zinc-100 mt-6',
        className,
      )}
      {...props}
    />
  )
}

// Checkbox component for forms
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={() => onCheckedChange?.(!checked)}
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-zinc-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          checked && 'bg-zinc-900 border-zinc-900 text-white',
          className
        )}
      >
        {checked && <Check className="h-4 w-4" />}
        <input
          ref={ref}
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...props}
        />
      </button>
    );
  }
);
Checkbox.displayName = "Checkbox";


export function Avatar({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-100 items-center justify-center text-zinc-700 font-medium text-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={cn('aspect-square h-full w-full', className)} {...props} />;
}

export function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-zinc-200 text-sm font-medium text-zinc-700',
        className
      )}
      {...props}
    />
  );
}