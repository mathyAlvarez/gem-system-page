import { Unlock } from "@gem-org/gemffects/unlock";
import { UnlockTile } from "./UnlockTile.tsx";
import "./unlock-demo.css";

type CoverNodeUnlockProps = {
  seal: string;
  title: string;
};

export function CoverNodeUnlock({ seal, title }: CoverNodeUnlockProps) {
  return (
    <div className="ul-demo">
      <UnlockTile label="cover={(slot) => …}">
        <Unlock
          cover={(slot) => (
            <div key={slot} className="ul-demo__foil">
              <span className="ul-demo__seal">{seal}</span>
            </div>
          )}
          className="ul-demo__host"
        >
          <div className="ul-demo__card">
            <p className="ul-demo__title">{title}</p>
          </div>
        </Unlock>
      </UnlockTile>
      <UnlockTile label="cover={<div />}">
        <Unlock
          cover={
            <div className="ul-demo__foil">
              <span className="ul-demo__seal">{seal}</span>
            </div>
          }
          className="ul-demo__host"
        >
          <div className="ul-demo__card">
            <p className="ul-demo__title">{title}</p>
          </div>
        </Unlock>
      </UnlockTile>
    </div>
  );
}
