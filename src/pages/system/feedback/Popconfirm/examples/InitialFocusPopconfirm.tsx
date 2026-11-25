import { Button, Popconfirm, toast } from "@gem-org/gem-system";
import type { PopconfirmCommon } from "./demo.ts";

type InitialFocusPopconfirmProps = {
  common: PopconfirmCommon;
  trigger: string;
  title: string;
  description: string;
  confirm: string;
  done: string;
};

export function InitialFocusPopconfirm({
  common,
  trigger,
  title,
  description,
  confirm,
  done,
}: InitialFocusPopconfirmProps) {
  return (
    <Popconfirm
      tone="primary"
      initialFocus="confirm"
      title={title}
      description={description}
      confirmLabel={confirm}
      cancelLabel={common.cancel}
      onConfirm={() => {
        toast.success(done);
      }}
    >
      <Button size="sm">{trigger}</Button>
    </Popconfirm>
  );
}
