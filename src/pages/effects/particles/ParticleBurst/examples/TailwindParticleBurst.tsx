import { ParticleBurst } from "@gem-org/gemffects/particle-burst";

type TailwindParticleBurstProps = {
  label: string;
};

export function TailwindParticleBurst({ label }: TailwindParticleBurstProps) {
  return (
    <div className="flex min-h-[12rem] w-full items-center justify-center">
      <ParticleBurst
        count={24}
        spread={110}
        colors={[
          "var(--gem-palette-secondary-300)",
          "var(--gem-palette-tertiary-300)",
          "var(--gem-palette-neutral-0)",
        ]}
        classNames={{ particle: "rounded-full [--gemfx-particle-duration:1200ms]" }}
      >
        <span className="inline-flex cursor-pointer select-none items-center rounded-[var(--gem-radius-full)] bg-[linear-gradient(135deg,var(--gem-palette-secondary-500),var(--gem-palette-tertiary-500))] px-[var(--gem-space-5)] py-[var(--gem-space-3)] font-bold text-[color:var(--gem-palette-neutral-0)]">
          {label}
        </span>
      </ParticleBurst>
    </div>
  );
}
