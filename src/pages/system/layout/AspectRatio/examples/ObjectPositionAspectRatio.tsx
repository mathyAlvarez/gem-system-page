import { AspectRatio } from "@gem-org/gem-system";
import "./aspect-demo.css";

const positions = ["left", "center", "right", "30% 50%"];

type ObjectPositionAspectRatioProps = { alt: string };

export function ObjectPositionAspectRatio({ alt }: ObjectPositionAspectRatioProps) {
  return (
    <div className="aspect-grid">
      {positions.map((position) => (
        <div key={position}>
          <div className="aspect-caption">objectPosition="{position}"</div>
          <AspectRatio ratio="1:1" objectPosition={position}>
            <img src="/gem-org-banner.jpeg" alt={`${alt} ${position}`} />
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
