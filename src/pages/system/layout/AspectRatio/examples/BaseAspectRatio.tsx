import { AspectRatio } from "@gem-org/gem-system";

type BaseAspectRatioProps = { alt: string };

export function BaseAspectRatio({ alt }: BaseAspectRatioProps) {
  return (
    <AspectRatio ratio="16:9" maxWidth={640}>
      <img src="/gem-org-banner.jpeg" alt={alt} />
    </AspectRatio>
  );
}
