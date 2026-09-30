import { useState } from "react";
import { Avatar, Button, Skeleton } from "@gem-org/gem-system";
import type { SkeletonPerson } from "./demo.ts";
import "./skeleton-demo.css";

type LoadedSkeletonProps = { person: SkeletonPerson; load: string; reset: string };

export function LoadedSkeleton({ person, load, reset }: LoadedSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const hidden = !loaded || undefined;

  return (
    <div className="skeleton-stack">
      <div>
        <Button variant="secondary" size="sm" onClick={() => setLoaded((current) => !current)}>
          {loaded ? reset : load}
        </Button>
      </div>
      <div className="skeleton-card" aria-busy={!loaded}>
        <div className="skeleton-profile">
          <Skeleton variant="circular" isLoaded={loaded} aria-hidden={hidden}>
            <Avatar name={person.name} size="md" />
          </Skeleton>
          <div className="skeleton-lines">
            <Skeleton isLoaded={loaded} aria-hidden={hidden}>
              <p className="skeleton-title">{person.name}</p>
            </Skeleton>
            <Skeleton isLoaded={loaded} aria-hidden={hidden}>
              <p className="skeleton-muted">{person.role}</p>
            </Skeleton>
          </div>
        </div>
        <Skeleton count={3} isLoaded={loaded} aria-hidden={hidden}>
          {loaded ? <p className="skeleton-copy">{person.summary}</p> : null}
        </Skeleton>
      </div>
    </div>
  );
}
