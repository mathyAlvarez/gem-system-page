import { Unlock } from "@gem-org/gemffects/unlock";
import "./unlock-demo.css";
import "./unlock-overrides.css";

type StyledUnlockProps = {
  label: string;
};

export function StyledUnlock({ label }: StyledUnlockProps) {
  return (
    <Unlock className="ul-demo__host ul-vault">
      <div className="ul-demo__card">
        <p className="ul-demo__title">{label}</p>
      </div>
    </Unlock>
  );
}
