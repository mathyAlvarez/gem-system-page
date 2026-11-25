import { Rip } from "@gem-org/gemffects/rip";

type TailwindRipProps = {
  label: string;
};

export function TailwindRip({ label }: TailwindRipProps) {
  return (
    <div className="flex w-full justify-center rounded-[var(--gem-radius-lg)] bg-[var(--gem-palette-neutral-950)] p-[var(--gem-space-6)]">
      <Rip
        variant="claw"
        particle="star"
        colors={["var(--gem-palette-secondary-300)", "var(--gem-palette-neutral-0)"]}
        classNames={{
          veil: "fill-[color:var(--gem-palette-secondary-900)]",
          trail: "stroke-[color:var(--gem-palette-secondary-300)]",
        }}
      >
        <div className="flex min-h-[10rem] w-[18rem] max-w-full select-none items-center justify-center bg-[linear-gradient(135deg,var(--gem-palette-tertiary-400),var(--gem-palette-secondary-500))] text-[length:var(--gem-font-size-2xl)] font-bold text-[color:var(--gem-palette-neutral-0)]">
          {label}
        </div>
      </Rip>
    </div>
  );
}
