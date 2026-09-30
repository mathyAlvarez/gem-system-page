import { useEffect, useRef, useState, type ReactNode } from "react";
import { Toaster, toast, useToast, type ToastPlacement } from "@gem-org/gem-system";
import "./toast-demo.css";

type ToastHostProps = {
  scope: string;
  viewportLabel: string;
  placement?: ToastPlacement;
  max?: number;
  children: ReactNode;
};

export function ToastHost({ scope, viewportLabel, placement = "bottom-end", max, children }: ToastHostProps) {
  const [host, setHost] = useState<HTMLDivElement | null>(null);
  const { toasts } = useToast();
  const toastsRef = useRef(toasts);

  useEffect(() => {
    toastsRef.current = toasts;
  }, [toasts]);

  useEffect(
    () => () => {
      for (const item of toastsRef.current) {
        if (item.scope === scope) toast.dismiss(item.id);
      }
    },
    [scope],
  );

  return (
    <div className="toast-demo">
      {children}
      <div className="toast-host" ref={setHost}>
        {host ? (
          <Toaster
            container={host}
            position="absolute"
            placement={placement}
            scope={scope}
            max={max}
            viewportLabel={viewportLabel}
          />
        ) : null}
      </div>
    </div>
  );
}
