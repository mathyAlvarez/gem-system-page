import type { ReactNode } from "react";
import { RipZone, type RipZoneProps } from "@gem-org/gemffects/rip-zone";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { ZoneTile } from "./ZoneTile.tsx";
import "./rip-zone-demo.css";

const ticketVariants = cva("rz-demo__target rz-demo__target--sm", {
  variants: {
    tier: {
      bronze:
        "bg-[linear-gradient(145deg,var(--gem-palette-tertiary-200),var(--gem-palette-tertiary-500))]",
      silver:
        "bg-[linear-gradient(145deg,var(--gem-palette-neutral-50),var(--gem-palette-neutral-300))]",
      gold: "bg-[linear-gradient(145deg,var(--gem-palette-tertiary-200),var(--gem-palette-warning-500))]",
    },
  },
  defaultVariants: { tier: "bronze" },
});

const ticketCover = {
  bronze: { variant: "grit", color: "var(--gem-palette-tertiary-800)" },
  silver: { variant: "foil", color: "var(--gem-palette-neutral-400)" },
  gold: { variant: "foil", color: "var(--gem-palette-tertiary-400)" },
} as const satisfies Record<string, Partial<RipZoneProps>>;

type TicketZoneProps = Omit<RipZoneProps, "variant" | "children"> &
  VariantProps<typeof ticketVariants> & { children: ReactNode };

/** Each tier picks the cover and paints the prize underneath. */
export function TicketZone({ tier, className, children, ...props }: TicketZoneProps) {
  return (
    <RipZone {...ticketCover[tier ?? "bronze"]} className="rz-demo__host" {...props}>
      <div className={cn(ticketVariants({ tier }), className)}>{children}</div>
    </RipZone>
  );
}

export function VariantRipZone() {
  return (
    <div className="rz-demo">
      {(["bronze", "silver", "gold"] as const).map((tier) => (
        <ZoneTile key={tier} label={`tier="${tier}"`}>
          <TicketZone tier={tier}>{tier}</TicketZone>
        </ZoneTile>
      ))}
    </div>
  );
}
