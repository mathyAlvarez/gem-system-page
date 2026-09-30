import { List } from "@gem-org/gem-system";
import { Star } from "@gem-org/gem-system/icons";
import "./list-demo.css";

type InsetListProps = { favorite: string };

export function InsetList({ favorite }: InsetListProps) {
  return (
    <div className="list-demo">
      <List
        bordered
        items={[
          { id: "chelsea", label: "Chelsea Otakan", icon: <Star size="sm" />, ariaLabel: `Chelsea Otakan, ${favorite}` },
          { id: "eric", label: "Eric Hoffman", inset: true },
          { type: "separator", inset: true },
          { id: "maya", label: "Maya Ortiz", inset: true },
        ]}
      />
    </div>
  );
}
