import { useState } from "react";
import { AspectRatio, Button } from "@gem-org/gem-system";
import "./aspect-demo.css";

type PlaceholderAspectRatioProps = {
  loading: string;
  reload: string;
  alt: string;
};

export function PlaceholderAspectRatio({ loading, reload, alt }: PlaceholderAspectRatioProps) {
  const [loaded, setLoaded] = useState(false);
  const [attempt, setAttempt] = useState(0);

  return (
    <div className="aspect-stack">
      <div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setLoaded(false);
            setAttempt((current) => current + 1);
          }}
        >
          {reload}
        </Button>
      </div>
      <AspectRatio ratio="16:9" maxWidth={480}>
        <img
          key={attempt}
          src={`/gem-org-banner.jpeg?attempt=${attempt}`}
          alt={alt}
          onLoad={() => window.setTimeout(() => setLoaded(true), 900)}
        />
        {loaded ? null : <div className="aspect-placeholder absolute inset-0">{loading}</div>}
      </AspectRatio>
    </div>
  );
}
