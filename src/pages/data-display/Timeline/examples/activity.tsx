import { Badge, type TimelineItem } from "@gem-org/gem-system";
import { AlertCircle, CheckCircleFilled, Upload, User } from "@gem-org/gem-system/icons";
import type { EventCopy } from "./demo.ts";

export type ActivityCopy = {
  listLabel: string;
  events: Record<"invite" | "upload" | "fail" | "ok", EventCopy>;
  badges: { type: string; weight: string };
};

export function activityItems({ events, badges }: ActivityCopy): TimelineItem[] {
  return [
    { id: "invite", ...events.invite, icon: <User size="sm" />, tone: "secondary" },
    {
      id: "upload",
      ...events.upload,
      icon: <Upload size="sm" />,
      tone: "primary",
      content: (
        <div className="timeline-demo__chips">
          <Badge size="sm" tone="neutral" variant="outline">
            {badges.type}
          </Badge>
          <Badge size="sm" tone="info" variant="soft">
            {badges.weight}
          </Badge>
        </div>
      ),
    },
    { id: "fail", ...events.fail, icon: <AlertCircle size="sm" />, tone: "error" },
    { id: "ok", ...events.ok, icon: <CheckCircleFilled size="sm" />, tone: "success" },
  ];
}
