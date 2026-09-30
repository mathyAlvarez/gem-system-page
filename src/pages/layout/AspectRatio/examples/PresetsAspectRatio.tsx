import { AspectRatio, type AspectRatioPreset } from "@gem-org/gem-system";
import "./aspect-demo.css";

const presets: AspectRatioPreset[] = ["1:1", "16:9", "4:3", "3:2", "21:9", "9:16", "3:4", "2.5:3.5"];

type PresetsAspectRatioProps = { alt: string };

export function PresetsAspectRatio({ alt }: PresetsAspectRatioProps) {
  return (
    <div className="aspect-grid">
      {presets.map((preset) => (
        <div key={preset}>
          <div className="aspect-caption">ratio="{preset}"</div>
          <AspectRatio ratio={preset}>
            <img src="/gem-org-banner.jpeg" alt={`${alt} ${preset}`} />
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
