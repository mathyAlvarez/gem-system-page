import { Toast } from "@gem-org/gem-system";
import { TOAST_STATUSES, TOAST_VARIANTS, type ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type VariantsToastProps = { common: ToastCommon };

export function VariantsToast({ common }: VariantsToastProps) {
  return (
    <div className="toast-stack">
      {TOAST_VARIANTS.map((variant) => (
        <div key={variant} className="toast-stack">
          <p className="toast-caption">{variant}</p>
          {TOAST_STATUSES.map((status) => (
            <Toast
              key={status}
              variant={variant}
              status={status}
              size="sm"
              title={common.copy[status].title}
              closeAriaLabel={common.closeLabel}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
