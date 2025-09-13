import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        default: "text-white bg-accent font-bold hover:bg-accent/90",
        outline:
          "border-2 border-foreground-secondary/50 hover:border-foreground-secondary text-accent font-bold",
      },
      size: {
        default:
          "py-1.5 lg:py-2 px-3 lg:px-5 rounded-full text-sm lg:text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
