import { useEffect, useState } from "react";
import { Button, ProgressBar, toast } from "@gem-org/gem-system";
import { CheckCircle, Upload } from "@gem-org/gem-system/icons";
import "./progress-demo.css";

type UploadProgressProps = {
  file: string;
  start: string;
  again: string;
  preparing: string;
  uploading: string;
  done: string;
};

type Phase = "idle" | "preparing" | "uploading";

export function UploadProgress({
  file,
  start,
  again,
  preparing,
  uploading,
  done,
}: UploadProgressProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [value, setValue] = useState(0);
  const complete = phase === "uploading" && value >= 100;

  useEffect(() => {
    if (phase !== "preparing") return;
    const timer = window.setTimeout(() => setPhase("uploading"), 1200);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "uploading" || value >= 100) return;
    const timer = window.setTimeout(() => {
      const next = Math.min(100, value + 5);
      setValue(next);
      if (next === 100) toast.success(done);
    }, 150);
    return () => window.clearTimeout(timer);
  }, [phase, value, done]);

  const begin = () => {
    setValue(0);
    setPhase("preparing");
  };

  const busy = phase === "preparing" || (phase === "uploading" && !complete);
  const label = complete ? done : { idle: file, preparing, uploading }[phase];

  return (
    <div className="progress-stack">
      <ProgressBar
        label={label}
        value={value}
        isIndeterminate={phase === "preparing"}
        tone={complete ? "success" : "primary"}
        showValue
        thumbIcon={complete ? <CheckCircle size="sm" strokeWidth={2.2} /> : undefined}
      />
      <div className="progress-toolbar">
        <Button size="sm" leftIcon={<Upload size="sm" />} disabled={busy} onClick={begin}>
          {complete ? again : start}
        </Button>
      </div>
    </div>
  );
}
