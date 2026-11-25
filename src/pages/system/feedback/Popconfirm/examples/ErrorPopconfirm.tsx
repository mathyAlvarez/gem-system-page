import { useRef } from "react";
import { Button, Popconfirm, toast } from "@gem-org/gem-system";
import { wait, type PopconfirmCommon } from "./demo.ts";

type ErrorPopconfirmProps = {
  common: PopconfirmCommon;
  trigger: string;
  title: string;
  description: string;
  confirm: string;
  failed: string;
  done: string;
};

export function ErrorPopconfirm({
  common,
  trigger,
  title,
  description,
  confirm,
  failed,
  done,
}: ErrorPopconfirmProps) {
  const attempts = useRef(0);

  return (
    <Popconfirm
      tone="warning"
      title={title}
      description={description}
      confirmLabel={confirm}
      cancelLabel={common.cancel}
      onConfirm={async () => {
        await wait(800);
        attempts.current += 1;
        if (attempts.current % 2 === 1) {
          toast.error(failed);
          throw new Error(failed);
        }
        toast.success(done);
      }}
    >
      <Button variant="warning" size="sm">
        {trigger}
      </Button>
    </Popconfirm>
  );
}
