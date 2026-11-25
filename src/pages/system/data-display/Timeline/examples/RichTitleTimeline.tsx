import { Badge, Timeline } from "@gem-org/gem-system";
import { Star, Refresh } from "@gem-org/gem-system/icons";
import type { EventCopy } from "./demo.ts";
import "./timeline-demo.css";

type RichTitleTimelineProps = {
  listLabel: string;
  events: Record<"release" | "hotfix", EventCopy>;
};

const RELEASES = [
  { id: "release", version: "v1.4.0", icon: <Star size="sm" />, tone: "secondary" },
  { id: "hotfix", version: "v1.4.1", icon: <Refresh size="sm" />, tone: "warning" },
] as const;

export function RichTitleTimeline({ listLabel, events }: RichTitleTimelineProps) {
  return (
    <div className="timeline-demo">
      <Timeline
        listLabel={listLabel}
        items={RELEASES.map(({ id, version, icon, tone }) => {
          const { title, description, time } = events[id];
          return {
            id,
            icon,
            tone,
            description,
            time,
            ariaLabel: `${title} ${version}`,
            title: (
              <span className="timeline-demo__chips">
                <strong>{title}</strong>
                <Badge size="sm" tone={tone} variant="soft">
                  {version}
                </Badge>
              </span>
            ),
          };
        })}
      />
    </div>
  );
}
