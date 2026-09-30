import { Avatar, Button, Toast } from "@gem-org/gem-system";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type CustomToastProps = { common: ToastCommon; name: string; message: string; open: string };

export function CustomToast({ common, name, message, open }: CustomToastProps) {
  return (
    <div className="toast-stack">
      <Toast
        closeAriaLabel={common.closeLabel}
        custom={
          <div className="toast-custom">
            <Avatar size="sm" name={name} />
            <div className="toast-custom__copy">
              <span className="toast-custom__name">{name}</span>
              <span>{message}</span>
            </div>
            <Button size="sm" variant="secondary">
              {open}
            </Button>
          </div>
        }
      />
    </div>
  );
}
