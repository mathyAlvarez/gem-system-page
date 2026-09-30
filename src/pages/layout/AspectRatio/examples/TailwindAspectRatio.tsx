import { AspectRatio, type AspectRatioProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import "./aspect-demo.css";

function HeroMedia({ className, ...props }: AspectRatioProps) {
  return (
    <AspectRatio
      className={cn(
        "[--gem-aspect-ratio:1/1] md:[--gem-aspect-ratio:21/9] shadow-lg ring-1 ring-(--gem-color-border)",
        className,
      )}
      {...props}
    />
  );
}

type TailwindAspectRatioProps = { alt: string };

export function TailwindAspectRatio({ alt }: TailwindAspectRatioProps) {
  return (
    <div className="aspect-stack">
      <div>
        <div className="aspect-caption">1/1 → md: 21/9</div>
        <HeroMedia>
          <img src="/gem-org-banner.jpeg" alt={alt} />
        </HeroMedia>
      </div>
      <div>
        <div className="aspect-caption">className="[--gem-aspect-ratio-radius:0] shadow-none"</div>
        <HeroMedia className="[--gem-aspect-ratio-radius:0] shadow-none">
          <img src="/gem-org-banner.jpeg" alt={alt} />
        </HeroMedia>
      </div>
    </div>
  );
}
