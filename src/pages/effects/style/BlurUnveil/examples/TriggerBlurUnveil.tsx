import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import { UNVEIL_TRIGGERS } from "./demo.ts";
import "./blur-unveil-demo.css";

export function TriggerBlurUnveil() {
  return (
    <div className="unveil-demo">
      {UNVEIL_TRIGGERS.map((trigger) => (
        <UnveilTile key={trigger} label={`trigger="${trigger}"`}>
          <BlurUnveil trigger={trigger} className="unveil-demo__host">
            <UnveilImage compact />
          </BlurUnveil>
        </UnveilTile>
      ))}
    </div>
  );
}
