import { Card } from "@gem-org/gem-system";
import { CARD_SIZES } from "./demo.ts";
import "./card-demo.css";

type SizesCardProps = {
  titles: Record<(typeof CARD_SIZES)[number], string>;
  texts: Record<(typeof CARD_SIZES)[number], string>;
};

export function SizesCard({ titles, texts }: SizesCardProps) {
  return (
    <div className="card-stack">
      {CARD_SIZES.map((size) => (
        <Card key={size} size={size} title={titles[size]} subtitle={`size="${size}"`}>
          {texts[size]}
        </Card>
      ))}
    </div>
  );
}
