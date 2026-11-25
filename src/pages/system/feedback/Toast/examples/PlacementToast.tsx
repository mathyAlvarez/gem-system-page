import { useState } from "react";
import { Button, toast, type ToastPlacement } from "@gem-org/gem-system";
import { ToastHost } from "./ToastHost.tsx";
import { TOAST_PLACEMENTS, type ToastCommon } from "./demo.ts";
import "./toast-demo.css";

const scope = "toast-placement";

type PlacementToastProps = { common: ToastCommon; description: string };

export function PlacementToast({ common, description }: PlacementToastProps) {
  const [placement, setPlacement] = useState<ToastPlacement>("top-end");

  return (
    <ToastHost scope={scope} viewportLabel={common.viewportLabel} placement={placement}>
      <div className="toast-row">
        {TOAST_PLACEMENTS.map((next) => (
          <Button
            key={next}
            size="sm"
            variant={next === placement ? "primary" : "secondary"}
            onClick={() => {
              setPlacement(next);
              toast.success(next, { scope, description, closeAriaLabel: common.closeLabel });
            }}
          >
            {next}
          </Button>
        ))}
      </div>
    </ToastHost>
  );
}
