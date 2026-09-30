import { useState } from "react";
import { Badge, Button, Skeleton } from "@gem-org/gem-system";
import "./skeleton-demo.css";

type FitSkeletonProps = { heading: string; badge: string; action: string; toggle: string };

export function FitSkeleton({ heading, badge, action, toggle }: FitSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="skeleton-stack">
      <div>
        <Button variant="secondary" size="sm" onClick={() => setLoaded((current) => !current)}>
          {toggle}
        </Button>
      </div>
      <div className="skeleton-row">
        <Skeleton isLoaded={loaded} aria-hidden={!loaded || undefined}>
          <h3 className="skeleton-title">{heading}</h3>
        </Skeleton>
        <Skeleton radius="full" isLoaded={loaded} aria-hidden={!loaded || undefined}>
          <Badge tone="success">{badge}</Badge>
        </Skeleton>
        <Skeleton variant="rectangular" isLoaded={loaded} aria-hidden={!loaded || undefined}>
          <Button size="sm">{action}</Button>
        </Skeleton>
      </div>
    </div>
  );
}
