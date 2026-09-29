import { Divide, Equals, Multiply, Percent, PlusMinus } from "@gem-org/gem-system/icons";
import "./arithmetic-icons.css";

type ArithmeticIconsProps = {
  titles: { multiply: string; divide: string; equals: string; percent: string; plusMinus: string };
};

export function ArithmeticIcons({ titles }: ArithmeticIconsProps) {
  return (
    <div className="arithmetic-icons">
      <Multiply size="md" title={titles.multiply} />
      <Divide size="md" title={titles.divide} />
      <Equals size="md" title={titles.equals} />
      <Percent size="md" title={titles.percent} />
      <PlusMinus size="md" title={titles.plusMinus} />
    </div>
  );
}
