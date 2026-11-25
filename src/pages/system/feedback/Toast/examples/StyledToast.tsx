import { Toast } from "@gem-org/gem-system";
import { Star } from "@gem-org/gem-system/icons";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";
import "./toast-overrides.css";

type StyledToastProps = { common: ToastCommon; title: string; description: string };

export function StyledToast({ common, title, description }: StyledToastProps) {
  return (
    <div className="toast-stack">
      <Toast
        className="toast-branded"
        icon={<Star size="md" strokeWidth={1.85} />}
        title={title}
        closeAriaLabel={common.closeLabel}
      >
        {description}
      </Toast>
    </div>
  );
}
