import { useEffect, useState } from "react";
import { Fab } from "@gem-org/gem-system";
import { Save } from "@gem-org/gem-system/icons";
import "./fab-demo.css";

type LoadingFabProps = { save: string; saving: string };

export function LoadingFab({ save, saving }: LoadingFabProps) {
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!busy) return;
    const id = window.setTimeout(() => setBusy(false), 2000);
    return () => window.clearTimeout(id);
  }, [busy]);

  return (
    <div className="fab-row">
      <Fab position="static" isLoading aria-label={saving} />
      <Fab
        position="static"
        icon={<Save />}
        label={busy ? saving : save}
        isLoading={busy}
        onClick={() => setBusy(true)}
      />
    </div>
  );
}
