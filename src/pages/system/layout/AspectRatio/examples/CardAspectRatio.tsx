import { AspectRatio } from "@gem-org/gem-system";
import "./aspect-demo.css";

const ratios = ["tcg", "2.5:3.5", "5:7"] as const;

type CardAspectRatioProps = { alt: string };

export function CardAspectRatio({ alt }: CardAspectRatioProps) {
  return (
    <div className="aspect-row">
      {ratios.map((ratio) => (
        <div key={ratio} className="w-46">
          <div className="aspect-caption">ratio="{ratio}"</div>
          <AspectRatio ratio={ratio} maxWidth={184} radius="lg">
            <img src="/gem-org-favicon.png" alt={`${alt} ${ratio}`} />
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
