import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassCopy, GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

type TriggerGlassmorphismProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerGlassmorphism({ hoverLabel, clickLabel }: TriggerGlassmorphismProps) {
  return (
    <div className="glass-demo">
      <GlassScene label='trigger="hover"' compact>
        <Glassmorphism trigger="hover" className="glass-demo__host">
          <GlassCopy title={hoverLabel} />
        </Glassmorphism>
      </GlassScene>
      <GlassScene label='trigger="click"' compact>
        <Glassmorphism trigger="click" className="glass-demo__host">
          <GlassCopy title={clickLabel} />
        </Glassmorphism>
      </GlassScene>
    </div>
  );
}
