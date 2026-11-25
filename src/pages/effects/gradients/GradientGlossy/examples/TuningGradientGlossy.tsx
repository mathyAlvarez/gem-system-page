import { GradientGlossy, type GradientGlossyProps } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

const SAMPLES: { label: string; props: GradientGlossyProps }[] = [
  { label: "default", props: {} },
  { label: "lift={40} depth={45} sheen={70}", props: { lift: 40, depth: 45, sheen: 70 } },
  { label: "mid={20}", props: { mid: 20 } },
  { label: "mid={80}", props: { mid: 80 } },
];

export function TuningGradientGlossy() {
  return (
    <div className="gg-demo">
      {SAMPLES.map((sample) => (
        <GlossyTile key={sample.label} label={sample.label}>
          <GradientGlossy {...sample.props} className="gg-demo__host">
            <span className="gg-demo__swatch" />
          </GradientGlossy>
        </GlossyTile>
      ))}
    </div>
  );
}
