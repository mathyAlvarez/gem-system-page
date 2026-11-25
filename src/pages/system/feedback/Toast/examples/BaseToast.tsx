import { Toast } from "@gem-org/gem-system";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type BaseToastProps = { common: ToastCommon };

export function BaseToast({ common }: BaseToastProps) {
  return (
    <div className="toast-stack">
      <Toast title={common.copy.info.title} closeAriaLabel={common.closeLabel}>
        {common.copy.info.description}
      </Toast>
    </div>
  );
}
