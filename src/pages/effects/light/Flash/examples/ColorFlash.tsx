import { Flash } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import { FLASH_COLORS } from "./demo.ts";
import "./flash-demo.css";

const tones = ["primary", "secondary", "tertiary"] as const;

export function ColorFlash() {
  return (
    <div className="flash-demo">
      {tones.map((tone) => (
        <FlashTile key={tone} label={FLASH_COLORS[tone]}>
          <Flash
            variant="bloom"
            duration={480}
            color={FLASH_COLORS[tone]}
            className="flash-demo__host"
          >
            <span className="flash-demo__target">{tone}</span>
          </Flash>
        </FlashTile>
      ))}
    </div>
  );
}
