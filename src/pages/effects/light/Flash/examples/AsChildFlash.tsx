import { Button } from "@gem-org/gem-system";
import { Flash } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

type AsChildFlashProps = {
  label: string;
};

export function AsChildFlash({ label }: AsChildFlashProps) {
  return (
    <FlashTile>
      <Flash asChild origin="pointer" intensity="lg">
        <Button size="lg">{label}</Button>
      </Flash>
    </FlashTile>
  );
}
