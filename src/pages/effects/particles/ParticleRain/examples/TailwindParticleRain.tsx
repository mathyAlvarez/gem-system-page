import { ParticleRain } from "@gem-org/gemffects/particle-rain";

type TailwindParticleRainProps = {
  label: string;
};

export function TailwindParticleRain({ label }: TailwindParticleRainProps) {
  return (
    <ParticleRain
      duration={3200}
      spread={24}
      count={2}
      color="var(--gem-palette-neutral-0)"
      className="min-h-[12rem] w-[22rem] max-w-full items-center justify-center rounded-[var(--gem-radius-xl)] bg-[linear-gradient(180deg,var(--gem-palette-info-500),var(--gem-palette-neutral-950))] text-[color:var(--gem-palette-neutral-50)]"
      classNames={{ particle: "h-[6px] w-[6px] rounded-full" }}
    >
      <p className="m-0 select-none text-[length:var(--gem-font-size-xl)] font-bold">{label}</p>
    </ParticleRain>
  );
}
