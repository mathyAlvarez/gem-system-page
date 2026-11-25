import { Flash } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

type TailwindFlashProps = {
  label: string;
};

export function TailwindFlash({ label }: TailwindFlashProps) {
  return (
    <FlashTile>
      <Flash
        asChild
        variant="wash"
        className="rounded-full [--gemfx-flash-color:var(--gem-palette-primary-300)]"
      >
        <button type="button" className="flash-demo__target rounded-full">
          {label}
        </button>
      </Flash>
    </FlashTile>
  );
}
