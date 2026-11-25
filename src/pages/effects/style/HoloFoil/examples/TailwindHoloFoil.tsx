import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilCard, FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

type TailwindHoloFoilProps = {
  title: string;
};

export function TailwindHoloFoil({ title }: TailwindHoloFoilProps) {
  return (
    <FoilTile>
      <HoloFoil
        trigger="always"
        className="rounded-[var(--gem-radius-2xl)] [--gemfx-holofoil-c1:var(--gem-palette-primary-400)] [--gemfx-holofoil-c2:var(--gem-palette-secondary-400)] [--gemfx-holofoil-c3:var(--gem-palette-tertiary-400)] [--gemfx-holofoil-c4:var(--gem-palette-primary-200)] [--gemfx-holofoil-c5:var(--gem-palette-warning-400)]"
        classNames={{ sparkle: "hidden" }}
      >
        <FoilCard kicker="gem palette" title={title} />
      </HoloFoil>
    </FoilTile>
  );
}
