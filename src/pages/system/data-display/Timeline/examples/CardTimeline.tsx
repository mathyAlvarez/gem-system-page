import { Card, Timeline } from "@gem-org/gem-system";
import { activityItems, type ActivityCopy } from "./activity.tsx";
import "./timeline-demo.css";

export function CardTimeline({ activity, title }: { activity: ActivityCopy; title: string }) {
  return (
    <div className="timeline-demo">
      <Card bordered title={title}>
        <Timeline size="sm" listLabel={activity.listLabel} items={activityItems(activity)} />
      </Card>
    </div>
  );
}
