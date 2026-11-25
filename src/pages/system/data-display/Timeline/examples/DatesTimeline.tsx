import { Timeline } from "@gem-org/gem-system";
import { Calendar, CheckCircleFilled, Edit } from "@gem-org/gem-system/icons";
import "./timeline-demo.css";

type DeployEvent = "created" | "approved" | "deployed";

type DatesTimelineProps = {
  locale: string;
  listLabel: string;
  events: Record<DeployEvent, { title: string; description: string }>;
};

const EVENTS = [
  { id: "created", date: "2026-09-21T10:30:00", icon: <Edit size="sm" />, tone: "secondary" },
  {
    id: "approved",
    date: "2026-09-24T16:05:00",
    icon: <CheckCircleFilled size="sm" />,
    tone: "success",
  },
  { id: "deployed", date: "2026-09-25T09:00:00", icon: <Calendar size="sm" />, tone: "primary" },
] as const;

export function DatesTimeline({ locale, listLabel, events }: DatesTimelineProps) {
  const format = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" });

  return (
    <div className="timeline-demo">
      <Timeline
        listLabel={listLabel}
        items={EVENTS.map(({ id, date, icon, tone }) => ({
          id,
          icon,
          tone,
          ...events[id],
          time: (
            <time dateTime={date} className="timeline-demo__time">
              {format.format(new Date(date))}
            </time>
          ),
        }))}
      />
    </div>
  );
}
