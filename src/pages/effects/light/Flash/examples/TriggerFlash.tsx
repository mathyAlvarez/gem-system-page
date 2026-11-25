import { Flash, type FlashTrigger } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

type TriggerFlashProps = {
  labels: Record<FlashTrigger, string>;
};

const triggers: FlashTrigger[] = ["click", "hover", "press", "always"];

export function TriggerFlash({ labels }: TriggerFlashProps) {
  return (
    <div className="flash-demo">
      {triggers.map((trigger) => (
        <FlashTile key={trigger} label={`trigger="${trigger}"`}>
          <Flash trigger={trigger} origin="pointer" className="flash-demo__host">
            <span className="flash-demo__target">{labels[trigger]}</span>
          </Flash>
        </FlashTile>
      ))}
    </div>
  );
}
