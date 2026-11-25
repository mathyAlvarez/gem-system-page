import { useState } from "react";
import { Button, Toast } from "@gem-org/gem-system";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type ControlledToastProps = { common: ToastCommon; show: string; hide: string };

export function ControlledToast({ common, show, hide }: ControlledToastProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="toast-stack">
      <div>
        <Button variant="secondary" size="sm" onClick={() => setOpen((current) => !current)}>
          {open ? hide : show}
        </Button>
      </div>
      <Toast
        status="warning"
        open={open}
        onOpenChange={setOpen}
        title={common.copy.warning.title}
        closeAriaLabel={common.closeLabel}
      >
        {common.copy.warning.description}
      </Toast>
    </div>
  );
}
