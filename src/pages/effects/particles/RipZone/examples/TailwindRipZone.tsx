import { RipZone } from "@gem-org/gemffects/rip-zone";

type TailwindRipZoneProps = {
  label: string;
};

export function TailwindRipZone({ label }: TailwindRipZoneProps) {
  return (
    <RipZone
      variant="grit"
      radius={18}
      threshold={0.5}
      color="var(--gem-palette-tertiary-500)"
      className="size-[10rem] rounded-[var(--gem-radius-full)] shadow-[0_0_0_4px_var(--gem-palette-tertiary-300)]"
      classNames={{ canvas: "cursor-crosshair" }}
    >
      <div className="flex size-full select-none items-center justify-center bg-[radial-gradient(circle,var(--gem-palette-tertiary-200),var(--gem-palette-tertiary-500))] text-[length:var(--gem-font-size-2xl)] font-bold text-[color:var(--gem-palette-neutral-950)]">
        {label}
      </div>
    </RipZone>
  );
}
