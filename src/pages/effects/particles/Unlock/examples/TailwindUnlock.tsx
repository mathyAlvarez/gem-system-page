import { Unlock } from "@gem-org/gemffects/unlock";

type TailwindUnlockProps = {
  label: string;
};

export function TailwindUnlock({ label }: TailwindUnlockProps) {
  return (
    <Unlock
      direction="vertical"
      gap={4}
      className="cursor-pointer rounded-[var(--gem-radius-xl)]"
      classNames={{
        panel:
          "bg-[repeating-linear-gradient(45deg,var(--gem-palette-tertiary-400)_0_14px,var(--gem-palette-neutral-950)_14px_28px)] [transition-timing-function:cubic-bezier(0.6,-0.3,0.3,1.3)]",
      }}
    >
      <div className="flex h-[10rem] w-[18rem] max-w-full select-none items-center justify-center bg-[var(--gem-palette-neutral-950)] text-[length:var(--gem-font-size-2xl)] font-bold text-[color:var(--gem-palette-tertiary-400)]">
        {label}
      </div>
    </Unlock>
  );
}
