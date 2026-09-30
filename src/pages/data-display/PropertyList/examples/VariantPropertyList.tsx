import { PropertyList, type PropertyListProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { RowsCopy } from "./demo.ts";
import "./property-list-demo.css";

const propertyListVariants = cva("", {
  variants: {
    surface: {
      plain: "",
      card: "bg-(--gem-color-bg-subtle) p-(--gem-space-4) rounded-(--gem-radius-lg)",
    },
    density: {
      comfortable: "",
      compact: "[--gem-property-list-pad-y:0.25rem] [--gem-property-list-gap:var(--gem-space-2)]",
    },
  },
  defaultVariants: { surface: "plain", density: "comfortable" },
});

type SummaryPropertyListProps = PropertyListProps & VariantProps<typeof propertyListVariants>;

export function SummaryPropertyList({ surface, density, className, ...props }: SummaryPropertyListProps) {
  return <PropertyList className={cn(propertyListVariants({ surface, density }), className)} {...props} />;
}

export function VariantPropertyList({ title, items }: RowsCopy) {
  return (
    <div className="property-list-demo property-list-demo--narrow">
      <SummaryPropertyList surface="card" title={title} items={items} />
      <SummaryPropertyList density="compact" title={title} items={items} />
    </div>
  );
}
