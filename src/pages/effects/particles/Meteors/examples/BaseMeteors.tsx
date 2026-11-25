import { Meteors } from "@gem-org/gemffects/meteors";
import "./meteors-demo.css";

type BaseMeteorsProps = {
  label: string;
};

export function BaseMeteors({ label }: BaseMeteorsProps) {
  return (
    <Meteors className="mt-demo__host">
      <p className="mt-demo__copy">{label}</p>
    </Meteors>
  );
}
