import { AspectRatio, type AspectRatioRadius } from "@gem-org/gem-system";
import "./aspect-demo.css";

const radii: AspectRatioRadius[] = ["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"];

type RadiusAspectRatioProps = { alt: string };

export function RadiusAspectRatio({ alt }: RadiusAspectRatioProps) {
  return (
    <div className="aspect-row">
      {radii.map((radius) => (
        <div key={radius} className="w-24">
          <div className="aspect-caption">{radius}</div>
          <AspectRatio ratio="square" radius={radius} maxWidth={96}>
            <img src="/gem-org-favicon.png" alt={`${alt} ${radius}`} />
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
