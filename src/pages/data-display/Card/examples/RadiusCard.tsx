import { Card } from "@gem-org/gem-system";
import { CARD_RADII } from "./demo.ts";
import "./card-demo.css";

type RadiusCardProps = { text: string };

export function RadiusCard({ text }: RadiusCardProps) {
  return (
    <div className="card-grid">
      {CARD_RADII.map((radius) => (
        <Card key={radius} radius={radius} size="sm" title={`radius="${radius}"`}>
          {text}
        </Card>
      ))}
    </div>
  );
}
