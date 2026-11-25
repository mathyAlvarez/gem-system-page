import { ScrambleText } from "@gem-org/gemffects/scramble-text";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

type MetricsScrambleTextProps = {
  users: string;
  uptime: string;
  latency: string;
};

const DIGITS = "0123456789";

export function MetricsScrambleText({ users, uptime, latency }: MetricsScrambleTextProps) {
  const metrics = [
    { label: users, value: "12,480" },
    { label: uptime, value: "99.98%" },
    { label: latency, value: "42 ms" },
  ];

  return (
    <div className="scramble-demo">
      {metrics.map((metric) => (
        <ScrambleTile key={metric.label}>
          <div className="scramble-demo__metric">
            <ScrambleText
              variant="loop"
              charset={DIGITS}
              duration={1200}
              hold={2400}
              text={metric.value}
              className="scramble-demo__metric-value"
            />
            <span className="scramble-demo__caption">{metric.label}</span>
          </div>
        </ScrambleTile>
      ))}
    </div>
  );
}
