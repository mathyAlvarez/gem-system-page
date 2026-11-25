import { Timeline } from "@gem-org/gem-system";
import { activityItems, type ActivityCopy } from "./activity.tsx";
import "./timeline-demo.css";

export function IconsTimeline({ activity }: { activity: ActivityCopy }) {
  return (
    <div className="timeline-demo">
      <Timeline listLabel={activity.listLabel} items={activityItems(activity)} />
    </div>
  );
}
