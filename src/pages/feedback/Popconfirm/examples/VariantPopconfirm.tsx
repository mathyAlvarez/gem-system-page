import { Button, Popconfirm, type PopconfirmProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { PopconfirmCommon } from "./demo.ts";
import "./popconfirm-demo.css";

const panelVariants = cva("", {
  variants: {
    accent: {
      none: "",
      top: "border-t-4 border-t-(--gem-popconfirm-icon)",
    },
    surface: {
      default: "",
      inverted:
        "[--gem-color-bg:var(--gem-palette-neutral-900)] [--gem-color-fg:var(--gem-palette-neutral-50)] [--gem-color-fg-muted:var(--gem-palette-neutral-300)] [--gem-color-border:var(--gem-palette-neutral-700)]",
    },
  },
  defaultVariants: { accent: "none", surface: "default" },
});

type StyledPopconfirmProps = PopconfirmProps & VariantProps<typeof panelVariants>;

export function StyledPopconfirm({ accent, surface, className, ...props }: StyledPopconfirmProps) {
  return <Popconfirm className={cn(panelVariants({ accent, surface }), className)} {...props} />;
}

type VariantPopconfirmProps = { common: PopconfirmCommon; title: string; description: string };

export function VariantPopconfirm({ common, title, description }: VariantPopconfirmProps) {
  return (
    <div className="popconfirm-row">
      <StyledPopconfirm
        accent="top"
        tone="warning"
        title={title}
        description={description}
        confirmLabel={common.confirm}
        cancelLabel={common.cancel}
      >
        <Button variant="secondary" size="sm">
          accent="top"
        </Button>
      </StyledPopconfirm>
      <StyledPopconfirm
        surface="inverted"
        title={title}
        description={description}
        confirmLabel={common.confirm}
        cancelLabel={common.cancel}
      >
        <Button variant="secondary" size="sm">
          surface="inverted"
        </Button>
      </StyledPopconfirm>
    </div>
  );
}
