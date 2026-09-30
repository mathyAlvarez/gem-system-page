import { AspectRatio } from "@gem-org/gem-system";
import "./aspect-demo.css";

type MaxWidthAspectRatioProps = { alt: string };

export function MaxWidthAspectRatio({ alt }: MaxWidthAspectRatioProps) {
  return (
    <div className="aspect-stack">
      <div>
        <div className="aspect-caption">maxWidth={"{320}"}</div>
        <AspectRatio ratio="16:9" maxWidth={320}>
          <img src="/gem-org-banner.jpeg" alt={alt} />
        </AspectRatio>
      </div>
      <div>
        <div className="aspect-caption">maxWidth="60%"</div>
        <AspectRatio ratio="16:9" maxWidth="60%">
          <img src="/gem-org-banner.jpeg" alt={alt} />
        </AspectRatio>
      </div>
      <div>
        <div className="aspect-caption">maxWidth="20rem" className="mx-auto"</div>
        <AspectRatio ratio="16:9" maxWidth="20rem" className="mx-auto">
          <img src="/gem-org-banner.jpeg" alt={alt} />
        </AspectRatio>
      </div>
    </div>
  );
}
