import { Divider, type DividerProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./divider-demo.css";

const dividerVariants = cva("", {
  variants: {
    spacing: {
      none: "",
      sm: "my-2",
      lg: "my-6",
    },
    emphasis: {
      subtle: "opacity-50",
      normal: "",
      strong: "[--gem-divider-thickness:3px] rounded-full",
    },
  },
  defaultVariants: { spacing: "sm", emphasis: "normal" },
});

type SectionDividerProps = DividerProps & VariantProps<typeof dividerVariants>;

export function SectionDivider({ spacing, emphasis, className, ...props }: SectionDividerProps) {
  return <Divider className={cn(dividerVariants({ spacing, emphasis }), className)} {...props} />;
}

type VariantDividerProps = { label: string };

export function VariantDivider({ label }: VariantDividerProps) {
  return (
    <div className="divider-demo">
      <SectionDivider emphasis="subtle" />
      <SectionDivider spacing="lg" tone="primary" emphasis="strong" />
      <SectionDivider tone="neutral">{label}</SectionDivider>
    </div>
  );
}
