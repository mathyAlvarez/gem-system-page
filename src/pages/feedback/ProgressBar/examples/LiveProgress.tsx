import { useEffect, useState } from "react";
import { Button, ProgressBar } from "@gem-org/gem-system";
import "./progress-demo.css";

type LiveProgressProps = { label: string; restart: string; pause: string; resume: string };

export function LiveProgress({ label, restart, pause, resume }: LiveProgressProps) {
  const [value, setValue] = useState(12);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setValue((current) => (current >= 100 ? 0 : current + 4));
    }, 280);
    return () => window.clearInterval(timer);
  }, [running]);

  return (
    <div className="progress-stack">
      <ProgressBar label={label} value={value} showValue showThumb disabled={!running} />
      <div className="progress-toolbar">
        <Button variant="secondary" size="sm" onClick={() => setRunning((current) => !current)}>
          {running ? pause : resume}
        </Button>
        <Button variant="transparent" size="sm" onClick={() => setValue(0)}>
          {restart}
        </Button>
      </div>
    </div>
  );
}
