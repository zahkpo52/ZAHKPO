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
          "bg-primary font-semibold text-primary-foreground shadow-[0_6px_20px_-8px_rgba(229,184,74,0.6)] hover:bg-[#edc65f]",
        secondary:
          "border border-white/15 bg-white/[0.03] text-foreground hover:border-white/30 hover:bg-white/[0.06]",
        accent:
          "bg-primary font-semibold text-primary-foreground shadow-[0_6px_20px_-8px_rgba(229,184,74,0.6)] hover:bg-[#edc65f]",
        outline: "border border-white/20 bg-transparent text-foreground hover:border-white/35 hover:bg-white/5",
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
