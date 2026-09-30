import { Timeline } from "@gem-org/gem-system";
import { TIMELINE_TONES } from "./demo.ts";
import "./timeline-demo.css";

type Tone = (typeof TIMELINE_TONES)[number];

type TonesTimelineProps = {
  listLabel: string;
  tones: Record<Tone, { title: string; time: string }>;
};

export function TonesTimeline({ listLabel, tones }: TonesTimelineProps) {
  return (
    <div className="timeline-demo">
      <Timeline
        listLabel={listLabel}
        items={TIMELINE_TONES.map((tone) => ({ id: tone, tone, ...tones[tone] }))}
      />
    </div>
  );
}
