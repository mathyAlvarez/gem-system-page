import { useEffect, useState } from "react";
import { Button, Spinner } from "@gem-org/gem-system";
import { Refresh } from "@gem-org/gem-system/icons";
import "./spinner-demo.css";

type OverlaySpinnerProps = { title: string; text: string; updating: string; refresh: string };

export function OverlaySpinner({ title, text, updating, refresh }: OverlaySpinnerProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timer = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, [loading]);

  return (
    <div className="spinner-stack">
      <div>
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<Refresh size="sm" />}
          disabled={loading}
          onClick={() => setLoading(true)}
        >
          {refresh}
        </Button>
      </div>
      <div className="spinner-panel" aria-busy={loading}>
        <h3 className="spinner-panel__title">{title}</h3>
        <p className="spinner-panel__text">{text}</p>
        {loading ? (
          <div className="spinner-panel__overlay">
            <Spinner size="xl" label={updating} labelPlacement="bottom" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
