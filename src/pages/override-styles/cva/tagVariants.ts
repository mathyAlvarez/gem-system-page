import { cva, type VariantProps } from "class-variance-authority";

export const tagVariants = cva("inline-flex items-center font-semibold transition-colors", {
  variants: {
    intent: {
      primary: "bg-(--gem-color-accent) text-(--gem-color-bg)",
      outline: "border border-(--gem-color-accent) text-(--gem-color-accent)",
      ghost: "text-(--gem-color-fg) hover:bg-(--gem-color-bg-subtle)",
    },
    size: {
      sm: "h-6 rounded-md px-2 text-xs",
      md: "h-8 rounded-lg px-3 text-sm",
      lg: "h-10 rounded-xl px-4 text-base",
    },
    pill: {
      true: "rounded-full",
      false: "",
    },
  },
  compoundVariants: [{ intent: "outline", size: "lg", className: "border-2" }],
  defaultVariants: { intent: "primary", size: "md", pill: false },
});

export type TagVariantProps = VariantProps<typeof tagVariants>;

export const tagIntents = ["primary", "outline", "ghost"] as const;
export const tagSizes = ["sm", "md", "lg"] as const;

export const tagVariantsSource = `import { cva } from "class-variance-authority";

export const tagVariants = cva("inline-flex items-center font-semibold transition-colors", {
  variants: {
    intent: {
      primary: "bg-(--gem-color-accent) text-(--gem-color-bg)",
      outline: "border border-(--gem-color-accent) text-(--gem-color-accent)",
      ghost: "text-(--gem-color-fg) hover:bg-(--gem-color-bg-subtle)",
    },
    size: {
      sm: "h-6 rounded-md px-2 text-xs",
      md: "h-8 rounded-lg px-3 text-sm",
      lg: "h-10 rounded-xl px-4 text-base",
    },
    pill: {
      true: "rounded-full",
      false: "",
    },
  },
  compoundVariants: [{ intent: "outline", size: "lg", className: "border-2" }],
  defaultVariants: { intent: "primary", size: "md", pill: false },
});`;

export const gemButtonExtras = cva("", {
  variants: {
    shape: {
      default: "",
      pill: "rounded-full",
      square: "rounded-none",
    },
    width: {
      auto: "",
      full: "w-full justify-center",
    },
  },
  defaultVariants: { shape: "default", width: "auto" },
});

export const buttonShapes = ["default", "pill", "square"] as const;
export const buttonWidths = ["auto", "full"] as const;
