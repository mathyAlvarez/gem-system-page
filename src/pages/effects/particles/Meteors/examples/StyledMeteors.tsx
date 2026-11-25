import { Meteors } from "@gem-org/gemffects/meteors";
import "./meteors-demo.css";
import "./meteors-overrides.css";

type StyledMeteorsProps = {
  label: string;
};

export function StyledMeteors({ label }: StyledMeteorsProps) {
  return (
    <Meteors count={18} speed={1.4} className="mt-demo__host mt-comet">
      <p className="mt-demo__copy">{label}</p>
    </Meteors>
  );
}
