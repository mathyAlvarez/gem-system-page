import { Unlock } from "@gem-org/gemffects/unlock";
import "./unlock-demo.css";

type BaseUnlockProps = {
  alt: string;
};

export function BaseUnlock({ alt }: BaseUnlockProps) {
  return (
    <Unlock className="ul-demo__host ul-demo__media">
      <img src="/gem-org-favicon.png" alt={alt} className="ul-demo__image" draggable={false} />
    </Unlock>
  );
}
