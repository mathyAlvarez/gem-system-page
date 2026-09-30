import { AspectRatio, type AspectRatioObjectFit } from "@gem-org/gem-system";
import "./aspect-demo.css";

const fits: AspectRatioObjectFit[] = ["cover", "contain", "fill", "none", "scale-down"];

type ObjectFitAspectRatioProps = { alt: string };

export function ObjectFitAspectRatio({ alt }: ObjectFitAspectRatioProps) {
  return (
    <div className="aspect-grid">
      {fits.map((fit) => (
        <div key={fit}>
          <div className="aspect-caption">objectFit="{fit}"</div>
          <AspectRatio ratio="1:1" objectFit={fit}>
            <img src="/gem-org-banner.jpeg" alt={`${alt} ${fit}`} />
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
