import { useRef } from "react";
import { Button, toast } from "@gem-org/gem-system";
import { ToastHost } from "./ToastHost.tsx";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

const scope = "toast-stack";

type StackToastProps = { common: ToastCommon; push: string; task: string; description: string };

export function StackToast({ common, push, task, description }: StackToastProps) {
  const count = useRef(0);

  return (
    <ToastHost scope={scope} viewportLabel={common.viewportLabel} max={3}>
      <div className="toast-row">
        <Button
          size="sm"
          onClick={() => {
            count.current += 1;
            toast.success(`${task} ${count.current}`, {
              scope,
              description,
              closeAriaLabel: common.closeLabel,
            });
          }}
        >
          {push}
        </Button>
      </div>
    </ToastHost>
  );
}
