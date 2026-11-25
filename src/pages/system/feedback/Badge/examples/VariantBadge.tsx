import { Badge, type BadgeProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./badge-demo.css";

const badgeVariants = cva("", {
  variants: {
    border: {
      solid: "",
      dashed: "border-dashed",
      none: "[--gem-badge-border:transparent]",
    },
    caps: {
      false: "",
      true: "uppercase tracking-wider text-[0.625rem]",
    },
  },
  defaultVariants: { border: "solid", caps: false },
});

type AppearanceBadgeProps = BadgeProps & VariantProps<typeof badgeVariants>;

export function AppearanceBadge({ border, caps, className, ...props }: AppearanceBadgeProps) {
  return <Badge className={cn(badgeVariants({ border, caps }), className)} {...props} />;
}

type VariantBadgeProps = { draft: string; review: string; published: string };

export function VariantBadge({ draft, review, published }: VariantBadgeProps) {
  return (
    <div className="badge-row">
      <AppearanceBadge tone="neutral" variant="outline" border="dashed">
        {draft}
      </AppearanceBadge>
      <AppearanceBadge tone="warning" border="none" caps>
        {review}
      </AppearanceBadge>
      <AppearanceBadge tone="success" variant="solid" caps>
        {published}
      </AppearanceBadge>
    </div>
  );
}
