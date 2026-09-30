import { Toast } from "@gem-org/gem-system";
import { Bell } from "@gem-org/gem-system/icons";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type IconToastProps = { common: ToastCommon; title: string; description: string; plain: string };

export function IconToast({ common, title, description, plain }: IconToastProps) {
  return (
    <div className="toast-stack">
      <Toast icon={<Bell size="md" strokeWidth={1.85} />} title={title} closeAriaLabel={common.closeLabel}>
        {description}
      </Toast>
      <Toast hideIcon variant="outline" closeAriaLabel={common.closeLabel}>
        {plain}
      </Toast>
    </div>
  );
}
