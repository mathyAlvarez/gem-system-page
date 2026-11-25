import { useState } from "react";
import { StaggerGroup, type StaggerGroupProps } from "@gem-org/gemsitions/stagger-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { STAGGER_GROUP_TILES } from "./demo.ts";
import { StaggerControls } from "./StaggerControls.tsx";
import "./stagger-group-demo.css";

const listVariants = cva("stagger-group-demo__list", {
  variants: {
    tone: {
      neutral: "",
      accent:
        "rounded-[var(--gem-radius-lg)] p-2 bg-[color-mix(in_srgb,var(--gem-palette-primary-500)_10%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftStaggerProps = StaggerGroupProps & VariantProps<typeof listVariants>;

export function SoftStagger({ tone, className, ...props }: SoftStaggerProps) {
  return <StaggerGroup className={cn(listVariants({ tone }), className)} {...props} />;
}

type VariantStaggerGroupProps = {
  toggleOut: string;
  toggleIn: string;
};

export function VariantStaggerGroup({ toggleOut, toggleIn }: VariantStaggerGroupProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="stagger-group-demo stagger-group-demo--wide">
      <StaggerControls
        toggle={isIn ? toggleOut : toggleIn}
        isIn={isIn}
        onToggle={() => setIsIn((value) => !value)}
      />
      <div className="stagger-group-demo__compare">
        {(
          [
            { tone: "neutral" as const, label: 'tone="neutral"' },
            { tone: "accent" as const, label: 'tone="accent"' },
          ] as const
        ).map((item) => (
          <div key={item.tone}>
            <p className="stagger-group-demo__compare-label">{item.label}</p>
            <SoftStagger tone={item.tone} isIn={isIn}>
              {STAGGER_GROUP_TILES.map((label) => (
                <div key={`${item.tone}-${label}`} className="stagger-group-demo__tile">
                  {label}
                </div>
              ))}
            </SoftStagger>
          </div>
        ))}
      </div>
    </div>
  );
}
