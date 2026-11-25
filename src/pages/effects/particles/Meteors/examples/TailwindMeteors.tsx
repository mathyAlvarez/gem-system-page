import { Meteors } from "@gem-org/gemffects/meteors";

type TailwindMeteorsProps = {
  label: string;
};

export function TailwindMeteors({ label }: TailwindMeteorsProps) {
  return (
    <Meteors
      variant="ember"
      count={18}
      className="min-h-[10rem] w-[22rem] max-w-full items-center justify-center rounded-[var(--gem-radius-xl)] bg-[linear-gradient(160deg,var(--gem-palette-secondary-900),var(--gem-palette-neutral-950))] text-[color:var(--gem-palette-neutral-50)] [--gemfx-meteors-color:var(--gem-palette-secondary-300)]"
    >
      <p className="m-0 text-[length:var(--gem-font-size-xl)] font-bold">{label}</p>
    </Meteors>
  );
}
