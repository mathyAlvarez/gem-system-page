import { Button } from "@gem-org/gem-system";
import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

type AsChildFloatProps = {
  label: string;
};

export function AsChildFloat({ label }: AsChildFloatProps) {
  return (
    <FloatTile>
      <Float asChild variant="sway" trigger="hover" shadow={false}>
        <Button size="lg">{label}</Button>
      </Float>
    </FloatTile>
  );
}
