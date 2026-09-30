import { Snackbar } from "@gem-org/gem-system";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type SnackbarToastProps = { common: ToastCommon; title: string; description: string };

export function SnackbarToast({ common, title, description }: SnackbarToastProps) {
  return (
    <div className="toast-stack">
      <Snackbar status="success" title={title} closeAriaLabel={common.closeLabel}>
        {description}
      </Snackbar>
    </div>
  );
}
