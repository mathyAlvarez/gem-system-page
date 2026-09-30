import { Toast } from "@gem-org/gem-system";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type DescriptionToastProps = { common: ToastCommon; text: string };

export function DescriptionToast({ common, text }: DescriptionToastProps) {
  return (
    <div className="toast-stack">
      <Toast status="success" closeAriaLabel={common.closeLabel}>
        {text}
      </Toast>
      <Toast status="info" size="sm" isClosable={false}>
        {text}
      </Toast>
    </div>
  );
}
