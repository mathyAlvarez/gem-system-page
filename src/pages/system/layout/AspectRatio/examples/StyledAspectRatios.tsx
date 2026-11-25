import { AspectRatio } from "@gem-org/gem-system";
import "./aspect-ratio-overrides.css";

type StyledAspectRatiosProps = { alt: string; title: string };

export function StyledAspectRatios({ alt, title }: StyledAspectRatiosProps) {
  return (
    <AspectRatio ratio="16:9" maxWidth={480} className="media-card">
      <img src="/gem-org-banner.jpeg" alt={alt} />
      <p className="media-card__title">{title}</p>
    </AspectRatio>
  );
}
