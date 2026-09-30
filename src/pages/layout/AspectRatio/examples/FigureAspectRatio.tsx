import { AspectRatio, Typography } from "@gem-org/gem-system";

type FigureAspectRatioProps = { alt: string; caption: string };

export function FigureAspectRatio({ alt, caption }: FigureAspectRatioProps) {
  return (
    <figure className="m-0 flex max-w-120 flex-col gap-2">
      <AspectRatio ratio="photo">
        <img src="/gem-org-banner.jpeg" alt={alt} />
      </AspectRatio>
      <Typography variant="caption" as="figcaption">
        {caption}
      </Typography>
    </figure>
  );
}
