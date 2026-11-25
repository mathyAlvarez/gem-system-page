import { useEffect, useState } from "react";
import { Avatar, Button, Skeleton } from "@gem-org/gem-system";
import { Refresh } from "@gem-org/gem-system/icons";
import "./skeleton-demo.css";

type Member = { name: string; role: string };

type ListSkeletonProps = { members: Member[]; loading: string; reload: string };

export function ListSkeleton({ members, loading, reload }: ListSkeletonProps) {
  const [request, setRequest] = useState(0);
  const [loadedRequest, setLoadedRequest] = useState(-1);
  const isLoading = loadedRequest !== request;

  useEffect(() => {
    const timer = window.setTimeout(() => setLoadedRequest(request), 1500);
    return () => window.clearTimeout(timer);
  }, [request]);

  return (
    <div className="skeleton-stack">
      <div>
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<Refresh size="sm" />}
          disabled={isLoading}
          onClick={() => setRequest((current) => current + 1)}
        >
          {reload}
        </Button>
      </div>
      {isLoading ? (
        <div role="status" aria-label={loading}>
          <ul className="skeleton-list" aria-hidden>
            {members.map((member) => (
              <li key={member.name}>
                <Skeleton variant="circular" width={32} />
                <div className="skeleton-lines">
                  <Skeleton width="45%" />
                  <Skeleton width="30%" height={10} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="skeleton-list">
          {members.map((member) => (
            <li key={member.name}>
              <Avatar name={member.name} size="sm" />
              <div className="skeleton-lines">
                <p className="skeleton-title">{member.name}</p>
                <p className="skeleton-muted">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
