import { Toast } from "@gem-org/gem-system";
import { TOAST_RADII, TOAST_SIZES, type ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type SizesToastProps = { common: ToastCommon };

export function SizesToast({ common }: SizesToastProps) {
  const { title, description } = common.copy.success;

  return (
    <div className="toast-stack">
      {TOAST_SIZES.map((size, index) => (
        <div key={size} className="toast-stack">
          <p className="toast-caption">
            size="{size}" radius="{TOAST_RADII[index]}"
          </p>
          <Toast
            status="success"
            size={size}
            radius={TOAST_RADII[index]}
            title={title}
            closeAriaLabel={common.closeLabel}
          >
            {description}
          </Toast>
        </div>
      ))}
    </div>
  );
}
