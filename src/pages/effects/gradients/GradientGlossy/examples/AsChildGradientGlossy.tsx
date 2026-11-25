import { Button } from "@gem-org/gem-system";
import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

type AsChildGradientGlossyProps = {
  label: string;
};

export function AsChildGradientGlossy({ label }: AsChildGradientGlossyProps) {
  return (
    <div className="gg-demo">
      <GlossyTile label='<Button variant="primary">'>
        <GradientGlossy asChild>
          <Button variant="primary">{label}</Button>
        </GradientGlossy>
      </GlossyTile>
      <GlossyTile label='color="secondary-500"'>
        <GradientGlossy asChild color="var(--gem-palette-secondary-500)" variant="deep">
          <Button variant="primary">{label}</Button>
        </GradientGlossy>
      </GlossyTile>
    </div>
  );
}
