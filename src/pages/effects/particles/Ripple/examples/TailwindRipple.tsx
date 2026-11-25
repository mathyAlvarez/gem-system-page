import { Ripple } from "@gem-org/gemffects/ripple";

type TailwindRippleProps = {
  label: string;
};

export function TailwindRipple({ label }: TailwindRippleProps) {
  return (
    <Ripple
      asChild
      origin="center"
      color="var(--gem-palette-neutral-0)"
      intensity="lg"
      classNames={{ wave: "rounded-[30%] [animation-timing-function:linear]" }}
    >
      <button
        type="button"
        className="min-w-[10rem] rounded-[var(--gem-radius-full)] bg-[var(--gem-palette-primary-600)] px-[var(--gem-space-6)] py-[var(--gem-space-3)] text-[length:var(--gem-font-size-sm)] font-semibold text-[color:var(--gem-palette-neutral-0)]"
      >
        {label}
      </button>
    </Ripple>
  );
}
