import { Button, toast } from "@gem-org/gem-system";
import { Upload } from "@gem-org/gem-system/icons";
import { ToastHost } from "./ToastHost.tsx";
import type { ToastCommon, ToastCopy } from "./demo.ts";
import "./toast-demo.css";

const scope = "toast-update";

type UpdateToastProps = {
  common: ToastCommon;
  trigger: string;
  uploading: ToastCopy;
  done: ToastCopy;
};

export function UpdateToast({ common, trigger, uploading, done }: UpdateToastProps) {
  const upload = () => {
    const id = toast({
      ...uploading,
      scope,
      id: "upload-report",
      status: "info",
      autoClose: Number.POSITIVE_INFINITY,
      isClosable: false,
    });

    window.setTimeout(() => {
      toast.update(id, {
        ...done,
        status: "success",
        autoClose: 4000,
        isClosable: true,
        closeAriaLabel: common.closeLabel,
      });
    }, 2000);
  };

  return (
    <ToastHost scope={scope} viewportLabel={common.viewportLabel}>
      <div className="toast-row">
        <Button size="sm" leftIcon={<Upload size="sm" />} onClick={upload}>
          {trigger}
        </Button>
      </div>
    </ToastHost>
  );
}
