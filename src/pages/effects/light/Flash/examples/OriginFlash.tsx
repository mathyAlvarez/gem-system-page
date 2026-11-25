import { Flash, type FlashOrigin } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

type OriginFlashProps = {
  hint: string;
};

const origins: FlashOrigin[] = ["center", "pointer"];

export function OriginFlash({ hint }: OriginFlashProps) {
  return (
    <div className="flash-demo">
      {origins.map((origin) => (
        <FlashTile key={origin} label={`origin="${origin}"`}>
          <Flash origin={origin} className="flash-demo__host">
            <span className="flash-demo__target">{hint}</span>
          </Flash>
        </FlashTile>
      ))}
    </div>
  );
}
