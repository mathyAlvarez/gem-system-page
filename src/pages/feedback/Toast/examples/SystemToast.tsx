import { Button, toast } from "@gem-org/gem-system";
import { ToastHost } from "./ToastHost.tsx";
import type { ToastCommon, ToastCopy } from "./demo.ts";
import "./toast-demo.css";

const scope = "toast-system";

type SystemToastProps = {
  common: ToastCommon;
  labels: { info: string; success: string; warning: string; error: string; persistent: string; infinite: string; dismissAll: string };
  persistent: ToastCopy;
  infinite: ToastCopy;
};

export function SystemToast({ common, labels, persistent, infinite }: SystemToastProps) {
  const options = { scope, closeAriaLabel: common.closeLabel };
  const { info, success, warning, error } = common.copy;

  return (
    <ToastHost scope={scope} viewportLabel={common.viewportLabel}>
      <div className="toast-row">
        <Button size="sm" variant="info" onClick={() => toast.info(info.title, { ...options, description: info.description })}>
          {labels.info}
        </Button>
        <Button
          size="sm"
          variant="success"
          onClick={() => toast.success(success.title, { ...options, description: success.description })}
        >
          {labels.success}
        </Button>
        <Button
          size="sm"
          variant="warning"
          onClick={() => toast.warning(warning.title, { ...options, description: warning.description })}
        >
          {labels.warning}
        </Button>
        <Button
          size="sm"
          variant="danger"
          onClick={() => toast.error(error.title, { ...options, description: error.description })}
        >
          {labels.error}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => toast({ ...options, ...persistent, status: "info", autoClose: 0 })}
        >
          {labels.persistent}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => toast({ ...options, ...infinite, status: "info", autoClose: Number.POSITIVE_INFINITY })}
        >
          {labels.infinite}
        </Button>
        <Button size="sm" variant="tertiary" onClick={() => toast.dismiss()}>
          {labels.dismissAll}
        </Button>
      </div>
    </ToastHost>
  );
}
