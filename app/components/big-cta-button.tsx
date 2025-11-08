// components/BigCtaButton.tsx
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

interface BigCtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const BigCtaButton = forwardRef<HTMLButtonElement, BigCtaButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "relative inline-flex h-25 w-52 cursor-pointer items-center justify-center gap-3",
          "py-6 font-bold text-black uppercase",
          "font-chakra bg-dark-lime text-sm transition-all duration-300",
          // Cut-off bottom-left corner
          "corner-clip-bl",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

BigCtaButton.displayName = "BigCtaButton";
