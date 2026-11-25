import { Button, Toast, toast } from "@gem-org/gem-system";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type ActionToastProps = {
  common: ToastCommon;
  retry: string;
  retrying: string;
  undo: string;
  undone: string;
};

export function ActionToast({ common, retry, retrying, undo, undone }: ActionToastProps) {
  return (
    <div className="toast-stack">
      <Toast
        status="error"
        title={common.copy.error.title}
        closeAriaLabel={common.closeLabel}
        action={
          <Button
            variant="danger"
            size="sm"
            onClick={() => toast.info(retrying, { closeAriaLabel: common.closeLabel })}
          >
            {retry}
          </Button>
        }
      >
        {common.copy.error.description}
      </Toast>
      <Toast
        variant="solid"
        status="success"
        size="sm"
        title={common.copy.success.title}
        closeAriaLabel={common.closeLabel}
        action={
          <Button
            variant="transparent"
            size="sm"
            className="text-current"
            onClick={() => toast.info(undone, { closeAriaLabel: common.closeLabel })}
          >
            {undo}
          </Button>
        }
      />
    </div>
  );
}
