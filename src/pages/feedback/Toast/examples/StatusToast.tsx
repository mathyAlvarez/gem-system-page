import { Toast } from "@gem-org/gem-system";
import { TOAST_STATUSES, type ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type StatusToastProps = { common: ToastCommon };

export function StatusToast({ common }: StatusToastProps) {
  return (
    <div className="toast-stack">
      {TOAST_STATUSES.map((status) => (
        <Toast key={status} status={status} title={common.copy[status].title} closeAriaLabel={common.closeLabel}>
          {common.copy[status].description}
        </Toast>
      ))}
    </div>
  );
}
