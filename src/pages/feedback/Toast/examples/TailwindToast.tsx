import { Toast } from "@gem-org/gem-system";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type TailwindToastProps = { common: ToastCommon };

export function TailwindToast({ common }: TailwindToastProps) {
  return (
    <div className="toast-stack">
      <Toast
        status="success"
        title={common.copy.success.title}
        closeAriaLabel={common.closeLabel}
        className="rounded-2xl border-0 shadow-xl [--gem-toast-bg:var(--gem-color-bg)] [--gem-toast-fg:var(--gem-color-fg)]"
        classNames={{
          icon: "rounded-full bg-(--gem-color-success-soft) p-1 box-content",
          title: "text-base",
          description: "text-(--gem-color-fg-muted)",
        }}
      >
        {common.copy.success.description}
      </Toast>
    </div>
  );
}
