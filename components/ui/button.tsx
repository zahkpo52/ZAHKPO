import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-out-quint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.15em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(120deg,var(--primary),var(--primary-strong))] text-primary-foreground shadow-[var(--shadow-md)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]",
        secondary:
          "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:bg-surface-2",
        accent:
          "bg-[linear-gradient(120deg,#f5c100,#f8d509)] text-[#1c1600] shadow-[0_8px_24px_-8px_rgba(245,193,0,0.55)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(245,193,0,0.65)]",
        outline: "border border-border bg-transparent text-foreground hover:bg-surface",
        ghost: "text-foreground hover:bg-surface",
        subtle: "bg-primary/10 text-primary hover:bg-primary/15",
        link: "h-auto p-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 rounded-md px-3.5 text-sm",
        md: "h-11 rounded-lg px-5 text-sm",
        lg: "h-12 rounded-lg px-6 text-base",
        icon: "size-10 rounded-lg",
      },
      pill: {
        true: "rounded-full",
        false: "",
      },
    },
    defaultVariants: { variant: "primary", size: "md", pill: false },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, pill, asChild = false, loading = false, children, disabled, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  const showSpinner = loading && !asChild;
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, pill }), className)}
      disabled={disabled || showSpinner}
      aria-busy={showSpinner || undefined}
      {...props}
    >
      {showSpinner ? (
        <>
          <Loader2 className="animate-spin" aria-hidden="true" />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  );
});

export { Button, buttonVariants };
