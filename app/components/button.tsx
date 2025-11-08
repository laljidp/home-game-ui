// components/Button.tsx
import { cn } from "../lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    let button = (
      <button
        ref={ref}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300",
          "font-chakra",

          // Primary: Lime + rounded-left
          variant === "primary" && [
            "bg-dark-lime text-black",
            "hover:bg-dark-lime/70 hover:scale-105",
            "clip-path-pill",
          ],

          // Outline: Dark border + rounded-right
          variant === "outline" && [
            "border-2",
            "text-white",
            "bg-black",
            "clip-path-pill",
            "scale-[0.96]",
          ],

          className,
        )}
        {...props}
      >
        {children}
      </button>
    );

    if (variant === "outline") {
      button = (
        <div className="clip-path-pill relative bg-white text-white transition-all duration-150 hover:scale-105">
          {button}
        </div>
      );
    }

    return button;
  },
);

Button.displayName = "Button";
