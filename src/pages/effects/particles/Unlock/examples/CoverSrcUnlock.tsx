import { Unlock } from "@gem-org/gemffects/unlock";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

type CoverSrcUnlockProps = {
  title: string;
};

export function CoverSrcUnlock({ title }: CoverSrcUnlockProps) {
  return (
    <div className="ul-demo">
      {(["horizontal", "left"] as const).map((direction) => (
        <UnlockTile key={direction} label={`direction="${direction}"`}>
          <Unlock direction={direction} coverSrc="/gem-org-favicon.png" className="ul-demo__host">
            <div className="ul-demo__card">
              <p className="ul-demo__title">{title}</p>
            </div>
          </Unlock>
        </UnlockTile>
      ))}
    </div>
  );
}
